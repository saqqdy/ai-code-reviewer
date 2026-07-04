# 配置

创建 `.ai-code-reviewer-plus.yml` 自定义规则。

## 配置示例

```yaml
rules:
  enabled:
    - COR-001  # 空指针检查
    - SEC-001  # XSS 防护
    - SEC-002  # SQL 注入
    - PER-001  # N+1 查询
  disabled:
    - STYLE-001  # 命名规范
  severityOverrides:
    SEC-001: BLOCKER  # XSS 必须立即修复

excludePaths:
  - node_modules/
  - dist/
  - coverage/

maxFindingsPerFile: 20
outputFormat: markdown
targetBranch: main
```

## 配置选项

| 选项 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `rules.enabled` | `string[]` | `['COR-001', 'SEC-001', ...]` | 启用的规则 ID |
| `rules.disabled` | `string[]` | `[]` | 禁用的规则 ID |
| `rules.severityOverrides` | `object` | `{}` | 规则严重性覆盖 |
| `excludePaths` | `string[]` | `['node_modules/', ...]` | 排除路径 |
| `maxFindingsPerFile` | `number` | `20` | 每文件最大发现数 |
| `outputFormat` | `string` | `'markdown'` | 输出格式（markdown/json） |
| `targetBranch` | `string` | `'main'` | 默认目标分支 |
