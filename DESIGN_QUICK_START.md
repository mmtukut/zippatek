# 🚀 Design System Quick Start

## 🎨 Quick Color Reference

```tsx
// Backgrounds
bg-primary-900    // Deep Tech Blue (darkest)
bg-primary-700    // Royal Blue
bg-primary-500    // Electric Blue
bg-primary-100    // Light Blue (lightest)

// Accents
bg-accent-cyan    // Electric Cyan (#06B6D4)
bg-accent-orange  // Vibrant Orange (#F97316)

// Text
text-primary-100  // Light text on dark backgrounds
text-primary-900  // Dark text on light backgrounds
```

## 🔘 Buttons

```tsx
// Primary action
<Button variant="primary">Get Started</Button>

// Secondary action
<Button variant="secondary">Learn More</Button>

// Accent/CTA
<Button variant="accent">Book Demo</Button>

// Glass effect
<Button variant="glass">Explore</Button>

// With loading state
<Button loading>Processing...</Button>

// With icons
<Button icon={<Icon />}>With Icon</Button>
```

## 🎴 Cards

```tsx
// Basic card
<Card>Content</Card>

// Glass effect
<Card glass>Glass Content</Card>

// Glass with hover
<GlassCard>Interactive Glass</GlassCard>

// Feature card (elevation + hover)
<FeatureCard>Feature Content</FeatureCard>
```

## ✨ Animations

```tsx
// Tailwind utilities
className="animate-fade-in"
className="animate-fade-in-up"
className="animate-scale-in"

// Framer Motion
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
>
  Content
</motion.div>
```

## 🪟 Glassmorphism

```tsx
// CSS utility
<div className="glass">Glass Panel</div>

// Card component
<Card glass>Glass Card</Card>

// Pre-configured
<div className="glass-card">Glass Card</div>
```

## 📝 Typography

```tsx
// Headings (use font-heading)
<h1 className="font-heading text-5xl font-bold">
  Hero Headline
</h1>

// Body (font-sans is default)
<p className="text-base">Body text</p>

// Code
<code className="font-mono">const x = 1;</code>
```

## 🌙 Dark Mode

Dark mode is enabled by default! The system:
- ✅ Defaults to dark mode
- ✅ Respects user's system preference
- ✅ Persists user choice

Colors automatically adapt:
```tsx
className="bg-white dark:bg-primary-800"
className="text-gray-900 dark:text-primary-100"
```

## ♿ Accessibility Checklist

- ✅ All buttons meet 44px minimum touch target
- ✅ Use semantic HTML (`<button>`, `<nav>`, etc.)
- ✅ Add ARIA labels: `aria-label="Description"`
- ✅ Keyboard navigation: Test with Tab key
- ✅ Color contrast: Use provided color palette
- ✅ Loading states: `aria-busy={true}`
- ✅ Focus indicators: Built-in cyan outline

## 📐 Layout Patterns

### Hero Section
```tsx
<section className="min-h-screen bg-gradient-to-br from-primary-900 via-primary-700 to-primary-500">
  <div className="glass-card">
    <h1 className="font-heading text-5xl font-bold">Title</h1>
    <p className="text-lg">Description</p>
    <Button variant="primary">CTA</Button>
  </div>
</section>
```

### Content Section
```tsx
<section className="py-24 bg-primary-900">
  <div className="max-w-6xl mx-auto px-4">
    <h2 className="font-heading text-4xl font-bold mb-10">Section Title</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <FeatureCard>Feature 1</FeatureCard>
      <FeatureCard>Feature 2</FeatureCard>
      <FeatureCard>Feature 3</FeatureCard>
    </div>
  </div>
</section>
```

## 🎯 Common Patterns

### Gradient Background
```tsx
className="bg-gradient-to-br from-primary-900 via-primary-700 to-primary-500"
```

### Glow Effect
```tsx
className="shadow-zippa-glow hover:shadow-cyan-glow"
```

### Hover Animation
```tsx
className="transition-all hover:scale-105 hover:shadow-lg"
```

### Glass Panel
```tsx
<div className="glass rounded-xl p-6">
  Content with glass effect
</div>
```

## 🔍 Need More Details?

See [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md) for comprehensive documentation.

