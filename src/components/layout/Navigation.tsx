import React from "react";

export interface NavLink {
  label: string;
  href: string;
}

interface NavigationProps {
  links: NavLink[];
  current?: string;
}

export const Navigation: React.FC<NavigationProps> = ({ links, current }) => (
  <nav className="flex gap-8">
    {links.map((link) => (
      <a
        key={link.href}
        href={link.href}
        className={
          "transition-colors font-medium text-gray-700 dark:text-white hover:text-primary-700 dark:hover:text-accent-cyan px-2" +
          (current === link.href ? " underline underline-offset-4" : "")
        }
        aria-current={current === link.href ? "page" : undefined}
      >
        {link.label}
      </a>
    ))}
  </nav>
);
