# 快速上手

## 使用 Skill

在 Claude Code 中运行：

```
/review main
```

输出：

```
🔍 正在审查与 main 的差异...

📁 项目: vue3 (typescript)
📝 变更文件: 3

📊 审查摘要:
- 总发现: 12
- 🚫 阻塞: 1
- 🔴 高危: 3
- 🟡 中等: 5

🚫 阻塞问题:

- 🚫 **SEC-001** [BLOCKER] `src/auth.ts:45`
  **用户输入存在 XSS 漏洞**

  💡 **修复**: 渲染前先消毒用户输入。
  ```typescript
  element.textContent = sanitize(userInput)
  ```

  置信度: 🟢 高
```

## 使用 API

```typescript
import { collectDiff, detectProject } from 'ai-code-reviewer-plus'

const project = await detectProject(process.cwd())
console.log(`框架: ${project.framework}`)

const diffs = await collectDiff({ root: process.cwd() })
console.log(`变更文件: ${diffs.length}`)
```

## 使用 CLI

```bash
# 审查 diff
npx ai-code-reviewer-plus review --branch main

# 审查单个文件
npx ai-code-reviewer-plus review-file src/index.ts

# 审查 commit
npx ai-code-reviewer-plus review-commit abc1234
```
