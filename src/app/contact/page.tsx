"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';

export default function ContactPage() {
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
            Get in Touch
          </motion.h1>
          <motion.p 
            initial={{y:20, opacity:0}} 
            animate={{y:0, opacity:1}}
            transition={{delay:0.2}}
            className="text-xl text-primary-100 max-w-2xl mx-auto leading-relaxed"
          >
            Ready to transform property intelligence in Africa? Let's discuss how Zippatek can solve your specific challenges
          </motion.p>
        </div>
      </section>
      
      {/* Contact Info & Form */}
      <section className="section-light section">
        <div className="container max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{opacity:0, x:-30}}
              whileInView={{opacity:1, x:0}}
              viewport={{once: true}}
              className="card-feature"
            >
              <h2 className="font-heading text-2xl font-extrabold text-gray-900 mb-6">
                Contact Information
              </h2>
              
              <div className="space-y-6">
                {/* Company */}
                <div>
                  <div className="text-sm text-gray-600 font-semibold mb-1">Company</div>
                  <div className="text-lg font-bold text-gray-900">
                    Zippatek Digital Ltd
                  </div>
                  <div className="text-sm text-gray-700 font-medium">
                    RC: 8527315
                  </div>
                </div>
                
                {/* Email */}
                <div>
                  <div className="text-sm text-gray-600 font-semibold mb-1">Email</div>
                  <a 
                    href="mailto:hello@zippatek.com" 
                    className="text-lg font-bold text-accent-cyan hover:text-accent-cyan-dark transition-colors"
                  >
                    hello@zippatek.com
                  </a>
                </div>
                
                {/* Phone */}
                <div>
                  <div className="text-sm text-gray-600 font-semibold mb-1">Phone</div>
                  <a 
                    href="tel:+2348055269579" 
                    className="text-lg font-bold text-accent-cyan hover:text-accent-cyan-dark transition-colors"
                  >
                    +234 805 526 9579
                  </a>
                </div>
                
                {/* Address */}
                <div>
                  <div className="text-sm text-gray-600 font-semibold mb-1">Office</div>
                  <div className="text-base text-gray-900 leading-relaxed font-medium">
                    No.1 T.O.S Benson Street<br/>
                    Utako, Abuja<br/>
                    Nigeria
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Quick Actions */}
            <motion.div
              initial={{opacity:0, x:30}}
              whileInView={{opacity:1, x:0}}
              viewport={{once: true}}
              className="card-feature flex flex-col"
            >
              <h2 className="font-heading text-2xl font-extrabold text-gray-900 mb-6">
                How Can We Help?
              </h2>
              
              <div className="space-y-4 flex-grow">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="font-bold text-gray-900 mb-2">
                    Schedule a Demo
                  </div>
                  <p className="text-sm text-gray-700 mb-3 font-medium">
                    See our products in action with a personalized demonstration
                  </p>
                  <Button variant="primary" size="md" fullWidth href="mailto:hello@zippatek.com?subject=Demo Request">
                    Book Demo
                  </Button>
                </div>
                
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="font-bold text-gray-900 mb-2">
                    Government Inquiry
                  </div>
                  <p className="text-sm text-gray-700 mb-3 font-medium">
                    Learn how FastFind360 can recover lost revenue
                  </p>
                  <Button variant="primary" size="md" fullWidth href="mailto:hello@zippatek.com?subject=Government Partnership">
                    Get Started
                  </Button>
                </div>
                
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="font-bold text-gray-900 mb-2">
                    General Inquiry
                  </div>
                  <p className="text-sm text-gray-700 mb-3 font-medium">
                    Have questions? We're here to help
                  </p>
                  <Button variant="secondary" size="md" fullWidth href="mailto:hello@zippatek.com">
                    Send Email
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section-neutral section-sm">
        <div className="container-sm text-center">
          <h3 className="font-heading text-2xl font-bold text-gray-900 mb-4">
            Prefer to Connect on LinkedIn?
          </h3>
          <p className="text-base text-gray-700 mb-6 font-medium">
            Follow us for updates on African proptech innovation
          </p>
          <Button variant="secondary" size="md" href="https://linkedin.com/company/zippatek">
            Visit LinkedIn →
          </Button>
        </div>
      </section>
      
      <Footer />
    </>
  );
}
