# TradeMetriks Design System

A comprehensive design system for the TradeMetriks trading platform.

---

## 🎨 Color System

### Base Colors

```css
--color-white: #ffffff
--color-black: #000000
```

### Gray Scale

```css
--gray-50:  #fafafa   (lightest)
--gray-100: #f5f5f5
--gray-200: #e5e5e5
--gray-300: #d4d4d4
--gray-400: #a3a3a3
--gray-500: #737373
--gray-600: #525252
--gray-700: #404040
--gray-800: #262626
--gray-900: #171717
--gray-950: #0a0a0a   (darkest)
```

### Trading Colors

#### Profit (Green)

```css
--profit-green:       #10b981
--profit-green-dark:  #059669
--profit-green-light: #34d399
```

#### Loss (Red)

```css
--loss-red:       #ef4444
--loss-red-dark:  #dc2626
--loss-red-light: #f87171
```

### Brand Colors

#### Primary (Blue)

```css
--brand-primary:       #3b82f6
--brand-primary-dark:  #2563eb
--brand-primary-light: #60a5fa
```

#### Accent (Purple)

```css
--brand-accent:       #8b5cf6
--brand-accent-dark:  #7c3aed
--brand-accent-light: #a78bfa
```

---

## 🌗 Theme Tokens

### Dark Theme (Default)

```css
/* Backgrounds */
--bg-primary:    var(--gray-950)  /* Main background */
--bg-secondary:  var(--gray-900)  /* Cards, sections */
--bg-tertiary:   var(--gray-800)  /* Hover states */
--bg-elevated:   var(--gray-800)  /* Modals, dropdowns */
--bg-overlay:    rgba(0,0,0,0.8)  /* Backdrop */

/* Text */
--text-primary:   var(--gray-50)   /* Headings, body */
--text-secondary: var(--gray-400)  /* Supporting text */
--text-tertiary:  var(--gray-500)  /* Captions */
--text-muted:     var(--gray-600)  /* Placeholders */

/* Borders */
--border-primary:   var(--gray-800)
--border-secondary: var(--gray-700)
--border-focus:     var(--brand-primary)

/* Interactive */
--interactive-hover:  var(--gray-800)
--interactive-active: var(--gray-700)

/* Semantic */
--color-profit:  var(--profit-green)
--color-loss:    var(--loss-red)
--color-primary: var(--brand-primary)
--color-accent:  var(--brand-accent)
```

### Light Theme

```css
/* Backgrounds */
--bg-primary:    var(--gray-50)
--bg-secondary:  var(--color-white)
--bg-tertiary:   var(--gray-100)
--bg-elevated:   var(--color-white)
--bg-overlay:    rgba(255,255,255,0.95)

/* Text */
--text-primary:   var(--gray-900)
--text-secondary: var(--gray-600)
--text-tertiary:  var(--gray-500)
--text-muted:     var(--gray-400)

/* Borders */
--border-primary:   var(--gray-200)
--border-secondary: var(--gray-300)
--border-focus:     var(--brand-primary)

/* Interactive */
--interactive-hover:  var(--gray-100)
--interactive-active: var(--gray-200)

/* Semantic */
--color-profit:  var(--profit-green-dark)
--color-loss:    var(--loss-red-dark)
--color-primary: var(--brand-primary)
--color-accent:  var(--brand-accent)
```

---

## ✍️ Typography

### Font Families

```css
--font-sans: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', ...
--font-mono: 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', ...
```

### Font Sizes

```css
--text-xs:   0.75rem    /* 12px */
--text-sm:   0.875rem   /* 14px */
--text-base: 1rem       /* 16px */
--text-lg:   1.125rem   /* 18px */
--text-xl:   1.25rem    /* 20px */
--text-2xl:  1.5rem     /* 24px */
--text-3xl:  1.875rem   /* 30px */
--text-4xl:  2.25rem    /* 36px */
--text-5xl:  3rem       /* 48px */
--text-6xl:  3.75rem    /* 60px */
```

### Line Heights

```css
--leading-none:    1
--leading-tight:   1.25
--leading-snug:    1.375
--leading-normal:  1.5
--leading-relaxed: 1.625
--leading-loose:   2
```

### Font Weights

```css
--font-normal:    400
--font-medium:    500
--font-semibold:  600
--font-bold:      700
```

### Typography Examples

```css
/* Heading 1 */
font-size: var(--text-5xl);
font-weight: var(--font-bold);
line-height: var(--leading-tight);

/* Heading 2 */
font-size: var(--text-3xl);
font-weight: var(--font-semibold);
line-height: var(--leading-snug);

/* Body */
font-size: var(--text-base);
font-weight: var(--font-normal);
line-height: var(--leading-normal);

/* Caption */
font-size: var(--text-sm);
font-weight: var(--font-normal);
line-height: var(--leading-relaxed);
color: var(--text-secondary);
```

