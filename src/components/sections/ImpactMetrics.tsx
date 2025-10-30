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
  <section className="w-full py-24 bg-primary-900 text-white border-t border-primary-700">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-10 text-center">Our Impact So Far</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
        {metrics.map((m, i) => (
          <motion.div key={m.label} initial={{opacity:0, y:28}} animate={{opacity:1, y:0}} transition={{delay:0.2+i*0.09}} className="rounded-xl p-6 bg-primary-700/70 flex flex-col items-center text-center shadow-lg">
            <motion.div className="text-3xl font-bold text-accent-cyan mb-1" initial={{scale:0.85}} animate={{scale:1}} transition={{type:'spring', duration:0.7, delay:0.36+i*0.09}}>
              {formatMetric(m.amount, m.label)}
            </motion.div>
            <div className="font-heading font-semibold text-base my-1">{m.label}</div>
            <div className="text-xs text-primary-100 opacity-90">{m.desc}</div>
          </motion.div>
        ))}
      </div>
      {/* Nigeria map illustration placeholder */}
      <div className="flex justify-center mt-12 opacity-50">
        <svg width="180" height="75" viewBox="0 0 180 75" fill="none"><ellipse cx="90" cy="42" rx="82" ry="28" fill="#06B6D4" fillOpacity=".18"/><rect x="55" y="32" width="70" height="20" rx="8" fill="#3B82F6" fillOpacity=".18"/></svg>
      </div>
    </div>
  </section>
);
