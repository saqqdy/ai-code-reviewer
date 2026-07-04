# Installation

## Option 1: Claude Code Plugin (Recommended)

```bash
# In Claude Code, run:
/plugin marketplace add saqqdy/ai-code-reviewer-plus
/plugin install ai-code-reviewer-plus
```

## Option 2: NPM Package

```bash
pnpm add ai-code-reviewer-plus
```

```typescript
import { collectDiff, detectProject } from 'ai-code-reviewer-plus'

const diffs = await collectDiff({
  root: process.cwd(),
  targetBranch: 'main'
})
```

## Option 3: CLI (Zero-Install)

```bash
npx ai-code-reviewer-plus review --branch main
npx ai-code-reviewer-plus review-file src/index.ts
npx ai-code-reviewer-plus review-commit abc1234
```

## Requirements

- Node.js 18+
- Git repository
- Claude Code (for Skill usage)
