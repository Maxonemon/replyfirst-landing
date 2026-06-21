"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import MagneticButton from "@/components/ui/MagneticButton";
import { BOOKING_URL } from "@/lib/site";

/**
 * Combo 3 — the only orange-background section on the page.
 * Ink text, one giant Bebas line, one button.
 */
export default function FinalCTA() {
  const root = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    if (prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".final-line .reveal-inner",
        // y: 0 clears the pixel offset GSAP parses from the CSS start state
        { y: 0, yPercent: 110 },
        {
          yPercent: 0,
          duration: 0.9,
          ease: "expo.out",
          stagger: 0.1,
          scrollTrigger: { trigger: root.current, start: "top 65%", once: true },
        },
      );
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="final-cta"
      ref={root}
      aria-label="Book a demo"
      className="relative bg-orange text-ink"
    >
      <div className="mx-auto flex min-h-svh max-w-7xl flex-col items-start justify-center px-6 py-28 sm:px-10">
        <p className="kicker !text-ink/60">The next missed call is coming</p>

        <h2 className="final-line mt-6 font-bebas uppercase leading-[0.92] text-ink text-[clamp(3.2rem,11vw,11rem)]">
          <span className="reveal-line">
            <span className="reveal-inner">Stop feeding</span>
          </span>
          <span className="reveal-line">
            <span className="reveal-inner">the guy across town.</span>
          </span>
        </h2>

        <p className="mt-8 max-w-lg text-base leading-relaxed text-ink/75 sm:text-lg">
          15 minutes. We run your numbers live — your call volume, your average
          ticket, your close rate. If the math doesn&apos;t work for your shop,
          we&apos;ll say so and hang up.
        </p>

        <MagneticButton
          href={BOOKING_URL}
          className="mt-12 bg-ink px-10 py-5 font-grotesk text-lg font-semibold text-paper transition-opacity hover:opacity-90"
        >
          Book a 15-minute demo
        </MagneticButton>
      </div>
    </section>
  );
}
