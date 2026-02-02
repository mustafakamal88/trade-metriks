# TradeMetriks

Professional trading journal and analytics platform for active traders.

## 🚀 Project Status

**PHASE 1: Marketing Website — ✅ COMPLETE**

The marketing landing pages are fully built and running. You can now browse:

- Home page with hero, features, stats, and CTA
- Features page (detailed feature breakdown)
- How It Works (3-step workflow)
- Pricing (3 tiers + FAQ)
- About (mission and values)
- Contact (contact form and info)

**Next Phase: Authentication (Supabase)**

---

## 📁 Architecture

This project uses **Vertical Slice Architecture (VSA)** — each feature is self-contained.

```
src/
  app/                    # Application bootstrap, routing
    App.tsx
    AppRouter.tsx
  
  common/                 # Shared utilities, components, styles
    components/           # Button, Header, Footer
    styles/               # Theme system, design tokens
    hooks/
    utils/
    types/
  
  features/
    marketing/            # Marketing landing pages (Phase 1)
      pages/              # HomePage, FeaturesPage, etc.
      components/         # MarketingLayout
    
    auth/                 # Authentication (Phase 2)
    dashboard/            # Dashboard (Phase 3)
    journal/              # Trade journal
    calendar/             # P/L calendar
    analytics/            # Analytics
    research/             # Research hub
    settings/             # User settings
```

---

## 🎨 Design System

### Theme

- **Dark-first** professional trading aesthetic
- Comprehensive design token system (colors, typography, spacing)
- Light/dark theme support built in
- Trading-specific colors (profit green, loss red)

### Design Tokens

Located in `src/common/styles/theme.css`:

- Color primitives and semantic tokens
- Typography scale (12px to 60px)
- Spacing scale (4px to 128px)
- Border radius, shadows, z-index
- Responsive container widths

---

## 🛠 Tech Stack

- **Frontend**: React 19 + TypeScript
- **Build Tool**: Vite
- **Routing**: React Router 7
- **Styling**: CSS Modules + Design Tokens
- **Backend**: Supabase (Phase 2+)

---

## 🚦 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The app will run at `http://localhost:5173`

---

## 📋 Development Roadmap

### ✅ Phase 1: Marketing Website (COMPLETE)

- [x] Project setup with Vite + React + TypeScript
- [x] Vertical Slice Architecture structure
- [x] Theme system and design tokens
- [x] Shared components (Button, Header, Footer)
- [x] Marketing pages (Home, Features, How It Works, Pricing, About, Contact)
- [x] Responsive layouts
- [x] Dark-first theme

### 🔜 Phase 2: Authentication

- [ ] Supabase setup
- [ ] Email/password authentication
- [ ] Protected routes
- [ ] Auth context provider
- [ ] Sign in / Sign up pages
- [ ] Password reset flow

### 🔜 Phase 3: Dashboard & Core Features

- [ ] Dashboard overview
- [ ] Trade journal (add/edit trades)
- [ ] P/L calendar
- [ ] Day journal
- [ ] Analytics foundation
- [ ] Research hub
- [ ] Screenshot uploads (Supabase Storage)

---

## 📖 Key Principles

1. **Vertical Slice Architecture**: Each feature owns its UI, logic, and services
2. **Production Quality**: No shortcuts, clean code, scalable architecture
3. **Dark-First Design**: Professional trading aesthetic
4. **Data-Driven**: Built for traders who want insights from their data
5. **No Cross-Feature Coupling**: Features are independent and self-contained

---

## 🎯 Marketing Pages

All marketing pages are **fully responsive** and **production-ready**:

1. **Home** (`/`) — Hero, value prop, features grid, stats, CTA
2. **Features** (`/features`) — Detailed feature breakdown
3. **How It Works** (`/how-it-works`) — 3-step process, daily workflow
4. **Pricing** (`/pricing`) — 3 pricing tiers + FAQ
5. **About** (`/about`) — Mission, values
6. **Contact** (`/contact`) — Contact form and information

Auth entry points (Sign In / Sign Up) are placeholders for Phase 2.

---

## 🎨 Components

### Common Components

- **Button** — Primary, secondary, outline, ghost variants
- **Header** — Sticky navigation with logo and CTA buttons
- **Footer** — Multi-column footer with links

### Marketing Components

- **MarketingLayout** — Shared layout for all marketing pages (header + outlet + footer)

---

## 🌐 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

---

## 📝 License

Proprietary - TradeMetriks

---

## 👨‍💻 Development Notes

- All pages use CSS Modules for scoped styling
- Theme tokens are in `src/common/styles/theme.css`
- Global styles in `src/common/styles/globals.css`
- Modern CSS reset in `src/common/styles/reset.css`
- No external UI libraries — custom components only
- Fully typed with TypeScript

---

**Phase 1 Complete** ✅  
Ready for Phase 2: Authentication with Supabase
