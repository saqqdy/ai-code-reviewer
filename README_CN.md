# 🚀 AI Code Reviewer

> AI 智能代码审查 — 多维度语义分析，五级严重性分类，给出可执行的修复建议

[![npm version](https://img.shields.io/npm/v/ai-code-reviewer.svg)](https://www.npmjs.com/package/ai-code-reviewer)

---

## 🎯 解决的问题

| 场景 | 传统 Linter | AI Code Reviewer |
|------|------------|------------------|
| "这段代码安全吗？" | 模式匹配，无法理解上下文 | AI 理解业务语义 |
| "怎么修复？" | 只报告错误 | 提供可执行的修复代码片段 |
| "严重吗？" | 二元通过/失败 | 五级分类：BLOCKER → SUGGESTION |

---

## ✨ 核心特性

### 🔍 多维度分析

- **正确性** — 逻辑错误、空指针、边界条件
- **安全性** — XSS、SQL注入、敏感数据泄露
- **性能** — N+1查询、内存泄漏、不必要的重渲染
- **可维护性** — 重复代码、复杂度过高、命名不规范
- **最佳实践** — 框架规范、代码风格

### 📊 五级严重性分类

🚫 **BLOCKER** → 必须修复，阻塞合并
🔴 **HIGH** → 高优先级，本次迭代修复
🟡 **MEDIUM** → 中等优先级，计划修复
🟢 **LOW** → 低优先级，延后修复
💡 **SUGGESTION** → 建议性改进，可选

---

## 🚀 快速开始

### 方式 1: Claude Code 插件（推荐）

```bash
/plugin marketplace add saqqdy/ai-code-reviewer
/plugin install ai-code-reviewer
```

### 方式 2: CLI（零安装）

```bash
npx ai-code-reviewer review --branch main
```

### 方式 3: 程序化使用

```typescript
import { collectDiff, detectProject } from 'ai-code-reviewer'

const diffs = await collectDiff({ root: process.cwd() })
```

---

## 📄 许可证

[MIT](./LICENSE)