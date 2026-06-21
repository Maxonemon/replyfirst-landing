"use client";

import { useEffect, useRef } from "react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";

type Props = {
  to: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  duration?: number;
};

/**
 * Server-renders the final value (SEO / no-JS), then counts up from 0 the
 * first time it enters the viewport. Skips animation for reduced motion.
 */
export default function CountUp({
  to,
  prefix = "",
  suffix = "",
  className = "",
  duration = 1.4,
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;

    const counter = { v: 0 };
    const render = () => {
      el.textContent = `${prefix}${Math.round(counter.v).toLocaleString("en-US")}${suffix}`;
    };
    render();

    const tween = gsap.to(counter, {
      v: to,
      duration,
      ease: "power2.out",
      onUpdate: render,
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        once: true,
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [to, prefix, suffix, duration]);

  return (
    <span ref={ref} className={`tnum ${className}`}>
      {prefix}
      {to.toLocaleString("en-US")}
      {suffix}
    </span>
  );
}
