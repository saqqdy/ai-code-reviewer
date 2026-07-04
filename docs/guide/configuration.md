# Configuration

Create `.ai-code-reviewer-plus.yml` to customize rules.

## Example Configuration

```yaml
rules:
  enabled:
    - COR-001  # Null check
    - SEC-001  # XSS prevention
    - SEC-002  # SQL injection
    - PER-001  # N+1 query
  disabled:
    - STYLE-001  # Naming conventions
  severityOverrides:
    SEC-001: BLOCKER  # XSS must fix immediately

excludePaths:
  - node_modules/
  - dist/
  - coverage/

maxFindingsPerFile: 20
outputFormat: markdown
targetBranch: main
```

## Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `rules.enabled` | `string[]` | `['COR-001', 'SEC-001', ...]` | Enabled rule IDs |
| `rules.disabled` | `string[]` | `[]` | Disabled rule IDs |
| `rules.severityOverrides` | `object` | `{}` | Severity overrides per rule |
| `excludePaths` | `string[]` | `['node_modules/', ...]` | Excluded paths |
| `maxFindingsPerFile` | `number` | `20` | Max findings per file |
| `outputFormat` | `string` | `'markdown'` | Output format (markdown/json) |
| `targetBranch` | `string` | `'main'` | Default target branch |
