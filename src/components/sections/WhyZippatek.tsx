import React from "react";

const FEATURES = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32"><circle cx="16" cy="16" r="13" fill="#06B6D4"/><path d="M8 24c.5-6.5 8.5-14.5 10-12C20.5 14.5 28 14 24 24" stroke="#fff" strokeWidth="2"/></svg>
    ),
    title: "AI-Native",
    desc: "Built with artificial intelligence at the core, not bolted on later",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32"><rect x="8" y="12" width="16" height="10" rx="4" fill="#0A2463"/><circle cx="16" cy="16" r="7" stroke="#06B6D4" strokeWidth="2"/><rect x="15" y="8" width="2" height="7" rx="1" fill="#06B6D4"/></svg>
    ),
    title: "Satellite Precision",
    desc: "Leveraging space technology for unprecedented accuracy",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32"><circle cx="16" cy="16" r="14" fill="#F97316" /><path d="M4 20c5-8 19-8 24 0" stroke="#fff" strokeWidth="2"/></svg>
    ),
    title: "African-First",
    desc: "Designed for Africa's unique challenges, not copied from the West",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32"><rect x="9" y="10" width="14" height="12" rx="4" fill="#1E40AF"/><rect x="16" y="16" width="2" height="8" fill="#DBEAFE"/></svg>
    ),
    title: "Government-Ready",
    desc: "Enterprise-grade security and compliance for public sector partners",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32"><rect x="6" y="20" width="20" height="5" rx="2" fill="#06B6D4"/><rect x="11" y="7" width="10" height="11" rx="2" fill="#3B82F6"/></svg>
    ),
    title: "Developer-Friendly",
    desc: "Robust APIs and documentation for seamless integration",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32"><rect x="10" y="8" width="12" height="16" rx="6" fill="#10B981"/><path d="M16 16l6 6" stroke="#fff" strokeWidth="2"/><circle cx="16" cy="16" r="4" fill="#fff"/></svg>
    ),
    title: "Continuous Innovation",
    desc: "Led by UN Millennium Fellow and McKinsey Forward Champion",
  },
];

export const WhyZippatekSection = () => (
  <section className="w-full py-24 bg-white dark:bg-primary-900">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-900 dark:text-white mb-10 text-center">Why Zippatek?</h2>
      <div className="grid gap-8 md:grid-cols-3">
        {FEATURES.map((f, i) => (
          <div
            key={f.title}
            className="rounded-xl bg-primary-100/50 dark:bg-primary-700/50 p-6 flex flex-col items-center text-center shadow group transition-all hover:shadow-lg hover:bg-white/90 dark:hover:bg-primary-700/90 cursor-pointer"
          >
            <div className="mb-4">{f.icon}</div>
            <div className="font-heading font-bold text-lg text-primary-900 dark:text-white mb-1">{f.title}</div>
            <div className="text-sm text-gray-700 dark:text-primary-100 opacity-90">{f.desc}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
