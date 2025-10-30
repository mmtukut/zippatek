"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';

const solutions = [
  {
    category: "For Governments",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40">
        <rect x="8" y="16" width="24" height="16" rx="2" fill="#1E40AF"/>
        <rect x="14" y="8" width="12" height="10" rx="2" fill="#06B6D4"/>
        <rect x="12" y="28" width="4" height="4" fill="#DBEAFE"/>
        <rect x="24" y="28" width="4" height="4" fill="#DBEAFE"/>
      </svg>
    ),
    title: "Revenue Recovery & Property Tax Intelligence",
    description: "Leverage satellite AI to discover unmapped properties, expand your tax base, and recover billions in lost revenue. FastFind360 identifies every building, calculates valuations, and integrates with your existing revenue systems.",
    features: ["Automated property discovery", "AI-powered valuations", "Revenue forecasting", "Compliance monitoring"],
    cta: "Schedule Government Demo"
  },
  {
    category: "For Enterprises",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40">
        <rect x="10" y="10" width="20" height="20" rx="3" fill="#3B82F6"/>
        <rect x="14" y="14" width="12" height="12" rx="2" fill="#06B6D4"/>
        <circle cx="20" cy="20" r="4" fill="#F97316"/>
      </svg>
    ),
    title: "Market Intelligence & Development Planning",
    description: "Make data-driven decisions with comprehensive property market analytics. Access verified listings, demographic insights, and development opportunities across Nigeria's fastest-growing markets.",
    features: ["Market analytics", "Site selection", "Competitor analysis", "ROI modeling"],
    cta: "Request Enterprise Access"
  },
  {
    category: "For Consumers",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40">
        <ellipse cx="20" cy="32" rx="14" ry="3" fill="#DBEAFE"/>
        <path d="M10 32c0-8 6-14 10-14s10 6 10 14" stroke="#1E40AF" strokeWidth="2.5"/>
        <circle cx="20" cy="22" r="3" fill="#F97316" stroke="#fff" strokeWidth="2"/>
      </svg>
    ),
    title: "Fast, Fraud-Free Property Discovery",
    description: "Find your dream home or investment property in minutes with verified listings, instant comparisons, and direct landlord connections. No agents, no scams, no stress.",
    features: ["Verified listings", "Price comparisons", "Virtual tours", "Instant booking"],
    cta: "Start Searching"
  }
];

export default function SolutionsPage() {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="section-primary section-lg">
        <div className="container text-center">
          <motion.h1 
            initial={{y:30, opacity:0}} 
            animate={{y:0, opacity:1}}
            className="font-heading text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Solutions Built for Africa
          </motion.h1>
          <motion.p 
            initial={{y:20, opacity:0}} 
            animate={{y:0, opacity:1}}
            transition={{delay:0.2}}
            className="text-xl text-primary-100 max-w-3xl mx-auto leading-relaxed"
          >
            Whether you're a government recovering revenue, an enterprise planning development, or a consumer finding a home — we have the right solution
          </motion.p>
        </div>
      </section>
      
      {/* Solutions Grid */}
      <section className="section-light section">
        <div className="container">
          <div className="flex flex-col gap-16">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.category}
                initial={{opacity:0, y:30}}
                whileInView={{opacity:1, y:0}}
                viewport={{once: true}}
                transition={{delay:index * 0.15}}
                className="card-feature flex flex-col md:flex-row gap-8 items-center"
              >
                {/* Icon */}
                <div className="flex-shrink-0">
                  {solution.icon}
                </div>
                
                {/* Content */}
                <div className="flex-grow">
                  <div className="text-sm uppercase tracking-wider text-accent-cyan font-semibold mb-2">
                    {solution.category}
                  </div>
                  <h2 className="font-heading text-2xl font-extrabold text-gray-900 mb-4">
                    {solution.title}
                  </h2>
                  <p className="text-base text-gray-700 leading-relaxed mb-6 font-medium">
                    {solution.description}
                  </p>
                  
                  {/* Features */}
                  <ul className="grid grid-cols-2 gap-3 mb-6">
                    {solution.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-gray-800 font-medium">
                        <span className="text-accent-cyan font-bold">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button variant="primary" size="md" href="/contact">
                    {solution.cta}
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section-dark section">
        <div className="container-sm text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
            Can't Find Your Use Case?
          </h2>
          <p className="text-lg text-primary-100 mb-8">
            We build custom solutions for unique property intelligence challenges
          </p>
          <Button variant="accent" size="lg" href="/contact">
            Discuss Custom Solutions
          </Button>
        </div>
      </section>
      
      <Footer />
    </>
  );
}
