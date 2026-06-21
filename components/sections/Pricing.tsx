import MagneticButton from "@/components/ui/MagneticButton";
import { BOOKING_URL } from "@/lib/site";

// ROI math sourced from industry-download-hvac.html section 09:
// recover 1 missed call/day ($800 ticket × 40% close rate = $320/day = $9,600/mo)

const INCLUDED = [
  "Missed-call text-back on your existing number",
  "Estimate follow-up for quotes going cold",
  "After-hours and weekend coverage",
  "You approve every message before it goes live",
  "Weekly recovery report — jobs and dollars, not charts",
];

export default function Pricing() {
  return (
    <section
      data-theme="paper"
      aria-label="Pricing"
      className="relative text-ink"
    >
      <div className="mx-auto max-w-7xl px-6 py-28 sm:px-10 sm:py-36">
        <p className="kicker" data-reveal>
          Pricing
        </p>

        <div className="mt-6 grid gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <h2 className="heading-reveal font-bebas uppercase leading-[0.95] text-ink text-[clamp(2.8rem,7vw,6.5rem)]">
              <span className="reveal-line">
                <span className="reveal-inner">One plan.</span>
              </span>
              <span className="reveal-line">
                <span className="reveal-inner">
                  <span className="text-orange tnum">$997</span> a month.
                </span>
              </span>
              <span className="reveal-line">
                <span className="reveal-inner">Flat.</span>
              </span>
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-ink/70" data-reveal>
              No per-text fees. No setup charge. No contract — month to month,
              cancel with one text.
            </p>
            <div className="mt-10" data-reveal>
              <MagneticButton
                href={BOOKING_URL}
                className="bg-orange px-9 py-4 font-grotesk text-base font-semibold text-ink transition-opacity hover:opacity-90"
              >
                Book a 15-minute demo
              </MagneticButton>
              <p className="mt-4 text-sm text-muted">
                If it doesn&apos;t pay for itself in 30 days, month two is
                free.
              </p>
            </div>
          </div>

          <div className="lg:pt-4">
            <div className="card p-8 sm:p-10" data-reveal>
              <p className="text-xs font-medium uppercase tracking-[0.28em] text-muted">
                Everything included
              </p>
              <ul className="mt-6 divide-y divide-ink/10">
                {INCLUDED.map((item) => (
                  <li
                    key={item}
                    className="flex items-baseline gap-4 py-4 font-grotesk text-base text-ink/85"
                  >
                    <span aria-hidden="true" className="text-orange">
                      —
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              {/* ROI math — source: industry-download-hvac.html */}
              <div className="mt-8 rounded-xl bg-ink p-6 text-paper">
                <p className="font-grotesk text-lg font-semibold">The math.</p>
                <p className="mt-2 text-base leading-relaxed text-paper/80">
                  1 missed call recovered per day × $800 ticket × 40% close
                  rate = $9,600/month back on your board. ReplyFirst costs
                  $997. That&apos;s nearly 10x ROI.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
