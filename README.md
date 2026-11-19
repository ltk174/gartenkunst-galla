# Gartenkunst Galla – Redesign-Entwurf

> **Unverbindlicher Designentwurf – keine offizielle Website.**
> Ein Gestaltungsvorschlag für die Gartenkunst Galla KG (Knittelfeld). Alle Fotos sind lizenzierte
> Inspirationsbilder (Unsplash) und zeigen keine von Gartenkunst Galla ausgeführten Projekte.

Statische Website auf Basis von **Next.js 16 (App Router)**, **TypeScript**, **Tailwind CSS 4** und
**Lucide Icons**. Kein Backend, kein CMS, keine Datenbank, keine Formulare, kein Tracking.

- Konzept, Analyse der bestehenden Website und Designsystem: [`KONZEPT.md`](./KONZEPT.md)
- Bildquellen und Lizenzen: [`BILDNACHWEIS.md`](./BILDNACHWEIS.md)

## Seiten

| Route | Inhalt |
|---|---|
| `/` | Startseite: Hero, Philosophie, Leistungen, Impressionen, Qualität & Handwerk, Heinrich Galla, Bildpause, Kontakt |
| `/projekte/gestaltungskonzept` | Beispielhafte Projekt-Detailseite (deutlich als Beispiel mit Inspirationsbildern gekennzeichnet) |
| `/impressum`, `/datenschutz` | Nicht produktive Demo-Bereiche mit Verweis auf die offizielle Website – keine erfundenen Rechtstexte |
| `/bildnachweis` | Bildquellen und Lizenz auf der Website selbst |

## Entwicklung

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint
npm run build    # erzeugt den statischen Export im Ordner out/
```

## Inhalte anpassen

Alle Texte, Kontaktdaten, Navigationspunkte, Bilder (inkl. Alt-Texte) und die Inhalte der
Projektseite liegen zentral in **[`content/site.ts`](./content/site.ts)**. Komponenten enthalten
keine fest eingetragenen Texte.

**Bilder austauschen:** Für ein Bild `name` werden WebP-Dateien in mehreren Breiten erwartet,
z. B. `public/images/name-640.webp`, `-1080`, `-1600` (optional `-2400`). Danach den Eintrag in
`images` in `content/site.ts` anlegen bzw. anpassen (Breite/Höhe des Originals, verfügbare
Breiten, Platzhalterfarbe, Alt-Text, Quelle).

## Deployment

### Vercel (Vorschau-URL)

1. Repository in Vercel importieren („Add New… → Project“).
2. Framework wird automatisch als Next.js erkannt – keine weiteren Einstellungen nötig.
3. Vercel vergibt eine eigene Vorschau-URL (`*.vercel.app`). **Keine eigene Domain verknüpfen**
   und die echte Unternehmensdomain nicht verändern.

### Gewöhnliches Webhosting

`npm run build` erzeugt im Ordner `out/` reines HTML/CSS/JS. Den **Inhalt** von `out/` per FTP/SFTP
in das Web-Root (z. B. eine Subdomain) hochladen. Durch `trailingSlash: true` liegt jede Seite als
`ordner/index.html` vor und funktioniert ohne Server-Konfiguration. Die Website erwartet, im
Wurzelverzeichnis einer (Sub-)Domain zu liegen.

## Demo-Schutzmaßnahmen

- Hinweis „Unverbindlicher Designentwurf – keine offizielle Website“ auf jeder Seite (Kopfzeile) und im Footer
- `noindex, nofollow` per Meta-Robots auf allen Seiten sowie `robots.txt` mit `Disallow: /`
- Keine Formulare, keine Datenübertragung, keine Cookies, keine eingebetteten Drittanbieterdienste
- Schriften werden lokal ausgeliefert (über `next/font`)
- Keine erfundenen Referenzen, Bewertungen, Auszeichnungen oder Unternehmenskennzahlen
- Kein Nachbau des bestehenden Logos (eigene typografische Wortmarke)

## Technik

- Statischer Export (`output: "export"`), Vercel-kompatibel
- Responsive Bilder mit vorgerenderten WebP-Größen und `srcset`/`sizes`, Lazy Loading, Platzhalterfarben
- Animationen: ein einziger `IntersectionObserver` für Scroll-Reveals; Parallaxe über
  CSS Scroll-Driven Animations (progressive Verbesserung); `prefers-reduced-motion` wird vollständig respektiert
- Barrierearm: semantische Landmarks, Skip-Link, sichtbarer Fokus, zugängliches mobiles Menü
  (Fokusführung, Escape, Scroll-Sperre), Alt-Texte, ausreichende Kontraste
- Abhängigkeiten zur Laufzeit: `next`, `react`, `react-dom`, `lucide-react`
