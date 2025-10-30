import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="max-w-3xl mx-auto py-12 px-4">
        <h1 className="font-heading text-3xl font-bold text-primary-900 mb-8">Zippatek Blog</h1>
        {/* List or grid of blog articles here */}
        <div className="bg-primary-100 p-4 rounded mb-5 text-primary-900 opacity-70">No articles yet.</div>
      </main>
      <Footer />
    </>
  );
}
