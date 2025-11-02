
import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  glass?: boolean;
  glassIntense?: boolean;
  bordered?: boolean;
  hover?: boolean;
  children: React.ReactNode;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, glass, glassIntense, bordered, hover, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-xl transition-shadow duration-300",
          "bg-white dark:bg-neutral-800/50",
          {
            "shadow-sm": !glass && !glassIntense,
            "hover:shadow-lg": hover,
            "border border-neutral-200/80 dark:border-neutral-700/60": bordered,
            "backdrop-blur-sm bg-white/50 dark:bg-neutral-900/50": glass,
            "backdrop-blur-lg bg-white/30 dark:bg-neutral-900/30 border border-white/20": glassIntense,
          },
          className
        )}
        {...props}
      />
    );
  }
);
Card.displayName = "Card";

export { Card };
