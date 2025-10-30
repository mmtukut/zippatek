"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';

// Product Icons
function BridgeIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
      <ellipse cx="24" cy="40" rx="18" ry="4" fill="#DBEAFE"/>
      <path d="M8 40c0-12 11-22 16-22s16 10 16 22" stroke="#1E40AF" strokeWidth="3"/>
      <path d="M15 40c0-7 5-12 9-12s9 5 9 12" stroke="#06B6D4" strokeWidth="2.5"/>
      <circle cx="24" cy="28" r="3.5" fill="#F97316" stroke="#fff" strokeWidth="2"/>
    </svg>
  );
}

function SatelliteIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
      <rect x="14" y="24" width="20" height="10" rx="3" fill="#1E40AF"/>
      <circle cx="24" cy="24" r="9" fill="#06B6D4"/>
      <rect x="22" y="8" width="4" height="10" rx="2" fill="#DBEAFE"/>
      <rect x="30" y="16" width="10" height="3" rx="1.5" fill="#F97316"/>
    </svg>
  );
}

export default function ProductsPage() {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="section-primary section-lg relative overflow-hidden">
        <div className="container text-center">
          <motion.h1 
            initial={{y:30, opacity:0}} 
            animate={{y:0, opacity:1}}
            className="font-heading text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Our Products
          </motion.h1>
          <motion.p 
            initial={{y:20, opacity:0}} 
            animate={{y:0, opacity:1}}
            transition={{delay:0.2}}
            className="text-xl text-primary-100 max-w-3xl mx-auto leading-relaxed"
          >
            AI-powered platforms transforming African real estate from consumer discovery to government revenue intelligence
          </motion.p>
        </div>
      </section>
      
      {/* Products Grid */}
      <section className="section-light section">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2 max-w-5xl mx-auto">
            {/* Propabridge */}
            <motion.div
              initial={{opacity:0, y:30}}
              whileInView={{opacity:1, y:0}}
              viewport={{once: true}}
              className="card-feature flex flex-col items-center text-center group"
            >
              <div className="mb-6 transition-transform group-hover:scale-110 duration-300">
                <BridgeIcon />
              </div>
              <h2 className="font-heading text-2xl font-extrabold text-gray-900 mb-4">
                Propabridge
              </h2>
              <p className="text-lg font-bold text-accent-cyan mb-4">
                Find Your Home in Minutes, Not Weeks
              </p>
              <p className="text-base text-gray-700 leading-relaxed mb-6 flex-grow font-medium">
                AI-powered property marketplace connecting buyers and renters with verified landlords and developers across Nigeria. No fraud, no headaches — just fast, secure property discovery.
              </p>
              <div className="flex flex-col gap-3 w-full">
                <Button variant="primary" size="md" href="/products/propabridge" fullWidth>
                  Learn More →
                </Button>
                <Button variant="secondary" size="md" href="/contact" fullWidth>
                  Request Demo
                </Button>
              </div>
            </motion.div>
            
            {/* FastFind360 */}
            <motion.div
              initial={{opacity:0, y:30}}
              whileInView={{opacity:1, y:0}}
              viewport={{once: true}}
              transition={{delay:0.15}}
              className="card-feature flex flex-col items-center text-center group"
            >
              <div className="mb-6 transition-transform group-hover:scale-110 duration-300">
                <SatelliteIcon />
              </div>
              <h2 className="font-heading text-2xl font-extrabold text-gray-900 mb-4">
                FastFind360
              </h2>
              <p className="text-lg font-bold text-accent-cyan mb-4">
                Satellite-Powered Revenue Intelligence
              </p>
              <p className="text-base text-gray-700 leading-relaxed mb-6 flex-grow font-medium">
                Government revenue recovery platform using geospatial AI to map unmapped properties and unlock billions in tax revenue. From space to spreadsheets in weeks.
              </p>
              <div className="flex flex-col gap-3 w-full">
                <Button variant="primary" size="md" href="/products/fastfind360" fullWidth>
                  Learn More →
                </Button>
                <Button variant="secondary" size="md" href="/contact" fullWidth>
                  Schedule Consultation
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section-neutral section">
        <div className="container-sm text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Property Operations?
          </h2>
          <p className="text-lg text-gray-700 mb-8 font-medium">
            Get in touch to see how our products can solve your specific challenges
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="primary" size="lg" href="/contact">
              Book a Demo
            </Button>
            <Button variant="secondary" size="lg" href="/solutions">
              Explore Solutions
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
}
