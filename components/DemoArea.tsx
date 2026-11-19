import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type DemoAreaProps = { topic: string; officialUrl: string };

/** Kennzeichnung nicht produktiver Rechtsbereiche – es werden keine Rechtstexte erfunden. */
export function DemoArea({ topic, officialUrl }: DemoAreaProps) {
  return (
    <>
      <p className="rounded-sm border border-bronze/40 bg-beige px-5 py-4 text-[0.85rem] leading-relaxed">
        <strong className="font-medium">Nicht produktiver Demo-Bereich.</strong> Dieser Designentwurf enthält
        bewusst keinen {topic}-Text. Rechtliche Inhalte werden erst im Rahmen einer Beauftragung und in Abstimmung
        mit der Gartenkunst Galla KG erstellt.
      </p>
      <p>
        Die gültigen Angaben finden Sie auf der offiziellen Website des Unternehmens:
      </p>
      <p>
        <a
          href={officialUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 font-serif text-2xl text-olive underline decoration-bronze/50 underline-offset-[6px]"
        >
          {topic} auf gartenkunst-galla.at
          <ArrowUpRight aria-hidden className="h-4 w-4" strokeWidth={1.5} />
        </a>
      </p>
      <p>
        <Link href="/" className="eyebrow text-anthracite/70 underline underline-offset-4 hover:text-olive">
          Zurück zur Startseite
        </Link>
      </p>
    </>
  );
}
