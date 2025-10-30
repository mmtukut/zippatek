# 🎨 Zippatek Design System

**African Innovation × Global Execution**

> A comprehensive design system built for African tech warmth meets global tech trust. Dark mode first, glassmorphism native, and AAA accessible throughout.

---

## 📐 Philosophy & Principles

### Core Philosophy
- **🌍 African Innovation, Global Execution**: Every UI pattern optimized for both high-growth African startups and investor/enterprise credibility
- **🌙 Dark Mode First**: Default to dark mode, reflecting African tech innovation aesthetic
- **♿ Accessibility First**: AAA/AA contrast ratios, large touch targets, skip links, and keyboard navigation
- **⚡ Performance Over Decoration**: Animations optimized for performance with reduced motion support
- **✨ Glassmorphism**: Modern, premium feel with backdrop blur and translucent surfaces

---

## 🎨 Brand Palette

### Primary Colors (Deep Tech Blue Family)
- **Deep Tech Blue** `#0A2463` - Primary brand color, used for backgrounds and major elements
- **Royal Blue** `#1E40AF` - Interactive elements and hover states
- **Electric Blue** `#3B82F6` - Highlights and accents
- **Light Blue** `#DBEAFE` - Text on dark backgrounds

### Accent Colors
- **Electric Cyan** `#06B6D4` - Innovation, technology, forward-thinking
- **Vibrant Orange** `#F97316` - African warmth, energy, calls-to-action

### Semantic Colors
- **Success**: `#10B981` (Green)
- **Warning**: `#F59E0B` (Amber)
- **Error**: `#EF4444` (Red)

### Usage Guidelines
```tsx
// Primary actions - Royal Blue
<Button variant="primary">Get Started</Button>

// Secondary actions - Electric Cyan
<Button variant="secondary">Learn More</Button>

// Accent/CTA - Vibrant Orange
<Button variant="accent">Book Demo</Button>

// Glass variant for hero sections
<Button variant="glass">Explore Solutions</Button>
```

---

## 📝 Typography

### Font Families
```css
--font-sans: 'Inter', 'Outfit' /* Body text */
--font-heading: 'Space Grotesk', 'Clash Display' /* Headlines */
--font-mono: 'JetBrains Mono', 'Fira Code' /* Code */
```

### Fluid Type Scale
All typography uses responsive `clamp()` for fluid scaling:

| Size | Min | Max | Usage |
|------|-----|-----|-------|
| `text-xs` | 12px | 14px | Captions, labels |
| `text-sm` | 14px | 16px | Small body |
| `text-base` | 16px | 18px | Body text |
| `text-lg` | 18px | 20px | Large body |
| `text-xl` | 20px | 24px | Subheadings |
| `text-2xl` | 24px | 32px | Section titles |
| `text-3xl` | 30px | 40px | Page titles |
| `text-4xl` | 36px | 48px | Hero headlines |
| `text-5xl` | 48px | 64px | Large hero |
| `text-6xl` | 60px | 80px | Massive displays |

### Usage
```tsx
<h1 className="font-heading text-5xl font-bold">
  Building Africa's Infrastructure
</h1>
<p className="text-base text-primary-100">
  AI-powered property intelligence...
</p>
```

---

## 🪟 Glassmorphism

### Glass Utilities

#### `.glass` - Standard Glassmorphism
```css
backdrop-filter: blur(16px) saturate(180%)
background: rgba(30, 64, 175, 0.5)
border: 1px solid rgba(219, 234, 254, 0.18)
```

#### `.glass-intense` - Stronger Effect
```css
backdrop-filter: blur(24px) saturate(200%)
background: rgba(30, 64, 175, 0.5)
border: 1px solid rgba(219, 234, 254, 0.18)
```

#### `.glass-card` - Pre-configured Card
```css
.glass + rounded-glass + padding + hover effects
```

