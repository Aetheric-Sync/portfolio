"use client";
import { usePathname } from "next/navigation";

export function useActivePath() {
  const pathname = usePathname();
  // Normalize root path
  return pathname === "/" ? "/" : pathname.replace(/\/$/, "");
}
