# API 参考

AI Code Reviewer 的完整 TypeScript/Node.js API。

## 核心函数

| 函数 | 说明 | 返回类型 |
|------|------|----------|
| [`collectDiff()`](/zh/api/collect-diff) | 解析 git diff 为结构化数据 | `ParsedDiff[]` |
| [`collectCommitDiff()`](/zh/api/collect-diff) | 单个 commit 的 diff | `ParsedDiff[]` |
| [`detectProject()`](/zh/api/detect-project) | 检测项目类型和框架 | `ProjectInfo` |
| [`formatFinding()`](/zh/api/format-finding) | 格式化单个发现为 Markdown | `string` |
| [`formatReviewReport()`](/zh/api/format-finding) | 生成完整 Markdown 报告 | `string` |
| [`mergeConfig()`](/zh/api/format-finding) | 合并用户配置与默认配置 | `ReviewerConfig` |
| [`loadConfigFile()`](/zh/api/format-finding) | 加载 `.ai-code-reviewer.yml` | `Partial<ReviewerConfig>` |

## 常用模式

### 基础 Diff 采集

```typescript
import { collectDiff, detectProject } from 'ai-code-reviewer'

const diffs = await collectDiff({
  root: process.cwd(),
  targetBranch: 'main'
})

console.log(`变更文件: ${diffs.length}`)

for (const diff of diffs) {
  console.log(`${diff.file}: +${diff.additions}/-${diff.deletions}`)
}
```

### 项目检测

```typescript
import { detectProject } from 'ai-code-reviewer'

const project = await detectProject(process.cwd())

console.log(`类型: ${project.type}`)
console.log(`框架: ${project.framework || '无'}`)
console.log(`语言: ${project.language}`)
console.log(`包管理器: ${project.packageManager || '无'}`)
```

### 配置管理

```typescript
import { mergeConfig, loadConfigFile } from 'ai-code-reviewer'

const userConfig = loadConfigFile(process.cwd())
const config = mergeConfig(userConfig)

console.log(`启用规则: ${config.rules.enabled.length}`)
console.log(`排除路径: ${config.excludePaths.length}`)
```

## 错误处理

```typescript
import { GitCommandError, ConfigError } from 'ai-code-reviewer'

try {
  const diffs = await collectDiff({ root, targetBranch })
} catch (error) {
  if (error instanceof GitCommandError) {
    console.error(`Git 命令失败: ${error.message}`)
  } else if (error instanceof ConfigError) {
    console.error(`配置错误: ${error.message}`)
  }
}
```

## 类型安全

所有 API 都提供完整的 TypeScript 类型：

```typescript
import type {
  ParsedDiff,
  ProjectInfo,
  ReviewerConfig,
  ReviewFinding,
  SeverityLevel,
} from 'ai-code-reviewer'
```

详见 [类型定义](/zh/api/types/)。
