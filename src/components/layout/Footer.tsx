import React from "react";
import { Button } from "@/components/ui/Button";

const SOCIAL = [
  { label: "LinkedIn", href: "https://linkedin.com/company/zippatek", icon: "linkedin" },
  { label: "Twitter", href: "https://x.com/zippatek", icon: "twitter" },
  { label: "GitHub", href: "https://github.com/zippatek", icon: "github" },
];

export const Footer: React.FC = () => (
  <footer className="section-light section border-t border-gray-200">
    <div className="container-lg">
      {/* Main Footer Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        {/* Brand Column */}
        <div>
          <a href="/" className="inline-flex items-center gap-2 mb-4 group">
            <span className="font-heading text-xl font-extrabold text-gray-900 group-hover:text-accent-orange transition-colors">
              Zippatek
            </span>
          </a>
          <p className="text-sm text-gray-700 mb-6 leading-relaxed font-medium">
            Building Africa's Property Intelligence Infrastructure with AI and satellite data.
          </p>
          {/* Social Links */}
          <div className="flex gap-3">
            {SOCIAL.map((item) => (
              <a
                key={item.href}
                href={item.href}
                aria-label={item.label}
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 flex items-center justify-center rounded-lg bg-gray-200 text-gray-800 hover:bg-gray-300 hover:text-gray-900 transition-all"
              >
                <span className="text-sm font-bold">{item.label[0]}</span>
              </a>
            ))}
          </div>
        </div>
        
        {/* Products Column */}
        <div>
          <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-gray-900 mb-4">
            Products
          </h4>
          <ul className="flex flex-col gap-3 text-sm">
            <li>
              <a href="/products/propabridge" className="text-gray-700 hover:text-accent-orange transition-colors font-medium">
                Propabridge
              </a>
            </li>
            <li>
              <a href="/products/fastfind360" className="text-gray-700 hover:text-accent-orange transition-colors font-medium">
                FastFind360
              </a>
            </li>
            <li>
              <a href="/resources/docs" className="text-gray-700 hover:text-accent-orange transition-colors font-medium">
                API Documentation
              </a>
            </li>
          </ul>
        </div>
        
        {/* Company Column */}
        <div>
          <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-gray-900 mb-4">
            Company
          </h4>
          <ul className="flex flex-col gap-3 text-sm">
            {["About Us", "Team", "Careers", "Press", "Blog"].map((label, i) => (
              <li key={label}>
                <a 
                  href={`/${label.toLowerCase().replace(" ", "-")}`} 
                  className="text-gray-700 hover:text-accent-orange transition-colors font-medium"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Contact Column */}
        <div>
          <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-gray-900 mb-4">
            Contact
          </h4>
          <ul className="flex flex-col gap-3 text-sm text-gray-700">
            <li>
              <a href="mailto:hello@zippatek.com" className="hover:text-accent-orange transition-colors font-medium">
                hello@zippatek.com
              </a>
            </li>
            <li className="leading-relaxed font-medium">
              No.1 T.O.S Benson Street<br/>Utako, Abuja
            </li>
            <li>
              <a href="tel:+2348055269579" className="hover:text-accent-orange transition-colors font-medium">
                +234 805 526 9579
              </a>
            </li>
          </ul>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-600">
        <div className="font-medium">
          © 2025 Zippatek Digital Ltd. All rights reserved. <span className="hidden sm:inline">RC: 8527315</span>
        </div>
        <div className="flex gap-6">
          <a href="/privacy" className="hover:text-gray-900 transition-colors font-medium">Privacy Policy</a>
          <a href="/terms" className="hover:text-gray-900 transition-colors font-medium">Terms</a>
          <a href="/cookies" className="hover:text-gray-900 transition-colors font-medium">Cookies</a>
        </div>
      </div>
    </div>
  </footer>
);
