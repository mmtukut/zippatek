import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

// Card icons for section 2
function TargetIcon() {return <svg width="32" height="32" viewBox="0 0 32 32"><circle cx="16" cy="16" r="14" fill="#06B6D4"/><circle cx="16" cy="16" r="8" fill="#F97316"/><circle cx="16" cy="16" r="3" fill="#fff"/></svg>;}
function TelescopeIcon() {return <svg width="32" height="32" viewBox="0 0 32 32"><ellipse cx="16" cy="24" rx="10" ry="3" fill="#1E40AF"/><rect x="10" y="6" width="12" height="8" rx="3" fill="#3B82F6"/><rect x="12" y="10" width="8" height="4" rx="2" fill="#06B6D4"/></svg>;}
function BoltIcon() {return <svg width="32" height="32" viewBox="0 0 32 32"><rect x="12" y="6" width="8" height="14" rx="4" fill="#F97316"/><path d="M20 20l-4 6h2v-6h2z" fill="#1E40AF"/></svg>;}
const cards = [
  {icon: <TargetIcon/>, label: 'MISSION', text: 'To deploy AI-native platforms that transform how Africa discovers, verifies, and transacts real estate — eliminating fraud and unlocking billions in economic value.'},
  {icon: <TelescopeIcon/>, label: 'VISION', text: 'A future where every property in Africa is mapped, verified, and accessible — where governments make data-driven decisions and citizens transact with confidence.'},
  {icon: <BoltIcon/>, label: 'VALUES', text: 'Innovation First: We\'re 10 years ahead. Radical Transparency: Zero fees, zero fears. Africa-Centric: Built for our context. Speed & Simplicity: Jobs-to-be-Done thinking.'}
];

const timeline = [
  {t: '2024 Q4', e: 'Research project identifies ₦2T problem'},
  {t: '2025 Q1', e: 'FastFind360 MVP development begins'},
  {t: '2025 Q2', e: 'Zippatek Digital Ltd incorporated'},
  {t: '2025 Q2', e: 'Propabridge prototype launched'},
  {t: '2025 Q3', e: 'NIGCOMSAT Accelerator selection'},
  {t: '2025 Q3', e: 'Pilot partnerships with Urban Shelter, Amsadam'},
  {t: '2025 Q4', e: 'Gov. dialogues with state revenue boards'},
  {t: '2026 Q1', e: '[CURRENT] National expansion roadmap'},
];

export default function AboutPage() {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="section-primary section-lg">
        <div className="container text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
            From Gombe to the Globe
          </h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto leading-relaxed">
            Building Africa's property intelligence infrastructure with AI and satellite data
          </p>
        </div>
      </section>
      
      <main className="section-light section">
        <div className="container max-w-5xl">
        {/* Origin Story */}
        <section className="mb-16">
          <div className="card-feature">
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Zippatek was born from a simple observation: Nigeria's cities are growing faster than anyone can map them. In 2024, Muhammad Tukur — then a computer science student — was working on his final year project using satellite imagery to detect buildings in Gombe State.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              The results were staggering: 2.3 million unmapped structures. ₦500 billion in lost government revenue.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              That's when the insight hit: this wasn't just a research project. This was a ₦2 trillion problem affecting every Nigerian city. Together with industry veteran Aminu S. Muhammad, we founded Zippatek Digital Ltd in May 2025 with a bold mission: leverage cutting-edge technology to make Africa's invisible infrastructure visible.
            </p>
            <a href="/blog/our-story" className="inline-flex items-center gap-2 text-accent-cyan font-semibold hover:gap-3 transition-all group">
              <span>Read Our Full Journey</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </section>
        {/* Mission, Vision, Values */}
        <section className="mb-16">
          <h2 className="section-title mb-12">Mission, Vision, Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {cards.map(c => (
              <div key={c.label} className="card-feature flex flex-col items-center text-center">
                <div className="mb-4">{c.icon}</div>
                <div className="font-heading text-lg font-extrabold text-gray-900 mb-4">{c.label}</div>
                <div className="text-sm text-gray-700 whitespace-pre-line leading-relaxed font-medium">{c.text}</div>
              </div>
            ))}
          </div>
        </section>
        {/* Milestones Timeline */}
        <section>
          <h2 className="section-title mb-12">Our Journey</h2>
          <div className="card-feature">
            <div className="border-l-2 border-accent-cyan pl-8 pb-2">
              {timeline.map(item => (
                <div key={item.t + item.e} className="relative mb-8">
                  <span className="absolute -left-[41px] w-4 h-4 rounded-full bg-accent-cyan border-4 border-white"></span>
                  <span className="font-semibold text-accent-cyan">{item.t}: </span>
                  <span className="text-gray-700">{item.e}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
