type SectionIndexProps = {
  index: string;
  label: string;
  tone?: "light" | "dark";
  className?: string;
};

/** Editoriale Kapitelmarke: „01 —— Philosophie“ */
export function SectionIndex({ index, label, tone = "dark", className = "" }: SectionIndexProps) {
  const color = tone === "dark" ? "text-bronze-deep" : "text-sand";
  const line = tone === "dark" ? "bg-bronze/50" : "bg-sand/40";
  return (
    <p data-reveal="fade" className={`eyebrow flex items-center gap-4 ${color} ${className}`}>
      <span className="font-serif text-base tracking-normal normal-case italic">{index}</span>
      <span aria-hidden className={`h-px w-12 ${line}`} />
      <span>{label}</span>
    </p>
  );
}
