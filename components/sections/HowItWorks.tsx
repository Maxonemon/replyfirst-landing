const PANELS = [
  {
    num: "01",
    title: "The call rings out",
    body: "You're in an attic, hands full. The line rings out. That caller has a dead system and a phone full of competitors.",
  },
  {
    num: "02",
    title: "ReplyFirst texts back in seconds",
    body: "Before they dial the next shop, they get a text that reads like your front desk. You approved every word.",
    sms: true,
  },
  {
    num: "03",
    title: "The job lands on your board",
    body: "They reply, the visit gets booked, you get the full thread. Nothing happens behind your back.",
  },
];

export default function HowItWorks() {
  return (
    <section
      data-theme="paper"
      aria-label="How ReplyFirst works"
      className="relative text-ink"
    >
      <div className="mx-auto w-full max-w-7xl px-6 py-28 sm:px-10 sm:py-36">
        <p className="kicker" data-reveal>
          How it works
        </p>
        <h2 className="heading-reveal mt-4 font-bebas text-[clamp(2.5rem,6vw,5.5rem)] uppercase leading-[0.95] text-ink">
          <span className="reveal-line">
            <span className="reveal-inner">Three steps.</span>
          </span>
          <span className="reveal-line">
            <span className="reveal-inner">No new software.</span>
          </span>
        </h2>
        <p className="mt-4 max-w-md text-base text-ink/70" data-reveal>
          Your techs don&apos;t download anything. Your customers just get a
          text that sounds like you.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {PANELS.map((p) => (
            <article key={p.num} data-reveal className="card flex flex-col p-8">
              <span className="font-bebas text-[clamp(2.5rem,4vw,4rem)] leading-none text-muted tnum">
                {p.num}
              </span>
              <h3 className="mt-4 font-grotesk text-xl font-semibold text-ink sm:text-2xl">
                {p.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-ink/70">
                {p.body}
              </p>

              {p.sms && (
                <figure className="mt-8" aria-label="Example text message">
                  <div className="rounded-2xl rounded-bl-sm bg-ink px-5 py-4 text-sm leading-relaxed text-paper">
                    Sorry we missed your call — this is Dale&apos;s Heating
                    &amp; Air. Are you looking for a repair or a quote? Text
                    back and we&apos;ll get you on the schedule today.
                  </div>
                  {/* The one orange accent in this section */}
                  <figcaption className="mt-2 text-xs font-medium uppercase tracking-[0.18em] text-orange">
                    Delivered · 8 seconds after the missed call
                  </figcaption>
                </figure>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
