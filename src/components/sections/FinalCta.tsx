import React from "react";
import { Button } from "@/components/ui/Button";

export const FinalCtaSection = () => (
  <section className="relative py-24 bg-gradient-to-br from-primary-900 via-primary-700 to-primary-500 flex items-center justify-center overflow-hidden">
    {/* Background grid pattern example */}
    <svg className="absolute inset-0 opacity-10" width="100%" height="100%" viewBox="0 0 600 200" fill="none" preserveAspectRatio="none">
      <defs><pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M40 0V40H0" stroke="#fff" strokeWidth="0.5"/></pattern></defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
    <div className="relative z-10 max-w-xl mx-auto flex flex-col items-center px-4 text-center">
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">Ready to Transform Property Intelligence in Africa?</h2>
      <div className="mb-8 text-primary-100 opacity-85 text-lg font-medium">Join governments, enterprises, and innovators building the future of African real estate.</div>
      <div className="flex flex-wrap gap-6 justify-center">
        <Button variant="primary" size="lg" href="/contact?type=demo">Schedule a Demo</Button>
        <Button variant="secondary" size="lg" href="/products">Explore Products</Button>
        <Button variant="ghost" size="lg" href="/press">Download Press Kit</Button>
      </div>
    </div>
  </section>
);
