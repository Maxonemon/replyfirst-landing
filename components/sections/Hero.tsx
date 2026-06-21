"use client";

import { useLayoutEffect } from "react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import MagneticButton from "@/components/ui/MagneticButton";
import { BOOKING_URL } from "@/lib/site";

// $800 average ticket — per industry data in the demand-proof research.
const HEADLINE = [
  "Every missed call",
  "is an $800 job",
  "for the guy across town.",
];

export default function Hero() {
  useLayoutEffect(() => {
    let played = false;
    const play = () => {
      if (played) return;
      played = true;
      if (prefersReducedMotion()) {
        gsap.to("#hero .fade-up", { opacity: 1, y: 0, duration: 0.5 });
        return;
      }
      gsap
        .timeline({ defaults: { ease: "expo.out" } })
        .fromTo(
          "#hero .reveal-inner",
          // y: 0 clears the pixel offset GSAP parses from the CSS
          // translateY(110%) starting state — otherwise it lingers.
          { y: 0, yPercent: 110 },
          { yPercent: 0, duration: 0.9, stagger: 0.09 },
        )
        .to(
          "#hero .fade-up",
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.1 },
          "-=0.55",
        );
    };

    if (window.__rfReady) play();
    else window.addEventListener("rf:ready", play, { once: true });
    return () => window.removeEventListener("rf:ready", play);
  }, []);

  return (
    <section
      id="hero"
      data-theme="ink"
      className="grain relative flex min-h-svh flex-col justify-end overflow-hidden"
    >
      {/* Dispatch-board grid — replaces the old Three.js field */}
      <div aria-hidden="true" className="dispatch-grid absolute inset-0" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-24 pt-36 sm:px-10">
        <p className="kicker fade-up mb-6">
          Missed-call recovery · HVAC shops · 2–5 techs
        </p>

        <h1 className="max-w-6xl font-bebas text-[clamp(3rem,9vw,9rem)] uppercase leading-[0.94] tracking-[0.01em] text-paper">
          {HEADLINE.map((line, i) => (
            <span key={i} className="reveal-line">
              <span className="reveal-inner">{line}</span>
            </span>
          ))}
        </h1>

        <p className="fade-up mt-8 max-w-md text-base leading-relaxed text-paper/80 sm:text-lg">
          ReplyFirst texts the caller back in under 60 seconds and books the
          job — before they dial the next shop.
        </p>

        <div className="fade-up mt-10 flex flex-col items-start gap-3">
          {/* The one orange element in this section: the CTA */}
          <MagneticButton
            href={BOOKING_URL}
            className="bg-orange px-10 py-5 font-grotesk text-lg font-semibold text-ink transition-opacity hover:opacity-90"
          >
            Book a 15-minute demo
          </MagneticButton>
          <span className="text-xs uppercase tracking-[0.2em] text-muted">
            Works with Jobber &amp; Housecall Pro · No contract
          </span>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="fade-up relative z-10 mx-auto mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-muted"
      >
        <span className="block h-px w-10 bg-muted/60" />
        Scroll — do the math
        <span className="block h-px w-10 bg-muted/60" />
      </div>
    </section>
  );
}
