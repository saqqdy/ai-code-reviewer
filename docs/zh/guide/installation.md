# 安装

## 方式 1: Claude Code 插件（推荐）

```bash
# 在 Claude Code 中运行：
/plugin marketplace add saqqdy/ai-code-reviewer
/plugin install ai-code-reviewer
```

## 方式 2: NPM 包

```bash
pnpm add ai-code-reviewer
```

```typescript
import { collectDiff, detectProject } from 'ai-code-reviewer'

const diffs = await collectDiff({
  root: process.cwd(),
  targetBranch: 'main'
})
```

## 方式 3: CLI（零安装）

```bash
npx ai-code-reviewer review --branch main
npx ai-code-reviewer review-file src/index.ts
npx ai-code-reviewer review-commit abc1234
```

## 系统要求

- Node.js 18+
- Git 仓库
- Claude Code（用于 Skill）
