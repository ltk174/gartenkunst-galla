import { ArrowUpRight, Clock, Info, Mail, MapPin, Phone } from "lucide-react";
import { company, contact } from "@/content/site";
import { SectionIndex } from "./SectionIndex";

export function ContactSection() {
  return (
    <section
      id="kontakt"
      aria-labelledby="kontakt-title"
      className="relative overflow-hidden bg-beige py-28 sm:py-36 lg:py-48"
    >
      <div className="container-x">
        <SectionIndex index={contact.index} label={contact.label} />

        <h2 id="kontakt-title" data-reveal className="display-xl mt-10 lg:mt-14">
          <span className="block">{contact.title[0]}</span>
          <span className="block pl-[0.5em]">{contact.title[1]}</span>
          <span className="block italic text-olive">{contact.title[2]}</span>
        </h2>

        <div className="mt-16 grid gap-16 lg:mt-24 lg:grid-cols-12 lg:gap-8">
          {/* Einladung & Ablauf */}
          <div className="lg:col-span-5">
            <p data-reveal className="lead-serif max-w-lg text-anthracite">
              {contact.subtitle}
            </p>

            <ol className="mt-14 space-y-0">
              {contact.steps.map((s, i) => (
                <li
                  key={s.no}
                  data-reveal
                  style={{ ["--reveal-delay" as string]: `${i * 100}ms` }}
                  className="grid grid-cols-[3rem_1fr] gap-4 border-t border-anthracite/15 py-6 last:border-b"
                >
                  <span className="font-serif text-lg text-bronze-deep italic">{s.no}</span>
                  <div>
                    <h3 className="font-serif text-2xl leading-none">{s.title}</h3>
                    <p className="mt-2.5 text-[0.9rem] leading-relaxed text-anthracite/70">{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* Kontaktkarte */}
          <div data-reveal className="lg:col-span-6 lg:col-start-7">
            <div className="relative bg-cream p-7 shadow-[0_40px_80px_-40px_rgba(41,45,41,0.25)] sm:p-12 lg:p-14">
              <p className="eyebrow text-bronze-deep">{company.name}</p>

              <dl className="mt-10 space-y-9">
                <div>
                  <dt className="eyebrow flex items-center gap-2.5 text-anthracite/55">
                    <Phone aria-hidden className="h-3.5 w-3.5" strokeWidth={1.5} /> Telefon
                  </dt>
                  <dd className="mt-3">
                    <a
                      href={company.phoneHref}
                      className="link-draw font-serif text-[clamp(1.9rem,3.4vw,3rem)] leading-none font-light"
                    >
                      {company.phoneDisplay}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="eyebrow flex items-center gap-2.5 text-anthracite/55">
                    <Mail aria-hidden className="h-3.5 w-3.5" strokeWidth={1.5} /> E-Mail
                  </dt>
                  <dd className="mt-3">
                    <a
                      href={company.emailHref}
                      className="link-draw font-serif text-[clamp(1.45rem,2.8vw,2.5rem)] leading-tight font-light break-words"
                    >
                      {company.email}
                    </a>
                  </dd>
                </div>
                <div className="grid gap-9 sm:grid-cols-2">
                  <div>
                    <dt className="eyebrow flex items-center gap-2.5 text-anthracite/55">
                      <MapPin aria-hidden className="h-3.5 w-3.5" strokeWidth={1.5} /> Adresse
                    </dt>
                    <dd className="mt-3 text-[0.95rem] leading-relaxed">
                      <address className="not-italic">
                        Inh. {company.owner}
                        <br />
                        {company.street}
                        <br />
                        {company.zip} {company.city}, {company.country}
                      </address>
                    </dd>
                  </div>
                  <div>
                    <dt className="eyebrow flex items-center gap-2.5 text-anthracite/55">
                      <Clock aria-hidden className="h-3.5 w-3.5" strokeWidth={1.5} /> Termine
                    </dt>
                    <dd className="mt-3 text-[0.95rem] leading-relaxed">{company.appointments}</dd>
                  </div>
                </div>
              </dl>

              <div className="mt-12 flex flex-col gap-3 sm:flex-row">
                <a
                  href={company.phoneHref}
                  className="group inline-flex items-center justify-center gap-3 rounded-full bg-olive px-7 py-4 text-[0.7rem] font-medium tracking-[0.2em] text-cream uppercase transition-colors duration-500 hover:bg-anthracite"
                >
                  Gespräch vereinbaren
                  <ArrowUpRight aria-hidden className="h-4 w-4 transition-transform duration-500 group-hover:rotate-45" strokeWidth={1.5} />
                </a>
                <a
                  href={company.emailHref}
                  className="inline-flex items-center justify-center gap-3 rounded-full border border-anthracite/25 px-7 py-4 text-[0.7rem] font-medium tracking-[0.2em] uppercase transition-colors duration-500 hover:border-olive hover:bg-olive hover:text-cream"
                >
                  E-Mail schreiben
                </a>
              </div>

              <p className="mt-10 flex items-start gap-2.5 border-t border-anthracite/10 pt-6 text-[0.72rem] leading-relaxed text-anthracite/60">
                <Info aria-hidden className="mt-0.5 h-3.5 w-3.5 shrink-0 text-bronze-deep" strokeWidth={1.5} />
                {contact.demoNotice}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
