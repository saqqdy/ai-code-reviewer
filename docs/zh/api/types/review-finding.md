# ReviewFinding

单个审查发现结构。

```typescript
interface ReviewFinding {
  ruleId: string          // 规则 ID（如 'SEC-001'）
  severity: SeverityLevel // 严重级别
  dimension: ReviewDimension // 分析维度
  title: string           // 发现标题
  description: string     // 详细描述
  file: string            // 文件路径
  line?: number           // 行号（可选）
  fix?: string            // 修复建议（可选）
  confidence: 'high' | 'medium' | 'low'
}

type SeverityLevel = 'BLOCKER' | 'HIGH' | 'MEDIUM' | 'LOW' | 'SUGGESTION'

type ReviewDimension = 'correctness' | 'security' | 'performance' | 'maintainability' | 'best-practices'
```
