"use client";

import { useEffect } from "react";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/gsap";

const COLORS: Record<string, string> = {
  ink: "#0F0E0C",
  paper: "#F5F0E8",
};

/**
 * Animates the page background between Ink and Paper as [data-theme]
 * sections cross the middle of the viewport. Sections themselves stay
 * transparent so the swap reads as one continuous surface.
 */
export default function ThemeSwitcher() {
  useEffect(() => {
    const page = document.getElementById("page");
    if (!page) return;

    const reduced = prefersReducedMotion();
    const triggers: ScrollTrigger[] = [];

    document.querySelectorAll<HTMLElement>("[data-theme]").forEach((sec) => {
      const color = COLORS[sec.dataset.theme ?? "ink"] ?? COLORS.ink;
      triggers.push(
        ScrollTrigger.create({
          trigger: sec,
          start: "top 55%",
          end: "bottom 55%",
          onToggle: (self) => {
            if (!self.isActive) return;
            gsap.to(page, {
              backgroundColor: color,
              duration: reduced ? 0 : 0.55,
              ease: "power1.out",
              overwrite: "auto",
            });
          },
        }),
      );
    });

    return () => triggers.forEach((t) => t.kill());
  }, []);

  return null;
}
