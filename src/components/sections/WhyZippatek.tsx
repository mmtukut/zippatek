
"use client";
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Globe, Zap, Shield, Users, Target } from 'lucide-react';

const features = [
  {
    icon: Target,
    title: "AI-Native Approach",
    description: "Our solutions are built with artificial intelligence at their core, enabling unparalleled accuracy and efficiency in property detection and data analysis."
  },
  {
    icon: Globe,
    title: "Satellite Precision",
    description: "We leverage high-resolution satellite imagery, providing a macro-view of development that's impossible to achieve with traditional ground surveying."
  },
  {
    icon: Users,
    title: "Built for Africa, by Africans",
    description: "Our platforms are designed to solve the unique challenges of the African property market, considering factors like informal settlements and rapid urbanization."
  },
  {
    icon: Shield,
    title: "Government-Grade Security",
    description: "We provide enterprise-level security and data privacy, ensuring that sensitive government and citizen data is always protected."
  },
  {
    icon: Zap,
    title: "Rapid & Scalable",
    description: "Our technology can map an entire state in weeks, not years, providing officials with the timely data needed for effective policymaking."
  },
  {
    icon: CheckCircle,
    title: "Verifiable Ground Truth",
    description: "We provide the tools to cross-validate our satellite data with on-the-ground information, creating a single, reliable source of truth for property records."
  }
];

export const WhyZippatekSection = () => (
  <section className="bg-neutral-50 dark:bg-neutral-800 py-20 sm:py-24">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold font-heading text-primary-900 dark:text-white">
          The Zippatek Advantage
        </h2>
        <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-300">
          We're not just another proptech company. We are a data infrastructure company building the foundational layer for a more transparent and efficient African property market.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="text-center">
              <div className="inline-flex items-center justify-center p-3 bg-primary-100 dark:bg-primary-900/50 rounded-full mb-4">
                <feature.icon className="w-7 h-7 text-primary-500 dark:text-accent-cyan" />
              </div>
              <h3 className="text-xl font-bold font-heading text-neutral-900 dark:text-white">{feature.title}</h3>
              <p className="mt-2 text-neutral-600 dark:text-neutral-400">
                {feature.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
