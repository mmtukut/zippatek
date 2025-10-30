"use client";
import React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";

export const ProblemStatementSection = () => (
  <section className="w-full py-24 bg-primary-900 text-white">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 px-4 items-center">
      {/* Left column */}
      <div className="flex-1 flex flex-col gap-4">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-3">The ₦2 Trillion Invisible Problem</h2>
        <p className="text-lg max-w-lg text-primary-100/90">
          60% of Nigeria's property development happens informally. Billions lost in unregistered buildings, untaxed spaces, and fraud-plagued transactions. Traditional surveying can't keep pace. We're changing that with space technology.<br/>
        </p>
        <a href="/about" className="text-accent-cyan text-base font-bold mt-2 underline underline-offset-4 hover:text-white transition">Read the Full Story</a>
      </div>
      {/* Right column: Stats */}
      <div className="flex-1 flex flex-col items-center md:items-end gap-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full mb-4">
          <Card glass className="flex flex-col items-center py-6 px-4">
            <motion.div initial={{opacity:0, y:18}} animate={{opacity:1, y:0}} transition={{delay:0.1}} className="text-3xl font-bold text-accent-cyan">₦2T+</motion.div>
            <div className="font-mono text-xs opacity-80 mt-1">Lost Yearly</div>
          </Card>
          <Card glass className="flex flex-col items-center py-6 px-4">
            <motion.div initial={{opacity:0, y:18}} animate={{opacity:1, y:0}} transition={{delay:0.2}} className="text-3xl font-bold text-accent-cyan">60%</motion.div>
            <div className="font-mono text-xs opacity-80 mt-1">Informal Sector</div>
          </Card>
          <Card glass className="flex flex-col items-center py-6 px-4">
            <motion.div initial={{opacity:0, y:18}} animate={{opacity:1, y:0}} transition={{delay:0.3}} className="text-3xl font-bold text-accent-cyan">10M+</motion.div>
            <div className="font-mono text-xs opacity-80 mt-1">Unmapped Buildings</div>
          </Card>
        </div>
        {/* Side-by-side imagery/sketch placeholder */}
        <svg width="160" height="64" viewBox="0 0 160 64" fill="none" className="mx-auto md:mr-0 mt-2"><rect x="8" y="24" width="40" height="32" rx="5" fill="#3B82F6" opacity=".18"/><rect x="56" y="10" width="32" height="46" rx="4" fill="#06B6D4" opacity=".23"/><rect x="92" y="36" width="18" height="20" rx="3" fill="#fff" opacity=".10"/><rect x="120" y="22" width="28" height="34" rx="4" fill="#F97316" opacity=".13"/></svg>
      </div>
    </div>
  </section>
);
