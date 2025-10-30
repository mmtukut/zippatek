import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export default function ProductsPage() {
  return (
    <>
      <Header />
      <main className="max-w-5xl mx-auto py-12 px-4">
        <h1 className="font-heading text-3xl font-bold text-primary-900 mb-8">Our Products</h1>
        <div className="grid gap-8 sm:grid-cols-2">
          {/* Cards linking to /products/propabridge and /products/fastfind360 */}
          <a href="/products/propabridge" className="block p-6 rounded-xl shadow hover:shadow-lg border border-primary-100">
            <div className="font-heading text-xl font-bold text-primary-700 mb-1">Propabridge</div>
            <div className="text-gray-600 mb-2">AI-powered property marketplace for Nigeria</div>
            <div className="font-medium text-accent-cyan">Learn More →</div>
          </a>
          <a href="/products/fastfind360" className="block p-6 rounded-xl shadow hover:shadow-lg border border-primary-100">
            <div className="font-heading text-xl font-bold text-primary-700 mb-1">FastFind360</div>
            <div className="text-gray-600 mb-2">Satellite-powered property revenue intelligence for governments</div>
            <div className="font-medium text-accent-cyan">Learn More →</div>
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}
