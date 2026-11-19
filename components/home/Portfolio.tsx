import Link from "next/link";
import { ArrowUpRight, Info } from "lucide-react";
import { demo, portfolio, type PortfolioItem } from "@/content/site";
import { Photo } from "../Photo";
import { SectionIndex } from "../SectionIndex";

/** Individuelle Komposition je Position – bewusst kein gleichförmiges Raster. */
const layout = [
  { cell: "lg:col-span-8", ratio: "aspect-[4/3] lg:aspect-[16/11]", sizes: "(min-width: 1024px) 62vw, 100vw", mobile: "" },
  { cell: "lg:col-span-4 lg:mt-56", ratio: "aspect-[3/4]", sizes: "(min-width: 1024px) 30vw, 82vw", mobile: "w-[82%] ml-auto sm:w-[70%]" },
  { cell: "lg:col-span-5 lg:col-start-2 lg:mt-12", ratio: "aspect-[5/4]", sizes: "(min-width: 1024px) 38vw, 100vw", mobile: "" },
  { cell: "lg:col-span-5 lg:col-start-8 lg:mt-64", ratio: "aspect-[4/3]", sizes: "(min-width: 1024px) 38vw, 82vw", mobile: "w-[82%] ml-auto sm:w-[70%]" },
  { cell: "lg:col-span-4 lg:mt-8", ratio: "aspect-[3/4]", sizes: "(min-width: 1024px) 30vw, 82vw", mobile: "w-[82%] sm:w-[70%]" },
  { cell: "lg:col-span-7 lg:col-start-6 lg:mt-52", ratio: "aspect-[16/10]", sizes: "(min-width: 1024px) 55vw, 100vw", mobile: "" },
];

function Card({ item, index }: { item: PortfolioItem; index: number }) {
  const l = layout[index];
  const number = String(index + 1).padStart(2, "0");
  const total = String(portfolio.items.length).padStart(2, "0");

  const media = (
    <div data-reveal="mask" className="relative overflow-hidden">
      <div className={`reveal-media ${l.ratio}`}>
        <div className="zoom-media h-full w-full">
          <Photo image={item.image} sizes={l.sizes} className="h-full w-full object-cover" />
        </div>
      </div>
      {item.href && (
        <span className="absolute top-4 left-4 rounded-full bg-cream/90 px-3.5 py-1.5 text-[0.6rem] font-medium tracking-[0.2em] text-anthracite uppercase backdrop-blur sm:top-6 sm:left-6">
          Beispielprojekt
        </span>
      )}
    </div>
  );

  const caption = (
    <div data-reveal className="mt-5 flex items-start justify-between gap-6 sm:mt-6">
      <div>
        <p className="eyebrow text-bronze-deep">
          <span className="tabular-nums">{number}</span>
          <span className="text-anthracite/30"> / {total}</span>
          <span className="mx-3 text-anthracite/30">—</span>
          {item.category}
        </p>
        <p className="mt-2.5 font-serif text-[1.55rem] leading-tight font-normal sm:text-[1.8rem]">
          {item.caption}
        </p>
      </div>
      {item.href && (
        <span className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-anthracite/20 transition-all duration-500 group-hover:border-olive group-hover:bg-olive group-hover:text-cream">
          <ArrowUpRight aria-hidden className="h-4 w-4 transition-transform duration-500 group-hover:rotate-45" strokeWidth={1.25} />
        </span>
      )}
    </div>
  );

  return (
    <li className={`${l.cell} ${l.mobile} lg:ml-0 lg:w-auto`}>
      {item.href ? (
        <Link href={item.href} className="group block" aria-label={`${item.caption} – beispielhafte Projektseite ansehen`}>
          {media}
          {caption}
          <span className="eyebrow mt-4 inline-block text-anthracite/70 underline decoration-bronze/60 underline-offset-[6px] transition-colors group-hover:text-olive">
            Beispielhafte Projektseite ansehen
          </span>
        </Link>
      ) : (
        <figure className="group">
          {media}
          <figcaption>{caption}</figcaption>
        </figure>
      )}
    </li>
  );
}

export function Portfolio() {
  return (
    <section
      id="impressionen"
      aria-labelledby="impressionen-title"
      className="relative bg-cream py-28 sm:py-36 lg:py-48"
    >
      <div className="container-x">
        <SectionIndex index={portfolio.index} label={portfolio.label} />

        <div className="mt-10 grid gap-10 lg:mt-14 lg:grid-cols-12 lg:items-end lg:gap-8">
          <h2 id="impressionen-title" data-reveal className="display-xxl lg:col-span-8">
            {portfolio.title[0]}
            <span className="block pl-[0.5em] italic text-olive">{portfolio.title[1]}</span>
          </h2>
          <div className="lg:col-span-4 lg:col-start-9 lg:pb-4">
            <p data-reveal className="text-[0.98rem] leading-[1.8] text-anthracite/75">
              {portfolio.intro}
            </p>
          </div>
        </div>

        {/* Kategorien & Kennzeichnung */}
        <div
          data-reveal
          className="mt-16 flex flex-col gap-6 border-y border-anthracite/12 py-6 lg:mt-24 lg:flex-row lg:items-center lg:justify-between"
        >
          <ul className="flex flex-wrap gap-x-7 gap-y-2 font-serif text-lg text-anthracite/80 sm:text-xl">
            {portfolio.categories.map((c, i) => (
              <li key={c} className="flex items-center gap-7">
                {c}
                {i < portfolio.categories.length - 1 && (
                  <span aria-hidden className="hidden h-1 w-1 rounded-full bg-bronze sm:inline-block" />
                )}
              </li>
            ))}
          </ul>
          <p className="flex max-w-sm items-start gap-2.5 text-[0.72rem] leading-relaxed text-anthracite/65">
            <Info aria-hidden className="mt-0.5 h-3.5 w-3.5 shrink-0 text-bronze-deep" strokeWidth={1.5} />
            <span>
              <strong className="font-medium text-anthracite/85">Hinweis:</strong> {demo.imageNotice}.
            </span>
          </p>
        </div>

        <ul className="mt-16 grid gap-y-20 sm:gap-y-24 lg:mt-24 lg:grid-cols-12 lg:gap-x-8 lg:gap-y-0">
          {portfolio.items.map((item, i) => (
            <Card key={item.caption} item={item} index={i} />
          ))}
        </ul>
      </div>
    </section>
  );
}
