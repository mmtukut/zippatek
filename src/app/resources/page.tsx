"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';

const resources = [
  {
    title: "Blog",
    description: "Insights on African proptech, AI, and property intelligence",
    link: "/blog",
    linkText: "Read Articles",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40">
        <rect x="8" y="8" width="24" height="24" rx="3" fill="#3B82F6"/>
        <rect x="12" y="14" width="16" height="2" rx="1" fill="#DBEAFE"/>
        <rect x="12" y="19" width="12" height="2" rx="1" fill="#DBEAFE"/>
        <rect x="12" y="24" width="14" height="2" rx="1" fill="#DBEAFE"/>
      </svg>
    )
  },
  {
    title: "Case Studies",
    description: "Real results from governments and enterprises using our platforms",
    link: "#",
    linkText: "View Case Studies",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40">
        <rect x="8" y="10" width="24" height="20" rx="2" fill="#1E40AF"/>
        <rect x="12" y="14" width="6" height="10" fill="#06B6D4"/>
        <rect x="20" y="18" width="6" height="6" fill="#F97316"/>
      </svg>
    )
  },
  {
    title: "Press Kit",
    description: "Media assets, company info, and brand guidelines",
    link: "/press",
    linkText: "Download Press Kit",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40">
        <rect x="10" y="12" width="20" height="16" rx="2" fill="#06B6D4"/>
        <circle cx="20" cy="20" r="4" fill="#F97316"/>
        <rect x="16" y="24" width="8" height="2" fill="#1E40AF"/>
      </svg>
    )
  },
  {
    title: "API Documentation",
    description: "Developer resources and API reference for integrations",
    link: "/resources/docs",
    linkText: "View Docs",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40">
        <rect x="10" y="10" width="20" height="20" rx="3" fill="#3B82F6"/>
        <text x="20" y="25" fontSize="14" fill="#DBEAFE" textAnchor="middle" fontFamily="monospace">{`{}`}</text>
      </svg>
    )
  }
];

export default function ResourcesPage() {
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
            Resources & Documentation
          </motion.h1>
          <motion.p 
            initial={{y:20, opacity:0}} 
            animate={{y:0, opacity:1}}
            transition={{delay:0.2}}
            className="text-xl text-primary-100 max-w-3xl mx-auto leading-relaxed"
          >
            Everything you need to understand, integrate, and leverage Zippatek's property intelligence platforms
          </motion.p>
        </div>
      </section>
      
      {/* Resources Grid */}
      <section className="section-light section">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
            {resources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{opacity:0, y:30}}
                whileInView={{opacity:1, y:0}}
                viewport={{once: true}}
                transition={{delay:index * 0.1}}
                className="card-feature flex flex-col"
              >
                <div className="mb-5">
                  {resource.icon}
                </div>
                <h2 className="font-heading text-2xl font-extrabold text-gray-900 mb-3">
                  {resource.title}
                </h2>
                <p className="text-base text-gray-700 leading-relaxed mb-6 flex-grow font-medium">
                  {resource.description}
                </p>
                <Button variant="secondary" size="md" href={resource.link}>
                  {resource.linkText}
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section-neutral section">
        <div className="container-sm text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Need Something Else?
          </h2>
          <p className="text-lg text-gray-700 mb-8 font-medium">
            Can't find what you're looking for? Our team is happy to help
          </p>
          <Button variant="primary" size="lg" href="/contact">
            Contact Us
          </Button>
        </div>
      </section>
      
      <Footer />
    </>
  );
}
