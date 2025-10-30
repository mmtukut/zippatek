"use client";
import React from "react";
import { motion } from "framer-motion";

// LinkedIn SVG (Lucide or simplified)
function LinkedInIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" rx="4" fill="#0A2463"/><path d="M8 10v6M8 8v.01M12 10v6m0-6a2 2 0 0 1 4 0v6" stroke="#fff" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg>
  );
}

const founders = [
  {
    name: "Muhammad Muhammad Tukur",
    title: "Co-Founder & CTO",
    creds: ["UN Millennium Fellow", "McKinsey Forward Champion", "GDG Lead", "NIGCOMSAT Accelerator Alum"],
    bio: "Tech visionary with a track record of building AI-native solutions. Led 1,000+ students in digital transformation initiatives across Northeast Nigeria.",
    imageAlt: "Muhammad Tukur headshot",
    linkedIn: "#",
  },
  {
    name: "Aminu S. Muhammad",
    title: "Co-Founder & COO",
    creds: ["Chartered Estate Surveyor & Valuer", "Licensed Marketer", "10+ Years Industry Experience"],
    bio: "Property industry veteran bringing deep market expertise and government relationships. Former founder of Property Market NG.",
    imageAlt: "Aminu S. Muhammad headshot",
    linkedIn: "#",
  },
];

export const TeamPreviewSection = () => (
  <section className="w-full py-24 bg-gray-100 dark:bg-primary-900">
    <div className="max-w-5xl mx-auto px-4 text-center">
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-900 dark:text-white mb-7">Built by World-Class Talent</h2>
      <div className="mb-12 text-gray-800 dark:text-primary-100 opacity-80 max-w-2xl mx-auto">A team combining tech expertise with deep industry knowledge</div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start justify-center">
        {founders.map((f, i) => (
          <motion.div key={f.name} initial={{opacity:0, y:40}} animate={{opacity:1, y:0}} transition={{delay:0.15*i}} className="bg-white dark:bg-primary-700/80 shadow rounded-xl p-7 flex flex-col items-center">
            <div className="h-24 w-24 bg-primary-100 dark:bg-gray-900 rounded-full mb-3 flex items-center justify-center text-xl font-bold text-primary-700 uppercase opacity-80">
              {f.name.split(" ")[0][0]}{f.name.split(" ")[1][0]}
            </div>
            <div className="font-heading font-bold text-lg mb-1 text-primary-900 dark:text-white">{f.name}</div>
            <div className="text-gray-700 dark:text-primary-100 text-sm mb-2 font-medium">{f.title}</div>
            <ul className="text-xs mb-2 text-gray-600/90 dark:text-gray-100/90 list-disc list-inside text-left mx-auto">
              {f.creds.map(cred => <li key={cred}>{cred}</li>)}
            </ul>
            <p className="text-xs text-left mb-2 text-gray-700 dark:text-primary-100 opacity-90">{f.bio}</p>
            <a href={f.linkedIn} className="mt-2 hover:opacity-80" aria-label="View LinkedIn" target="_blank" rel="noopener noreferrer"><LinkedInIcon /></a>
          </motion.div>
        ))}
      </div>
      <div className="mt-12">
        <a href="/team" className="text-primary-700 dark:text-primary-100 hover:text-accent-cyan dark:hover:text-accent-cyan font-medium">Meet the Full Team &rarr;</a>
      </div>
    </div>
  </section>
);
