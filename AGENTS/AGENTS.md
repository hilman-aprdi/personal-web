#<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean. AGENTS.md

## Project
Personal website and portfolio for Hilman Apriadi.
Goal: distinctive personal SEO, credible project showcase,
and a surreal, experimental visual identity.

## Before Coding
- Inspect the existing repository, package.json, and relevant files.
- Follow existing architecture and conventions where reasonable.
- Read RULES.md and STYLE.md before making related changes.
- Do not assume missing personal facts, project details, or achievements.
- Ask only when a missing decision materially affects implementation.

## Workflow
1. Understand the requested outcome and relevant files.
2. For small tasks, implement directly.
3. For architectural or high-impact changes, propose a brief plan first.
4. Make the smallest coherent change.
5. Run relevant checks and inspect the diff.
6. Report changes, checks, and remaining issues.

## Constraints
- Do not rewrite unrelated code.
- Do not add dependencies without a clear need.
- Never expose secrets or commit environment files.
- Do not invent content, metrics, testimonials, or credentials.
- Preserve working functionality unless explicitly asked otherwise.
- Ask before destructive operations or deployment.

## Quality
- Prioritize accessibility, responsive behavior, SEO, and performance.
- Keep code readable and maintainable.
- Explain important technical decisions in plain Indonesian.
- Never claim a test passed unless it was actually run.

## References
- RULES.md: engineering and implementation constraints.
- STYLE.md: visual identity and UI direction.
- README.md: setup and project documentation.
