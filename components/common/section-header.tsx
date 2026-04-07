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
      <p className="mb-5 font-display text-xs font-semibold uppercase tracking-[0.24em] text-text-muted">{label}</p>
      <h2 className="font-display text-4xl font-semibold leading-tight text-text md:text-5xl mb-6">{title}</h2>
      <p className="text-base leading-relaxed text-text-muted md:text-lg">{description}</p>
    </div>
  );
}
