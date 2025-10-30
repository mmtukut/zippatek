"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Solutions", href: "/solutions" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
];

export const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
      return (
        <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-xl border-b border-gray-100 transition-all duration-300 
          shadow-[0_1px_0_rgba(0,0,0,0.05)]">
          <div className="container-lg flex items-center h-20 gap-6">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3 group">
          <div className="relative">
            <Image 
              src="/logo.svg" 
              alt="Zippatek Logo" 
              width={40} 
              height={40}
              className="transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
            />
          </div>
          <span className="font-heading text-xl font-black tracking-[-0.02em] text-gray-900 
            transition-colors duration-300 group-hover:text-accent-orange">
            Zippatek
          </span>
        </a>

        {/* Desktop Nav */}
            <nav className="hidden md:flex flex-1 justify-end items-center gap-1">
              {NAV_LINKS.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-5 py-2.5 rounded-xl font-semibold text-sm text-gray-700 
                    hover:text-gray-900 hover:bg-gray-50/80 
                    transition-all duration-200
                    relative group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent-orange scale-x-0 
                    group-hover:scale-x-100 transition-transform duration-200 origin-left"></span>
                </a>
              ))}
              <Button variant="primary" size="sm" href="/contact" className="ml-6 shadow-lg hover:shadow-xl">
                Book a Demo
              </Button>
            </nav>

            {/* Mobile actions */}
            <div className="ml-auto md:hidden flex items-center gap-3">
              <button
                aria-label="Toggle menu"
                aria-expanded={open}
                onClick={() => setOpen(v => !v)}
                className="flex h-10 w-10 items-center justify-center text-gray-700 hover:bg-gray-50 rounded-lg transition-all"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M3 12h18M3 6h18M3 18h18"/>
                </svg>
              </button>
            </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"} md:hidden overflow-hidden transition-all duration-300 border-t border-gray-200`}> 
        <nav className="container-lg py-6 flex flex-col gap-2">
          {NAV_LINKS.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-3 px-4 rounded-lg text-base font-medium text-gray-900 hover:bg-gray-50 hover:text-accent-orange transition-all"
            >
              {link.label}
            </a>
          ))}
          <Button variant="primary" size="md" href="/contact" fullWidth className="mt-4">
            Book a Demo
          </Button>
        </nav>
      </div>
    </header>
  );
};
