"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { company, contactLink, demo, navigation } from "@/content/site";
import { Wordmark } from "./Wordmark";

/** Seiten mit vollflächigem Hero-Bild – dort startet der Header transparent. */
const HERO_ROUTES = ["/", "/projekte/gestaltungskonzept"];

export function Header() {
  const pathname = usePathname();
  const normalized = pathname.length > 1 ? pathname.replace(/\/$/, "") : pathname;
  const hasHero = HERO_ROUTES.includes(normalized);

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = useCallback(() => {
    setOpen(false);
    toggleRef.current?.focus();
  }, []);

  // Menü bei Seitenwechsel schließen (State-Anpassung während des Renderns)
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setOpen(false);
  }

  // Scroll-Sperre, Escape-Taste und Fokusführung im mobilen Menü
  useEffect(() => {
    if (!open) return;
    const { body } = document;
    const previous = body.style.overflow;
    body.style.overflow = "hidden";

    const focusables = () =>
      Array.from(
        menuRef.current?.querySelectorAll<HTMLElement>("a[href], button:not([disabled])") ?? [],
      );
    focusables()[0]?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        close();
        return;
      }
      if (event.key !== "Tab") return;
      const items = focusables();
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close]);

  const transparent = hasHero && !scrolled && !open;

  return (
    <>
      <a
        href="#inhalt"
        className="eyebrow fixed top-2 left-2 z-[70] -translate-y-24 bg-cream px-4 py-3 text-anthracite transition focus:translate-y-0"
      >
        Zum Inhalt springen
      </a>

      <header className="fixed inset-x-0 top-0 z-50">
        {/* Demo-Kennzeichnung – auf jeder Seite sichtbar */}
        <div className="bg-olive-deep text-sand">
          <p className="container-x flex h-7 items-center justify-center gap-2 text-center text-[0.625rem] font-medium tracking-[0.18em] uppercase sm:text-[0.65rem]">
            <span aria-hidden className="inline-block h-1 w-1 rounded-full bg-bronze" />
            <span className="sm:hidden">{demo.bannerShort}</span>
            <span className="hidden sm:inline">{demo.banner}</span>
          </p>
        </div>

        <div
          className={`transition-[background-color,color,box-shadow,backdrop-filter] duration-700 ease-[var(--ease-soft)] ${
            transparent
              ? "bg-transparent text-cream"
              : open
                ? "bg-olive text-cream"
                : "bg-cream/92 text-anthracite shadow-[0_1px_0_rgba(41,45,41,0.08)] backdrop-blur-md"
          }`}
        >
          <nav
            aria-label="Hauptnavigation"
            className={`container-x flex items-center justify-between transition-[height] duration-700 ease-[var(--ease-soft)] ${
              transparent ? "h-20 lg:h-24" : "h-16 lg:h-20"
            }`}
          >
            <Link href="/" aria-label={`${company.shortName} – Startseite`} className="shrink-0">
              <Wordmark />
            </Link>

            <ul className="hidden items-center gap-9 lg:flex xl:gap-11">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="link-draw pb-1 text-[0.7rem] font-medium tracking-[0.2em] uppercase"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-3">
              <Link
                href={contactLink.href}
                className={`group hidden items-center gap-2 rounded-full border px-5 py-2.5 text-[0.7rem] font-medium tracking-[0.2em] uppercase transition-colors duration-500 sm:inline-flex ${
                  transparent
                    ? "border-cream/40 hover:bg-cream hover:text-anthracite"
                    : "border-anthracite/20 hover:border-olive hover:bg-olive hover:text-cream"
                }`}
              >
                {contactLink.label}
                <ArrowUpRight
                  aria-hidden
                  className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  strokeWidth={1.5}
                />
              </Link>

              <button
                ref={toggleRef}
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                aria-controls="mobile-menu"
                className="-mr-2 inline-flex h-11 items-center gap-2.5 px-2 text-[0.7rem] font-medium tracking-[0.2em] uppercase lg:hidden"
              >
                <span>{open ? "Schließen" : "Menü"}</span>
                {open ? (
                  <X aria-hidden className="h-5 w-5" strokeWidth={1.25} />
                ) : (
                  <Menu aria-hidden className="h-5 w-5" strokeWidth={1.25} />
                )}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobiles Vollbild-Menü */}
      <div
        id="mobile-menu"
        ref={menuRef}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation"
        hidden={!open}
        className="fixed inset-0 z-40 flex flex-col overflow-y-auto bg-olive pt-[7.25rem] text-cream lg:hidden"
      >
        <div className="container-x flex flex-1 flex-col justify-between pb-10">
          <ul className="flex flex-col border-t border-cream/10">
            {[...navigation, contactLink].map((item, i) => (
              <li
                key={item.href}
                className="hero-fade border-b border-cream/10"
                style={{ ["--line-delay" as string]: `${80 + i * 60}ms` }}
              >
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline gap-5 py-4 font-serif text-[2.35rem] leading-none font-light sm:text-5xl"
                >
                  <span className="w-7 font-sans text-[0.65rem] tracking-[0.2em] text-sand/70">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div
            className="hero-fade mt-12 space-y-5 text-sm"
            style={{ ["--line-delay" as string]: "520ms" }}
          >
            <p className="eyebrow text-sand/80">{company.tagline}</p>
            <div className="space-y-1.5 text-cream/85">
              <a href={company.phoneHref} className="block py-1">
                {company.phoneDisplay}
              </a>
              <a href={company.emailHref} className="block py-1">
                {company.email}
              </a>
              <p className="pt-1 text-cream/60">
                {company.street}, {company.zip} {company.city}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
