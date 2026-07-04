# Skill Commands

Interactive review commands in Claude Code.

## `/review [branch]`

Review diff against target branch.

```
/review main
/review develop
```

## `/review-file <file>`

Review a single file.

```
/review-file src/index.ts
```

## `/review-commit <hash>`

Review a specific commit.

```
/review-commit abc1234
```

## Output Format

```
📊 Review Summary:
- Total findings: 12
- 🚫 Blockers: 1
- 🔴 High: 3
- 🟡 Medium: 5
- 🟢 Low: 2
- 💡 Suggestions: 1

🚫 Blockers (Must Fix):

- 🚫 **SEC-001** [BLOCKER] `src/auth.ts:45`
  **XSS vulnerability in user input**

  💡 **Fix**: Sanitize user input.
  Confidence: 🟢 High
```
