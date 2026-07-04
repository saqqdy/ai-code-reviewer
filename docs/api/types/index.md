# Type Definitions

Core TypeScript types used throughout AI Code Reviewer.

## Core Types

| Type | Description |
|------|-------------|
| [`ParsedDiff`](/api/types/parsed-diff) | Git diff output structure |
| [`ProjectInfo`](/api/types/project-info) | Project detection result |
| [`ReviewFinding`](/api/types/review-finding) | Single review finding |
| [`ReviewerConfig`](/api/types/review-finding) | Configuration structure |

## Usage

```typescript
import type {
  ParsedDiff,
  ProjectInfo,
  ReviewFinding,
  ReviewerConfig,
  SeverityLevel,
} from 'ai-code-reviewer-plus'
```
