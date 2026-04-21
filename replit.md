# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Artifacts

- **API Server** (`artifacts/api-server`, preview path `/api`): shared Express backend scaffold.
- **Canvas** (`artifacts/mockup-sandbox`, preview path `/__mockup`): mockup sandbox.
- **Grocery Helper** (`artifacts/grocery-helper`, preview path `/`): React + Vite web app for one-user grocery budgeting focused on Iowa City Hy-Vee planning. The initial iteration uses a seeded in-app grocery catalog and localStorage persistence for budget, list, and trip history; it is structured to be migrated to Supabase or another external PostgreSQL database later.

## Grocery Helper Features

- Set a trip budget and view remaining money throughout the session.
- Search a seeded Hy-Vee-style grocery catalog and add items to a grocery list.
- Adjust quantities, remove/swap items, and identify high-cost items.
- Estimate subtotal, tax, final total, budget proximity, and over-budget status.
- Log actual receipt totals after checkout and track variance, budget success, and trip history.
- Includes Home, List, Search, History, and Info pages.

## Azure Deployment Notes

- **Recommended hosting for the current iteration**: Azure Static Web Apps. Grocery Helper is currently a static React/Vite app with localStorage persistence and no required server process.
- **Use Azure App Service later only if needed**: choose App Service if the app adds an Express/API server, server-side scraping, scheduled jobs, server-managed Supabase access, or other long-running backend behavior.
- **Azure Static Web Apps config**: `artifacts/grocery-helper/public/staticwebapp.config.json` is copied into the Vite build output and provides client-side route fallback for `/list`, `/search`, `/history`, and `/info`.
- **Suggested Azure build settings from the monorepo root**: app location `artifacts/grocery-helper`, build command `pnpm --filter @workspace/grocery-helper run build`, output location `dist/public`.
- The Vite config defaults `BASE_PATH` to `/` and `PORT` to `5173` for external builds while still honoring Replit-provided values when present.

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally
- `pnpm --filter @workspace/grocery-helper run dev` — run Grocery Helper locally through its configured workflow

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
