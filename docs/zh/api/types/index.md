# 类型定义

AI Code Reviewer 中使用的核心 TypeScript 类型。

## 核心类型

| 类型 | 说明 |
|------|------|
| [`ParsedDiff`](/zh/api/types/parsed-diff) | Git diff 输出结构 |
| [`ProjectInfo`](/zh/api/types/project-info) | 项目检测结果 |
| [`ReviewFinding`](/zh/api/types/review-finding) | 单个审查发现 |
| [`ReviewerConfig`](/zh/api/types/review-finding) | 配置结构 |

## 用法

```typescript
import type {
  ParsedDiff,
  ProjectInfo,
  ReviewFinding,
  ReviewerConfig,
  SeverityLevel,
} from 'ai-code-reviewer-plus'
```
