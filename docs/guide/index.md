# Introduction

AI Code Reviewer is an AI-powered intelligent code reviewer that uses **semantic understanding** to find issues traditional linters miss.

## The Problem

Traditional linters catch syntax errors, but miss **semantic issues**:

```typescript
// Linter: ✅ No syntax errors
function processUser(input: any) {
  return input.name.trim()  // Runtime: 💥 if input is null
}
```

Questions linters can't answer:
- Is this business logic correct?
- Are there security vulnerabilities?
- Will this cause performance issues?
- Is this maintainable?

## The Solution

AI Code Reviewer analyzes code across five dimensions:

| Dimension | Focus |
|-----------|-------|
| **Correctness** | Logic errors, null pointers, boundary conditions |
| **Security** | XSS, SQL injection, data leakage |
| **Performance** | N+1 queries, memory leaks, unnecessary re-renders |
| **Maintainability** | Duplicate code, complexity, naming |
| **Best Practices** | Framework conventions, code style |

## Five-Tier Severity

| Level | Meaning | Action |
|-------|---------|--------|
| 🚫 **BLOCKER** | Must fix, blocks merge | Fix immediately |
| 🔴 **HIGH** | Critical, breaks functionality | Fix this iteration |
| 🟡 **MEDIUM** | Important, affects quality | Plan to fix |
| 🟢 **LOW** | Minor, polish level | Fix later |
| 💡 **SUGGESTION** | Optional improvement | Optional |
