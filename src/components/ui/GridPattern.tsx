
"use client";
import React, { useId } from "react";

interface GridPatternProps extends React.SVGProps<SVGPatternElement> {
  width: number;
  height: number;
  x: string | number;
  y: string | number;
  squares: Array<[number, number]>;
  className?: string;
}

export function GridPattern({ width, height, x, y, squares, className, ...props }: GridPatternProps) {
  const id = useId();

  return (
    <svg aria-hidden="true" className={className}>
      <defs>
        <pattern
          id={id}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
          {...props}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${id})`} />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([x, y]) => (
            <rect
              strokeWidth="0"
              key={`${x}-${y}`}
              width={width - 1}
              height={height - 1}
              x={x * width + 1}
              y={y * height + 1}
            />
          ))}
        </svg>
      )}
    </svg>
  );
}
