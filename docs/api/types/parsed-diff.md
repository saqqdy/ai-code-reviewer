# ParsedDiff

Git diff output structure.

```typescript
interface ParsedDiff {
  file: string           // File path
  from?: string          // Original path (for renamed/deleted files)
  status: 'added' | 'deleted' | 'modified' | 'renamed'
  additions: number      // Number of lines added
  deletions: number      // Number of lines deleted
  hunks: DiffHunk[]      // Array of diff hunks
}

interface DiffHunk {
  header: string         // Hunk header line
  oldStart: number       // Old file start line
  oldCount: number       // Old file line count
  newStart: number       // New file start line
  newCount: number       // New file line count
  lines: string[]        // Hunk content lines
}
```
