# Agent instructions

`template-ts` is the source of truth for TypeScript project tooling.

## Development

- Use `justfile` and `.just/` recipes for development tasks.
- Run pnpm and bun commands through `sandbox`.
- `just check` verifies the project.
- `just test` runs the test suite.
- Run `slop-detector` after changes.
