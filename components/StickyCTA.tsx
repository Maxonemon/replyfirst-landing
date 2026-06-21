"use client";

import { useEffect, useState } from "react";
import { BOOKING_URL } from "@/lib/site";

/**
 * Slim bottom bar: appears once the hero has scrolled past, hides again
 * over the final CTA block and footer. IntersectionObserver only — works
 * the same with smooth scroll on or off.
 */
export default function StickyCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    const finalCta = document.getElementById("final-cta");
    const footer = document.getElementById("footer");
    if (!hero) return;

    const visible = { hero: true, final: false, footer: false };
    const update = () =>
      setShow(!visible.hero && !visible.final && !visible.footer);

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.target === hero) visible.hero = e.isIntersecting;
          if (e.target === finalCta) visible.final = e.isIntersecting;
          if (e.target === footer) visible.footer = e.isIntersecting;
        }
        update();
      },
      { threshold: 0.05 },
    );

    io.observe(hero);
    if (finalCta) io.observe(finalCta);
    if (footer) io.observe(footer);
    return () => io.disconnect();
  }, []);

  return (
    <div
      aria-hidden={!show}
      className={`fixed inset-x-0 bottom-0 z-40 transition-transform duration-500 ease-out ${
        show ? "translate-y-0" : "translate-y-full pointer-events-none"
      }`}
    >
      <div className="border-t border-paper/10 bg-ink/95 px-4 py-3 backdrop-blur-sm sm:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <p className="hidden text-sm text-muted sm:block">
            The average 3-truck shop loses{" "}
            <span className="font-semibold text-paper tnum">$4,256/mo</span> to
            missed calls.
          </p>
          <a
            href={BOOKING_URL}
            tabIndex={show ? 0 : -1}
            className="ml-auto inline-flex items-center bg-orange px-6 py-2.5 font-grotesk text-sm font-semibold text-ink transition-opacity hover:opacity-90"
          >
            Book a 15-minute demo
          </a>
        </div>
      </div>
    </div>
  );
}
