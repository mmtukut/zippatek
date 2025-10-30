import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export default function ResourcesPage() {
  return (
    <>
      <Header />
      <main className="max-w-5xl mx-auto py-12 px-4">
        <h1 className="font-heading text-3xl font-bold text-primary-900 mb-8">Resources</h1>
        <section className="mb-6">
          <h2 className="font-heading text-xl text-primary-700 mb-1">Blog</h2>
          {/* Blog description or posts list */}
        </section>
        <section className="mb-6">
          <h2 className="font-heading text-xl text-primary-700 mb-1">Case Studies</h2>
          {/* Case studies info or featured case */}
        </section>
        <section className="mb-6">
          <h2 className="font-heading text-xl text-primary-700 mb-1">Press Kit</h2>
          {/* Download media kit, branding, etc. */}
        </section>
        <section>
          <h2 className="font-heading text-xl text-primary-700 mb-1">Documentation</h2>
          {/* API or user docs */}
        </section>
      </main>
      <Footer />
    </>
  );
}
