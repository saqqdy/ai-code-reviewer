# Skill 命令

在 Claude Code 中使用的交互式审查命令。

## `/review [branch]`

审查与目标分支的差异。

```
/review main
/review develop
```

## `/review-file <file>`

审查单个文件。

```
/review-file src/index.ts
```

## `/review-commit <hash>`

审查特定 commit。

```
/review-commit abc1234
```

## 输出格式

```
📊 审查摘要:
- 总发现: 12
- 🚫 阻塞: 1
- 🔴 高危: 3
- 🟡 中等: 5
- 🟢 低危: 2
- 💡 建议: 1

🚫 阻塞问题（必须修复）:

- 🚫 **SEC-001** [BLOCKER] `src/auth.ts:45`
  **用户输入存在 XSS 漏洞**

  💡 **修复**: 消毒用户输入。
  置信度: 🟢 高
```
