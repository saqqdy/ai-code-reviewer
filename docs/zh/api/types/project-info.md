# ProjectInfo

项目检测结果。

```typescript
interface ProjectInfo {
  type: 'vue' | 'react' | 'node' | 'go' | 'python' | 'rust' | 'unknown'
  framework?: string      // 框架名称（如 'vue3', 'react18'）
  language: string        // 主要语言
  packageManager?: string // 包管理器（如 'pnpm', 'npm', 'yarn'）
  root: string            // 项目根目录
}
```
