import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Info } from "lucide-react";
import { exampleProject as p } from "@/content/site";
import { Photo } from "@/components/Photo";
import { ContactSection } from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Beispielhafte Projektseite – Gestaltungskonzept",
  description:
    "Beispielhafte Projektpräsentation mit Inspirationsbildern – kein von Gartenkunst Galla ausgeführtes Projekt.",
};

export default function ProjectPage() {
  const g = p.gallery;
  return (
    <article>
      {/* Hero */}
      <header className="relative isolate flex min-h-[92svh] flex-col overflow-hidden bg-anthracite text-cream">
        <div className="absolute inset-0 -z-10">
          <div className="hero-image h-full w-full">
            <Photo
              image={p.heroImage}
              priority
              sizes="100vw"
              className="h-full w-full object-cover object-[50%_45%]"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#1d211d]/90 via-[#1d211d]/30 to-[#1d211d]/60" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1d211d]/60 via-[#1d211d]/15 to-transparent" />
        </div>

        <div className="container-x flex flex-1 flex-col justify-end pt-40 pb-12 lg:pb-16">
          <p
            className="hero-fade eyebrow flex flex-wrap items-center gap-x-4 gap-y-2 text-sand"
            style={{ ["--line-delay" as string]: "250ms" }}
          >
            <span className="rounded-full border border-sand/50 px-3 py-1.5">{p.eyebrow}</span>
            <span>{p.category}</span>
          </p>
          <h1 className="display-xxl mt-8 max-w-[11ch]">
            {p.title.map((line, i) => (
              <span key={line} className="hero-line">
                <span
                  className={i === 1 ? "italic" : undefined}
                  style={{ ["--line-delay" as string]: `${400 + i * 160}ms` }}
                >
                  {line}
                </span>
              </span>
            ))}
          </h1>
          <p
            className="hero-fade mt-8 max-w-xl text-base text-cream/80 sm:text-lg"
            style={{ ["--line-delay" as string]: "1000ms" }}
          >
            {p.subtitle}
          </p>
        </div>
      </header>

      {/* Kennzeichnung */}
      <div className="border-b border-anthracite/10 bg-beige">
        <div className="container-x flex flex-col gap-4 py-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="flex items-start gap-3 text-[0.8rem] leading-relaxed text-anthracite/75">
            <Info aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-bronze-deep" strokeWidth={1.5} />
            {p.notice}
          </p>
          <Link
            href="/#impressionen"
            className="eyebrow inline-flex shrink-0 items-center gap-2 text-anthracite/80 hover:text-olive"
          >
            <ArrowLeft aria-hidden className="h-3.5 w-3.5" strokeWidth={1.5} /> Zum Portfolio
          </Link>
        </div>
      </div>

      {/* Einleitung & Projektdaten */}
      <section aria-label="Einleitung" className="bg-cream py-24 sm:py-32 lg:py-40">
        <div className="container-x grid gap-16 lg:grid-cols-12 lg:gap-8">
          <p data-reveal className="lead-serif text-[clamp(1.7rem,2.9vw,2.75rem)] lg:col-span-7">
            {p.intro}
          </p>
          <dl data-reveal className="border-b border-anthracite/12 lg:col-span-4 lg:col-start-9">
            {p.facts.map((f) => (
              <div key={f.label} className="grid grid-cols-[7.5rem_1fr] gap-4 border-t border-anthracite/12 py-4">
                <dt className="eyebrow pt-1 text-bronze-deep">{f.label}</dt>
                <dd
                  className={
                    f.placeholder
                      ? "text-[0.85rem] text-anthracite/45 italic"
                      : "font-serif text-lg leading-snug"
                  }
                >
                  {f.placeholder ? <span>— {f.value}</span> : f.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Galerie I */}
      <section aria-label="Bildgalerie" className="bg-cream pb-24 sm:pb-32 lg:pb-40">
        <figure data-reveal="mask" className="overflow-hidden lg:mx-14">
          <div className="reveal-media aspect-[4/3] sm:aspect-[16/9]">
            <div className="parallax h-full w-full">
              <Photo image={g.wide} sizes="100vw" className="h-full w-full object-cover" />
            </div>
          </div>
        </figure>
        <div className="container-x mt-4 lg:px-14">
          <p className="eyebrow text-[0.6rem] text-anthracite/50">Abendstimmung · Inspirationsbild</p>
        </div>

        <div className="container-x mt-16 grid gap-6 sm:mt-24 sm:grid-cols-12 sm:gap-8">
          <figure data-reveal="mask" className="overflow-hidden sm:col-span-5">
            <div className="reveal-media aspect-[3/4]">
              <Photo image={g.pairLeft} sizes="(min-width: 640px) 40vw, 100vw" className="h-full w-full object-cover" />
            </div>
          </figure>
          <figure
            data-reveal="mask"
            style={{ ["--reveal-delay" as string]: "150ms" }}
            className="overflow-hidden sm:col-span-7 sm:mt-32"
          >
            <div className="reveal-media aspect-[4/3]">
              <Photo image={g.pairRight} sizes="(min-width: 640px) 56vw, 100vw" className="h-full w-full object-cover" />
            </div>
          </figure>
        </div>
      </section>

      {/* Gestaltungsidee */}
      <section aria-labelledby="idee-title" className="bg-olive py-24 text-cream sm:py-32 lg:py-44">
        <div className="container-x grid gap-14 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-6">
            <p data-reveal className="eyebrow text-sand">{p.idea.label}</p>
            <h2 id="idee-title" data-reveal className="display-lg mt-8">
              {p.idea.title[0]}
              <span className="block italic text-sand">{p.idea.title[1]}</span>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 lg:pt-16">
            {p.idea.paragraphs.map((t, i) => (
              <p
                key={i}
                data-reveal
                style={{ ["--reveal-delay" as string]: `${i * 120}ms` }}
                className={i === 0 ? "lead-serif text-cream/90" : "mt-8 text-[0.98rem] leading-[1.8] text-cream/70"}
              >
                {t}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Designelemente */}
      <section aria-labelledby="elemente-title" className="bg-cream py-24 sm:py-32 lg:py-44">
        <div className="container-x grid gap-16 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <p data-reveal className="eyebrow text-bronze-deep">Besondere Designelemente</p>
              <h2 id="elemente-title" data-reveal className="display-lg mt-8">
                Fünf Entscheidungen,
                <span className="block italic text-olive">ein Raum.</span>
              </h2>
              <figure data-reveal="mask" className="mt-12 hidden overflow-hidden lg:block">
                <div className="reveal-media aspect-[16/10]">
                  <Photo image={g.detail} sizes="30vw" className="h-full w-full object-cover" />
                </div>
              </figure>
            </div>
          </div>
          <ol className="lg:col-span-7 lg:col-start-6">
            {p.elements.map((el, i) => (
              <li
                key={el.title}
                data-reveal
                className="grid grid-cols-[3.5rem_1fr] gap-4 border-t border-anthracite/12 py-9 last:border-b sm:grid-cols-[5rem_1fr] sm:py-11"
              >
                <span className="font-serif text-4xl leading-none font-light text-bronze italic sm:text-5xl">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-serif text-[1.75rem] leading-tight sm:text-[2.1rem]">{el.title}</h3>
                  <p className="mt-3 max-w-lg text-[0.95rem] leading-[1.75] text-anthracite/70">{el.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Abschlussbild */}
      <section aria-label="Abschlussbild" className="relative h-[80svh] min-h-[460px] overflow-hidden bg-anthracite">
        <div className="parallax absolute inset-0">
          <Photo image={g.closing} sizes="100vw" className="h-full w-full object-cover" />
        </div>
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#1d211d]/70 to-transparent">
          <div className="container-x flex items-end justify-between gap-6 pt-24 pb-8 text-cream">
            <p className="eyebrow text-[0.6rem] text-cream/60">Inspirationsbild · keine Galla-Referenz</p>
            <Link
              href="/#impressionen"
              className="group eyebrow inline-flex items-center gap-3 border-b border-cream/40 pb-2 hover:border-cream"
            >
              <ArrowLeft aria-hidden className="h-3.5 w-3.5 transition-transform duration-500 group-hover:-translate-x-1" strokeWidth={1.5} />
              Zurück zum Portfolio
            </Link>
          </div>
        </div>
      </section>

      <ContactSection />
    </article>
  );
}
