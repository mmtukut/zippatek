import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export default function CareersPage() {
  return (
    <>
      <Header />
      <main className="max-w-2xl mx-auto py-12 px-4">
        <h1 className="font-heading text-3xl font-bold text-primary-900 mb-8">Careers at Zippatek</h1>
        <section className="mb-12">
          <p className="mb-2">We're always on the lookout for talented, driven people to join us in building Africa's proptech future.</p>
          {/* Open roles will go here */}
        </section>
        <section>
          <h2 className="font-heading text-xl text-primary-700 mb-2">Our Culture & Values</h2>
          {/* Quick value list or grid here */}
        </section>
      </main>
      <Footer />
    </>
  );
}
