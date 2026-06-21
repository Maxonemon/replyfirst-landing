"use client";

import { useState } from "react";

const ITEMS = [
  {
    q: "Will it sound like a robot?",
    a: "No. You approve every message before it goes live, and they read like your front desk on a good day. Customers who want a phone call get one — ReplyFirst tells them when you'll ring back.",
  },
  {
    q: "I already have an answering service.",
    a: "Keep it. An answering service picks up in a minute or two and takes a message. ReplyFirst texts back in seconds and books the job. Run both for a month and compare what each one actually put on the board.",
  },
  {
    q: "Is there a contract?",
    a: "No. Month to month, cancel with one text. You keep your number, your message history, and your customer list — it was always yours.",
  },
  {
    q: "Do my techs have to learn anything?",
    a: "Nothing. There's no app for them. ReplyFirst works off your existing business line, and booked jobs land wherever you already look — your calendar, ServiceTitan, Housecall Pro, or a plain text to your phone.",
  },
  {
    q: "What happens after hours?",
    a: "ReplyFirst keeps answering. A no-heat call at 9pm doesn't wait for Monday — that's exactly the call that books with whoever responds first. You set quiet hours for your own phone; the customer still gets booked.",
  },
  {
    q: "How long does setup take?",
    a: "About 20 minutes, on the demo call. We set up missed-call forwarding, you approve the messages word for word, and you're live the same day.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section
      data-theme="paper"
      aria-label="Frequently asked questions"
      className="relative text-ink"
    >
      <div className="mx-auto max-w-4xl px-6 py-28 sm:px-10 sm:py-36">
        <p className="kicker" data-reveal>
          Fair questions
        </p>
        <h2 className="heading-reveal mt-6 font-bebas uppercase leading-[0.95] text-ink text-[clamp(2.5rem,6vw,5rem)]">
          <span className="reveal-line">
            <span className="reveal-inner">Asked by every owner so far.</span>
          </span>
        </h2>

        <div className="mt-14 flex flex-col gap-4">
          {ITEMS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q} data-reveal className="card px-7">
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    id={`faq-button-${i}`}
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left font-grotesk text-base font-semibold text-ink transition-colors hover:text-orange sm:text-lg"
                  >
                    {item.q}
                    <span
                      aria-hidden="true"
                      className={`shrink-0 font-grotesk text-2xl font-light leading-none transition-transform duration-300 ${
                        isOpen ? "rotate-45 text-orange" : "text-muted"
                      }`}
                    >
                      +
                    </span>
                  </button>
                </h3>
                <div
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-button-${i}`}
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-2xl pb-7 text-base leading-relaxed text-ink/70">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
