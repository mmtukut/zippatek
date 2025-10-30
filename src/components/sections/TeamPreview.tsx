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
  <section className="section-light section section-border-top">
    <div className="container">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="section-title">Built by World-Class Talent</h2>
        <p className="section-subtitle">
          A team combining tech expertise with deep industry knowledge and global recognition
        </p>
      </div>
      
      {/* Founders Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto mb-12">
        {founders.map((f, i) => (
          <motion.div 
            key={f.name} 
            initial={{opacity:0, y:40}} 
            whileInView={{opacity:1, y:0}} 
            viewport={{once: true}}
            transition={{delay:0.15*i, duration:0.6}}
            className="card-feature flex flex-col items-center text-center"
          >
            {/* Avatar */}
            <div className="h-28 w-28 bg-gradient-to-br from-primary-500 to-accent-cyan rounded-full mb-5 flex items-center justify-center text-2xl font-bold text-white uppercase shadow-lg">
              {f.name.split(" ")[0][0]}{f.name.split(" ")[1][0]}
            </div>
            
            {/* Name & Title */}
            <h3 className="font-heading font-extrabold text-xl mb-2 text-gray-900">
              {f.name}
            </h3>
            <p className="text-accent-cyan text-sm font-bold mb-4">
              {f.title}
            </p>
            
            {/* Credentials */}
            <ul className="text-xs mb-4 text-gray-700 space-y-1 font-medium">
              {f.creds.map(cred => (
                <li key={cred} className="flex items-center justify-center gap-2">
                  <span className="text-accent-cyan font-bold">•</span>
                  <span>{cred}</span>
                </li>
              ))}
            </ul>
            
            {/* Bio */}
            <p className="text-sm text-gray-700 leading-relaxed mb-5 font-medium">
              {f.bio}
            </p>
            
            {/* LinkedIn Link */}
            <a 
              href={f.linkedIn} 
              className="mt-auto hover:scale-110 transition-transform" 
              aria-label={`View ${f.name}'s LinkedIn`} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <LinkedInIcon />
            </a>
          </motion.div>
        ))}
      </div>
      
          {/* CTA Link */}
          <div className="text-center flex justify-center">
            <a
              href="/team"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-900 hover:gap-3 transition-all font-bold group"
            >
              <span>Meet the Full Team</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
    </div>
  </section>
);
