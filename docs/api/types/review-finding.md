# ReviewFinding

Single review finding structure.

```typescript
interface ReviewFinding {
  ruleId: string          // Rule ID (e.g., 'SEC-001')
  severity: SeverityLevel // Severity level
  dimension: ReviewDimension // Analysis dimension
  title: string           // Finding title
  description: string     // Detailed description
  file: string            // File path
  line?: number           // Line number (optional)
  fix?: string            // Fix suggestion (optional)
  confidence: 'high' | 'medium' | 'low'
}

type SeverityLevel = 'BLOCKER' | 'HIGH' | 'MEDIUM' | 'LOW' | 'SUGGESTION'

type ReviewDimension = 'correctness' | 'security' | 'performance' | 'maintainability' | 'best-practices'
```
