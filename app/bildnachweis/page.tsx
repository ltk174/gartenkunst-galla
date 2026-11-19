import type { Metadata } from "next";
import { SimplePage } from "@/components/SimplePage";
import { images } from "@/content/site";

export const metadata: Metadata = { title: "Bildnachweis" };

export default function BildnachweisPage() {
  return (
    <SimplePage eyebrow="Transparenz" title="Bildnachweis">
      <p>
        Sämtliche Fotografien dieses Designentwurfs stammen von{" "}
        <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
          Unsplash
        </a>{" "}
        und werden unter der{" "}
        <a
          href="https://unsplash.com/license"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4"
        >
          Unsplash-Lizenz
        </a>{" "}
        verwendet. Sie dienen ausschließlich der Designillustration und zeigen{" "}
        <strong className="font-medium">keine von Gartenkunst Galla ausgeführten Projekte</strong>.
      </p>
      <ul className="divide-y divide-anthracite/10 border-y border-anthracite/10 text-[0.85rem]">
        {Object.entries(images).map(([key, img]) => (
          <li key={key} className="py-4">
            <p className="text-anthracite">{img.alt}</p>
            <a
              href={`https://images.unsplash.com/${img.source}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-block break-all text-anthracite/55 underline underline-offset-4"
            >
              images.unsplash.com/{img.source}
            </a>
          </li>
        ))}
      </ul>
      <p className="text-[0.85rem] text-anthracite/60">
        Vollständige Dokumentation inklusive Lizenzhinweisen: Datei <code>BILDNACHWEIS.md</code> im Repository.
      </p>
    </SimplePage>
  );
}
