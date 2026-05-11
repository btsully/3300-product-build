# Grocery Helper — Iowa City Hy-Vee Budget Planner

A budget-first grocery planning web app built for Iowa City Hy-Vee shoppers. Created as the semester product build project for **BAIS 3300 — Digital Product Management** at the **University of Iowa**.

**Live site:** [brendantsullivan.site](https://brendantsullivan.site)

---

## What It Does

Grocery Helper helps shoppers plan a Hy-Vee trip before they ever walk in the door. The core idea is simple: set a budget, build your list from a realistic Iowa City Hy-Vee catalog, and see a live estimate of your total — including tax — before you spend a dollar.

### Key Features

- **Budget tracker** — Set a trip budget and watch your estimated total update in real time as you add items. Color-coded warnings appear when you hit 90% or exceed your budget.
- **Catalog search** — Browse 100+ products across 12 categories (Produce, Dairy, Meat, Pantry, Condiments, Breakfast, Frozen, Snacks, Beverages, Bakery, Household, Personal Care) with realistic Iowa City Hy-Vee pricing.
- **Tax estimation** — Taxable and non-taxable items are tracked separately so the estimated total reflects what you'd actually pay at checkout.
- **Trip history** — After logging your real receipt total, the app stores each past trip so you can see how closely your estimates matched reality over time.
- **No account required** — All data lives in your browser's local storage. Nothing is sent to a server.

---

## Project Background

This app was built as the final product deliverable for BAIS 3300 at the University of Iowa (Spring 2026). The assignment challenged students to design, build, and deploy a real web application from scratch — including UI/UX decisions, data modeling, and production deployment.

**Team:**
- **Brendan Sullivan** — [LinkedIn](https://www.linkedin.com/in/brendan-t-sullivan/)
- **Jake Waltrip** — [LinkedIn](https://www.linkedin.com/in/jake-waltrip-409888228/)

The problem we chose to solve: college students frequently overspend on grocery trips because they have no way to estimate their total before getting to the register. Grocery Helper fills that gap with a dead-simple planning tool — no login, no ads, no friction.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 + Vite 7 |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Components | shadcn/ui (Radix UI primitives) |
| State / Persistence | Zustand with localStorage |
| Routing | wouter |
| Package Manager | pnpm (monorepo workspace) |
| Deployment | Microsoft Azure Static Web Apps |
| Analytics | Google Analytics (GA4) |

---

## Project Structure

```
artifacts/
  grocery-helper/       # Main React + Vite app
    src/
      pages/            # Home, Search, List, History, Info, legal pages
      components/       # Shared UI components (nav, footer, cookie banner)
      hooks/            # Zustand store (use-store.ts)
      lib/              # Product catalog data (data.ts)
    public/
      staticwebapp.config.json   # Azure SPA routing config
      opengraph.jpg              # Social link preview image
      favicon.svg                # Shopping cart favicon
```

---

## Running Locally

Requires [Node.js](https://nodejs.org) and [pnpm](https://pnpm.io).

```bash
# Install dependencies
pnpm install

# Start the dev server
pnpm --filter @workspace/grocery-helper run dev
```

The app will be available at `http://localhost:5173`.

---

## Deployment

The app is deployed to **Microsoft Azure Static Web Apps** via GitHub Actions. The `staticwebapp.config.json` file in `/public` handles SPA routing so that direct URL navigation works correctly on Azure.

Build output goes to `dist/public` and is served as a static site — no server-side code required.

```bash
# Production build
pnpm --filter @workspace/grocery-helper run build
```

---

## Data & Privacy

All user data (budget, grocery list, trip history) is stored entirely in the browser using `localStorage` under the key `grocery-helper-storage`. No personal data is collected or transmitted. See the in-app [Privacy Policy](https://brendantsullivan.site/privacy) and [Cookie Policy](https://brendantsullivan.site/cookie-policy) for full details.
