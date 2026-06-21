"use client";

import { useEffect, useRef, useState } from "react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";

declare global {
  interface Window {
    __rfReady?: boolean;
  }
}

function markReady() {
  window.__rfReady = true;
  window.dispatchEvent(new Event("rf:ready"));
}

/**
 * Ink screen with a dispatch-board readout: counter ticks 0 -> 100 while the
 * wordmark builds in. Max ~1.4s, skipped entirely on repeat visits
 * (sessionStorage). The hero waits for "rf:ready" before its reveal.
 */
export default function Preloader() {
  const [gone, setGone] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const seen = sessionStorage.getItem("rf-seen");
    if (seen || prefersReducedMotion()) {
      sessionStorage.setItem("rf-seen", "1");
      markReady();
      setGone(true);
      return;
    }
    sessionStorage.setItem("rf-seen", "1");

    const root = rootRef.current;
    const counterEl = counterRef.current;
    if (!root || !counterEl) {
      markReady();
      setGone(true);
      return;
    }

    document.documentElement.style.overflow = "hidden";
    const counter = { v: 0 };

    const tl = gsap.timeline({
      onComplete: () => {
        document.documentElement.style.overflow = "";
        markReady();
        setGone(true);
      },
    });

    tl.fromTo(
      ".rf-pre-mark",
      // y: 0 clears the pixel offset GSAP parses from translate-y-full
      { y: 0, yPercent: 100 },
      { yPercent: 0, duration: 0.6, ease: "expo.out", stagger: 0.08 },
    )
      .to(
        counter,
        {
          v: 100,
          duration: 0.9,
          ease: "power2.inOut",
          onUpdate: () => {
            counterEl.textContent = String(Math.round(counter.v)).padStart(3, "0");
          },
        },
        0.1,
      )
      .to(root, {
        yPercent: -100,
        duration: 0.55,
        ease: "expo.inOut",
        delay: 0.1,
      });

    return () => {
      tl.kill();
      document.documentElement.style.overflow = "";
    };
  }, []);

  if (gone) return null;

  return (
    <div
      id="rf-preloader"
      ref={rootRef}
      aria-hidden="true"
      className="fixed inset-0 z-[60] flex flex-col justify-between bg-ink px-6 py-6 sm:px-10 sm:py-8 grain"
    >
      <div className="flex items-center justify-between text-xs uppercase tracking-[0.28em] text-muted">
        <span>Dispatch board</span>
        <span>Incoming</span>
      </div>

      <div className="flex justify-center overflow-hidden">
        <span className="font-bebas text-[clamp(3rem,12vw,8rem)] leading-none uppercase">
          <span className="rf-pre-mark inline-block translate-y-full text-paper">
            Reply
          </span>
          <span className="rf-pre-mark inline-block translate-y-full text-orange">
            First
          </span>
        </span>
      </div>

      <div className="flex items-end justify-between">
        <span className="text-xs uppercase tracking-[0.28em] text-muted">
          Calls on the line
        </span>
        <span className="font-bebas text-[clamp(2rem,6vw,4rem)] leading-none text-paper tnum">
          <span ref={counterRef}>000</span>
          <span className="text-muted"> / 100</span>
        </span>
      </div>
    </div>
  );
}
