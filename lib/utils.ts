import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type Segment = "hotels" | "hospitals" | "f-and-b" | "property-developers";

export function getSegmentFromPath(pathname: string): Segment {
  if (pathname.includes("/hotels")) return "hotels";
  if (pathname.includes("/hospitals")) return "hospitals";
  if (pathname.includes("/f-and-b")) return "f-and-b";
  if (pathname.includes("/property-developers")) return "property-developers";
  return "hotels"; // default
}

export function setTheme(segment: Segment) {
  if (typeof document !== "undefined") {
    document.documentElement.setAttribute("data-theme", segment);
  }
}

