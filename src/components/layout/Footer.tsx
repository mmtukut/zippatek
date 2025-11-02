
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Linkedin, Twitter, Gitlab } from 'lucide-react';

const SOCIAL_LINKS = [
  { name: "LinkedIn", href: "#", icon: Linkedin },
  { name: "Twitter", href: "#", icon: Twitter },
  { name: "GitLab", href: "#", icon: Gitlab },
];

const FOOTER_LINKS = {
  "Products": [
    { name: "FastFind360", href: "/products/fastfind360" },
    { name: "Propabridge", href: "/products/propabridge" },
    { name: "For Government", href: "/solutions" },
    { name: "For Consumers", href: "/solutions" },
  ],
  "Resources": [
    { name: "Blog", href: "/blog" },
    { name: "Case Studies", href: "/resources" },
    { name: "Documentation", href: "/resources" },
    { name: "Press", href: "/press" },
  ],
  "Company": [
    { name: "About Us", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Team", href: "/team" },
    { name: "Contact", href: "/contact" },
  ],
};

export const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-100 dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Brand & Newsletter Column */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-3 group mb-4">
              <Image 
                src="/logo.svg" 
                alt="Zippatek Logo" 
                width={32} 
                height={32}
              />
              <span className="font-heading text-xl font-bold text-neutral-900 dark:text-white">
                Zippatek
              </span>
            </Link>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-sm leading-relaxed">
              Building Africa's Property Intelligence Infrastructure with AI and satellite data.
            </p>
            <div className="mt-8">
              <h4 className="font-semibold text-neutral-900 dark:text-white mb-2">Stay Updated</h4>
               <form className="flex gap-2">
                 <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="w-full px-4 py-2 text-sm bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 rounded-md focus:ring-2 focus:ring-primary-500 focus:outline-none"
                 />
                 <Button variant="secondary" size="sm" type="submit">Subscribe</Button>
               </form>
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8">
            {Object.entries(FOOTER_LINKS).map(([title, links]) => (
              <div key={title}>
                <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-neutral-900 dark:text-white mb-4">
                  {title}
                </h4>
                <ul className="space-y-3">
                  {links.map(link => (
                    <li key={link.name}>
                      <Link href={link.href} className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-primary-700 dark:hover:text-accent-cyan transition-colors">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-neutral-200 dark:border-neutral-700 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-neutral-500 dark:text-neutral-400">
            © {new Date().getFullYear()} Zippatek Digital Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {SOCIAL_LINKS.map(social => (
              <a 
                key={social.name} 
                href={social.href} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label={social.name}
                className="text-neutral-500 dark:text-neutral-400 hover:text-primary-700 dark:hover:text-white transition-colors"
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
