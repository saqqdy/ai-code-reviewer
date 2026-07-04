# ParsedDiff

Git diff 输出结构。

```typescript
interface ParsedDiff {
  file: string           // 文件路径
  from?: string          // 原始路径（重命名/删除文件时）
  status: 'added' | 'deleted' | 'modified' | 'renamed'
  additions: number      // 新增行数
  deletions: number      // 删除行数
  hunks: DiffHunk[]      // Diff 块数组
}

interface DiffHunk {
  header: string         // 块头行
  oldStart: number       // 旧文件起始行
  oldCount: number       // 旧文件行数
  newStart: number       // 新文件起始行
  newCount: number       // 新文件行数
  lines: string[]        // 块内容行
}
```
