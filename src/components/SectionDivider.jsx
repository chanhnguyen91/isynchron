/** Hairline that fades out at both ends, across the top edge of a section. */
export default function SectionDivider() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-px max-w-5xl bg-gradient-to-r from-transparent via-white/15 to-transparent"
    />
  );
}
