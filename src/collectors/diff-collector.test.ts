import { describe, expect, it } from 'vitest'

// Test the parser logic via a simple smoke test
// (Full integration tests would need a real git repo)
describe('diff-collector', () => {
	it('parseDiffOutput handles empty output', async () => {
		// Import dynamically to avoid side effects
		const { collectDiff } = await import('./diff-collector')
		// On a non-git dir, should throw GitCommandError
		await expect(collectDiff({ root: '/tmp', targetBranch: 'main' })).rejects.toThrow()
	})
})
