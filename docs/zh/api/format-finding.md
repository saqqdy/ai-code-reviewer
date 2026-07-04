# formatFinding()

将单个审查发现格式化为 Markdown。

## 用法

```typescript
import { formatFinding } from 'ai-code-reviewer-plus'
import type { ReviewFinding } from 'ai-code-reviewer-plus'

const finding: ReviewFinding = {
  ruleId: 'SEC-001',
  severity: 'BLOCKER',
  dimension: 'security',
  title: 'XSS 漏洞',
  description: '用户输入未消毒',
  file: 'src/auth.ts',
  line: 45,
  fix: '渲染前消毒用户输入',
  confidence: 'high'
}

const markdown = formatFinding(finding)
```

## 参数

```typescript
finding: ReviewFinding
```

## 返回值

```typescript
string  // Markdown 格式输出
```

## 相关函数

- [`formatReviewReport()`](/zh/api/format-finding) — 完整 Markdown 报告
- [`formatDiffSummary()`](/zh/api/format-finding) — Diff 摘要
- [`formatDuration()`](/zh/api/format-finding) — 时长格式化

## 相关类型

- [`ReviewFinding` 类型](/zh/api/types/review-finding) — 类型定义
