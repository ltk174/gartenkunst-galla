import { interlude } from "@/content/site";
import { Photo } from "../Photo";

/** Großformatige Bildpause zwischen Inhalt und Kontakt. */
export function Interlude() {
  return (
    <section aria-label="Bildpause" className="relative h-[78svh] min-h-[480px] overflow-hidden bg-anthracite text-cream">
      <div className="parallax absolute inset-0">
        <Photo image={interlude.image} sizes="100vw" className="h-full w-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#1d211d]/80 via-[#1d211d]/10 to-[#1d211d]/30" />
      <div className="container-x relative flex h-full flex-col justify-end pb-12 sm:pb-16 lg:pb-20">
        <p data-reveal className="max-w-3xl font-serif text-[clamp(2rem,4.4vw,4.2rem)] leading-[1.06] font-light italic">
          {interlude.text}
        </p>
        <p className="eyebrow mt-6 text-[0.6rem] text-cream/55">Bildwelt zur Designillustration</p>
      </div>
    </section>
  );
}
