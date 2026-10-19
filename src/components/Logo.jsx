/** Wordmark with the glowing "sync" dot that breathes slowly. */
export default function Logo({ className = '' }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <span className="relative flex size-2.5" aria-hidden="true">
        <span className="absolute inset-0 animate-ping rounded-full bg-neon opacity-50 [animation-duration:2.6s]" />
        <span className="relative size-2.5 rounded-full bg-gradient-to-br from-electric to-neon shadow-[0_0_12px_2px_rgb(42_245_152/0.6)]" />
      </span>
      <span className="text-lg font-semibold tracking-tight text-white">
        i<span className="text-gradient">Synchron</span>
      </span>
    </span>
  );
}
