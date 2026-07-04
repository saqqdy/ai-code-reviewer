# 🚀 AI Code Reviewer

> AI-powered intelligent code reviewer — multi-dimensional semantic analysis, five-tier severity classification, actionable fix suggestions via Claude Code Skill.

[![npm version](https://img.shields.io/npm/v/ai-code-reviewer.svg)](https://www.npmjs.com/package/ai-code-reviewer)
[![license](https://img.shields.io/npm/l/ai-code-reviewer.svg)](https://github.com/saqqdy/ai-code-reviewer/blob/master/LICENSE)

## Quick Links

- [Installation](/guide/installation) — Get started in minutes
- [Quick Start](/guide/quick-start) — See it in action
- [API Reference](/api/) — Programmatic usage
- [Skill Commands](/guide/skill-commands) — Interactive review

## The Problem

Traditional linters catch syntax errors, but miss **semantic issues**:

```typescript
// Linter: ✅ No syntax errors
function processUser(input: any) {
  return input.name.trim()  // Runtime: 💥 if input is null
}
```

Questions linters can't answer:
- Is this business logic correct?
- Are there security vulnerabilities?
- Will this cause performance issues?
- Is this maintainable?

## The Solution

AI Code Reviewer uses **semantic understanding** across five dimensions:

| Dimension | Focus | Example Rules |
|-----------|-------|---------------|
| **Correctness** | Logic errors, null pointers | COR-001: Null check missing |
| **Security** | XSS, SQL injection, data leakage | SEC-001: User input unsanitized |
| **Performance** | N+1 queries, memory leaks | PER-001: Loop inside loop |
| **Maintainability** | Duplicate code, complexity | MAIN-001: Duplicated logic |
| **Best Practices** | Framework conventions | BP-001: Vue reactive rules |

## Five-Tier Severity

| Level | Meaning | Action |
|-------|---------|--------|
| 🚫 **BLOCKER** | Must fix, blocks merge | Fix immediately |
| 🔴 **HIGH** | Critical, breaks functionality | Fix this iteration |
| 🟡 **MEDIUM** | Important, affects quality | Plan to fix |
| 🟢 **LOW** | Minor, polish level | Fix later |
| 💡 **SUGGESTION** | Optional improvement | Optional |

## Get Started

```bash
# Claude Code Plugin (Recommended)
/plugin marketplace add saqqdy/ai-code-reviewer
/plugin install ai-code-reviewer

# CLI (Zero-Install)
npx ai-code-reviewer review --branch main

# NPM Package
pnpm add ai-code-reviewer
```

## Project Status

| Version | Theme | Status |
|---------|-------|--------|
| v0.1.0 | Core framework + CLI + Skill | ✅ Current |
| v0.2.0 | Rule library + AI analysis engine | 📋 Planned |
| v1.0.0 | Production-ready + Marketplace | 📋 Planned |

See [Roadmap](/guide/roadmap) for details.

## License

MIT — use freely in personal and commercial projects.
