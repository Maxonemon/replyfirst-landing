import CountUp from "@/components/ui/CountUp";

// All quotes sourced from published HVAC industry research (callbirdai.com Dec 2025,
// timkame.com 2025). Stats from demand-proof-hvac.html and industry-download-hvac.html.
const QUOTES = [
  {
    quote:
      "I was literally sleeping through $80,000/month in emergency revenue. People's AC breaks at 9 PM — they're not waiting until morning. They're calling every HVAC company until someone answers.",
    name: "Tom",
    meta: "HVAC Owner · Dallas, TX",
    source: "callbirdai.com, Dec 2025",
  },
  {
    quote: "I was working 60-hour weeks and wondering why I wasn't growing.",
    name: "Mike",
    meta: "HVAC/Plumbing Contractor",
    source: "callbirdai.com, Dec 2025",
  },
  {
    quote:
      "Lose 2–3 after-hours calls a month to voicemail. Over a year? $18,000 to $48,000 walking out the door. That is a new van. That is another tech's salary.",
    name: "timkame.com",
    meta: "HVAC Industry Operator Blog",
    source: "After-hours call analysis, 2025",
  },
];

// Stats sourced from demand-proof-hvac.html section 02
const STATS = [
  { n: 62, prefix: "", suffix: "%", label: "of contractor calls go unanswered" },
  { n: 85, prefix: "", suffix: "%", label: "of missed callers never call back" },
  { n: 800, prefix: "$", suffix: "", label: "average HVAC ticket value" },
  { n: 48, prefix: "$", suffix: "K+", label: "walking out annually — conservative" },
];

export default function Proof() {
  return (
    <section
      data-theme="paper"
      aria-label="Industry data on missed-call revenue loss"
      className="relative text-ink"
    >
      <div className="mx-auto max-w-7xl px-6 py-28 sm:px-10 sm:py-36">
        <p className="kicker" data-reveal>
          Proof
        </p>

        {/* Real industry figure — source: industry-download-hvac.html, pain point #1 */}
        <h2 className="heading-reveal mt-6 max-w-4xl font-bebas uppercase leading-[0.95] text-ink text-[clamp(2.8rem,7vw,6.5rem)]">
          <span className="reveal-line">
            <span className="reveal-inner">
              <span className="text-orange">$45K–$120K</span> per shop,
            </span>
          </span>
          <span className="reveal-line">
            <span className="reveal-inner">per year. Gone.</span>
          </span>
        </h2>
        <p className="mt-4 max-w-sm text-base text-ink/60" data-reveal>
          What HVAC contractors report losing to missed calls — not a forecast.
        </p>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {QUOTES.map((q) => (
            <figure key={q.name} data-reveal className="card flex flex-col p-8">
              <span aria-hidden="true" className="block h-1 w-10 rounded-full bg-gold" />
              <blockquote className="mt-6 flex-1 font-grotesk text-lg font-light italic leading-relaxed text-ink/85">
                &ldquo;{q.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6">
                <span className="block font-grotesk text-sm font-semibold text-ink">
                  {q.name}
                </span>
                <span className="mt-1 block text-xs uppercase tracking-[0.18em] text-muted">
                  {q.meta}
                </span>
                <span className="mt-1 block text-xs text-muted/70">{q.source}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} data-reveal className="card p-6">
              <span className="font-bebas text-[clamp(2rem,4vw,3.5rem)] leading-none text-ink">
                <CountUp to={s.n} prefix={s.prefix} suffix={s.suffix} />
              </span>
              <p className="mt-2 text-xs uppercase tracking-[0.18em] text-muted">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
