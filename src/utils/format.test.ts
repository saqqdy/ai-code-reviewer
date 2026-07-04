import type { ParsedDiff, ReviewFinding, ReviewResult } from '../types'
import { describe, expect, it } from 'vitest'
import { formatDiffSummary, formatDuration, formatFinding, formatReviewReport } from './format'

describe('format', () => {
	describe('formatDuration', () => {
		it('formats milliseconds', () => {
			expect(formatDuration(500)).toBe('500ms')
		})
		it('formats seconds', () => {
			expect(formatDuration(2500)).toBe('3s')
		})
		it('formats minutes', () => {
			expect(formatDuration(120000)).toBe('2m')
		})
		it('formats minutes and seconds', () => {
			expect(formatDuration(90000)).toBe('1m 30s')
		})
	})

	describe('formatDiffSummary', () => {
		it('formats modified file', () => {
			const diff: ParsedDiff = {
				file: 'src/index.ts',
				status: 'modified',
				additions: 10,
				deletions: 5,
				hunks: [],
			}
			expect(formatDiffSummary(diff)).toContain('📝')
			expect(formatDiffSummary(diff)).toContain('src/index.ts')
		})

		it('formats added file', () => {
			const diff: ParsedDiff = {
				file: 'new.ts',
				status: 'added',
				additions: 20,
				deletions: 0,
				hunks: [],
			}
			expect(formatDiffSummary(diff)).toContain('➕')
		})

		it('formats renamed file', () => {
			const diff: ParsedDiff = {
				file: 'new.ts',
				from: 'old.ts',
				status: 'renamed',
				additions: 0,
				deletions: 0,
				hunks: [],
			}
			expect(formatDiffSummary(diff)).toContain('📦')
			expect(formatDiffSummary(diff)).toContain('old.ts → new.ts')
		})
	})

	describe('formatFinding', () => {
		it('formats BLOCKER finding with emoji', () => {
			const finding: ReviewFinding = {
				id: 'SEC-001',
				dimension: 'security',
				severity: 'BLOCKER',
				title: 'XSS found',
				description: 'Dangerous',
				file: 'a.ts',
				line: 10,
				confidence: 'high',
			}
			const result = formatFinding(finding)
			expect(result).toContain('🚫')
			expect(result).toContain('SEC-001')
			expect(result).toContain('BLOCKER')
			expect(result).toContain('a.ts:10')
		})

		it('includes suggestion when present', () => {
			const finding: ReviewFinding = {
				id: 'COR-002',
				dimension: 'correctness',
				severity: 'MEDIUM',
				title: 'Loose equality',
				description: 'Use ===',
				file: 'b.ts',
				suggestion: 'Use strict equality',
				confidence: 'medium',
			}
			const result = formatFinding(finding)
			expect(result).toContain('💡')
			expect(result).toContain('strict equality')
		})
	})

	describe('formatReviewReport', () => {
		it('generates full report', () => {
			const result: ReviewResult = {
				findings: [
					{
						id: 'SEC-001',
						dimension: 'security',
						severity: 'BLOCKER',
						title: 'XSS',
						description: 'Bad',
						file: 'a.ts',
						confidence: 'high',
					},
				],
				filesReviewed: ['a.ts'],
				duration: 1500,
				summary: { total: 1, blockers: 1, high: 0, medium: 0, low: 0, suggestions: 0 },
			}
			const report = formatReviewReport(result)
			expect(report).toContain('# 🔍 Code Review Report')
			expect(report).toContain('Blockers')
		})
	})
})
