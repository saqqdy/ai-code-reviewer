# collectDiff()

Parse `git diff` output into structured data.

## Usage

```typescript
import { collectDiff } from 'ai-code-reviewer-plus'

const diffs = await collectDiff({
  root: process.cwd(),
  targetBranch: 'main'
})
```

## Parameters

```typescript
interface DiffOptions {
  root: string           // Git repository root
  targetBranch?: string  // Target branch (default: 'main')
  commitHash?: string    // Single commit hash (optional)
}
```

## Returns

```typescript
interface ParsedDiff[] {
  file: string           // File path
  from?: string          // Original path (for renamed/deleted)
  status: 'added' | 'deleted' | 'modified' | 'renamed'
  additions: number      // Lines added
  deletions: number      // Lines deleted
  hunks: DiffHunk[]      // Diff hunks
}
```

## Example

```typescript
const diffs = await collectDiff({
  root: '/path/to/repo',
  targetBranch: 'develop'
})

for (const diff of diffs) {
  console.log(`${diff.status} ${diff.file}`)
  console.log(`  +${diff.additions}/-${diff.deletions}`)
}
```

## Related

- [`collectCommitDiff()`](/api/collect-diff) — Diff for single commit
- [`ParsedDiff` type](/api/types/parsed-diff) — Type definition