### Usage Examples
```tsx
// Basic glass surface
<div className="glass rounded-xl p-6">
  <h3>Glass Panel</h3>
</div>

// Glass card with hover
<div className="glass-card">
  <h3>Interactive Glass Card</h3>
</div>

// Component usage
<Card glass>
  <h3>Glass Card Component</h3>
</Card>

<GlassCard>
  <h3>Pre-configured Glass Card</h3>
</GlassCard>
```

---

## 🎴 Components

### Button Component

Full-featured button with accessibility built-in:

```tsx
<Button 
  variant="primary" // primary | secondary | accent | outline | ghost | glass | danger
  size="lg"         // sm | md | lg | xl
  loading={false}   // Shows spinner
  icon={<Icon />}   // Left icon
  iconRight={<Icon />} // Right icon
  fullWidth         // Full width button
>
  Click Me
</Button>
```

**Accessibility Features:**
- ✅ Minimum 44px touch targets (WCAG 2.5.5)
- ✅ Clear focus indicators
- ✅ Loading states with `aria-busy`
- ✅ Disabled states with `aria-disabled`
- ✅ Active scale feedback

### Card Component

Flexible card component with glassmorphism support:

```tsx
<Card 
  glass           // Glassmorphism effect
  glassIntense    // Stronger glass effect
  bordered        // Visible border
  elevation={2}   // 1 | 2 | 3 shadow depth
  hover           // Hover scale + shadow
>
  Card Content
</Card>

// Pre-configured variants
<GlassCard>Glass Card</GlassCard>
<FeatureCard>Feature Card with Hover</FeatureCard>
```

---

## ✨ Animations

### Built-in Animations
All animations respect `prefers-reduced-motion`:

| Animation | Usage | Duration |
|-----------|-------|----------|
| `animate-fade-in` | Fade in on load | 0.6s |
| `animate-fade-in-up` | Fade + slide up | 0.7s |
| `animate-slide-in-right` | Slide from right | 0.5s |
| `animate-slide-in-left` | Slide from left | 0.5s |
| `animate-scale-in` | Scale in | 0.5s |
| `animate-glow-pulse` | Pulsing glow | 3s infinite |
| `animate-float` | Floating motion | 6s infinite |
| `animate-shimmer` | Shimmer effect | 2s infinite |

### Framer Motion Integration
```tsx
import { motion } from "framer-motion";

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Animated Content
</motion.div>
```

### Reduced Motion Support
Automatically disabled for users who prefer reduced motion:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## ♿ Accessibility Features

### Skip to Content
Keyboard users can skip navigation:
```tsx
<SkipToContent />
```

### Focus Management
All interactive elements have clear focus indicators:
```css
*:focus-visible {
  outline: 2px solid var(--accent-cyan);
  outline-offset: 3px;
}
```

### Touch Targets
All buttons and interactive elements meet WCAG 2.5.5 (44px minimum):
```css
button {
  min-height: 44px;
  min-width: 44px;
}
```

### Color Contrast
All text maintains AAA/AA contrast ratios:
- Large text: 3:1 minimum (AA)
- Body text: 4.5:1 minimum (AA)
- Important text: 7:1 preferred (AAA)

### ARIA Labels
All interactive elements include proper ARIA attributes:
```tsx
<button aria-label="Close dialog" aria-busy={loading}>
  Close
</button>
```

---

## 🌙 Dark Mode

### Default Behavior
- **Dark mode by default** (Philosophy: African tech innovation)
- Respects `prefers-color-scheme`
- Persists user preference in localStorage

### Theme Switching
```tsx
// Handled automatically by ThemeInit component
<ThemeInit />
```

### Color Variables
```css
/* Dark Mode (Default) */
--background: #0A2463;
--foreground: #DBEAFE;
--surface: #1E40AF;

/* Light Mode (Optional) */
--background: #F9FAFB;
--foreground: #111827;
--surface: #FFFFFF;
```

---

## 📦 Layout Components

### Main Layout Structure
```tsx
<html lang="en" className="dark">
  <body>
    <ThemeInit />
    <SkipToContent />
    <main id="main-content">
      {children}
    </main>
  </body>
</html>
```

### Spacing System
Consistent spacing scale using `clamp()` for fluid spacing.

