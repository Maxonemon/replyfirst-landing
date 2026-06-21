import Wordmark from "@/components/Wordmark";
import { BOOKING_URL } from "@/lib/site";

/**
 * Sits over the hero only (absolute, not fixed) — the sticky bottom bar
 * carries the CTA for the rest of the page.
 */
export default function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 sm:px-10">
        <a href="/" aria-label="ReplyFirst — home" className="inline-block">
          <Wordmark className="text-[32px]" />
        </a>
        <a
          href={BOOKING_URL}
          className="font-grotesk text-sm font-medium text-paper underline decoration-muted underline-offset-8 transition-colors hover:decoration-paper"
        >
          Book a demo
        </a>
      </div>
    </header>
  );
}
