"use client";

import { useEffect } from "react";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/gsap";

/**
 * Global scroll-reveal animations:
 * - [data-reveal] elements fade-rise in with a stagger when they enter
 * - .heading-reveal headings get the split-line slide-up (reveal-inner spans)
 * Reduced motion: CSS already shows everything; this bails out entirely.
 */
export default function ScrollFX() {
  useEffect(() => {
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      const els = gsap.utils.toArray<HTMLElement>("[data-reveal]");
      if (els.length) {
        gsap.set(els, { autoAlpha: 0, y: 28 });
        ScrollTrigger.batch(els, {
          start: "top 88%",
          once: true,
          onEnter: (batch) =>
            gsap.to(batch, {
              autoAlpha: 1,
              y: 0,
              duration: 0.9,
              ease: "expo.out",
              stagger: 0.09,
              overwrite: true,
            }),
        });
      }

      document.querySelectorAll<HTMLElement>(".heading-reveal").forEach((h) => {
        const inners = h.querySelectorAll(".reveal-inner");
        if (!inners.length) return;
        gsap.fromTo(
          inners,
          // y: 0 clears the pixel offset GSAP parses from the CSS start state
          { y: 0, yPercent: 110 },
          {
            yPercent: 0,
            duration: 0.9,
            ease: "expo.out",
            stagger: 0.1,
            scrollTrigger: { trigger: h, start: "top 85%", once: true },
          },
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return null;
}
