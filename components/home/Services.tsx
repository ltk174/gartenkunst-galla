import { services } from "@/content/site";
import { Photo } from "../Photo";
import { SectionIndex } from "../SectionIndex";

const offsets = ["lg:mt-0", "lg:mt-36", "lg:mt-72"];

export function Services() {
  return (
    <section
      id="leistungen"
      aria-labelledby="leistungen-title"
      className="relative bg-beige py-28 sm:py-36 lg:py-48"
    >
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-8">
          <div className="lg:col-span-8">
            <SectionIndex index={services.index} label={services.label} />
            <h2 id="leistungen-title" data-reveal className="display-xl hyphenate mt-10 lg:mt-14">
              {services.title[0]}
              <span className="block italic text-olive">{services.title[1]}</span>
            </h2>
          </div>
          <p
            data-reveal
            style={{ ["--reveal-delay" as string]: "150ms" }}
            className="max-w-md text-[0.98rem] leading-[1.8] text-anthracite/75 lg:col-span-4 lg:pb-3"
          >
            {services.intro}
          </p>
        </div>

        <ol className="mt-20 grid gap-20 sm:mt-24 md:grid-cols-2 md:gap-x-8 lg:mt-32 lg:grid-cols-3 lg:gap-x-10 xl:gap-x-14">
          {services.items.map((item, i) => (
            <li key={item.title} className={`group ${offsets[i]} ${i === 2 ? "md:col-span-2 md:max-w-[calc(50%-1rem)] lg:col-span-1 lg:max-w-none" : ""}`}>
              <article>
                <div data-reveal="mask" style={{ ["--reveal-delay" as string]: `${i * 120}ms` }} className="overflow-hidden">
                  <div className="reveal-media aspect-[4/5]">
                    <div className="zoom-media h-full w-full">
                      <Photo
                        image={item.image}
                        sizes="(min-width: 1024px) 30vw, (min-width: 768px) 46vw, 100vw"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                <div data-reveal style={{ ["--reveal-delay" as string]: `${120 + i * 120}ms` }} className="mt-9">
                  <div className="flex items-baseline gap-5 border-b border-anthracite/15 pb-6">
                    <span aria-hidden className="w-10 shrink-0 font-serif text-3xl leading-none text-bronze italic">
                      {item.numeral}
                    </span>
                    <h3 className="hyphenate font-serif text-[clamp(1.75rem,2.4vw,2.35rem)] leading-[1.08] font-normal">
                      {item.title}
                    </h3>
                  </div>
                  <p className="mt-6 text-[0.95rem] leading-[1.8] text-anthracite/75 sm:pl-15">{item.text}</p>
                  <ul className="mt-7 space-y-0 sm:pl-15">
                    {item.details.map((d) => (
                      <li
                        key={d}
                        className="flex items-center gap-3 border-t border-anthracite/10 py-3 text-[0.8rem] tracking-[0.04em] text-anthracite/80"
                      >
                        <span aria-hidden className="h-px w-4 bg-bronze" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
