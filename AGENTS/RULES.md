# RULES.md

## Stack
- Prefer the repository's existing framework and dependencies.
- For a new project, use Next.js App Router, TypeScript,
  and Tailwind CSS unless a concrete constraint suggests otherwise.
- Do not introduce a second framework or styling system without need.
- Use Server Components by default; add Client Components only
  when browser APIs, state, or interaction requires them.

## Code
- Use semantic HTML and accessible React components.
- Keep components focused and avoid unnecessary abstractions.
- Reuse existing components and utilities before creating new ones.
- Avoid duplicated logic, dead code, and unexplained magic values.
- Use descriptive names and strict types where practical.
- Do not use `any` to bypass typing without a clear reason.

## SEO
- Give each indexable page a unique title and description.
- Use semantic headings, meaningful links, and descriptive URLs.
- Configure canonical URLs, sitemap, robots, and social metadata.
- Add structured data only when it accurately describes visible content.
- Never keyword-stuff or create thin pages just to target a name query.
- Keep personal identity and project claims factually accurate.

## UI and Accessibility
- Support mobile, tablet, and desktop.
- Prevent horizontal overflow and layout shifts.
- Provide keyboard navigation, visible focus, and sufficient contrast.
- Respect prefers-reduced-motion.
- Use optimized images with appropriate dimensions and alt text.

## Dependencies and Security
- Inspect installed packages before adding new ones.
- Never hardcode API keys, tokens, or private information.
- Validate untrusted input and avoid unsafe HTML rendering.
- Do not change deployment settings or run destructive commands
  without authorization.

## Verification
- Inspect package.json to identify available scripts.
- Run relevant lint, type-check, build, or tests when available.
- Check the changed UI at relevant viewport sizes.
- Report checks that could not be run.
