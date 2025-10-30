import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  glass?: boolean;
  bordered?: boolean;
}

export const Card: React.FC<CardProps> = ({
  className, glass, bordered, ...props
}) => {
  return (
    <div
      className={cn(
        "p-6 bg-white dark:bg-gray-900 rounded-xl shadow zippa-glow transition-all duration-200",
        glass && "backdrop-blur bg-white/60 dark:bg-primary-700/50 border border-white/20 border-opacity-40",
        bordered && "border border-gray-100 dark:border-gray-800",
        className
      )}
      {...props}
    />
  );
};
