# detectProject()

通过文件系统标记检测项目类型和框架。

## 用法

```typescript
import { detectProject } from 'ai-code-reviewer-plus'

const project = await detectProject(process.cwd())
```

## 参数

```typescript
interface {
  root: string  // 项目根目录
}
```

## 返回值

```typescript
interface ProjectInfo {
  type: 'vue' | 'react' | 'node' | 'go' | 'python' | 'rust' | 'unknown'
  framework?: string      // 框架名称（如 'vue3', 'react18'）
  language: string        // 主要语言
  packageManager?: string // 包管理器（如 'pnpm', 'npm'）
  root: string            // 项目根目录
}
```

## 示例

```typescript
const project = await detectProject('/path/to/project')

if (project.framework) {
  console.log(`框架: ${project.framework}`)
}

console.log(`语言: ${project.language}`)
console.log(`包管理器: ${project.packageManager}`)
```

## 检测逻辑

| 标记文件 | 项目类型 |
|----------|----------|
| `package.json` + `vue` 依赖 | Vue 2/3 |
| `package.json` + `react` 依赖 | React 18+ |
| `package.json`（通用） | Node.js |
| `go.mod` | Go |
| `requirements.txt` | Python |
| `Cargo.toml` | Rust |
