/**
 * Pattern-based analyzers — detect common issues via rule matching
 *
 * Each analyzer scans diff hunks for known anti-patterns and produces
 * ReviewFinding objects. The Claude Code Skill adds AI semantic analysis
 * on top of these rule-based detections.
 */

import type { DiffHunk, ParsedDiff, ReviewDimension, ReviewFinding, SeverityLevel } from '../types'

// ─── Rule Definition ────────────────────────────────────────────────

interface Rule {
	id: string
	dimension: ReviewDimension
	severity: SeverityLevel
	pattern: RegExp
	title: string
	description: string
	suggestion: string
	fixExample?: string
}

// ─── Rule Library ───────────────────────────────────────────────────

const RULES: Rule[] = [
	// Security rules
	{
		id: 'SEC-001',
		dimension: 'security',
		severity: 'BLOCKER',
		pattern: /\.innerHTML\s*=\s*/,
		title: 'XSS: Direct innerHTML assignment',
		description: 'Assigning to innerHTML with unsanitized input creates an XSS vulnerability.',
		suggestion: 'Use textContent or sanitize input before rendering.',
		fixExample: 'element.textContent = sanitize(userInput)',
	},
	{
		id: 'SEC-002',
		dimension: 'security',
		severity: 'BLOCKER',
		pattern: /eval\s*\(/,
		title: 'XSS: Use of eval()',
		description: 'eval() executes arbitrary code, creating a severe security risk.',
		suggestion:
			'Avoid eval(). Use JSON.parse() for data or Function constructor for controlled logic.',
		fixExample: 'const data = JSON.parse(jsonString)',
	},
	{
		id: 'SEC-003',
		dimension: 'security',
		severity: 'HIGH',
		pattern: /document\.write\s*\(/,
		title: 'XSS: Use of document.write()',
		description: 'document.write() can inject arbitrary HTML, enabling XSS attacks.',
		suggestion: 'Use DOM manipulation methods like createElement and appendChild.',
	},

	// Correctness rules
	{
		id: 'COR-001',
		dimension: 'correctness',
		severity: 'HIGH',
		pattern: /\.\w+\s*\(\s*\)\s*\.\s*\w+\s*\(\s*\)\s*\.\s*\w+\s*\(\s*\)/,
		title: 'Potential null reference: Long method chain',
		description: 'Chained method calls without null checks can throw TypeError at runtime.',
		suggestion: 'Add null checks or use optional chaining (?.).',
		fixExample: 'obj?.method1()?.method2()?.method3()',
	},
	{
		id: 'COR-002',
		dimension: 'correctness',
		severity: 'MEDIUM',
		pattern: /==(?!=)/,
		title: 'Loose equality comparison',
		description: 'Using == instead of === can produce unexpected type coercion results.',
		suggestion: 'Use === for strict equality comparison.',
		fixExample: 'value === expected',
	},

	// Performance rules
	{
		id: 'PER-001',
		dimension: 'performance',
		severity: 'HIGH',
		pattern: /for\s*\(.*await/,
		title: 'Sequential async in loop',
		description:
			'Using await inside a for loop processes operations sequentially, often causing N+1 latency.',
		suggestion: 'Use Promise.all() for parallel execution, or process in batches.',
		fixExample: 'await Promise.all(items.map(i => fetch(i)))',
	},
	{
		id: 'PER-002',
		dimension: 'performance',
		severity: 'MEDIUM',
		pattern: /console\.log\s*\(/,
		title: 'Console.log in production code',
		description: 'Leftover console.log calls add overhead and may leak sensitive data.',
		suggestion: 'Remove console.log or use a proper logging library.',
	},

	// Maintainability rules
	{
		id: 'MAIN-001',
		dimension: 'maintainability',
		severity: 'LOW',
		pattern: /\/\/\s*TODO|\/\/\s*FIXME|\/\/\s*HACK/i,
		title: 'Unresolved TODO/FIXME comment',
		description: 'TODO/FIXME/HACK comments indicate unfinished or problematic code.',
		suggestion: 'Resolve the comment or create a tracked issue.',
	},
	{
		id: 'MAIN-002',
		dimension: 'maintainability',
		severity: 'LOW',
		pattern: /:\s*any\b/,
		title: 'Use of `any` type',
		description: 'Using any bypasses TypeScript type checking, reducing type safety.',
		suggestion: 'Replace any with a specific type or unknown.',
		fixExample: 'const data: unknown = value',
	},

	// Best practices rules
	{
		id: 'BP-001',
		dimension: 'best-practices',
		severity: 'MEDIUM',
		pattern: /var\s+\w/,
		title: 'Use of var instead of let/const',
		description: 'var has function scope and hoisting, which can cause subtle bugs.',
		suggestion: "Use const for values that don't change, let for those that do.",
		fixExample: 'const value = 42',
	},
]

// ─── Analyzer Functions ─────────────────────────────────────────────

/**
 * Analyze a set of diffs against the rule library
 */
export function analyzeDiffs(
	diffs: ParsedDiff[],
	enabledRules?: string[],
	disabledRules?: string[],
	severityOverrides?: Record<string, SeverityLevel>
): ReviewFinding[] {
	const findings: ReviewFinding[] = []
	const activeRules = filterRules(RULES, enabledRules, disabledRules)

	for (const diff of diffs) {
		for (const hunk of diff.hunks) {
			for (const rule of activeRules) {
				for (const line of hunk.lines) {
					// Only check added lines
					if (!line.startsWith('+')) continue

					const content = line.slice(1)
					if (!rule.pattern.test(content)) continue

					const severity = severityOverrides?.[rule.id] ?? rule.severity

					findings.push({
						id: rule.id,
						dimension: rule.dimension,
						severity,
						title: rule.title,
						description: rule.description,
						file: diff.file,
						line: hunk.newStart + countAddedLinesBefore(hunk, line),
						codeSnippet: content.trim(),
						suggestion: rule.suggestion,
						fixExample: rule.fixExample,
						confidence: 'high',
					})
				}
			}
		}
	}

	return findings
}

/**
 * Analyze raw code text against the rule library
 */
export function analyzeCode(
	code: string,
	file: string,
	enabledRules?: string[],
	disabledRules?: string[],
	severityOverrides?: Record<string, SeverityLevel>
): ReviewFinding[] {
	const findings: ReviewFinding[] = []
	const activeRules = filterRules(RULES, enabledRules, disabledRules)
	const lines = code.split('\n')

	for (let i = 0; i < lines.length; i++) {
		for (const rule of activeRules) {
			if (!rule.pattern.test(lines[i]!)) continue

			const severity = severityOverrides?.[rule.id] ?? rule.severity

			findings.push({
				id: rule.id,
				dimension: rule.dimension,
				severity,
				title: rule.title,
				description: rule.description,
				file,
				line: i + 1,
				codeSnippet: lines[i]!.trim(),
				suggestion: rule.suggestion,
				fixExample: rule.fixExample,
				confidence: 'high',
			})
		}
	}

	return findings
}

/**
 * Get all available rule IDs grouped by dimension
 */
export function getAvailableRules(): Record<ReviewDimension, Rule[]> {
	const grouped = {} as Record<ReviewDimension, Rule[]>
	for (const rule of RULES) {
		;(grouped[rule.dimension] ??= []).push(rule)
	}
	return grouped
}

// ─── Internal Helpers ───────────────────────────────────────────────

function filterRules(allRules: Rule[], enabled?: string[], disabled?: string[]): Rule[] {
	if (enabled && enabled.length > 0) {
		const set = new Set(enabled)
		return allRules.filter(r => set.has(r.id))
	}
	if (disabled && disabled.length > 0) {
		const set = new Set(disabled)
		return allRules.filter(r => !set.has(r.id))
	}
	return allRules
}

function countAddedLinesBefore(hunk: DiffHunk, targetLine: string): number {
	let count = 0
	for (const line of hunk.lines) {
		if (line === targetLine) return count
		if (line.startsWith('+')) count++
	}
	return count
}
