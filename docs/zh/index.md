# 🚀 AI Code Reviewer Plus

> AI 智能代码审查 — 多维度语义分析，五级严重性分类，可执行的修复建议

[![npm version](https://img.shields.io/npm/v/ai-code-reviewer-plus.svg)](https://www.npmjs.com/package/ai-code-reviewer-plus)
[![license](https://img.shields.io/npm/l/ai-code-reviewer-plus.svg)](https://github.com/saqqdy/ai-code-reviewer-plus/blob/master/LICENSE)

## 快速链接

- [安装](/zh/guide/installation) — 几分钟即可上手
- [快速上手](/zh/guide/quick-start) — 看看实际效果
- [API 参考](/zh/api/) — 程序化使用
- [Skill 命令](/zh/guide/skill-commands) — 交互式审查

## 解决的问题

传统 linter 只能发现语法错误，但无法理解**语义问题**：

```typescript
// Linter: ✅ 无语法错误
function processUser(input: any) {
  return input.name.trim()  // 运行时: 💥 如果 input 为 null
}
```

## 解决方案

AI Code Reviewer 通过**语义理解**在五个维度分析代码：

| 维度 | 关注点 | 规则示例 |
|------|--------|----------|
| **正确性** | 逻辑错误、空指针 | COR-001: 缺少空指针检查 |
| **安全性** | XSS、SQL注入、数据泄露 | SEC-001: 用户输入未消毒 |
| **性能** | N+1查询、内存泄漏 | PER-001: 循环嵌套循环 |
| **可维护性** | 重复代码、复杂度 | MAIN-001: 逻辑重复 |
| **最佳实践** | 框架规范 | BP-001: Vue响应式规则 |

## 五级严重性

| 级别 | 含义 | 行动 |
|------|------|------|
| 🚫 **BLOCKER** | 必须修复，阻塞合并 | 立即修复 |
| 🔴 **HIGH** | 严重，影响功能 | 本次迭代修复 |
| 🟡 **MEDIUM** | 重要，影响质量 | 计划修复 |
| 🟢 **LOW** | 次要，优化级别 | 延后修复 |
| 💡 **SUGGESTION** | 建议性改进 | 可选 |

## 快速开始

```bash
# Claude Code 插件（推荐）
/plugin marketplace add saqqdy/ai-code-reviewer-plus
/plugin install ai-code-reviewer-plus

# CLI（零安装）
npx ai-code-reviewer-plus review --branch main

# NPM 包
pnpm add ai-code-reviewer-plus
```

## 项目状态

| 版本 | 主题 | 状态 |
|------|------|------|
| v0.1.0 | 核心框架 + CLI + Skill | ✅ 当前版本 |
| v0.2.0 | 规则库 + AI 分析引擎 | 📋 计划中 |
| v1.0.0 | 生产就绪 + Marketplace | 📋 计划中 |

详见 [版本路线图](/zh/guide/roadmap)。

## 许可证

MIT — 个人和商业项目均可自由使用。
