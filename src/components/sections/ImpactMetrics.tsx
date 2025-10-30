"use client";
import React from "react";
import { motion } from "framer-motion";

const metrics = [
  { amount: 2300000, label: "Properties Mapped", desc: "Across 6 Nigerian states and counting" },
  { amount: 500000000000, label: "₦ Revenue Potential Identified", desc: "Hidden tax base made visible" },
  { amount: 94, label: "% Detection Accuracy", desc: "Satellite AI outperforms manual surveys" },
  { amount: 6, label: "Government Partnerships", desc: "Pilot programs with state revenue boards" },
];

function formatMetric(num: number, label: string) {
  if (label === '% Detection Accuracy') return `${num}%`;
  if (label.startsWith('₦')) return `₦${(num/1e9).toLocaleString(undefined,{maximumFractionDigits:1})}B+`;
  if (num >= 1000000) return `${(num/1e6).toLocaleString(undefined,{maximumFractionDigits:1})}M+`;
  return num.toLocaleString();
}

export const ImpactMetricsSection = () => (
  <section className="section-dark section section-border-top">
    <div className="container">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="section-title text-white">Our Impact So Far</h2>
        <p className="section-subtitle text-primary-100">
          Real numbers, real impact across Nigeria's property landscape
        </p>
      </div>
      
          {/* Metrics Grid - World-Class Design */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {metrics.map((m, i) => (
              <motion.div
                key={m.label}
                initial={{opacity:0, y:40, scale: 0.94}}
                whileInView={{opacity:1, y:0, scale: 1}}
                viewport={{once: true, margin: "-50px"}}
                transition={{delay:0.1+i*0.1, duration:0.7, ease:[0.22,1,0.36,1]}}
                whileHover={{y: -6, scale: 1.03}}
                className="bg-white rounded-3xl p-8 flex flex-col items-center text-center 
                  shadow-[0_2px_8px_rgba(0,0,0,0.08),0_8px_32px_rgba(0,0,0,0.12),0_16px_64px_rgba(0,0,0,0.06)]
                  hover:shadow-[0_4px_16px_rgba(0,0,0,0.12),0_12px_48px_rgba(0,0,0,0.16),0_24px_80px_rgba(0,0,0,0.08)]
                  border border-gray-50
                  transition-all duration-500 cursor-pointer
                  relative overflow-hidden group"
              >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-gray-50/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10 w-full">
                  {/* Number */}
                  <motion.div
                    className="text-5xl md:text-6xl font-black text-gray-900 mb-4 tracking-tight leading-none"
                    initial={{scale:0.9, opacity:0}}
                    whileInView={{scale:1, opacity:1}}
                    viewport={{once: true}}
                    transition={{type:'spring', duration:0.8, delay:0.2+i*0.1, bounce:0.3}}
                  >
                    {formatMetric(m.amount, m.label)}
                  </motion.div>
                  
                  {/* Label */}
                  <div className="font-heading font-bold text-base md:text-lg text-gray-900 mb-3">
                    {m.label}
                  </div>
                  
                  {/* Description */}
                  <div className="text-sm text-gray-600 leading-relaxed font-medium">
                    {m.desc}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
      
      {/* Nigeria map illustration */}
      <div className="flex justify-center mt-12 opacity-30">
        <svg width="220" height="90" viewBox="0 0 220 90" fill="none">
          <ellipse cx="110" cy="50" rx="100" ry="35" fill="#06B6D4" fillOpacity=".25"/>
          <rect x="65" y="38" width="90" height="25" rx="10" fill="#3B82F6" fillOpacity=".2"/>
        </svg>
      </div>
    </div>
  </section>
);
