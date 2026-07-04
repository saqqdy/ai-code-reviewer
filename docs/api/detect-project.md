# detectProject()

Detect project type and framework from filesystem markers.

## Usage

```typescript
import { detectProject } from 'ai-code-reviewer-plus'

const project = await detectProject(process.cwd())
```

## Parameters

```typescript
interface {
  root: string  // Project root directory
}
```

## Returns

```typescript
interface ProjectInfo {
  type: 'vue' | 'react' | 'node' | 'go' | 'python' | 'rust' | 'unknown'
  framework?: string      // Framework name (e.g., 'vue3', 'react18')
  language: string        // Primary language
  packageManager?: string // Package manager (e.g., 'pnpm', 'npm')
  root: string            // Project root
}
```

## Example

```typescript
const project = await detectProject('/path/to/project')

if (project.framework) {
  console.log(`Framework: ${project.framework}`)
}

console.log(`Language: ${project.language}`)
console.log(`Package Manager: ${project.packageManager}`)
```

## Detection Logic

| Marker File | Project Type |
|-------------|--------------|
| `package.json` + `vue` dependency | Vue 2/3 |
| `package.json` + `react` dependency | React 18+ |
| `package.json` (generic) | Node.js |
| `go.mod` | Go |
| `requirements.txt` | Python |
| `Cargo.toml` | Rust |
