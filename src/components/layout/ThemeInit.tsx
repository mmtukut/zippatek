"use client";
import { useEffect } from "react";

export function ThemeInit() {
  useEffect(() => {
    const root = document.documentElement;
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const apply = (isDark: boolean) => {
      if (isDark) root.classList.add("dark");
      else root.classList.remove("dark");
    };
    apply(media.matches);
    const handler = (e: MediaQueryListEvent) => apply(e.matches);
    try {
      media.addEventListener("change", handler);
      return () => media.removeEventListener("change", handler);
    } catch {
      // Safari fallback
      media.addListener(handler as any);
      return () => media.removeListener(handler as any);
    }
  }, []);
  return null;
}


