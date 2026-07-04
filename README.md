# 🚀 AI Code Reviewer

> AI-powered intelligent code reviewer — multi-dimensional semantic analysis, five-tier severity classification, actionable fix suggestions via Claude Code Skill.

[![npm version](https://img.shields.io/npm/v/ai-code-reviewer.svg)](https://www.npmjs.com/package/ai-code-reviewer)
[![license](https://img.shields.io/npm/l/ai-code-reviewer.svg)](https://github.com/saqqdy/ai-code-reviewer/blob/master/LICENSE)

---

## 🎯 The Problem It Solves

| Scenario | Traditional Linter | AI Code Reviewer |
|----------|-------------------|------------------|
| "Is this safe?" | Pattern matching, can't understand context | AI understands business semantics |
| "How to fix?" | Reports error only | Provides executable fix snippets |
| "Is it critical?" | Binary pass/fail | 5-tier severity: BLOCKER → SUGGESTION |

---

## ✨ Core Features

### 🔍 Multi-Dimensional Analysis

- **Correctness** — Logic errors, null pointers, boundary conditions
- **Security** — XSS, SQL injection, data leakage
- **Performance** — N+1 queries, memory leaks, unnecessary re-renders
- **Maintainability** — Duplicate code, complexity, naming
- **Best Practices** — Framework conventions, code style

### 📊 Five-Tier Severity Classification

| Level | Meaning | Action |
|-------|---------|--------|
| 🚫 BLOCKER | Must fix, blocks merge | Fix immediately |
| 🔴 HIGH | High priority | Fix this iteration |
| 🟡 MEDIUM | Medium priority | Plan to fix |
| 🟢 LOW | Low priority | Fix later |
| 💡 SUGGESTION | Optional improvement | Optional |

---

## 🚀 Getting Started

### Option 1: Claude Code Plugin (Recommended)

```bash
# In Claude Code, run:
/plugin marketplace add saqqdy/ai-code-reviewer
/plugin install ai-code-reviewer
```

#### Available Commands

| Command | Description |
|---------|-------------|
| `/review [branch]` | Review diff against target branch |
| `/review-file <file>` | Review a single file |
| `/review-commit <hash>` | Review a specific commit |

### Option 2: CLI (Zero-Install)

```bash
npx ai-code-reviewer review --branch main
npx ai-code-reviewer review-file src/index.ts
npx ai-code-reviewer review-commit abc1234
```

### Option 3: Programmatic Usage

```bash
pnpm add ai-code-reviewer
```

```typescript
import { collectDiff, detectProject } from 'ai-code-reviewer'

const diffs = await collectDiff({
  root: process.cwd(),
  targetBranch: 'main'
})

const project = await detectProject(process.cwd())
```

---

## 📋 Version Roadmap

| Version | Theme | Status |
|---------|-------|--------|
| v0.1.0 | Core framework + CLI + Skill | ✅ Current |
| v0.2.0 | Rule library + AI analysis engine | 📋 Planned |
| v1.0.0 | Production-ready + Marketplace | 📋 Planned |

---

## 📄 License

[MIT](./LICENSE)