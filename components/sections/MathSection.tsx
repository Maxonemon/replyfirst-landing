"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

type Step = {
  count: number;
  prefix: string;
  display: string;
  suffix: string;
  label: string;
  sub: string;
  final?: boolean;
};

// 7 missed calls/wk x 38% booked elsewhere x $800 avg ticket (industry data)
// = $2,128/wk -> $8,512/mo -> ~$102,000/yr
const STEPS: Step[] = [
  {
    count: 7,
    prefix: "",
    display: "7",
    suffix: "",
    label: "missed calls a week",
    sub: "You're under a house. Your hands are full. The phone rings out.",
  },
  {
    count: 38,
    prefix: "× ",
    display: "38",
    suffix: "%",
    label: "of missed callers book whoever answers next",
    sub: "They don't leave a voicemail. They dial the next listing.",
  },
  {
    count: 800,
    prefix: "× $",
    display: "800",
    suffix: "",
    label: "average HVAC ticket",
    sub: "Blended average — service calls to full change-outs.",
  },
  {
    count: 8512,
    prefix: "= $",
    display: "8,512",
    suffix: "",
    label: "walks out of your shop every month",
    sub: "That's $102,000 a year. A new truck, every year, paid to the guy across town.",
    final: true,
  },
];

/**
 * Pinned scrub sequence: each line of the math holds the screen while its
 * number counts up, then hands off to the next. Reduced motion (and no-JS)
 * gets the same content in normal flow with final values.
 */
export default function MathSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const stage = stageRef.current;
    if (!section || !stage) return;

    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      section.classList.add("math-pinned");
      const steps = gsap.utils.toArray<HTMLElement>(".math-step", stage);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=320%",
          scrub: 0.6,
          pin: true,
          anticipatePin: 1,
        },
      });

      // Step 1 is visible the moment the section pins; its number counts
      // from 0 as the user starts scrubbing.
      gsap.set(steps[0], { autoAlpha: 1 });
      steps.forEach((step) => {
        const numEl = step.querySelector<HTMLElement>(".math-num-val");
        if (numEl) numEl.textContent = "0";
      });

      steps.forEach((step, i) => {
        const numEl = step.querySelector<HTMLElement>(".math-num-val");
        const data = STEPS[i];
        const counter = { v: 0 };

        if (i === 0) {
          tl.to({}, { duration: 0.2 });
        } else {
          tl.fromTo(
            step,
            { autoAlpha: 0, y: 70 },
            { autoAlpha: 1, y: 0, duration: 0.55, ease: "power2.out" },
          );
        }

        if (numEl) {
          tl.to(
            counter,
            {
              v: data.count,
              duration: 0.8,
              ease: "power1.inOut",
              onUpdate: () => {
                numEl.textContent = Math.round(counter.v).toLocaleString("en-US");
              },
            },
            "<0.1",
          );
        }

        tl.to({}, { duration: i === steps.length - 1 ? 1 : 0.45 }); // hold

        if (i < steps.length - 1) {
          tl.to(step, {
            autoAlpha: 0,
            y: -60,
            duration: 0.45,
            ease: "power2.in",
          });
        }
      });

      return () => {
        section.classList.remove("math-pinned");
        // restore server-rendered values for the static layout
        steps.forEach((step, i) => {
          const numEl = step.querySelector<HTMLElement>(".math-num-val");
          if (numEl) numEl.textContent = STEPS[i].display;
        });
      };
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      data-theme="paper"
      aria-label="The math on missed calls"
      className="relative text-ink"
    >
      <div
        ref={stageRef}
        className="relative mx-auto flex min-h-svh max-w-5xl flex-col justify-center px-6 py-20 sm:px-10"
      >
        <p className="kicker absolute left-6 top-10 sm:left-10 sm:top-14">
          Do the math
        </p>

        <div className="relative min-h-[60svh]">
          {STEPS.map((s, i) => (
            <div key={i} className="math-step">
              <div
                className={`font-bebas leading-none tnum ${
                  s.final
                    ? "text-orange text-[clamp(4.5rem,15vw,13rem)]"
                    : "text-ink text-[clamp(4rem,13vw,11rem)]"
                }`}
              >
                {s.prefix && <span>{s.prefix}</span>}
                <span className="math-num-val">{s.display}</span>
                {s.suffix && <span>{s.suffix}</span>}
              </div>
              <p className="mt-4 max-w-xl mx-auto font-grotesk text-lg font-semibold text-ink sm:text-2xl">
                {s.label}
              </p>
              <p className="mt-3 max-w-md mx-auto text-sm leading-relaxed text-muted sm:text-base">
                {s.sub}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
