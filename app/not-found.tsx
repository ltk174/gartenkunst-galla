import Link from "next/link";
import { SimplePage } from "@/components/SimplePage";

export default function NotFound() {
  return (
    <SimplePage eyebrow="404" title="Dieser Weg führt ins Grüne.">
      <p>Die angeforderte Seite existiert in diesem Designentwurf nicht.</p>
      <p>
        <Link href="/" className="eyebrow underline underline-offset-4 hover:text-olive">
          Zur Startseite
        </Link>
      </p>
    </SimplePage>
  );
}
