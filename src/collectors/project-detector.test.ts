import { describe, expect, it } from 'vitest'
import { detectProject } from './project-detector'

describe('detectProject', () => {
	it('detects current project as node', async () => {
		const project = await detectProject(process.cwd())
		expect(project.type).toBe('node')
		expect(project.language).toBe('javascript')
		expect(project.packageManager).toBe('pnpm')
	})

	it('returns unknown for non-existent dir gracefully', async () => {
		const project = await detectProject('/tmp/nonexistent-dir-12345')
		expect(project.type).toBe('unknown')
	})
})
