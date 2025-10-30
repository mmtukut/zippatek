import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export default function PressPage() {
  return (
    <>
      <Header />
      <main className="max-w-3xl mx-auto py-12 px-4">
        <h1 className="font-heading text-3xl font-bold text-primary-900 mb-8">Press & Recognition</h1>
        <section className="mb-10">
          <h2 className="font-heading text-xl text-primary-700 mb-2">Media Kit</h2>
          <a href="#" className="inline-block px-4 py-2 bg-primary-700 text-white rounded hover:bg-primary-500 transition">Download Media Kit</a>
        </section>
        <section>
          <h2 className="font-heading text-xl text-primary-700 mb-2">As Featured In / Recognized By</h2>
          {/* Logo strip or featured articles, update when ready */}
          <div className="flex gap-6 mt-2 opacity-70">
            <div className="h-10 w-20 bg-gray-200 rounded" />
            <div className="h-10 w-20 bg-gray-200 rounded" />
            <div className="h-10 w-20 bg-gray-200 rounded" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
