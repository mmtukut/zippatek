import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * Button Component
 * 
 * Design System:
 * - Follows Zippatek's brand palette
 * - AAA/AA contrast ratios for accessibility
 * - Large touch targets (44px minimum)
 * - Smooth animations with reduced motion support
 * - Glassmorphism variant for hero sections
 */

const buttonVariants = cva(
  "inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-orange focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:pointer-events-none disabled:opacity-40 disabled:cursor-not-allowed min-h-touch rounded-full",
  {
    variants: {
      variant: {
        primary: "bg-accent-orange-100 text-accent-orange hover:bg-accent-orange-50 active:scale-[0.98]",
        secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200 active:scale-[0.98]",
        accent: "bg-accent-cyan-100 text-accent-cyan hover:bg-accent-cyan-50 active:scale-[0.98]",
        outline: "bg-white text-gray-900 hover:bg-gray-50 active:scale-[0.98] border-0",
        ghost: "bg-transparent text-gray-700 hover:bg-gray-100 active:scale-[0.98]",
        soft: "bg-accent-orange-100 text-accent-orange hover:bg-accent-orange-50 active:scale-[0.98]",
        danger: "bg-error-50 text-error hover:bg-error-100 active:scale-[0.98]",
      },
      size: {
        sm: "h-10 px-4 text-sm font-semibold min-w-touch",
        md: "h-12 px-6 text-sm font-semibold min-w-[120px]",
        lg: "h-14 px-8 text-base font-semibold min-w-[140px]",
        xl: "h-16 px-10 text-base font-bold min-w-[160px]",
      },
      fullWidth: {
        true: "w-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      fullWidth: false,
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
  /**
   * Render as link instead of button
   */
  href?: string;
  /**
   * Loading state with spinner
   */
  loading?: boolean;
  /**
   * Icon to show before text
   */
  icon?: React.ReactNode;
  /**
   * Icon to show after text
   */
  iconRight?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  className,
  variant,
  size,
  fullWidth,
  children,
  href,
  loading = false,
  icon,
  iconRight,
  disabled,
  ...props
}) => {
  const content = (
    <>
      {loading && (
        <svg
          className="animate-spin -ml-1 mr-2 h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}
      {!loading && icon && <span className="mr-2" aria-hidden="true">{icon}</span>}
      <span>{children}</span>
      {!loading && iconRight && <span className="ml-2" aria-hidden="true">{iconRight}</span>}
    </>
  );

  const baseClassName = cn(
    buttonVariants({ variant, size, fullWidth, className })
  );

  if (href) {
    return (
      <a
        href={href}
        className={baseClassName}
        role="button"
        tabIndex={0}
        aria-disabled={disabled}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      className={baseClassName}
      disabled={disabled || loading}
      aria-busy={loading}
      {...props}
    >
      {content}
    </button>
  );
};
