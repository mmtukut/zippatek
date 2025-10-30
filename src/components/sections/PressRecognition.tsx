"use client";
import React from "react";
import { motion } from "framer-motion";

const logos = [
  { src: "/vercel.svg", alt: "NIGCOMSAT" },
  { src: "/next.svg", alt: "Google Developers" },
  { src: "/globe.svg", alt: "UN Academic Impact" },
  { src: "/window.svg", alt: "McKinsey & Company" },
  // Add/replace with real logos as available
];

export const PressRecognitionSection = () => (
  <section className="section-neutral section section-border-top">
    <div className="container-sm text-center">
      {/* Section Header */}
      <h2 className="section-title mb-4">As Featured In / Recognized By</h2>
      <p className="text-base text-gray-600 dark:text-gray-300 mb-12">
        Trusted by leading organizations and recognized for innovation
      </p>
      
      {/* Logos Grid */}
      <motion.div 
        initial={{opacity:0, y:30}} 
        whileInView={{opacity:1, y:0}} 
        viewport={{once:true}} 
        transition={{duration:0.6}}
        className="flex flex-wrap gap-8 items-center justify-center mb-10"
      >
        {logos.map((l, index) => (
          <motion.img
            key={l.alt}
            src={l.src}
            alt={l.alt}
            initial={{opacity:0, scale:0.9}}
            whileInView={{opacity:1, scale:1}}
            viewport={{once:true}}
            transition={{delay:index * 0.1, duration:0.4}}
            className="h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300 bg-white dark:bg-primary-800 p-3 rounded-lg border border-gray-200 dark:border-primary-700 cursor-pointer shadow-sm hover:shadow-md hover:scale-105"
            style={{ maxWidth: 120 }}
            loading="lazy"
          />
        ))}
      </motion.div>
      
      {/* Media Kit Link */}
      <div className="text-center">
        <a 
          href="/press" 
          className="inline-flex items-center gap-2 text-primary-700 dark:text-accent-cyan hover:gap-3 transition-all font-medium group"
        >
          <span>Media Kit Available</span>
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </a>
      </div>
    </div>
  </section>
);
