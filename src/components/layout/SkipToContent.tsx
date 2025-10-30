"use client";

/**
 * SkipToContent Component
 * 
 * Accessibility: WCAG 2.4.1 - Bypass Blocks (Level A)
 * Allows keyboard users to skip navigation and jump directly to main content
 */

export function SkipToContent() {
  const handleSkip = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      mainContent.focus();
      mainContent.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <a
      href="#main-content"
      onClick={handleSkip}
      className="skip-to-content"
      aria-label="Skip to main content"
    >
      Skip to main content
    </a>
  );
}

