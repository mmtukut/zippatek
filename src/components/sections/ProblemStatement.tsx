"use client";
import React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";

export const ProblemStatementSection = () => (
  <section className="section-dark section">
    <div className="container">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
        {/* Left column - Problem Statement */}
        <div className="flex-1 flex flex-col gap-6">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
            The ₦2 Trillion Invisible Problem
          </h2>
          <p className="text-lg md:text-xl text-primary-100 leading-relaxed max-w-2xl">
            60% of Nigeria's property development happens informally. Billions lost in unregistered buildings, untaxed spaces, and fraud-plagued transactions.
          </p>
          <p className="text-base md:text-lg text-primary-200 leading-relaxed max-w-2xl">
            Traditional surveying can't keep pace. We're changing that with space technology.
          </p>
          <a 
            href="/about" 
            className="inline-flex items-center gap-2 text-accent-cyan-light text-base font-bold mt-2 hover:gap-3 transition-all group"
          >
            <span>Read the Full Story</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
        
        {/* Right column - Stats */}
        <div className="flex-1 flex flex-col gap-8">
          <div className="grid grid-cols-3 gap-5">
            {[
              { value: "₦2T+", label: "Lost Yearly", delay: 0.1 },
              { value: "60%", label: "Informal Sector", delay: 0.2 },
              { value: "10M+", label: "Unmapped Buildings", delay: 0.3 }
            ].map((stat) => (
                  <motion.div
                    key={stat.label}
                    initial={{opacity:0, y:20, scale: 0.95}}
                    whileInView={{opacity:1, y:0, scale: 1}}
                    viewport={{once: true}}
                    transition={{delay:stat.delay, duration:0.6, ease:[0.22,1,0.36,1]}}
                    whileHover={{y: -6, scale: 1.03}}
                    className="bg-white rounded-3xl flex flex-col items-center justify-center py-8 px-4 text-center 
                      shadow-[0_2px_8px_rgba(0,0,0,0.08),0_8px_32px_rgba(0,0,0,0.12),0_16px_64px_rgba(0,0,0,0.06)]
                      hover:shadow-[0_4px_16px_rgba(0,0,0,0.12),0_12px_48px_rgba(0,0,0,0.16),0_24px_80px_rgba(0,0,0,0.08)]
                      border border-gray-50
                      transition-all duration-500 cursor-pointer
                      relative overflow-hidden group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-gray-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative z-10 w-full">
                      <div className="text-4xl md:text-5xl font-black text-gray-900 mb-3 tracking-tight leading-none">
                        {stat.value}
                      </div>
                      <div className="text-xs md:text-sm text-gray-700 font-bold uppercase tracking-wider">
                        {stat.label}
                      </div>
                    </div>
                  </motion.div>
            ))}
          </div>
          
          {/* Visual illustration */}
          <div className="flex justify-center lg:justify-end mt-4">
            <svg width="200" height="80" viewBox="0 0 200 80" fill="none" className="opacity-40">
              <rect x="10" y="30" width="50" height="40" rx="6" fill="#3B82F6" opacity=".3"/>
              <rect x="70" y="12" width="40" height="58" rx="5" fill="#06B6D4" opacity=".4"/>
              <rect x="115" y="45" width="22" height="25" rx="4" fill="#fff" opacity=".2"/>
              <rect x="150" y="28" width="35" height="42" rx="5" fill="#F97316" opacity=".25"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </section>
);
