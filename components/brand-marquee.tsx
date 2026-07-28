const brands = [
  "3M ESPE",
  "Dentsply Sirona",
  "Straumann",
  "Align Technology",
  "KaVo Kerr",
  "Melag",
  "Tokuyama",
  "Cavex",
];

export function BrandMarquee() {
  const items = [...brands, ...brands];
  return (
    <div className="border-y border-border bg-surface py-6">
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-surface to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-surface to-transparent" />
        <div className="flex w-max animate-marquee gap-16">
          {items.map((b, i) => (
            <span
              key={i}
              className="font-display text-lg font-extrabold tracking-wide text-ink-300/70"
            >
              {b}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