### Safe Areas
Support for notches and safe areas:
```css
padding-top: env(safe-area-inset-top);
padding-bottom: env(safe-area-inset-bottom);
```

---

## 🎯 Shadows & Elevation

### Shadow Scale
```css
shadow-glass         /* Subtle glass shadow */
shadow-glass-lg      /* Larger glass shadow */
shadow-zippa-glow    /* Brand glow effect */
shadow-cyan-glow     /* Cyan accent glow */
shadow-orange-glow   /* Orange accent glow */
shadow-elevation-1   /* Level 1 depth */
shadow-elevation-2   /* Level 2 depth */
shadow-elevation-3   /* Level 3 depth */
```

### Usage
```tsx
<Card className="shadow-zippa-glow">
  Card with brand glow
</Card>

<Button variant="secondary" className="hover:shadow-cyan-glow">
  Button with cyan glow on hover
</Button>
```

---

## 📱 Responsive Design

### Breakpoints
```
sm: 640px   /* Mobile landscape */
md: 768px   /* Tablet */
lg: 1024px  /* Desktop */
xl: 1280px  /* Large desktop */
2xl: 1536px /* Extra large */
```

### Fluid Typography
All text automatically scales between mobile and desktop using `clamp()`.

### Touch-Friendly
- Minimum 44px touch targets
- Ample padding and spacing
- Clear interactive states

---

## 🚀 Performance

### Optimization Guidelines
1. **Animations**: Hardware-accelerated transforms only
2. **Glassmorphism**: Limited to hero sections and cards
3. **Images**: Next.js Image optimization
4. **Fonts**: Preloaded with `@fontsource`
5. **Motion**: Respects `prefers-reduced-motion`

### Bundle Size
- Tailwind CSS: Tree-shaken in production
- Framer Motion: Code-split by route
- Fonts: Self-hosted, optimized

---

## 📚 Usage Examples

### Hero Section
```tsx
<section className="relative min-h-screen bg-gradient-to-br from-primary-900 via-primary-700 to-primary-500">
  <div className="glass-card">
    <h1 className="font-heading text-5xl font-bold text-white">
      Building Africa's Infrastructure
    </h1>
    <p className="text-lg text-primary-100">
      AI-powered property intelligence
    </p>
    <div className="flex gap-4">
      <Button variant="primary" size="lg">
        Get Started
      </Button>
      <Button variant="glass" size="lg">
        Learn More
      </Button>
    </div>
  </div>
</section>
```

### Feature Card
```tsx
<FeatureCard>
  <h3 className="font-heading text-2xl font-bold mb-4">
    Feature Title
  </h3>
  <p className="text-base text-primary-100">
    Feature description with proper contrast
  </p>
</FeatureCard>
```

### Accessible Form
```tsx
<form>
  <label htmlFor="email" className="text-sm font-medium">
    Email Address
  </label>
  <input
    id="email"
    type="email"
    className="min-h-touch rounded-lg"
    aria-required="true"
  />
  <Button type="submit" fullWidth>
    Submit
  </Button>
</form>
```

---

## 🔧 Customization

### Extending Colors
```ts
// tailwind.config.ts
colors: {
  brand: {
    custom: '#YOUR_COLOR',
  },
}
```

### Adding Animations
```ts
// tailwind.config.ts
animation: {
  'custom': 'customAnimation 1s ease-in-out',
}
keyframes: {
  customAnimation: {
    '0%': { opacity: 0 },
    '100%': { opacity: 1 },
  },
}
```

---

## 📖 Resources

- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Web Accessibility Initiative](https://www.w3.org/WAI/)

---

## 📝 Changelog

### v2.0.0 - Design System Overhaul
- ✅ Dark mode first implementation
- ✅ Complete glassmorphism system
- ✅ AAA accessibility standards
- ✅ Fluid typography scale
- ✅ Enhanced component library
- ✅ Skip to content navigation
- ✅ Reduced motion support
- ✅ Touch target optimization
- ✅ Comprehensive documentation

---

**Built with ❤️ for African innovation and global execution**

