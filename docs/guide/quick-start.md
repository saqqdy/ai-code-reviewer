# Quick Start

## Using the Skill

In Claude Code, run:

```
/review main
```

Output:

```
🔍 Reviewing diff against main...

📁 Project: vue3 (typescript)
📝 Files changed: 3

📊 Review Summary:
- Total findings: 12
- 🚫 Blockers: 1
- 🔴 High: 3
- 🟡 Medium: 5

🚫 Blockers:

- 🚫 **SEC-001** [BLOCKER] `src/auth.ts:45`
  **XSS vulnerability in user input**

  💡 **Fix**: Sanitize user input before rendering.
  ```typescript
  element.textContent = sanitize(userInput)
  ```

  Confidence: 🟢 High
```

## Using the API

```typescript
import { collectDiff, detectProject } from 'ai-code-reviewer-plus'

const project = await detectProject(process.cwd())
console.log(`Framework: ${project.framework}`)

const diffs = await collectDiff({ root: process.cwd() })
console.log(`Files changed: ${diffs.length}`)
```

## Using the CLI

```bash
# Review diff
npx ai-code-reviewer-plus review --branch main

# Review single file
npx ai-code-reviewer-plus review-file src/index.ts

# Review commit
npx ai-code-reviewer-plus review-commit abc1234
```
