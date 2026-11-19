# Konzept – Redesign Gartenkunst Galla

## 1. Analyse der bestehenden Website (gartenkunst-galla.at, Stand November 2026)

**Technik & Aufbau.** WordPress-Onepager mit den Ankern Start, Gartenkunst, Gestaltung, Qualität,
Kontakt sowie separaten Seiten für Impressum und Datenschutz. Eingebunden sind Platzhalter für
Facebook, Instagram, X, Google Maps und reCAPTCHA (Consent-Overlays), dazu ein WhatsApp-Button.

**Positionierung.** „Gartenkunst Galla – Edelschmiede für außergewöhnliche Gärten“. Maßgeschneiderte
Gartenkunst für höchste Ansprüche; Heinrich Galla versteht sich „in erster Linie als Handwerker, der
den Dingen auf den Grund geht“ – aus dem Handwerk „darf dann Gartenkunst erwachsen“.

**Leistungen.** Individuelle Garten- und Außengestaltung von der Planung bis zur Fertigstellung, „alles
aus einer Hand“. Bei Bedarf Einbindung bewährter Partnerbetriebe bzw. Organisation der Ausführung.
Stilistische Breite: „Vom Bauerngarten über reduziertes Gartendesign bis hin zur kompletten
Außengestaltung eines Barockschlosses.“

**Zielgruppe.** Private Auftraggeber, Unternehmen, „darunter zahlreiche Tourismusbetriebe“ –
Menschen, die sich „nicht mit halbherzigen Konzepten oder Lösungen von der Stange“ zufriedengeben.

**Philosophie.** Der Garten als erweiterter Wohn- und Gestaltungsraum; architektonisches Konzept
und Wohnatmosphäre sollen sich in der Gartenlandschaft wiederfinden. Gestaltungskomponenten:
Pflanzen, räumliche Strukturen, Stein, Wasser, Wege, Achsen, Perspektiven, Durchblicke, Verläufe
und Übergänge, Gegenüberstellungen, Wachstum, Farben.

**Kontakt.** Gartenkunst Galla KG, Inh. Heinrich Galla, Marktgasse 16a, 8720 Knittelfeld,
Tel. +43 3512 823860, heinrich-galla@speed.at, Termine nur nach Vereinbarung.

**Bildsprache.** Eigene Projektfotos und mehrere iStock-Bilder (im Dateinamen gekennzeichnet) –
für den Entwurf **nicht** übernommen.

### Verbesserungspotenzial

| Bereich | Beobachtung | Antwort im Entwurf |
|---|---|---|
| Wirkung | Starke Inhalte, aber Gestaltung wirkt wie ein Standard-Theme | Editoriales Layout im Stil eines Architekturmagazins |
| Text | Lange, dichte Absätze; teils Tippfehler (z. B. „Gestaltungskomponeneten“, „vom der Planung“) | Kurze, präzise Absätze; Kernaussagen als Zitate und Überschriften |
| Struktur | Leistungen und Philosophie vermischt | Klare Kapitel 01–06 mit eindeutiger Benutzerführung |
| Projekte | Bilder als Galerie ohne Kontext | Kuratiertes Portfolio + Vorlage für Projekt-Detailseiten |
| Kontakt | Kontaktdaten vorhanden, aber kein klarer Abschluss; Telefonnummer im Footer abweichend (823 60 statt 823 860) | Eigene Kontaktsektion mit klarer Handlungsaufforderung, konsistente Daten aus einer zentralen Datei |
| Technik | Viele Drittanbieter-Einbettungen und Consent-Overlays | Keine Drittanbieter, lokale Schriften, statischer Export |
| Person | Heinrich Galla wird im Text erwähnt, aber kaum inszeniert | Eigene Sektion „Persönlichkeit schafft Einzigartigkeit“ |

## 2. Gestaltungskonzept: „Monografie eines Gartens“

Die Website verhält sich wie ein hochwertiges Architektur-Buch: großformatige Bilder, ruhige
Kapitelmarken („01 —— Philosophie“), viel Weißraum, asymmetrische Kompositionen und eine
Typografie, die zwischen monumentaler Serif und zurückhaltender Grotesk wechselt. Der Rhythmus der
Hintergründe – dunkel, creme, beige, creme, olive, creme, Bild, beige, anthrazit – erzeugt beim
Scrollen ein Gefühl von Räumen, die man nacheinander betritt.

### Farben

| Token | Wert | Rolle |
|---|---|---|
| `olive` | `#303C32` | Haltung, Qualitäts-Sektion, Primär-Button, Menü |
| `cream` | `#F7F6F1` | Grundfläche |
| `beige` | `#E9E4D9` | Leistungen, Kontakt |
| `sand` | `#D6C9B5` | Akzente auf dunklem Grund |
| `anthracite` | `#292D29` | Text, Footer |
| `bronze` | `#A88E6D` | Ziffern, Linien, Akzentpunkte |
| `bronze-deep` | `#7A6448` | kleine Bronze-Schrift auf hellem Grund (Kontrast ≥ 4,5 : 1) |

### Typografie

- **Cormorant Garamond** (300/400/500, kursiv) – Display-Überschriften bis ca. 200 px, Zitate, Ziffern.
  Die kursive zweite Zeile („*die bleiben.*“) ist das wiederkehrende Signaturmotiv.
- **Hanken Grotesk** – Fließtext, Navigation, gesperrte Versal-Labels.
- Flüssige Schriftgrößen über `clamp()`, eigene Mobil-Skalierung, Silbentrennung für lange Wörter.

### Bildsprache

Architektonische Gärten in Dämmerung und Tageslicht, ruhige Wasserflächen, Pflanzendetails als
„Materialstudien“. Eine einheitliche, leicht entsättigte Farbanmutung verbindet Stockfotos
unterschiedlicher Herkunft. Alle Bilder sind als Designillustration gekennzeichnet.

### Bewegung

Langsame, weiche Kurven (1,2–2,2 s): Zeilen der Hero-Headline steigen aus einer Maske auf, das
Hero-Bild „setzt sich“, Bilder öffnen sich beim Scrollen mit einer Maske, dezente Parallaxe und
Hover-Zoom auf Projektbildern. Bei `prefers-reduced-motion` entfallen alle Bewegungen.

## 3. Nächste Schritte bei Beauftragung

1. Echte Projektfotografie (idealerweise professionelles Shooting ausgewählter Gärten)
2. Autorisiertes Portrait von Heinrich Galla
3. Freigabe und Feinschliff der Texte gemeinsam mit dem Unternehmen
4. Echte Projekt-Detailseiten mit realen Angaben
5. Impressum und Datenschutzerklärung durch das Unternehmen bzw. Rechtsberatung
6. Optional: datensparsames Kontaktformular, Domain-Umstellung, Indexierung freigeben
