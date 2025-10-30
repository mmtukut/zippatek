import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Glassmorphism effect with backdrop blur
   */
  glass?: boolean;
  /**
   * Intense glassmorphism with stronger blur and border
   */
  glassIntense?: boolean;
  /**
   * Add visible border
   */
  bordered?: boolean;
  /**
   * Elevation level (1-3) for shadow depth
   */
  elevation?: 1 | 2 | 3;
  /**
   * Add hover effect (scale + shadow)
   */
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({
  className,
  glass = false,
  glassIntense = false,
  bordered = false,
  elevation = 1,
  hover = false,
  ...props
}) => {
  return (
    <div
      className={cn(
        // Base styles
        "p-6 rounded-xl transition-all duration-300",
        
        // Default solid card
        !glass && !glassIntense && "bg-white dark:bg-primary-800",
        
        // Glassmorphism variants
        glass && !glassIntense && "glass",
        glassIntense && "glass-intense",
        
        // Elevation shadows
        !glass && !glassIntense && elevation === 1 && "shadow-elevation-1",
        !glass && !glassIntense && elevation === 2 && "shadow-elevation-2",
        !glass && !glassIntense && elevation === 3 && "shadow-elevation-3",
        
        // Borders
        bordered && "border border-gray-200 dark:border-primary-700",
        glass && "border border-primary-100/20 dark:border-primary-100/10",
        
        // Hover effects
        hover && "hover:scale-[1.02] hover:shadow-glass-lg cursor-pointer",
        
        className
      )}
      {...props}
    />
  );
};

/**
 * Pre-configured Glass Card variant for common use cases
 */
export const GlassCard: React.FC<Omit<CardProps, 'glass'>> = (props) => (
  <Card glass {...props} />
);

/**
 * Pre-configured feature card with hover effects
 */
export const FeatureCard: React.FC<Omit<CardProps, 'elevation' | 'hover'>> = (props) => (
  <Card elevation={2} hover {...props} />
);
