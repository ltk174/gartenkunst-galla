import type { Metadata } from "next";
import { SimplePage } from "@/components/SimplePage";
import { DemoArea } from "@/components/DemoArea";
import { company } from "@/content/site";

export const metadata: Metadata = { title: "Datenschutz (Demo)" };

export default function DatenschutzPage() {
  return (
    <SimplePage eyebrow="Demo-Bereich" title="Datenschutz">
      <DemoArea topic="Datenschutzerklärung" officialUrl={company.officialPrivacy} />
      <p className="text-[0.85rem] text-anthracite/60">
        Technischer Hinweis zum Entwurf: Diese Vorschau verwendet keine Cookies, kein Tracking, keine eingebetteten
        Karten- oder Social-Media-Dienste und kein Kontaktformular. Schriften und Bilder werden lokal ausgeliefert.
      </p>
    </SimplePage>
  );
}
