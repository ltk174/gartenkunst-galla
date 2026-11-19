import Link from "next/link";
import { ArrowDown } from "lucide-react";
import { company, hero } from "@/content/site";
import { Photo } from "../Photo";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-anthracite text-cream"
    >
      {/* Bild */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="hero-image h-full w-full">
          <Photo
            image={hero.image}
            priority
            sizes="100vw"
            className="h-full w-full object-cover object-[62%_55%] lg:object-[50%_60%]"
          />
        </div>
        {/* Lichtführung für Lesbarkeit */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1d211d]/90 via-[#1d211d]/25 to-[#1d211d]/45" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1d211d]/55 via-transparent to-transparent" />
      </div>

      {/* Vertikale Bildnotiz */}
      <p className="eyebrow absolute top-1/2 right-5 hidden origin-right -translate-y-1/2 translate-x-1/2 rotate-90 text-[0.6rem] text-cream/55 lg:block xl:right-8">
        Bildwelt zur Designillustration
      </p>

      <div className="container-x flex flex-1 flex-col justify-end pt-36 pb-8 sm:pb-10 lg:pb-12">
        <div className="grid items-end gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-8">
            <p
              className="hero-fade eyebrow mb-7 flex items-center gap-4 text-sand sm:mb-9"
              style={{ ["--line-delay" as string]: "300ms" }}
            >
              <span aria-hidden className="h-px w-10 bg-sand/60" />
              {hero.eyebrow}
            </p>
            <h1 id="hero-title" className="display-xxl">
              {hero.titleLines.map((line, i) => (
                <span key={line} className="hero-line">
                  <span
                    className={i === 1 ? "pl-[0.3em] italic sm:pl-[0.9em]" : undefined}
                    style={{ ["--line-delay" as string]: `${450 + i * 160}ms` }}
                  >
                    {line}
                  </span>
                </span>
              ))}
            </h1>
          </div>

          <div
            className="hero-fade max-w-md lg:col-span-4 lg:justify-self-end lg:pb-4"
            style={{ ["--line-delay" as string]: "1100ms" }}
          >
            <p className="text-base leading-relaxed text-cream/85 sm:text-lg">{hero.subtitle}</p>
            <Link
              href={hero.cta.href}
              className="group mt-8 inline-flex items-center gap-4 border-b border-cream/40 pb-3 text-[0.72rem] font-medium tracking-[0.22em] uppercase transition-colors duration-500 hover:border-cream"
            >
              {hero.cta.label}
              <span className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border border-cream/40 transition-colors duration-500 group-hover:bg-cream group-hover:text-anthracite">
                <ArrowDown aria-hidden className="h-4 w-4" strokeWidth={1.25} />
              </span>
            </Link>
          </div>
        </div>

        {/* Fußleiste des Hero */}
        <div
          className="hero-fade mt-14 grid grid-cols-2 items-center gap-4 border-t border-cream/20 pt-5 text-[0.65rem] tracking-[0.22em] text-cream/70 uppercase sm:mt-16 lg:grid-cols-3"
          style={{ ["--line-delay" as string]: "1400ms" }}
        >
          <p className="hidden lg:block">{company.tagline}</p>
          <div className="flex items-center gap-3 lg:justify-center">
            <span aria-hidden className="scroll-cue block h-8 w-px bg-cream/20 text-cream" />
            <span>Scrollen</span>
          </div>
          <p className="text-right">
            <span className="hidden sm:inline">{hero.disciplines.join(" · ")}</span>
            <span className="sm:hidden">{hero.coordinates}</span>
          </p>
        </div>
      </div>
    </section>
  );
}
