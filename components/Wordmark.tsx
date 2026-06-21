/**
 * Brand rule: "Reply" in Paper + "First" in Orange, never split across lines.
 * Bebas Neue, so keep the rendered size >= 32px wherever this is used.
 */
export default function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span
      className={`font-bebas uppercase leading-none tracking-wide whitespace-nowrap ${className}`}
    >
      <span className="text-paper">Reply</span>
      <span className="text-orange">First</span>
    </span>
  );
}
