import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="max-w-2xl mx-auto py-12 px-4">
        <h1 className="font-heading text-3xl font-bold text-primary-900 mb-8">Contact Us</h1>
        <section className="mb-10">
          <div className="mb-4">Zippatek Digital Ltd</div>
          <div className="mb-1">No.1 T.O.S Benson Street, Utako, Abuja</div>
          <div className="mb-1">Email: <a href="mailto:hello@zippatek.com" className="text-accent-cyan font-medium">hello@zippatek.com</a></div>
          <div className="mb-1">Phone: <a href="tel:+2348055269579" className="text-accent-cyan font-medium">+234 805 526 9579</a></div>
        </section>
        {/* Contact form to be implemented */}
      </main>
      <Footer />
    </>
  );
}
