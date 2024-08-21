"use client";
import { useEffect } from "react";
import { themeChange } from "theme-change";

export default function ThemeProvider({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);
  return children;
}
