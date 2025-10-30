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
  <section className="w-full py-20 bg-white dark:bg-primary-900 border-t border-primary-100/60 dark:border-primary-700/30">
    <div className="max-w-5xl mx-auto px-4 text-center">
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-900 dark:text-white mb-7">As Featured In / Recognized By</h2>
      <motion.div initial={{opacity:0, y:24}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.7, delay:0.13}} className="flex flex-wrap gap-6 items-center justify-center mt-10">
        {logos.map(l => (
          <img
            src={l.src}
            alt={l.alt}
            key={l.alt}
            className="h-10 w-auto grayscale hover:grayscale-0 transition duration-200 bg-white p-2 rounded border border-gray-100 dark:border-primary-700 cursor-pointer shadow"
            style={{ maxWidth: 100 }}
            loading="lazy"
          />
        ))}
      </motion.div>
      <div className="mt-8 text-sm opacity-80">
        <a href="/press" className="text-accent-cyan hover:underline">Media Kit Available →</a>
      </div>
    </div>
  </section>
);
