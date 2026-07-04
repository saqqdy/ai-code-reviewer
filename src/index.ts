/**
 * AI Code Reviewer — Entry module
 *
 * Exports all public APIs
 */

// Errors
export { GitCommandError, ParseError, ConfigError } from './errors'

// Types
export type {
	CommitReviewOptions,
	DiffHunk,
	FileReviewOptions,
	ParsedDiff,
	ProjectInfo,
	ReviewerConfig,
	ReviewDimension,
	ReviewFinding,
	ReviewOptions,
	ReviewResult,
	SeverityLevel,
} from './types'
export { VERSION } from './types'

// Collectors
export { collectDiff, collectCommitDiff } from './collectors/diff-collector'
export { detectProject } from './collectors/project-detector'

// Utils
export {
	formatFinding,
	formatSummary,
	formatReviewReport,
	formatDiffSummary,
	formatDuration,
} from './utils/format'
export { getDefaultConfig, mergeConfig, loadConfigFile } from './utils/config'
