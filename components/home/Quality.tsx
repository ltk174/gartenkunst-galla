import { quality } from "@/content/site";
import { Photo } from "../Photo";
import { SectionIndex } from "../SectionIndex";

export function Quality() {
  return (
    <section
      id="haltung"
      aria-labelledby="haltung-title"
      className="relative overflow-hidden bg-olive py-28 text-cream sm:py-36 lg:py-48"
    >
      {/* feine Strukturlinien im Hintergrund */}
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.07]">
        <div className="container-x grid h-full grid-cols-4 lg:grid-cols-12">
          {Array.from({ length: 12 }).map((_, i) => (
            <span key={i} className={`border-l border-cream ${i >= 4 ? "hidden lg:block" : ""}`} />
          ))}
        </div>
      </div>

      <div className="container-x relative">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <SectionIndex index={quality.index} label={quality.label} tone="light" />
            <h2 id="haltung-title" data-reveal className="display-xl hyphenate mt-10 lg:mt-14">
              {quality.title[0]}
              <span className="block pl-[0.6em] italic text-sand">{quality.title[1]}</span>
            </h2>
            <p
              data-reveal
              style={{ ["--reveal-delay" as string]: "150ms" }}
              className="lead-serif mt-12 max-w-xl text-cream/85 lg:mt-16"
            >
              {quality.text}
            </p>
          </div>

          <figure className="lg:col-span-4 lg:col-start-9 lg:mt-24">
            <div data-reveal="mask" className="overflow-hidden">
              <div className="reveal-media aspect-[4/5] lg:aspect-[3/4]">
                <div className="parallax h-full w-full">
                  <Photo
                    image={quality.image}
                    sizes="(min-width: 1024px) 32vw, 100vw"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
            <figcaption className="eyebrow mt-4 text-[0.6rem] text-cream/50">
              Materialstudie · Bildwelt zur Designillustration
            </figcaption>
          </figure>
        </div>

        <ol className="mt-24 grid gap-x-10 gap-y-6 sm:grid-cols-2 lg:mt-36 lg:grid-cols-4 lg:gap-x-12">
          {quality.principles.map((p, i) => (
            <li
              key={p.title}
              data-reveal
              style={{ ["--reveal-delay" as string]: `${i * 110}ms` }}
              className="border-t border-cream/20 pt-8 pb-6"
            >
              <span className="font-serif text-lg text-bronze italic">0{i + 1}</span>
              <h3 className="mt-6 font-serif text-[2rem] leading-none font-normal">{p.title}</h3>
              <p className="mt-5 text-[0.92rem] leading-[1.75] text-cream/70">{p.text}</p>
            </li>
          ))}
        </ol>

        <blockquote data-reveal className="mt-28 grid gap-8 border-t border-cream/15 pt-14 lg:mt-36 lg:grid-cols-12 lg:gap-8 lg:pt-20">
          <p className="eyebrow text-sand/80 lg:col-span-3">Höchste heimische Qualität</p>
          <div className="lg:col-span-9">
            <p className="font-serif text-[clamp(1.8rem,3.6vw,3.4rem)] leading-[1.15] font-light">
              <span aria-hidden className="text-bronze">„</span>
              {quality.quote}
              <span aria-hidden className="text-bronze">“</span>
            </p>
            <footer className="eyebrow mt-8 text-sand/70">— {quality.quoteSource}</footer>
          </div>
        </blockquote>
      </div>
    </section>
  );
}
