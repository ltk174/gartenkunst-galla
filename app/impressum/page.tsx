import type { Metadata } from "next";
import { SimplePage } from "@/components/SimplePage";
import { DemoArea } from "@/components/DemoArea";
import { company } from "@/content/site";

export const metadata: Metadata = { title: "Impressum (Demo)" };

export default function ImpressumPage() {
  return (
    <SimplePage eyebrow="Demo-Bereich" title="Impressum">
      <DemoArea topic="Impressum" officialUrl={company.officialImprint} />
    </SimplePage>
  );
}
