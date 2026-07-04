# 安装

## 方式 1: Claude Code 插件（推荐）

```bash
# 在 Claude Code 中运行：
/plugin marketplace add saqqdy/ai-code-reviewer-plus
/plugin install ai-code-reviewer-plus
```

## 方式 2: NPM 包

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

## 方式 3: CLI（零安装）

```bash
npx ai-code-reviewer-plus review --branch main
npx ai-code-reviewer-plus review-file src/index.ts
npx ai-code-reviewer-plus review-commit abc1234
```

## 系统要求

- Node.js 18+
- Git 仓库
- Claude Code（用于 Skill）
