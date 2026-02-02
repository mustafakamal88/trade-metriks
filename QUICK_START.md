# TradeMetriks - Quick Start Guide

## Welcome to TradeMetriks! 🎉

This guide will help you get up and running quickly.

---

## Prerequisites

Make sure you have installed:

- **Node.js** 18.x or higher
- **npm** or **yarn**

---

## Installation & Setup

### 1. Install Dependencies

```bash
npm install
```

This will install all required packages:
- React 19
- TypeScript
- Vite
- React Router
- Supabase (for Phase 2)
- clsx

### 2. Start Development Server

```bash
npm run dev
```

The app will be available at: **http://localhost:5173**

You should see:
```
VITE v7.3.1  ready in 160 ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
```

### 3. Open in Browser

Navigate to http://localhost:5173 to see the marketing website.

---

## Available Scripts

```bash
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run ESLint
npm run lint
```

---

## Project Structure

```
src/
├── app/                    # App bootstrap & routing
├── common/                 # Shared components & styles
└── features/
    └── marketing/          # Marketing pages (Phase 1)
```

**Learn more**: See [STRUCTURE.md](./STRUCTURE.md) for full details.

---

## Marketing Pages (Live)

| Route             | Page          |
|-------------------|---------------|
| `/`               | Home          |
| `/features`       | Features      |
| `/how-it-works`   | How It Works  |
| `/pricing`        | Pricing       |
| `/about`          | About         |
| `/contact`        | Contact       |

---

## Design System

The design system uses CSS variables for all styling.

### Colors

All colors are defined in `src/common/styles/theme.css`:

- **Brand Primary**: Blue (#3b82f6)
- **Brand Accent**: Purple (#8b5cf6)
- **Profit**: Green (#10b981)
- **Loss**: Red (#ef4444)

### Theme Switching

The app defaults to **dark theme**. To switch themes:

```javascript
// Set dark theme
document.documentElement.setAttribute('data-theme', 'dark');

// Set light theme
document.documentElement.setAttribute('data-theme', 'light');
```

**Learn more**: See [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md)

---

## Making Changes

### Adding a New Marketing Page

1. Create page component in `src/features/marketing/pages/`
   ```tsx
   // ExamplePage.tsx
   export function ExamplePage() {
     return <div>Your content here</div>;
   }
   ```

2. Create styles in `src/features/marketing/pages/`
   ```css
   /* ExamplePage.module.css */
   .container {
     padding: var(--space-8);
   }
   ```

3. Add route in `src/app/AppRouter.tsx`
   ```tsx
   import { ExamplePage } from '../features/marketing/pages';
   
   // In Routes:
   <Route path="/example" element={<ExamplePage />} />
   ```

4. Add link in Header (`src/common/components/Header.tsx`)

### Creating a Shared Component

1. Create component in `src/common/components/`
2. Create CSS module alongside it
3. Export from `src/common/components/index.ts`
4. Import where needed: `import { Component } from '@/common/components'`

---

## Common Tasks

### Update Theme Colors

Edit `src/common/styles/theme.css`:

```css
:root {
  --brand-primary: #your-color;
}
```

### Add a New Font

Edit `src/common/styles/theme.css`:

```css
:root {
  --font-sans: 'Your Font', -apple-system, ...;
}
```

Then add the font file or CDN link to `index.html`.

### Change Container Width

Edit `src/common/styles/theme.css`:

```css
:root {
  --container-xl: 1400px; /* Default: 1280px */
}
```

---

## Debugging

### Development Tools

- **React DevTools**: Browser extension for React debugging
- **VS Code**: Recommended editor with TypeScript support
- **Vite DevTools**: Built into the dev server

### Common Issues

**Port 5173 already in use?**
```bash
# Kill existing process
lsof -ti:5173 | xargs kill -9

# Or use a different port
npm run dev -- --port 3000
```

**TypeScript errors?**
```bash
# Check for type errors
npx tsc --noEmit
```

**Hot reload not working?**
- Restart the dev server
- Clear browser cache
- Check file watchers aren't maxed out

---

## Building for Production

### Create Production Build

```bash
npm run build
```

This creates an optimized build in the `dist/` folder.

### Preview Production Build Locally

```bash
npm run preview
```

### Deploy

The `dist/` folder can be deployed to any static hosting:

- **Vercel**: Zero-config deployment
- **Netlify**: Drag & drop or Git integration
- **AWS S3 + CloudFront**: Manual setup
- **GitHub Pages**: Static hosting

---

## What's Next?

### Phase 2: Authentication

After marketing is complete, we'll add:

1. Supabase authentication
2. Sign In / Sign Up pages
3. Protected routes
4. User session management

### Phase 3: Dashboard

Then we'll build the core app:

1. Dashboard overview
2. Trade journal
3. P/L calendar
4. Analytics

---

## Resources

- [README.md](./README.md) — Project overview
- [STRUCTURE.md](./STRUCTURE.md) — Architecture details
- [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md) — Design tokens
- [PHASE_1_SUMMARY.md](./PHASE_1_SUMMARY.md) — What we built

---

## Need Help?

1. Check the documentation files above
2. Review the code — it's clean and well-organized
3. Look at existing components for patterns
4. Refer to the design system for styling

---

## Tips for Success

1. **Follow VSA**: Keep features self-contained
2. **Use Design Tokens**: Never hardcode colors/sizes
3. **TypeScript**: Leverage type safety
4. **CSS Modules**: Keep styles scoped
5. **Mobile First**: Design for mobile, scale up

---

**Happy Building!** 🚀

The foundation is solid. Now build something amazing.
