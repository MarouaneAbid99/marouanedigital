type SectionHeaderProps = {
  label: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export function SectionHeader({ label, title, description, align = "left" }: SectionHeaderProps) {
  const alignment = align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl text-left";

  return (
    <div className={alignment}>
      <p className="mb-4 font-display text-xs font-semibold uppercase tracking-[0.24em] text-accent/85">{label}</p>
      <h2 className="font-display text-3xl font-semibold leading-tight text-text md:text-4xl">{title}</h2>
      <p className="mt-4 text-base leading-relaxed text-text-soft md:text-lg">{description}</p>
    </div>
  );
}
