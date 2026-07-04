# collectDiff()

解析 `git diff` 输出为结构化数据。

## 用法

```typescript
import { collectDiff } from 'ai-code-reviewer'

const diffs = await collectDiff({
  root: process.cwd(),
  targetBranch: 'main'
})
```

## 参数

```typescript
interface DiffOptions {
  root: string           // Git 仓库根目录
  targetBranch?: string  // 目标分支（默认: 'main'）
  commitHash?: string    // 单个 commit 哈希（可选）
}
```

## 返回值

```typescript
interface ParsedDiff[] {
  file: string           // 文件路径
  from?: string          // 原始路径（重命名/删除时）
  status: 'added' | 'deleted' | 'modified' | 'renamed'
  additions: number      // 新增行数
  deletions: number      // 删除行数
  hunks: DiffHunk[]      // Diff 块
}
```

## 示例

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

## 相关

- [`collectCommitDiff()`](/zh/api/collect-diff) — 单个 commit 的 diff
- [`ParsedDiff` 类型](/zh/api/types/parsed-diff) — 类型定义
