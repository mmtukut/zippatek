# Zippatek Digital Ltd Corporate Website

_A modern, high-converting corporate website for Zippatek Digital Ltd — a Nigerian PropTech innovation company built at the intersection of real estate, AI, and satellite technology._

---

## 🚀 Tech Stack

- **Next.js 14+** (App Router, SSR, SSG, API routes)
- **Tailwind CSS 4+** (custom brand tokens, fluid typography)
- **Framer Motion** (modern animation and scroll effects)
- **Lucide React** (premium SVG icons)
- **Custom Brand Fonts:** Inter, Space Grotesk, Outfit, and JetBrains Mono
- **TypeScript** (strict mode)

---

## 📁 Project Structure

```
zippatek-website/
├── public/                 # Logos, icons, open graph assets
├── src/
│   ├── app/                # Pages (App Router)
│   ├── components/         # UI, layout, sections, animation subfolders
│   ├── lib/                # Utilities (e.g., cn function)
│   ├── styles/             # Tailwind config/theme
│   └── types/              # Shared types
├── tailwind.config.ts      # Design token setup
├── package.json
└── README.md
```

---

## 🪄 Design System
- **Brand Palette:** Deep Tech Blue, Royal Blue, Electric Cyan, and Vibrant Orange for African tech warmth, built into Tailwind's `theme.extend.colors`.
- **Typography:** Fluid type scale, with Inter/Outfit for body and Space Grotesk/Clash Display for headlines.
- **UI:** Glassmorphism, modern card layouts, animated data/particle overlays, and geometric symbols for brand recognition (see `/public/logo.svg`).
- **Accessibility:** All text and backgrounds maintain AAA/AA contrast, large click areas, clear skip links and focus handling.

---

## 🛠️ Setup & Development
1. **Install dependencies** (`npm install`)
2. **Run locally:**
   ```
   npm run dev
   ```
3. **Build for production:**
   ```
   npm run build && npm start
   ```
4. **Deploy:** Built for [Vercel](https://vercel.com/) (recommended, zero-config) or any static+Node host.

---

## 🖼️ Brand & Asset Exports
- Primary logo: [`/public/logo.svg`](public/logo.svg) (plus PNGs/favicons)
- [Usage guidance](#) _(update with Notion or Figma if used)_

---

## ♻️ Philosophy & Best Practices
- **African innovation, global execution:** Every UI pattern optimized for both high-growth African startup and investor/enterprise credibility
- **All code strictly linted, documented, and modular** for easy extension
- **Animations opt for performance > decoration, supporting accessibility (reduced motion)**
- **Dark mode** by default, branding switches on color scheme

---

For more, contact the Zippatek engineering team: [hello@zippatek.com](mailto:hello@zippatek.com)
