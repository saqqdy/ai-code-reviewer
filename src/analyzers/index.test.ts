import { describe, expect, it } from 'vitest'
import { analyzeCode, analyzeDiffs, getAvailableRules } from './index'

describe('analyzers', () => {
	describe('analyzeCode', () => {
		it('detects innerHTML XSS vulnerability', () => {
			const code = 'element.innerHTML = userInput'
			const findings = analyzeCode(code, 'test.ts')
			expect(findings.length).toBeGreaterThan(0)
			expect(findings[0]!.id).toBe('SEC-001')
			expect(findings[0]!.dimension).toBe('security')
			expect(findings[0]!.severity).toBe('BLOCKER')
		})

		it('detects eval() usage', () => {
			const code = 'eval("console.log(1)")'
			const findings = analyzeCode(code, 'test.ts')
			expect(findings.some(f => f.id === 'SEC-002')).toBe(true)
		})

		it('detects loose equality', () => {
			const code = 'if (a == b) { return true }'
			const findings = analyzeCode(code, 'test.ts')
			expect(findings.some(f => f.id === 'COR-002')).toBe(true)
		})

		it('detects var usage', () => {
			const code = 'var x = 1'
			const findings = analyzeCode(code, 'test.ts')
			expect(findings.some(f => f.id === 'BP-001')).toBe(true)
		})

		it('respects enabled rules filter', () => {
			const code = 'var x = 1; element.innerHTML = userInput'
			const findings = analyzeCode(code, 'test.ts', ['SEC-001'])
			expect(findings.length).toBe(1)
			expect(findings[0]!.id).toBe('SEC-001')
		})

		it('respects disabled rules filter', () => {
			const code = 'var x = 1'
			const findings = analyzeCode(code, 'test.ts', undefined, ['BP-001'])
			expect(findings.every(f => f.id !== 'BP-001')).toBe(true)
		})

		it('respects severity overrides', () => {
			const code = 'if (a == b) { return true }'
			const findings = analyzeCode(code, 'test.ts', undefined, undefined, { 'COR-002': 'BLOCKER' })
			const cor002 = findings.find(f => f.id === 'COR-002')
			expect(cor002?.severity).toBe('BLOCKER')
		})

		it('returns empty for clean code', () => {
			const code = 'const x = 42\nconst y = x + 1'
			const findings = analyzeCode(code, 'test.ts')
			expect(findings.filter(f => f.severity !== 'LOW').length).toBe(0)
		})
	})

	describe('analyzeDiffs', () => {
		it('analyzes added lines in diffs', () => {
			const diffs = [{
				file: 'app.ts',
				status: 'modified' as const,
				additions: 2,
				deletions: 0,
				hunks: [{
					header: '@@ -1,3 +1,5 @@',
					oldStart: 1, oldCount: 3,
					newStart: 1, newCount: 5,
					lines: [' const a = 1', '+element.innerHTML = data', '+const b = 2'],
				}],
			}]
			const findings = analyzeDiffs(diffs)
			expect(findings.some(f => f.id === 'SEC-001')).toBe(true)
		})

		it('ignores deleted lines', () => {
			const diffs = [{
				file: 'app.ts',
				status: 'modified' as const,
				additions: 0,
				deletions: 1,
				hunks: [{
					header: '@@ -1,3 +1,2 @@',
					oldStart: 1, oldCount: 3,
					newStart: 1, newCount: 2,
					lines: ['-eval("dangerous")', ' const a = 1'],
				}],
			}]
			const findings = analyzeDiffs(diffs)
			expect(findings.some(f => f.id === 'SEC-002')).toBe(false)
		})
	})

	describe('getAvailableRules', () => {
		it('returns rules grouped by dimension', () => {
			const grouped = getAvailableRules()
			expect(grouped.security).toBeDefined()
			expect(grouped.security!.length).toBeGreaterThan(0)
			expect(grouped.correctness).toBeDefined()
		})
	})
})
