# API Reference

Complete TypeScript/Node.js API for AI Code Reviewer.

## Core Functions

| Function | Description | Returns |
|----------|-------------|---------|
| [`collectDiff()`](/api/collect-diff) | Parse git diff into structured data | `ParsedDiff[]` |
| [`collectCommitDiff()`](/api/collect-diff) | Diff for a single commit | `ParsedDiff[]` |
| [`detectProject()`](/api/detect-project) | Detect project type and framework | `ProjectInfo` |
| [`formatFinding()`](/api/format-finding) | Format finding as Markdown | `string` |
| [`formatReviewReport()`](/api/format-finding) | Generate full Markdown report | `string` |
| [`mergeConfig()`](/api/format-finding) | Merge user config with defaults | `ReviewerConfig` |
| [`loadConfigFile()`](/api/format-finding) | Load `.ai-code-reviewer-plus.yml` | `Partial<ReviewerConfig>` |

## Common Patterns

### Basic Diff Collection

```typescript
import { collectDiff, detectProject } from 'ai-code-reviewer-plus'

const diffs = await collectDiff({
  root: process.cwd(),
  targetBranch: 'main'
})

console.log(`Files changed: ${diffs.length}`)

for (const diff of diffs) {
  console.log(`${diff.file}: +${diff.additions}/-${diff.deletions}`)
}
```

### Project Detection

```typescript
import { detectProject } from 'ai-code-reviewer-plus'

const project = await detectProject(process.cwd())

console.log(`Type: ${project.type}`)
console.log(`Framework: ${project.framework || 'N/A'}`)
console.log(`Language: ${project.language}`)
console.log(`Package Manager: ${project.packageManager || 'N/A'}`)
```

### Configuration Management

```typescript
import { mergeConfig, loadConfigFile } from 'ai-code-reviewer-plus'

const userConfig = loadConfigFile(process.cwd())
const config = mergeConfig(userConfig)

console.log(`Enabled rules: ${config.rules.enabled.length}`)
console.log(`Excluded paths: ${config.excludePaths.length}`)
```

## Error Handling

```typescript
import { GitCommandError, ConfigError } from 'ai-code-reviewer-plus'

try {
  const diffs = await collectDiff({ root, targetBranch })
} catch (error) {
  if (error instanceof GitCommandError) {
    console.error(`Git command failed: ${error.message}`)
  } else if (error instanceof ConfigError) {
    console.error(`Config error: ${error.message}`)
  }
}
```

## Type Safety

All APIs are fully typed with TypeScript:

```typescript
import type {
  ParsedDiff,
  ProjectInfo,
  ReviewerConfig,
  ReviewFinding,
  SeverityLevel,
} from 'ai-code-reviewer-plus'
```

See [Types](/api/types/) for detailed type definitions.
