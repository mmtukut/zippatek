import React from "react";
import { Button } from "@/components/ui/Button";

export const FinalCtaSection = () => (
  <section className="section-primary section-lg relative flex items-center justify-center overflow-hidden">
    {/* Background grid pattern */}
    <svg className="absolute inset-0 opacity-10" width="100%" height="100%" viewBox="0 0 600 200" fill="none" preserveAspectRatio="none">
      <defs>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M40 0V40H0" stroke="#fff" strokeWidth="0.5"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
    
    {/* Content */}
    <div className="container-sm relative z-10 text-center">
      <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
        Ready to Transform Property Intelligence in Africa?
      </h2>
      <p className="text-lg md:text-xl text-primary-100 mb-12 max-w-2xl mx-auto leading-relaxed">
        Join governments, enterprises, and innovators building the future of African real estate.
      </p>
      
          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="primary" size="lg" href="/contact?type=demo">
              Schedule a Demo
            </Button>
            <Button variant="outline" size="lg" href="/products">
              Explore Products
            </Button>
          </div>
    </div>
  </section>
);
