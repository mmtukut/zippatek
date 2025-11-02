
"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
];

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  const isActive = (href: string) => pathname === href;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200/80 dark:border-neutral-800/80 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-xl transition-all duration-300">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group" onClick={() => setIsOpen(false)}>
            <Image 
              src="/logo.svg" 
              alt="Zippatek Logo" 
              width={40} 
              height={40}
              className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
            />
            <span className="font-heading text-xl font-bold tracking-tight text-neutral-900 dark:text-white transition-colors duration-300 group-hover:text-accent-orange">
              Zippatek
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-2">
            {NAV_LINKS.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-4 py-2 rounded-md font-medium text-sm transition-colors duration-200",
                  isActive(link.href)
                    ? "text-primary-700 dark:text-accent-cyan bg-primary-100/50 dark:bg-primary-900/50"
                    : "text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <Button as={Link} href="/contact?subject=Demo+Request" variant="primary" className="ml-6">
              Book a Demo
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="p-2 rounded-md text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden fixed inset-0 z-40 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-xl transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="container mx-auto px-4 h-full">
            <div className="flex flex-col justify-center items-center h-full text-center">
                <nav className="flex flex-col gap-8">
                {NAV_LINKS.map(link => (
                    <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                        "text-2xl font-semibold transition-colors duration-200",
                        isActive(link.href)
                        ? "text-accent-cyan"
                        : "text-neutral-700 dark:text-neutral-300 hover:text-accent-orange"
                    )}
                    >
                    {link.label}
                    </Link>
                ))}
                </nav>
                <Button as={Link} href="/contact?subject=Demo+Request" variant="primary" size="lg" className="mt-12" onClick={() => setIsOpen(false)}>
                    Book a Demo
                </Button>
            </div>
        </div>
      </div>
    </header>
  );
};
