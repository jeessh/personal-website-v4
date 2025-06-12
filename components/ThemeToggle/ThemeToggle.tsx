"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({
  className = "",
  showLabel = false,
}) => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);
  const currTheme = theme === "system" ? systemTheme : theme;

  if (!mounted) {
    return (
      <button
        className={`inline-flex items-center justify-center w-10 h-10 rounded-lg bg-background-secondary border border-border-light ${className}`}
        disabled
        aria-label="Loading theme toggle"
      >
        <div className="w-5 h-5 bg-text-muted/20 rounded animate-pulse" />
      </button>
    );
  }

  return (
    <button
      onClick={() => {
        setTheme(currTheme === "dark" ? "light" : "dark");
      }}
      className={`
      inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg
      bg-background-secondary hover:bg-background-tertiary
      border border-border-light hover:border-border-medium
      text-text-primary transition-all duration-200 ease-in-out
      focus:outline-none focus:ring-2 focus:ring-primary-500/20
      ${className}
      `}
      aria-label={`Switch to ${currTheme === "dark" ? "light" : "dark"} mode`}
    >
      {/* Sun icon for light mode */}
      {currTheme === "light" && (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      )}

      {/* Moon icon for dark mode */}
      {currTheme === "dark" && (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      )}

      {showLabel && (
        <span className="text-sm font-medium">{currTheme === "dark" ? "Light" : "Dark"}</span>
      )}
    </button>
  );
};

export default ThemeToggle;
