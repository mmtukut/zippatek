"use client";
import React from "react";
import { motion } from "framer-motion";
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
  <section className="section-light section section-border-top relative overflow-hidden">
    {/* Decorative background element */}
    <span className="pointer-events-none absolute -top-32 -left-56 opacity-10 blur-3xl">
      <svg width="400" height="200"><ellipse cx="220" cy="120" rx="140" ry="50" fill="#06B6D4"/></svg>
    </span>
    
    <div className="container">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="section-title">Our Flagship Platforms</h2>
        <p className="section-subtitle">
          Transforming African real estate with AI-powered solutions for consumers, governments, and enterprises
        </p>
      </div>
      
      {/* Product Cards - World-Class Design */}
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
            {cards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{opacity:0, y:40, scale: 0.96}}
                whileInView={{opacity:1, y:0, scale: 1}}
                viewport={{once: true, margin: "-100px"}}
                transition={{delay:index * 0.12, duration:0.7, ease:[0.22,1,0.36,1]}}
                whileHover={{y: -8, scale: 1.02}}
                className="bg-white rounded-3xl p-8 group flex flex-col items-start text-left 
                  shadow-[0_2px_8px_rgba(0,0,0,0.06),0_8px_32px_rgba(0,0,0,0.08),0_16px_64px_rgba(0,0,0,0.04)]
                  hover:shadow-[0_4px_16px_rgba(0,0,0,0.1),0_12px_48px_rgba(0,0,0,0.12),0_24px_80px_rgba(0,0,0,0.06)]
                  border border-gray-50
                  transition-all duration-500 cursor-pointer
                  relative overflow-hidden"
              >
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                  index === 0 ? 'bg-gradient-to-br from-cyan-50/30 via-white to-white' : 
                  index === 1 ? 'bg-gradient-to-br from-blue-50/30 via-white to-white' : 
                  'bg-gradient-to-br from-orange-50/30 via-white to-white'
                }`}></div>
                
                <div className="relative z-10 w-full">
                  {/* Icon Circle - Refined */}
                  <motion.div 
                    className={`w-16 h-16 rounded-2xl mb-6 flex items-center justify-center
                      shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:shadow-xl ${
                      index === 0 ? 'bg-gradient-to-br from-cyan-100 to-cyan-50' : 
                      index === 1 ? 'bg-gradient-to-br from-blue-100 to-blue-50' : 
                      'bg-gradient-to-br from-orange-100 to-orange-50'
                    }`}
                    whileHover={{rotate: 5}}
                  >
                    <div className={`${
                      index === 0 ? 'text-cyan-600' : 
                      index === 1 ? 'text-blue-600' : 
                      'text-orange-600'
                    }`}>
                      {card.icon}
                    </div>
                  </motion.div>

                  {/* Badge - Premium */}
                  <span className={`inline-block text-[10px] font-black px-4 py-2 rounded-full ${card.badgeColor} text-white 
                    tracking-[0.12em] uppercase mb-5 
                    shadow-[0_2px_8px_rgba(0,0,0,0.12)]
                    group-hover:shadow-[0_4px_12px_rgba(0,0,0,0.2)]
                    transition-all duration-300`}>
                    {card.badge}
                  </span>

                  {/* Title */}
                  <h3 className="font-heading font-black text-3xl text-gray-900 mb-3 tracking-tight leading-tight">
                    {card.title}
                  </h3>

                  {/* Tagline */}
                  <p className="text-base font-bold text-gray-700 mb-5 leading-snug">
                    {card.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-gray-600 leading-relaxed mb-8 flex-grow font-medium">
                    {card.desc}
                  </p>

                  {/* CTA Button - Refined */}
                  <motion.a
                    href={card.cta.href}
                    whileHover={{x: 4}}
                    whileTap={{scale: 0.97}}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-accent-orange-100 text-accent-orange 
                      rounded-full font-semibold text-sm
                      shadow-[0_2px_8px_rgba(249,115,22,0.15)]
                      hover:shadow-[0_4px_16px_rgba(249,115,22,0.25)]
                      hover:bg-accent-orange-50
                      transition-all duration-300
                      group/btn"
                  >
                    <span>{card.cta.label}</span>
                    <span className="group-hover/btn:translate-x-1 transition-transform duration-300">→</span>
                  </motion.a>
                </div>
              </motion.div>
            ))}
      </div>
    </div>
  </section>
);
