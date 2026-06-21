import Wordmark from "@/components/Wordmark";
import { BOOKING_URL, CONTACT_EMAIL } from "@/lib/site";

export default function Footer() {
  return (
    <footer id="footer" className="grain relative bg-ink">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Wordmark className="text-[32px]" />
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">
              Missed-call recovery for independent HVAC shops. 2–5 trucks.
              USA.
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-col gap-2 text-sm sm:items-end">
            <a
              href={BOOKING_URL}
              className="text-paper underline decoration-muted underline-offset-4 transition-colors hover:decoration-paper"
            >
              Book a demo
            </a>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-muted transition-colors hover:text-paper"
            >
              {CONTACT_EMAIL}
            </a>
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-paper/10 pt-6 text-xs text-muted sm:flex-row sm:justify-between">
          <span>© 2026 ReplyFirst. Built for the trades.</span>
          <span>Your number, your customers, your data. Always.</span>
        </div>
      </div>
    </footer>
  );
}
