# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start the Vite dev server on port 3000.
- `npm run build` — type-check (`tsc`) then build (`vite build`). The build fails on any TypeScript error, so this is also the type-check gate.
- `npm run preview` — serve the production build locally.

There is no test runner and no lint script configured. The project uses npm (`package-lock.json` is the committed lockfile).

## Stack

Vite 5 + React 18 + TypeScript 4.6 (`strict`). UI is Material UI 5 with the Emotion engine. Routing is `react-router-dom` v6. Blog posts are markdown rendered with `react-markdown` + `remark-gfm`, with frontmatter parsed by `front-matter` (chosen over `gray-matter` because it's browser-safe — no Node `Buffer` dependency).

There is no global state management — state is local `useState` (and a single custom hook, `usePortfolio`). Don't assume a global store exists.

## Architecture

Composition, top to bottom:

- `src/main.tsx` — the real entry point and the **single place all routes are declared**. Mounts React inside `<ThemeProvider>` + `<BrowserRouter>`. Every page is `React.lazy`-loaded behind a `<Suspense>` (route-level code splitting). `App` is the layout element at `/`, with nested routes: index → `Home`, `/about`, `/contact`, `/tech` → `TechStack`, `/blog` → `Blog`, `/blog/:slug` → `BlogPost`. (Note the `/tech` path renders the `TechStack` component, which is titled "Portfolio" in the UI.)
- `src/App.tsx` → `src/routes/EntryPoint.tsx` — the shared layout: `<Navigation />` + `<Outlet />` in a full-viewport `Box`. New pages render through this outlet.
- `src/routes/*` — one component per page.
- `src/components/*` — reusable pieces.
- `src/hooks/usePortfolio.tsx` — owns the TechStack tab state (`Tabs` enum: CORE/OTHER/LEARNING) and `renderCards()`, mapping the card data in `src/constants/techCards.tsx` to `ImageCard`s.

`Navigation` switches desktop/mobile with MUI `<Hidden mdUp>` / `<Hidden mdDown>` (not `useMediaQuery`), rendering `MobileNavigation` (drawer) or `NavigationLinks`. Both render the same link set, so a new nav link must be added in **both** files.

### Blog

Posts are markdown files in `src/content/posts/*.md`, each with YAML frontmatter (`title`, `date`, `excerpt`, optional `coverImage`). `src/constants/posts.ts` loads them at build time via Vite's `import.meta.glob(..., { query: "?raw", eager: true })`, parses frontmatter with `front-matter`, derives the slug from the filename, and exposes `getAllPosts()` (sorted newest-first) and `getPostBySlug()`. `src/components/MarkdownContent.tsx` is the single place markdown→MUI styling is defined (a `components` map passed to `react-markdown`); both blog routes and any future markdown reuse it. Post images go in `public/assets/blog/` and are referenced by absolute path (e.g. `/assets/blog/foo.svg`) — relative paths won't work because the markdown is loaded as a raw string Vite doesn't rewrite. Publishing a post = add a `.md` file and `git push`.

## Folder structure

Everything lives under `src/`, grouped by role. Put new files in the matching folder:

```
src/
  main.tsx          # entry point + all route declarations
  App.tsx           # renders the EntryPoint layout
  routes/           # one component per page (Home, About, Contact, TechStack, EntryPoint)
  components/       # reusable UI pieces (Navigation, ImageCard, ResumeButton, …)
  hooks/            # custom hooks (usePortfolio)
  models/           # shared TypeScript types (models.ts)
  constants/        # static data (techCards.tsx)
  styles/           # theme.ts (MUI theme) + styles.ts (styled() primitives)
  content/posts/    # blog posts as markdown (one .md per post)
  index.css         # global CSS
  vite-env.d.ts     # Vite type shims
public/assets/      # static image/SVG assets served as-is
public/assets/blog/ # blog post images (referenced by absolute path)
```

Conventions: page-level route components go in `routes/`; anything reused across pages goes in `components/`. Files are flat within each folder (no per-component subfolders) and there are no barrel `index` files — import from the leaf file.

## Conventions

- **Two styling patterns coexist; match the file you're editing:**
  1. Reusable layout/link primitives are MUI `styled()` components exported from `src/styles/styles.ts` (e.g. `StyledPageContainer`, `StyledNavigationLink`, `StyledParagraphContainer`). Page components compose these.
  2. One-off styling is done inline via the `sx` prop.
- **Theme tokens** (palette, custom fonts "Source Code Pro" and "Press Start 2P", `responsiveFontSizes`) are defined once in `src/styles/theme.ts`. Prefer palette names (`color="secondary"`, `theme.palette.secondary.main`) over literal hex, though the brand green `#4dd672` is currently hardcoded in several `styled()` definitions and `sx` blocks.
- **Responsive values** use breakpoint objects in `sx` (`{ xs, sm, md, lg }`) or `theme.breakpoints.down(...)` inside `styled()`.
- **Shared types** live in `src/models/models.ts` (e.g. `PortfolioCard`); static data in `src/constants/`. There are no barrel `index` files — import from the leaf file.
- **Components use default exports.** Some route components also use named exports (e.g. `export const Home`); follow the file you're touching.
- **Tech-card assets** are SVGs referenced by relative path (`assets/react-original.svg`) served from `public/assets/`.

## Env vars

Vite only exposes variables prefixed `VITE_` to the client, read via `import.meta.env`. `.env` is gitignored. Note that anything read via `import.meta.env` ships to the browser — never put server-only secrets there.

## Deployment

Hosted on Vercel, linked to the `gjeffgolden/personal-website-2.0` GitHub repo. Pushing to `main` triggers a production deploy automatically (Vercel auto-detects the Vite preset: `npm run build` → `dist/`). So the deploy flow is just `git push origin main` — no manual deploy step. SPA routing is handled by `public/_redirects` (`/* /index.html 200`) so deep links survive a refresh. There is no `vercel.json`; build settings live in the Vercel dashboard. The local `.vercel/` folder is the CLI link (gitignored) and is separate from the GitHub integration; to confirm auto-deploy is wired up, check the Vercel project's Settings → Git. After pushing, verify the build under the dashboard's Deployments tab.

## Notes

- All application code lives in `src/`. There is no backend; the site is a static SPA.
- `dist/` is Vite build output (gitignored, not committed) — never edit it by hand.
