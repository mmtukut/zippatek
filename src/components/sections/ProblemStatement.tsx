
"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight, TrendingUp, Home, AlertTriangle } from 'lucide-react';

const problemStats = [
  {
    icon: AlertTriangle,
    value: "₦2 Trillion",
    label: "Annual Revenue Loss",
    description: "Lost in untaxed or unregistered properties across Nigeria.",
  },
  {
    icon: Home,
    value: "60%",
    label: "Informal Development",
    description: "The majority of new properties are built outside of official view.",
  },
  {
    icon: TrendingUp,
    value: "10M+",
    label: "Unmapped Buildings",
    description: "Millions of structures remain invisible to revenue agencies.",
  },
];

export const ProblemStatementSection = () => (
  <section className="bg-neutral-50 dark:bg-neutral-800 py-20 sm:py-24">
    <div className="container mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left column - Text Content */}
        <div className="max-w-xl">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-primary-900 dark:text-white">
              The High Cost of Invisibility
            </h2>
            <p className="mt-6 text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
              Nigeria's property market operates with a fundamental flaw: a lack of visibility. This creates a cascade of economic challenges, from massive revenue losses for governments to high risks for citizens and investors.
            </p>
            <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
              Traditional, manual surveying methods are too slow and expensive to keep up with rapid urbanization. Zippatek provides the 21st-century solution.
            </p>
            <Button as={Link} href="/about" variant="secondary" size="lg" className="mt-8">
              Learn More About Our Mission
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>
        </div>
        
        {/* Right column - Stats Cards */}
        <div className="grid grid-cols-1 gap-8">
          {problemStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
            >
              <div className="flex items-start p-6 bg-white dark:bg-neutral-700/50 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex-shrink-0">
                  <div className="p-3 bg-primary-100 dark:bg-primary-900/50 rounded-lg">
                    <stat.icon className="w-6 h-6 text-primary-500 dark:text-accent-cyan" />
                  </div>
                </div>
                <div className="ml-5">
                  <p className="text-2xl font-bold font-heading text-neutral-900 dark:text-white">{stat.value}</p>
                  <p className="mt-1 text-sm font-semibold text-neutral-700 dark:text-neutral-200">{stat.label}</p>
                   <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">{stat.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
