"use client";

import React, { useState, useEffect } from "react";
import type { ReactNode } from "react";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/Navbar";

export default function ThProvider({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <Navbar />
      {children}
    </ThemeProvider>
  );
}
