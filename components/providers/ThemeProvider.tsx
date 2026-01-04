"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { usePathname } from "next/navigation";
import { Segment, getSegmentFromPath, setTheme } from "@/lib/utils";

interface ThemeContextType {
  segment: Segment;
  setSegment: (segment: Segment) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [segment, setSegmentState] = useState<Segment>("hotels");

  useEffect(() => {
    const detectedSegment = getSegmentFromPath(pathname);
    setSegmentState(detectedSegment);
    setTheme(detectedSegment);
  }, [pathname]);

  const setSegment = (newSegment: Segment) => {
    setSegmentState(newSegment);
    setTheme(newSegment);
  };

  return (
    <ThemeContext.Provider value={{ segment, setSegment }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

