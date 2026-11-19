import Link from "next/link";
import { company, contactLink, demo, navigation } from "@/content/site";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-anthracite text-cream/70">
      <div className="container-x pt-24 pb-10 lg:pt-32">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <p className="font-serif text-4xl leading-[1.05] font-light text-cream sm:text-5xl">
              Gärten, die bleiben.
            </p>
            <p className="mt-6 max-w-sm text-sm leading-relaxed">
              Individuelle Garten- und Landschaftsgestaltung – von der Planung bis zur Ausführung. Alles aus einer Hand.
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-3 lg:col-span-7 lg:gap-8">
            <div>
              <h2 className="eyebrow mb-5 font-sans text-sand">Kontakt</h2>
              <address className="space-y-1 text-sm leading-relaxed not-italic">
                <span className="block text-cream">{company.name}</span>
                <span className="block">Inh. {company.owner}</span>
                <span className="block">{company.street}</span>
                <span className="block">
                  {company.zip} {company.city}, {company.country}
                </span>
                <a href={company.phoneHref} className="link-draw mt-3 inline-block text-cream">
                  {company.phoneDisplay}
                </a>
                <br />
                <a href={company.emailHref} className="link-draw inline-block text-cream">
                  {company.email}
                </a>
              </address>
            </div>

            <nav aria-label="Fußnavigation">
              <h2 className="eyebrow mb-5 font-sans text-sand">Navigation</h2>
              <ul className="space-y-2 text-sm">
                {[...navigation, contactLink].map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="link-draw">
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/projekte/gestaltungskonzept" className="link-draw">
                    Beispielprojekt
                  </Link>
                </li>
              </ul>
            </nav>

            <div>
              <h2 className="eyebrow mb-5 font-sans text-sand">Entwurf</h2>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/impressum" className="link-draw">
                    Impressum <span className="text-cream/45">(Demo)</span>
                  </Link>
                </li>
                <li>
                  <Link href="/datenschutz" className="link-draw">
                    Datenschutz <span className="text-cream/45">(Demo)</span>
                  </Link>
                </li>
                <li>
                  <Link href="/bildnachweis" className="link-draw">
                    Bildnachweis
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-20 border-t border-cream/10 pt-8 lg:mt-28">
          <div className="flex flex-col gap-4 text-xs leading-relaxed lg:flex-row lg:items-start lg:justify-between lg:gap-16">
            <p className="flex items-center gap-2.5 text-sand">
              <span aria-hidden className="inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-bronze" />
              <strong className="font-medium tracking-[0.14em] uppercase">{demo.banner}</strong>
            </p>
            <p className="max-w-2xl text-cream/55">{demo.footer}</p>
          </div>
        </div>
      </div>

      {/* Monumentale Wortmarke als ruhiger Abschluss */}
      <p
        aria-hidden
        className="pointer-events-none -mb-[0.2em] text-center font-serif text-[18.5vw] leading-[0.8] font-light tracking-[-0.03em] whitespace-nowrap text-cream/[0.06] select-none"
      >
        Gartenkunst
      </p>
    </footer>
  );
}
