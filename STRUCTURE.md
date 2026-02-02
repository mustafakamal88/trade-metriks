# TradeMetriks - Project Structure

## Overview

This document outlines the complete file structure of TradeMetriks, a production-grade SaaS platform built with Vertical Slice Architecture.

## Root Structure

```
trade-metriks/
├── public/                 # Static assets
├── src/                    # Source code
│   ├── app/                # Application bootstrap
│   ├── common/             # Shared code
│   └── features/           # Feature modules (VSA)
├── index.html              # HTML entry point
├── package.json            # Dependencies
├── tsconfig.json           # TypeScript config
├── vite.config.ts          # Vite config
└── README.md               # Project documentation
```

## Source Directory (`src/`)

### Application Layer (`app/`)

```
app/
├── App.tsx                 # Root component
└── AppRouter.tsx           # Routing configuration
```

**Purpose**: Application bootstrap, routing, and global providers.

### Common Layer (`common/`)

```
common/
├── components/             # Shared UI components
│   ├── Button.tsx
│   ├── Button.module.css
│   ├── Header.tsx
│   ├── Header.module.css
│   ├── Footer.tsx
│   ├── Footer.module.css
│   └── index.ts
│
├── styles/                 # Global styles & theme
│   ├── reset.css           # CSS reset
│   ├── theme.css           # Design tokens
│   └── globals.css         # Global utilities
│
├── hooks/                  # Shared React hooks (empty for now)
├── utils/                  # Shared utilities (empty for now)
└── types/                  # Shared TypeScript types (empty for now)
```

**Purpose**: Code shared across multiple features. No business logic, only generic utilities.

### Features Layer (`features/`)

```
features/
└── marketing/              # Marketing website (Phase 1)
    ├── pages/              # Marketing pages
    │   ├── HomePage.tsx
    │   ├── HomePage.module.css
    │   ├── FeaturesPage.tsx
    │   ├── FeaturesPage.module.css
    │   ├── HowItWorksPage.tsx
    │   ├── HowItWorksPage.module.css
    │   ├── PricingPage.tsx
    │   ├── PricingPage.module.css
    │   ├── AboutPage.tsx
    │   ├── AboutPage.module.css
    │   ├── ContactPage.tsx
    │   ├── ContactPage.module.css
    │   └── index.ts
    │
    └── components/         # Marketing-specific components
        ├── MarketingLayout.tsx
        ├── MarketingLayout.module.css
        └── index.ts
```

**Purpose**: Self-contained marketing feature. Owns its pages, components, and layout.

---

## Future Features (Planned)

### Phase 2: Authentication

```
features/
└── auth/
    ├── pages/
    │   ├── SignInPage.tsx
    │   ├── SignUpPage.tsx
    │   └── PasswordResetPage.tsx
    ├── components/
    │   └── AuthLayout.tsx
    ├── hooks/
    │   └── useAuth.ts
    ├── services/
    │   └── authService.ts
    └── types/
        └── auth.types.ts
```

### Phase 3: Dashboard & Core

```
features/
├── dashboard/              # Dashboard overview
│   ├── pages/
│   ├── components/
│   └── services/
│
├── journal/                # Trade journal
│   ├── pages/
│   ├── components/
│   ├── services/
│   └── types/
│
├── calendar/               # P/L calendar
│   ├── pages/
│   ├── components/
│   └── services/
│
├── analytics/              # Analytics & metrics
│   ├── pages/
│   ├── components/
│   └── services/
│
├── research/               # Research hub
│   ├── pages/
│   ├── components/
│   └── services/
│
└── settings/               # User settings
    ├── pages/
    ├── components/
    └── services/
```

---

## Key Files

### Entry Point

- **`src/main.tsx`** — Application entry, mounts React app, sets default theme

### Routing

- **`src/app/AppRouter.tsx`** — All route definitions
- Separate layouts for marketing vs. authenticated app

### Styles

- **`src/common/styles/theme.css`** — Design tokens (colors, typography, spacing)
- **`src/common/styles/reset.css`** — Modern CSS reset
- **`src/common/styles/globals.css`** — Global utilities and base styles

### Components

All components use CSS Modules for scoped styling:
- `Component.tsx` (logic)
- `Component.module.css` (styles)

---

## Naming Conventions

### Files

- **Components**: PascalCase (e.g., `Button.tsx`, `MarketingLayout.tsx`)
- **Pages**: PascalCase with `Page` suffix (e.g., `HomePage.tsx`)
- **Styles**: PascalCase with `.module.css` (e.g., `Button.module.css`)
- **Utilities**: camelCase (e.g., `formatDate.ts`)
- **Types**: camelCase with `.types.ts` (e.g., `auth.types.ts`)
- **Services**: camelCase with `Service` suffix (e.g., `authService.ts`)
- **Hooks**: camelCase with `use` prefix (e.g., `useAuth.ts`)

### Folders

- Lowercase for generic folders (`pages/`, `components/`, `hooks/`)
- PascalCase for feature folders if needed

---

## VSA Principles

Each feature follows these rules:

1. **Self-Contained**: Feature owns everything it needs
2. **No Cross-Feature Imports**: Features don't import from other features
3. **Common Code Only in `common/`**: Shared code goes in `common/`
4. **Clear Boundaries**: Each feature is a vertical slice of the application

---

## Import Patterns

### Good

```typescript
// Import from common
import { Button } from '@/common/components';

// Import within same feature
import { TradeForm } from '../components/TradeForm';
```

### Bad

```typescript
// ❌ Never import from other features
import { TradeForm } from '@/features/journal/components/TradeForm';
```

---

## Build Output

```
dist/
├── assets/                 # Bundled JS/CSS
├── index.html              # Entry HTML
└── vite.svg                # Favicon
```

---

**Last Updated**: Phase 1 Complete (February 2, 2026)
