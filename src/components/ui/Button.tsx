import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-primary-700 text-white hover:bg-primary-500 focus-visible:ring-primary-500",
        secondary: "bg-accent-cyan text-white hover:bg-accent-cyan/90 focus-visible:ring-accent-cyan",
        outline: "border-2 border-primary-700 text-primary-700 hover:bg-primary-700 hover:text-white dark:border-primary-100 dark:text-primary-100 dark:hover:bg-white/10",
        ghost: "text-primary-700 hover:bg-primary-100 dark:text-primary-100 dark:hover:bg-white/10",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-6 text-base",
        lg: "h-14 px-8 text-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({
  className,
  variant,
  size,
  children,
  href,
  ...props
}) => {
  if (href) {
    return (
      <a href={href} className={cn(buttonVariants({ variant, size, className }))}>
        {children}
      </a>
    );
  }
  return (
    <button className={cn(buttonVariants({ variant, size, className }))} {...props}>
      {children}
    </button>
  );
};
