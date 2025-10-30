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
  <section className="section-neutral section section-border-top">
    <div className="container">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="section-title">Why Zippatek?</h2>
        <p className="section-subtitle">
          Built for Africa, powered by world-class technology, and trusted by governments and enterprises
        </p>
      </div>
      
          {/* Feature Grid */}
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {FEATURES.map((f, i) => (
              <div
                key={f.title}
                className="card-feature flex items-start gap-4 group cursor-pointer hover:shadow-lg"
              >
                {/* Icon Circle */}
                <div className={`icon-circle flex-shrink-0 group-hover:scale-110 ${
                  i % 3 === 0 ? 'icon-circle-orange' : 
                  i % 3 === 1 ? 'icon-circle-cyan' : 
                  'icon-circle-blue'
                }`}>
                  {f.icon}
                </div>

                <div className="flex-grow">
                  {/* Title */}
                  <h3 className="font-heading font-extrabold text-lg text-gray-900 mb-2">
                    {f.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-700 leading-relaxed font-medium">
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
    </div>
  </section>
);
