"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "@/components/providers/ThemeProvider";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { Segment } from "@/lib/utils";

const segments: { key: Segment; label: string; path: string }[] = [
  { key: "hotels", label: "Hotels", path: "/hotels" },
  { key: "hospitals", label: "Hospitals", path: "/hospitals" },
  { key: "f-and-b", label: "F&B", path: "/f-and-b" },
  { key: "property-developers", label: "Property Developers", path: "/property-developers" },
];

export default function Navigation() {
  const pathname = usePathname();
  const { segment } = useTheme();

  return (
    <motion.nav
      className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-heading font-bold text-primary">H&H</span>
            <span className="hidden sm:inline text-sm text-text-secondary">Hospitality & Healthcare</span>
          </Link>

          <div className="hidden md:flex items-center space-x-1">
            {segments.map((seg) => {
              const isActive = pathname.includes(seg.path) || (pathname === "/" && seg.key === segment);
              return (
                <Link
                  key={seg.key}
                  href={seg.path}
                  className={cn(
                    "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                    isActive
                      ? "bg-primary text-white"
                      : "text-text-secondary hover:text-primary hover:bg-background"
                  )}
                >
                  {seg.label}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center space-x-4">
            <Link href="#contact" className="inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-primary text-white hover:opacity-90 focus:ring-primary py-2 px-4 text-sm rounded-lg">
              Get Quote
            </Link>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

