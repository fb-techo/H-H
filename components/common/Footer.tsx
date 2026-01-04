"use client";

import Link from "next/link";
import { Segment } from "@/lib/utils";

export default function Footer() {
  const segments: { key: Segment; label: string; path: string }[] = [
    { key: "hotels", label: "Hotels", path: "/hotels" },
    { key: "hospitals", label: "Hospitals", path: "/hospitals" },
    { key: "f-and-b", label: "F&B", path: "/f-and-b" },
    { key: "property-developers", label: "Property Developers", path: "/property-developers" },
  ];

  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-heading font-bold mb-4">H&H</h3>
            <p className="text-white/80 text-sm">
              Hospitality & Healthcare Technology Solutions
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Solutions</h4>
            <ul className="space-y-2 text-sm">
              {segments.map((segment) => (
                <li key={segment.key}>
                  <Link
                    href={segment.path}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    {segment.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Connect</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>Email: info@handh.com</li>
              <li>Phone: +1 (555) 123-4567</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center text-sm text-white/60">
          <p>&copy; {new Date().getFullYear()} H&H. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

