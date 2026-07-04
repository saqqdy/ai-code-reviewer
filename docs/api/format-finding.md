# formatFinding()

Format a single review finding as Markdown.

## Usage

```typescript
import { formatFinding } from 'ai-code-reviewer'
import type { ReviewFinding } from 'ai-code-reviewer'

const finding: ReviewFinding = {
  ruleId: 'SEC-001',
  severity: 'BLOCKER',
  dimension: 'security',
  title: 'XSS vulnerability',
  description: 'User input unsanitized',
  file: 'src/auth.ts',
  line: 45,
  fix: 'Sanitize input before rendering',
  confidence: 'high'
}

const markdown = formatFinding(finding)
```

## Parameters

```typescript
finding: ReviewFinding
```

## Returns

```typescript
string  // Markdown formatted output
```

## Related Functions

- [`formatReviewReport()`](/api/format-finding) — Full Markdown report
- [`formatDiffSummary()`](/api/format-finding) — Diff summary
- [`formatDuration()`](/api/format-finding) — Duration formatting

## Related Types

- [`ReviewFinding` type](/api/types/review-finding) — Type definition
