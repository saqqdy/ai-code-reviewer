/**
 * AI Code Reviewer — Core type definitions
 */

// ─── Review Dimensions ──────────────────────────────────────────────

/** Review dimension categories */
export type ReviewDimension =
	| 'correctness'     // Logic errors, null pointers, boundary conditions
	| 'security'        // XSS, SQL injection, data leakage
	| 'performance'     // N+1 queries, memory leaks, unnecessary re-renders
	| 'maintainability' // Duplicate code, complexity, naming
	| 'best-practices'  // Framework conventions, code style

// ─── Severity Levels ─────────────────────────────────────────────────

/** Severity classification for findings */
export type SeverityLevel =
	| 'BLOCKER'      // Must fix, blocks merge
	| 'HIGH'         // High priority, fix soon
	| 'MEDIUM'       // Medium priority, fix this iteration
	| 'LOW'          // Low priority, fix later
	| 'SUGGESTION'   // Optional improvement

// ─── Review Findings ─────────────────────────────────────────────────

/** Single review finding/result */
export interface ReviewFinding {
	/** Rule ID (e.g., SEC-001) */
	id: string
	/** Review dimension */
	dimension: ReviewDimension
	/** Severity level */
	severity: SeverityLevel
	/** Short title */
	title: string
	/** Detailed description */
	description: string
	/** File path */
	file: string
	/** Line number (optional) */
	line?: number
	/** Column number (optional) */
	column?: number
	/** Code snippet showing the issue */
	codeSnippet?: string
	/** Fix suggestion */
	suggestion?: string
	/** Example fix code */
	fixExample?: string
	/** AI confidence level */
	confidence: 'high' | 'medium' | 'low'
	/** Evidence chain (commit/PR/Issue reference) */
	evidence?: string
}

/** Full review result for a diff */
export interface ReviewResult {
	/** All findings across dimensions */
	findings: ReviewFinding[]
	/** Files reviewed */
	filesReviewed: string[]
	/** Review duration in ms */
	duration: number
	/** Summary statistics */
	summary: {
		total: number
		blockers: number
		high: number
		medium: number
		low: number
		suggestions: number
	}
}

// ─── Diff Parsing ────────────────────────────────────────────────────

/** A single hunk within a file diff */
export interface DiffHunk {
	/** Header line, e.g. "@@ -10,4 +12,6 @@" */
	header: string
	oldStart: number
	oldCount: number
	newStart: number
	newCount: number
	/** Lines with prefix: ' ' (context), '+' (add), '-' (delete) */
	lines: string[]
}

/** Diff for a single file */
export interface ParsedDiff {
	/** File path (relative) */
	file: string
	/** Renamed from (if applicable) */
	from?: string
	/** File status */
	status: 'added' | 'deleted' | 'modified' | 'renamed'
	/** Addition count */
	additions: number
	/** Deletion count */
	deletions: number
	/** Diff hunks */
	hunks: DiffHunk[]
}

// ─── Project Detection ───────────────────────────────────────────────

/** Detected project information */
export interface ProjectInfo {
	/** Project type */
	type: 'vue' | 'react' | 'node' | 'go' | 'python' | 'unknown'
	/** Specific framework (vue3, react18, express, etc.) */
	framework?: string
	/** Primary language */
	language: string
	/** Package manager (npm/pnpm/yarn/pip/go mod) */
	packageManager?: string
	/** Root directory */
	root: string
}

// ─── Configuration ───────────────────────────────────────────────────

/** Reviewer configuration */
export interface ReviewerConfig {
	/** Rule configuration */
	rules: {
		/** Enabled rule IDs */
		enabled: string[]
		/** Disabled rule IDs */
		disabled: string[]
		/** Severity level overrides */
		severityOverrides: Record<string, SeverityLevel>
	}
	/** Paths to exclude from review */
	excludePaths: string[]
	/** Maximum findings per file */
	maxFindingsPerFile: number
	/** Output format */
	outputFormat: 'markdown' | 'json'
	/** Target branch for diff comparison */
	targetBranch?: string
}

// ─── Review Options ──────────────────────────────────────────────────

/** Options for review operations */
export interface ReviewOptions {
	/** Repository root path */
	root: string
	/** Target branch to compare against */
	targetBranch?: string
	/** Specific files to review */
	files?: string[]
	/** Specific commit hash to review */
	commitHash?: string
	/** Custom configuration */
	config?: Partial<ReviewerConfig>
}

/** Options for file-level review */
export interface FileReviewOptions {
	/** Repository root path */
	root: string
	/** File path to review */
	file: string
	/** Custom configuration */
	config?: Partial<ReviewerConfig>
}

/** Options for commit-level review */
export interface CommitReviewOptions {
	/** Repository root path */
	root: string
	/** Commit hash */
	hash: string
	/** Custom configuration */
	config?: Partial<ReviewerConfig>
}

// ─── Version Constant ────────────────────────────────────────────────

/** Version constant */
export const VERSION = '0.1.0' as const