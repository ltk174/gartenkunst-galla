import { philosophy } from "@/content/site";
import { Photo } from "../Photo";
import { SectionIndex } from "../SectionIndex";

export function Philosophy() {
  const elements = philosophy.elements;
  return (
    <section
      id="philosophie"
      aria-labelledby="philosophie-title"
      className="relative overflow-hidden bg-cream pt-28 sm:pt-36 lg:pt-48"
    >
      <div className="container-x">
        <SectionIndex index={philosophy.index} label={philosophy.label} />

        <h2 id="philosophie-title" data-reveal className="display-xl hyphenate mt-10 max-w-[14ch] lg:mt-14">
          {philosophy.title[0]}{" "}
          <span className="block pl-[8%] italic text-olive lg:pl-[18%]">{philosophy.title[1]}</span>
        </h2>

        <div className="mt-16 grid gap-14 lg:mt-24 lg:grid-cols-12 lg:gap-8">
          {/* Bildkomposition */}
          <div className="relative lg:col-span-7">
            <figure data-reveal="mask" className="relative overflow-hidden">
              <div className="reveal-media aspect-[4/5] sm:aspect-[5/4] lg:aspect-[6/5]">
                <div className="parallax h-full w-full">
                  <Photo
                    image={philosophy.image}
                    sizes="(min-width: 1024px) 56vw, 100vw"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </figure>

            <figure
              data-reveal="mask"
              style={{ ["--reveal-delay" as string]: "250ms" }}
              className="absolute -bottom-12 -right-1 w-[38%] overflow-hidden border-[6px] border-cream sm:-bottom-16 sm:w-[32%] lg:-right-[18%] lg:-bottom-24 lg:w-[34%] lg:border-[10px]"
            >
              <div className="reveal-media aspect-[3/4]">
                <Photo
                  image={philosophy.detailImage}
                  sizes="(min-width: 1024px) 20vw, 38vw"
                  className="h-full w-full object-cover"
                />
              </div>
            </figure>
          </div>

          {/* Text */}
          <div className="mt-10 lg:col-span-4 lg:col-start-9 lg:mt-48">
            <p data-reveal className="lead-serif text-anthracite">
              {philosophy.lead}
            </p>
            {philosophy.paragraphs.map((p, i) => (
              <p
                key={i}
                data-reveal
                style={{ ["--reveal-delay" as string]: `${120 + i * 100}ms` }}
                className="mt-7 text-[0.98rem] leading-[1.8] text-anthracite/75"
              >
                {p}
              </p>
            ))}
          </div>
        </div>

        {/* Zitat */}
        <blockquote data-reveal className="mx-auto mt-32 max-w-4xl text-center sm:mt-40 lg:mt-52">
          <span aria-hidden className="block font-serif text-7xl leading-none text-bronze/70">
            “
          </span>
          <p className="mt-2 font-serif text-[clamp(1.9rem,4.2vw,3.75rem)] leading-[1.12] font-light italic">
            {philosophy.quote}
          </p>
        </blockquote>
      </div>

      {/* Laufband: Elemente der Gestaltung */}
      <div className="mt-24 border-y border-anthracite/10 py-7 sm:mt-32 lg:py-9">
        <p className="eyebrow container-x mb-5 text-bronze-deep">{philosophy.elementsLabel}</p>
        <div className="marquee overflow-hidden">
          <div className="marquee-track">
            {[0, 1].map((copy) => (
              <ul
                key={copy}
                aria-hidden={copy === 1 || undefined}
                className={`flex shrink-0 flex-wrap ${copy === 1 ? "marquee-duplicate" : ""}`}
              >
                {elements.map((el) => (
                  <li
                    key={el}
                    className="flex shrink-0 items-center font-serif text-[clamp(2rem,4.2vw,3.6rem)] leading-tight font-light text-anthracite/85"
                  >
                    <span className="px-6 sm:px-9">{el}</span>
                    <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-bronze" />
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