---

## 📏 Spacing Scale

```css
--space-1:  0.25rem   /* 4px */
--space-2:  0.5rem    /* 8px */
--space-3:  0.75rem   /* 12px */
--space-4:  1rem      /* 16px */
--space-5:  1.25rem   /* 20px */
--space-6:  1.5rem    /* 24px */
--space-8:  2rem      /* 32px */
--space-10: 2.5rem    /* 40px */
--space-12: 3rem      /* 48px */
--space-16: 4rem      /* 64px */
--space-20: 5rem      /* 80px */
--space-24: 6rem      /* 96px */
--space-32: 8rem      /* 128px */
```

---

## 🔲 Border Radius

```css
--radius-sm:   0.25rem   /* 4px */
--radius-md:   0.375rem  /* 6px */
--radius-lg:   0.5rem    /* 8px */
--radius-xl:   0.75rem   /* 12px */
--radius-2xl:  1rem      /* 16px */
--radius-full: 9999px    /* Fully rounded */
```

---

## 🌑 Shadows

```css
--shadow-sm:  0 1px 2px 0 rgba(0,0,0,0.05)
--shadow-md:  0 4px 6px -1px rgba(0,0,0,0.1), 
              0 2px 4px -1px rgba(0,0,0,0.06)
--shadow-lg:  0 10px 15px -3px rgba(0,0,0,0.1), 
              0 4px 6px -2px rgba(0,0,0,0.05)
--shadow-xl:  0 20px 25px -5px rgba(0,0,0,0.1), 
              0 10px 10px -5px rgba(0,0,0,0.04)
--shadow-2xl: 0 25px 50px -12px rgba(0,0,0,0.25)
```

---

## 📚 Z-Index Scale

```css
--z-base:           0
--z-dropdown:       1000
--z-sticky:         1100
--z-fixed:          1200
--z-modal-backdrop: 1300
--z-modal:          1400
--z-popover:        1500
--z-tooltip:        1600
```

---

## ⏱ Transitions

```css
--transition-fast: 150ms ease-in-out
--transition-base: 200ms ease-in-out
--transition-slow: 300ms ease-in-out
```

---

## 📐 Container Widths

```css
--container-sm:  640px
--container-md:  768px
--container-lg:  1024px
--container-xl:  1280px
--container-2xl: 1536px
```

---

## 🧩 Component Patterns

### Button Variants

#### Primary

```css
background: var(--brand-primary)
color: var(--color-white)
border: 1px solid var(--brand-primary)

/* Hover */
background: var(--brand-primary-dark)
transform: translateY(-1px)
box-shadow: var(--shadow-md)
```

#### Secondary

```css
background: var(--brand-accent)
color: var(--color-white)
border: 1px solid var(--brand-accent)
```

#### Outline

```css
background: transparent
color: var(--text-primary)
border: 1px solid var(--border-primary)

/* Hover */
background: var(--interactive-hover)
```

#### Ghost

```css
background: transparent
color: var(--text-secondary)
border: 1px solid transparent

/* Hover */
background: var(--interactive-hover)
color: var(--text-primary)
```

### Card Pattern

```css
background: var(--bg-secondary)
border: 1px solid var(--border-primary)
border-radius: var(--radius-xl)
padding: var(--space-8)

/* Hover */
border-color: var(--brand-primary)
transform: translateY(-4px)
box-shadow: var(--shadow-lg)
```

---

## 📱 Responsive Breakpoints

```css
/* Mobile First */
@media (max-width: 640px)  { /* Small */ }
@media (max-width: 768px)  { /* Medium */ }
@media (max-width: 1024px) { /* Large */ }
@media (max-width: 1280px) { /* XL */ }
```

---

## ✅ Usage Examples

### Gradient Text

```css
background: linear-gradient(135deg, var(--brand-primary), var(--brand-accent));
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
```

### Glassmorphism

```css
background-color: rgba(10, 10, 10, 0.8);
backdrop-filter: blur(8px);
```

### Profit/Loss Indicator

```css
/* Profit */
color: var(--color-profit);

/* Loss */
color: var(--color-loss);
```

---

## 🎯 Best Practices

1. **Always use design tokens** — Never hardcode colors or sizes
2. **Dark theme first** — Design for dark, adapt to light
3. **Semantic naming** — Use semantic tokens (`--text-primary`) over primitives (`--gray-50`)
4. **Consistent spacing** — Stick to the spacing scale
5. **Accessible contrast** — Ensure text meets WCAG AA standards
6. **Mobile first** — Design mobile, scale up
7. **CSS Modules** — Scope all component styles

---

**Design System Version**: 1.0.0  
**Last Updated**: Phase 1 Complete (February 2, 2026)
