import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export default function TeamPage() {
  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto py-12 px-4">
        <h1 className="font-heading text-3xl font-bold text-primary-900 mb-8">Meet the Team</h1>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
          <div className="p-6 rounded-xl border border-primary-100">
            {/* Replace src with founder photo when available */}
            <div className="h-24 w-24 bg-gray-200 rounded-full mb-3 mx-auto" />
            <div className="font-heading font-bold text-lg mb-1">Muhammad Muhammad Tukur</div>
            <div className="text-gray-600 text-sm mb-2">Co-Founder & CTO</div>
            <ul className="text-sm mb-2 text-gray-700 list-disc list-inside">
              <li>UN Millennium Fellow</li><li>McKinsey Forward Champion</li><li>GDG Lead</li><li>NIGCOMSAT Accelerator Alum</li>
            </ul>
            <p className="text-xs mb-2">Tech visionary... (short bio placeholder)</p>
            <a href="#" className="text-accent-cyan text-sm">LinkedIn</a>
          </div>
          <div className="p-6 rounded-xl border border-primary-100">
            <div className="h-24 w-24 bg-gray-200 rounded-full mb-3 mx-auto" />
            <div className="font-heading font-bold text-lg mb-1">Aminu S. Muhammad</div>
            <div className="text-gray-600 text-sm mb-2">Co-Founder & COO</div>
            <ul className="text-sm mb-2 text-gray-700 list-disc list-inside">
              <li>Chartered Estate Surveyor & Valuer</li><li>Licensed Marketer</li><li>10+ Years Experience</li>
            </ul>
            <p className="text-xs mb-2">Industry veteran... (short bio placeholder)</p>
            <a href="#" className="text-accent-cyan text-sm">LinkedIn</a>
          </div>
        </section>
        <div className="mt-12">
          <a href="#" className="font-medium text-primary-700 hover:text-accent-cyan">See the full team →</a>
        </div>
      </main>
      <Footer />
    </>
  );
}
