import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
        extend: {
          colors: {
            // Brand Colors - Modern Fintech Palette
            primary: {
              900: '#0F172A', // Deep slate (Professional)
              800: '#1E293B',
              700: '#334155', // Slate gray
              600: '#475569',
              500: '#64748B', // Balanced gray
              400: '#94A3B8',
              300: '#CBD5E1',
              200: '#E2E8F0',
              100: '#F1F5F9', // Soft gray-blue
              50: '#F8FAFC',
            },
            // Accent Colors - Banking App Style
            accent: {
              orange: {
                DEFAULT: '#F97316', // Primary CTA Orange
                light: '#FB923C',
                dark: '#EA580C',
                50: '#FFF7ED',
                100: '#FFEDD5',
              },
              cyan: {
                DEFAULT: '#06B6D4', // Secondary actions
                light: '#22D3EE',
                dark: '#0891B2',
                50: '#ECFEFF',
                100: '#CFFAFE',
              },
              blue: {
                DEFAULT: '#3B82F6', // Info/Trust
                light: '#60A5FA',
                dark: '#2563EB',
                50: '#EFF6FF',
                100: '#DBEAFE',
              },
              purple: {
                DEFAULT: '#A855F7', // Premium features
                light: '#C084FC',
                dark: '#9333EA',
                50: '#FAF5FF',
                100: '#F3E8FF',
              },
            },
            // Semantic Colors
            success: {
              DEFAULT: '#10B981',
              light: '#34D399',
              dark: '#059669',
              50: '#ECFDF5',
            },
            warning: {
              DEFAULT: '#F59E0B',
              light: '#FBBF24',
              dark: '#D97706',
              50: '#FFFBEB',
            },
            error: {
              DEFAULT: '#EF4444',
              light: '#F87171',
              dark: '#DC2626',
              50: '#FEF2F2',
            },
            // Enhanced Neutrals
            gray: {
              900: '#0F172A',
              800: '#1E293B',
              700: '#334155',
              600: '#475569',
              500: '#64748B',
              400: '#94A3B8',
              300: '#CBD5E1',
              200: '#E2E8F0',
              100: '#F1F5F9',
              50: '#F8FAFC',
            },
            // Surface colors for backgrounds
            surface: {
              light: '#FFFFFF',
              base: '#F8FAFC',
              elevated: '#F1F5F9',
              peach: '#FFF7ED',
              cyan: '#ECFEFF',
              purple: '#FAF5FF',
            },
          },
      fontFamily: {
        sans: [
          'Inter',
          'Outfit',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
        heading: [
          'Space Grotesk',
          'Clash Display',
          'Inter',
          'system-ui',
          'sans-serif',
        ],
        mono: [
          'JetBrains Mono',
          'Fira Code',
          'Consolas',
          'Monaco',
          'monospace',
        ],
      },
      // Fluid Typography Scale (Responsive)
      fontSize: {
        xs: ['clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem)', { lineHeight: '1.5' }],
        sm: ['clamp(0.875rem, 0.825rem + 0.25vw, 1rem)', { lineHeight: '1.6' }],
        base: ['clamp(1rem, 0.95rem + 0.25vw, 1.125rem)', { lineHeight: '1.7' }],
        lg: ['clamp(1.125rem, 1.05rem + 0.375vw, 1.25rem)', { lineHeight: '1.7' }],
        xl: ['clamp(1.25rem, 1.15rem + 0.5vw, 1.5rem)', { lineHeight: '1.5' }],
        '2xl': ['clamp(1.5rem, 1.35rem + 0.75vw, 2rem)', { lineHeight: '1.4' }],
        '3xl': ['clamp(1.875rem, 1.65rem + 1.125vw, 2.5rem)', { lineHeight: '1.3' }],
        '4xl': ['clamp(2.25rem, 1.95rem + 1.5vw, 3rem)', { lineHeight: '1.2' }],
        '5xl': ['clamp(3rem, 2.5rem + 2.5vw, 4rem)', { lineHeight: '1.1' }],
        '6xl': ['clamp(3.75rem, 3rem + 3.75vw, 5rem)', { lineHeight: '1' }],
      },
      // Glassmorphism & Modern Effects
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        DEFAULT: '8px',
        md: '12px',
        lg: '16px',
        xl: '24px',
        '2xl': '40px',
        '3xl': '64px',
      },
      // Enhanced Shadows for Depth
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(10, 36, 99, 0.08)',
        'glass-lg': '0 12px 48px 0 rgba(10, 36, 99, 0.12)',
        'zippa-glow': '0 8px 32px 0 rgba(10, 36, 99, 0.15), 0 1.5px 3px 0 rgba(6, 182, 212, 0.08)',
        'cyan-glow': '0 10px 40px 0 rgba(6, 182, 212, 0.35)',
        'orange-glow': '0 10px 40px 0 rgba(249, 115, 22, 0.35)',
        'inner-glass': 'inset 0 2px 4px 0 rgba(255, 255, 255, 0.06)',
        'elevation-1': '0 2px 8px rgba(0, 0, 0, 0.08)',
        'elevation-2': '0 4px 16px rgba(0, 0, 0, 0.12)',
        'elevation-3': '0 8px 24px rgba(0, 0, 0, 0.16)',
      },
      // Border Radius for Modern Cards
      borderRadius: {
        'sm': '0.5rem',
        DEFAULT: '0.75rem',
        'md': '0.875rem',
        'lg': '1rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        'glass': '1.5rem',
      },
      // Animation System (Performance-First)
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.7s ease-out forwards',
        'slide-in-right': 'slideInRight 0.5s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.5s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(-24px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(24px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      // Accessibility - Large Click Areas
      minHeight: {
        'touch': '44px', // WCAG minimum touch target
      },
      minWidth: {
        'touch': '44px',
      },
      // Spacing System (Consistent)
      spacing: {
        'safe-top': 'env(safe-area-inset-top)',
        'safe-bottom': 'env(safe-area-inset-bottom)',
        'safe-left': 'env(safe-area-inset-left)',
        'safe-right': 'env(safe-area-inset-right)',
      },
    },
  },
  plugins: [],
};

export default config;

