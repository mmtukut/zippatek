import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Brand Colors
        'primary-900': '#0A2463', // Deep Navy
        'primary-700': '#1E40AF', // Royal Blue
        'primary-500': '#3B82F6', // Bright Blue
        'primary-100': '#DBEAFE', // Light Blue
        // Accent
        'accent-cyan': '#06B6D4',
        'accent-orange': '#F97316',
        // Neutral
        'gray-900': '#111827',
        'gray-700': '#374151',
        'gray-400': '#9CA3AF',
        'gray-100': '#F3F4F6',
        white: '#FFFFFF',
        // Semantic
        success: '#10B981',
        warning: '#F59E0B',
        error: '#EF4444',
      },
      fontFamily: {
        sans: [
          'Inter',
          'Outfit',
          'Satoshi',
          '-apple-system',
          'BlinkMacSystemFont',
          ...defaultTheme.fontFamily.sans,
        ],
        heading: [
          'Space Grotesk',
          'Clash Display',
          ...defaultTheme.fontFamily.sans,
        ],
        mono: [
          'JetBrains Mono',
          'Fira Code',
          ...defaultTheme.fontFamily.mono,
        ],
      },
      fontSize: {
        xs: 'clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem)',     // 12-14px
        sm: 'clamp(0.875rem, 0.825rem + 0.25vw, 1rem)',      // 14-16px
        base: 'clamp(1rem, 0.95rem + 0.25vw, 1.125rem)',     // 16-18px
        lg: 'clamp(1.125rem, 1.05rem + 0.375vw, 1.25rem)',   // 18-20px
        xl: 'clamp(1.25rem, 1.15rem + 0.5vw, 1.5rem)',       // 20-24px
        '2xl': 'clamp(1.5rem, 1.35rem + 0.75vw, 2rem)',      // 24-32px
        '3xl': 'clamp(1.875rem, 1.65rem + 1.125vw, 2.5rem)', // 30-40px
        '4xl': 'clamp(2.25rem, 1.95rem + 1.5vw, 3rem)',      // 36-48px
        '5xl': 'clamp(3rem, 2.5rem + 2.5vw, 4rem)',          // 48-64px
      },
      spacing: {
        1: '0.25rem',  // 4px
        2: '0.5rem',   // 8px
        3: '0.75rem',  // 12px
        4: '1rem',     // 16px
        6: '1.5rem',   // 24px
        8: '2rem',     // 32px
        12: '3rem',    // 48px
        16: '4rem',    // 64px
        24: '6rem',    // 96px
        32: '8rem',    // 128px
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem',
        'glass': '2rem',
      },
      boxShadow: {
        'zippa-glow': '0 8px 32px 0 rgba(10, 36, 99, 0.15), 0 1.5px 3px 0 rgba(6,182,212,0.08)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('tailwindcss-animate'),
  ],
};

export default config;

