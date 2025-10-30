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
    <header className="sticky top-0 z-30 w-full bg-white/85 dark:bg-primary-900/80 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-primary-900/75 transition-all duration-200">
      <div className="max-w-7xl mx-auto flex items-center h-20 px-6 gap-4">
        <a href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="Zippatek Logo" width={40} height={40} className="rounded-lg" />
          <span className="font-heading text-xl font-bold tracking-tighter text-primary-900 dark:text-white">Zippatek</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex flex-1 justify-end gap-8">
          {NAV_LINKS.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors font-medium text-gray-700 dark:text-white hover:text-primary-700 dark:hover:text-accent-cyan px-2"
            >
              {link.label}
            </a>
          ))}
          <Button variant="secondary" size="sm" href="/contact">Book a Demo</Button>
        </nav>

        {/* Mobile actions */}
        <div className="ml-auto md:hidden flex items-center gap-2">
          <Button variant="secondary" size="sm" href="/contact" className="hidden xs:inline-flex">Demo</Button>
          <button
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen(v => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 dark:border-primary-700 text-primary-900 dark:text-white hover:bg-gray-100 dark:hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"} md:hidden overflow-hidden transition-all duration-200 bg-white/95 dark:bg-primary-900/95 border-t border-gray-100 dark:border-primary-800`}> 
        <nav className="px-6 py-4 flex flex-col gap-3">
          {NAV_LINKS.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-2 px-1 rounded text-base font-medium text-gray-800 dark:text-primary-100 hover:text-primary-700 dark:hover:text-accent-cyan"
            >
              {link.label}
            </a>
          ))}
          <Button variant="primary" size="md" href="/contact" className="mt-2">Book a Demo</Button>
        </nav>
      </div>
    </header>
  );
};
