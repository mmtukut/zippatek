import React from "react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

// Unique geometric icons for cards
function BridgeIcon() {
  return (
    <svg width="38" height="38" viewBox="0 0 38 38" fill="none"><ellipse cx="19" cy="32" rx="13" ry="3" fill="#DBEAFE"/><path d="M6 32c0-9 8-17 13-17s13 8 13 17" stroke="#1E40AF" strokeWidth="2"/><path d="M12 32c0-5 4-9 7-9s7 4 7 9" stroke="#06B6D4" strokeWidth="2"/><circle cx="19" cy="23" r="2.5" fill="#F97316" stroke="#fff" strokeWidth="1.4"/></svg>
  );
}
function SatelliteIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none"><rect x="10" y="18" width="16" height="8" rx="2" fill="#1E40AF"/><circle cx="18" cy="18" r="7" fill="#06B6D4"/><rect x="16" y="6" width="4" height="8" rx="2" fill="#DBEAFE"/><rect x="22" y="12" width="8" height="2" rx="1" fill="#F97316"/></svg>
  );
}
function RocketIcon() {
  return (
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none"><path d="M16 29c0-5 2-14 12-20-9.91.83-13.32 10.14-13.68 14.63C9.39 20.98 4.8 18.47 2 15c5.91.19 8.71 2.97 10.31 5.06C14.16 16.4 20.08 5.43 29.48 5.11c-5.04 5.15-7.45 11.49-8.02 14.65C23.05 20.08 28.8 17.9 32 15c-3.97 6.07-8.77 10.58-13.62 13.8C17.31 29.62 16.61 29.4 16 29Z" fill="#06B6D4"/></svg>
  );
}

const cards = [
  {
    icon: <BridgeIcon />,
    title: "Propabridge",
    tagline: "Find Your Home in Minutes, Not Weeks",
    desc: "AI-powered property marketplace connecting buyers and renters with verified landlords and developers across Nigeria.",
    cta: { label: "Explore Propabridge", href: "/products/propabridge" },
    badge: "Consumer Platform",
    badgeColor: "bg-accent-cyan/90",
  },
  {
    icon: <SatelliteIcon />,
    title: "FastFind360",
    tagline: "Satellite-Powered Revenue Intelligence",
    desc: "Government revenue recovery platform using geospatial AI to map unmapped properties and unlock billions in tax revenue.",
    cta: { label: "See How It Works", href: "/products/fastfind360" },
    badge: "Enterprise Solution",
    badgeColor: "bg-primary-700/80",
  },
  {
    icon: <RocketIcon />,
    title: "What's Next",
    tagline: "Innovation Never Sleeps",
    desc: "We're building the next generation of proptech solutions for Africa. From climate-resilient construction to decentralized land registries.",
    cta: { label: "Join Our Journey", href: "/about" },
    badge: "R&D Pipeline",
    badgeColor: "bg-accent-orange/70",
  },
];

export const ProductShowcaseSection = () => (
  <section className="relative w-full py-24 bg-gray-100 dark:bg-primary-900 border-t border-primary-100/60 dark:border-primary-700/30 overflow-x-hidden">
    <span className="pointer-events-none absolute -top-32 -left-56 opacity-20 blur-3xl">
      <svg width="350" height="170"><ellipse cx="200" cy="100" rx="120" ry="40" fill="#06B6D4"/></svg>
    </span>
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-900 dark:text-white mb-6 text-center">Our Flagship Platforms</h2>
      <div className="grid gap-8 md:grid-cols-3 mt-12">
        {cards.map(card => (
          <Card
            key={card.title}
            glass
            className="group transition-all shadow-zippa-glow border border-transparent hover:border-primary-500 hover:shadow-lg backdrop-blur-xl bg-white/70 dark:bg-primary-700/70 relative"
          >
            <div className="flex flex-col items-center gap-3">
              <div className="mb-2">{card.icon}</div>
              <div className="font-heading font-bold text-lg text-primary-900 dark:text-white">{card.title}</div>
              <div className={`text-xs font-semibold px-2 py-1 rounded mt-1 ${card.badgeColor} text-white tracking-wide capitalize`}>{card.badge}</div>
              <div className="text-sm text-gray-700 dark:text-primary-100 opacity-80 mt-2 text-center">{card.tagline}</div>
              <div className="mt-2 mb-4 text-xs text-gray-600 dark:text-primary-100 text-center min-h-[48px]">{card.desc}</div>
              <Button variant="primary" size="sm" href={card.cta.href} className="mt-auto group-hover:scale-105">{card.cta.label}</Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  </section>
);
