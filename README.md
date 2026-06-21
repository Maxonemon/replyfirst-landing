# ReplyFirst — Landing Page

Marketing landing page for ReplyFirst, the missed-call and estimate
follow-up system for independent HVAC shops (2–5 trucks, USA). One job:
convert owners into booked demo calls.

## Stack

- Next.js 14 (App Router, TypeScript)
- Tailwind CSS — brand tokens only, default palette removed
- GSAP + ScrollTrigger — all scroll choreography
- Lenis — smooth scrolling, synced to GSAP's ticker
- Three.js via @react-three/fiber — hero particle field only, code-split
  and idle-mounted with a static gradient fallback

## Run it

```bash
npm install
npm run dev   # http://localhost:3000
```

## Brand

| Token   | Hex       | Role                          |
| ------- | --------- | ----------------------------- |
| Ink     | `#0F0E0C` | Default background, dark text |
| Orange  | `#E85C2B` | One accent per section        |
| Gold    | `#C9A84C` | Testimonials/pull quotes only |
| Paper   | `#F5F0E8` | Text on dark, light sections  |
| Muted   | `#7A7060` | Secondary text                |

Fonts: Bebas Neue (display, 32px+) + Space Grotesk (body), loaded via
`next/font`.

## Before launch

- Swap `BOOKING_URL` in `lib/site.ts` for the real booking link.
- Replace the placeholder testimonials in
  `components/sections/Proof.tsx` (clearly marked in code).
- Set the production domain in `lib/site.ts` (`SITE_URL`).

## Accessibility & motion

`prefers-reduced-motion` disables Lenis, pinning, parallax, and the
Three.js canvas — content renders in normal flow with final values.
No-JS visitors get full content via `<noscript>` overrides.
