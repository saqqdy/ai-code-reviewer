# ProjectInfo

Project detection result.

```typescript
interface ProjectInfo {
  type: 'vue' | 'react' | 'node' | 'go' | 'python' | 'rust' | 'unknown'
  framework?: string      // Framework name (e.g., 'vue3', 'react18')
  language: string        // Primary language
  packageManager?: string // Package manager (e.g., 'pnpm', 'npm', 'yarn')
  root: string            // Project root directory
}
```
