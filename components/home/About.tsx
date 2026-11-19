import { about, company } from "@/content/site";
import { SectionIndex } from "../SectionIndex";

export function About() {
  return (
    <section
      id="heinrich-galla"
      aria-labelledby="galla-title"
      className="relative bg-cream py-28 sm:py-36 lg:py-48"
    >
      <div className="container-x grid gap-16 lg:grid-cols-12 lg:gap-8">
        {/* Typografisches Portrait statt Foto */}
        <figure data-reveal className="lg:col-span-5 lg:sticky lg:top-32 lg:self-start">
          <div className="relative aspect-[4/5] overflow-hidden bg-beige">
            <div aria-hidden className="absolute inset-4 border border-bronze/35 sm:inset-6" />
            <div aria-hidden className="absolute inset-0 flex items-center justify-center">
              <span className="font-serif text-[clamp(9rem,30vw,19rem)] leading-none font-light tracking-[-0.06em] text-olive/90 select-none">
                H<span className="italic text-bronze">G</span>
              </span>
            </div>
            <div className="absolute inset-x-8 bottom-9 flex items-end justify-between gap-4 sm:inset-x-11 sm:bottom-12">
              <div>
                <p className="font-serif text-2xl leading-none sm:text-3xl">{company.owner}</p>
                <p className="eyebrow mt-2.5 text-bronze-deep">Inhaber · Gartengestalter</p>
              </div>
              <p className="eyebrow text-right text-anthracite/50">{company.city}</p>
            </div>
            <p className="eyebrow absolute top-9 left-8 text-anthracite/45 sm:top-12 sm:left-11">
              Gartenkunst Galla KG
            </p>
          </div>
          <figcaption className="mt-4 text-[0.7rem] leading-relaxed text-anthracite/55">
            {about.portraitNote}
          </figcaption>
        </figure>

        <div className="lg:col-span-6 lg:col-start-7 lg:pt-6">
          <SectionIndex index={about.index} label={about.label} />
          <h2 id="galla-title" data-reveal className="display-lg hyphenate mt-10 lg:mt-14">
            {about.title[0]}
            <span className="block italic text-olive">{about.title[1]}</span>
          </h2>

          <p data-reveal className="lead-serif mt-12 text-anthracite lg:mt-16">
            {about.lead}
          </p>
          {about.paragraphs.map((p, i) => (
            <p
              key={i}
              data-reveal
              style={{ ["--reveal-delay" as string]: `${100 + i * 100}ms` }}
              className="mt-7 max-w-xl text-[0.98rem] leading-[1.8] text-anthracite/75"
            >
              {p}
            </p>
          ))}

          <dl data-reveal className="mt-14 grid border-b border-anthracite/12 sm:grid-cols-2 sm:gap-x-10">
            {about.facts.map((f) => (
              <div key={f.label} className="border-t border-anthracite/12 py-6">
                <dt className="eyebrow text-bronze-deep">{f.label}</dt>
                <dd className="mt-2.5 font-serif text-xl leading-snug">{f.value}</dd>
              </div>
            ))}
          </dl>

          <p data-reveal className="mt-14 border-l border-bronze pl-6 font-serif text-2xl leading-snug font-light italic text-anthracite/85 sm:text-[1.75rem]">
            {about.closing}
          </p>
        </div>
      </div>
    </section>
  );
}
