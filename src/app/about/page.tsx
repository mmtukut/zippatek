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
      <main className="max-w-5xl mx-auto py-12 px-4">
        {/* Origin Story */}
        <section className="mb-14">
          <h1 className="font-heading text-4xl text-primary-900 font-bold mb-2">From Gombe to the Globe</h1>
          <div className="text-lg text-gray-800 dark:text-primary-100 leading-8 max-w-2xl mb-4">
            "Zippatek was born from a simple observation: Nigeria's cities are growing faster than anyone can map them. In 2024, Muhammad Tukur — then a computer science student — was working on his final year project using satellite imagery to detect buildings in Gombe State. The results were staggering: 2.3 million unmapped structures. ₦500 billion in lost government revenue.<br/><br/>That's when the insight hit: this wasn't just a research project. This was a ₦2 trillion problem affecting every Nigerian city. Together with industry veteran Aminu S. Muhammad, we founded Zippatek Digital Ltd in May 2025 with a bold mission: leverage cutting-edge technology to make Africa's invisible infrastructure visible.<br/><br/>Today, we're building the platforms governments and citizens need to navigate Africa's property landscape — fast, secure, and fraud-free."
          </div>
          <a href="/blog/our-story" className="text-accent-cyan font-semibold underline hover:text-primary-700">Read Our Full Journey</a>
        </section>
        {/* Mission, Vision, Values */}
        <section className="mb-14">
          <h2 className="font-heading text-2xl text-primary-700 font-bold mb-6">Mission, Vision, Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {cards.map(c => (
              <div key={c.label} className="bg-primary-100 dark:bg-primary-700/50 rounded-xl p-6 flex flex-col items-center text-center shadow">
                <div className="mb-2">{c.icon}</div>
                <div className="font-heading text-lg font-extrabold text-primary-900 dark:text-white mb-2">{c.label}</div>
                <div className="text-sm text-gray-700 dark:text-primary-100 whitespace-pre-line">{c.text}</div>
              </div>
            ))}
          </div>
        </section>
        {/* Milestones Timeline */}
        <section className="mb-16">
          <h2 className="font-heading text-2xl text-primary-700 font-bold mb-7">Milestones Timeline</h2>
          <div className="border-l-2 border-primary-700 pl-8 pb-2">
            {timeline.map(item => (
              <div key={item.t + item.e} className="relative mb-7">
                <span className="absolute -left-7 w-4 h-4 rounded-full bg-accent-cyan border-4 border-white dark:border-primary-900"></span>
                <span className="font-semibold text-primary-900 dark:text-white">{item.t}: </span>
                <span className="text-gray-800 dark:text-primary-100">{item.e}</span>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
