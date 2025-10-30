import React from "react";
import { Button } from "@/components/ui/Button";

const SOCIAL = [
  { label: "LinkedIn", href: "https://linkedin.com/company/zippatek", icon: "linkedin" },
  { label: "Twitter", href: "https://x.com/zippatek", icon: "twitter" },
  { label: "GitHub", href: "https://github.com/zippatek", icon: "github" },
];

export const Footer: React.FC = () => (
  <footer className="bg-gray-100 dark:bg-primary-900 border-t border-gray-200 dark:border-primary-700 mt-24">
    <div className="max-w-7xl mx-auto py-16 px-6 grid grid-cols-1 md:grid-cols-4 gap-12 text-sm">
      {/* Brand */}
      <div>
        <a href="/" className="flex items-center gap-2 mb-4">
          {/* Consider using your logo here */}
          <span className="font-heading text-lg font-bold text-primary-900">Zippatek</span>
        </a>
        <div className="text-gray-700 dark:text-gray-100 mb-2 text-xs">Building Africa's Property Intelligence Infrastructure</div>
        <div className="flex gap-2 mt-3">
          {SOCIAL.map((item) => (
            <a
              key={item.href}
              href={item.href}
              aria-label={item.label}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary-700 dark:hover:text-accent-cyan"
            >
              {/* Replace with Lucide icons in the future */}
              <span>{item.label[0]}</span>
            </a>
          ))}
        </div>
      </div>
      {/* Products */}
      <div>
        <div className="font-semibold mb-2 text-gray-800 dark:text-white">Products</div>
        <ul className="flex flex-col gap-2">
          <li><a href="/products/propabridge" className="hover:underline">Propabridge</a></li>
          <li><a href="/products/fastfind360" className="hover:underline">FastFind360</a></li>
          <li><a href="/resources/docs" className="hover:underline">API Documentation</a></li>
        </ul>
      </div>
      {/* Company */}
      <div>
        <div className="font-semibold mb-2 text-gray-800 dark:text-white">Company</div>
        <ul className="flex flex-col gap-2">
          <li><a href="/about" className="hover:underline">About Us</a></li>
          <li><a href="/team" className="hover:underline">Team</a></li>
          <li><a href="/careers" className="hover:underline">Careers</a></li>
          <li><a href="/press" className="hover:underline">Press</a></li>
          <li><a href="/blog" className="hover:underline">Blog</a></li>
        </ul>
      </div>
      {/* Contact */}
      <div>
        <div className="font-semibold mb-2 text-gray-800 dark:text-white">Contact</div>
        <ul className="flex flex-col gap-2">
          <li><span>Email:</span> <a href="mailto:hello@zippatek.com" className="hover:underline">hello@zippatek.com</a></li>
          <li><span>Address:</span> No.1 T.O.S Benson Street, Utako, Abuja</li>
          <li><span>Phone:</span> <a href="tel:+2348055269579" className="hover:underline">+234 805 526 9579</a></li>
        </ul>
      </div>
    </div>
    <div className="border-t border-gray-200 dark:border-primary-700 py-4 bg-gray-50 dark:bg-primary-900/80 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500 px-6">
      <div>© 2025 Zippatek Digital Ltd. All rights reserved. RC: 8527315</div>
      <div className="flex gap-4 mt-2 md:mt-0">
        <a href="#" className="hover:underline">Privacy Policy</a>
        <a href="#" className="hover:underline">Terms of Service</a>
        <a href="#" className="hover:underline">Cookie Policy</a>
      </div>
    </div>
  </footer>
);
