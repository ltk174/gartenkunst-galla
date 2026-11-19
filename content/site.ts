/**
 * Zentrale Inhaltsdatei
 * ---------------------------------------------------------------
 * Alle Texte, Kontaktdaten, Navigationspunkte und Bilder der Website
 * werden hier gepflegt. Komponenten lesen ausschließlich aus dieser Datei.
 *
 * Bilder: Dateien liegen unter /public/images/<key>-<breite>.webp.
 * Herkunft und Lizenz aller Bilder: siehe BILDNACHWEIS.md
 */

/* ------------------------------------------------------------------ */
/* Unternehmen & Kontakt                                               */
/* ------------------------------------------------------------------ */

export const company = {
  name: "Gartenkunst Galla KG",
  shortName: "Gartenkunst Galla",
  owner: "Heinrich Galla",
  tagline: "Edelschmiede für außergewöhnliche Gärten",
  street: "Marktgasse 16a",
  zip: "8720",
  city: "Knittelfeld",
  region: "Steiermark",
  country: "Österreich",
  phoneDisplay: "+43 3512 823860",
  phoneHref: "tel:+433512823860",
  email: "heinrich-galla@speed.at",
  emailHref:
    "mailto:heinrich-galla@speed.at?subject=" +
    encodeURIComponent("Anfrage Gartengestaltung"),
  appointments: "Termine nur nach Vereinbarung",
  officialWebsite: "https://www.gartenkunst-galla.at/",
  officialImprint: "https://www.gartenkunst-galla.at/impressum/",
  officialPrivacy: "https://www.gartenkunst-galla.at/datenschutzerklaerung",
} as const;

/* ------------------------------------------------------------------ */
/* Demo-Kennzeichnung                                                  */
/* ------------------------------------------------------------------ */

export const demo = {
  banner: "Unverbindlicher Designentwurf – keine offizielle Website",
  bannerShort: "Designentwurf – keine offizielle Website",
  imageNotice:
    "Bildwelt zur Designillustration – keine dokumentierten Galla-Referenzprojekte",
  footer:
    "Dieser Entwurf ist ein unverbindlicher Gestaltungsvorschlag und nicht die offizielle Website der Gartenkunst Galla KG. Sämtliche Fotografien sind lizenzierte Inspirationsbilder (Unsplash) und zeigen keine von Gartenkunst Galla ausgeführten Projekte.",
} as const;

/* ------------------------------------------------------------------ */
/* Navigation                                                          */
/* ------------------------------------------------------------------ */

export const navigation = [
  { label: "Philosophie", href: "/#philosophie" },
  { label: "Leistungen", href: "/#leistungen" },
  { label: "Impressionen", href: "/#impressionen" },
  { label: "Haltung", href: "/#haltung" },
  { label: "Heinrich Galla", href: "/#heinrich-galla" },
] as const;

export const contactLink = { label: "Kontakt", href: "/#kontakt" } as const;

/* ------------------------------------------------------------------ */
/* Bilder                                                              */
/* ------------------------------------------------------------------ */

export type ImageAsset = {
  /** Dateiname ohne Breite/Endung */
  file: string;
  /** Seitenverhältnis des Originals */
  width: number;
  height: number;
  /** verfügbare Breiten in /public/images */
  widths: number[];
  /** Platzhalterfarbe während des Ladens */
  color: string;
  alt: string;
  /** Quelle (Unsplash-CDN-ID) – siehe BILDNACHWEIS.md */
  source: string;
};

const W4 = [640, 1080, 1600, 2400];
const W3 = [640, 1080, 1600];

export const images = {
  gardenDusk: {
    file: "garden-dusk",
    width: 2600,
    height: 1733,
    widths: W4,
    color: "#565a59",
    alt: "Moderner Wohngarten in der Abenddämmerung: großer Bestandsbaum, ruhige Rasenfläche und eine beleuchtete, offene Architektur aus Holz und Glas",
    source: "photo-1600585154340-be6161a56a0c",
  },
  gardenDay: {
    file: "garden-day",
    width: 2600,
    height: 1733,
    widths: W4,
    color: "#74766a",
    alt: "Zeitgenössisches Wohnhaus mit Holzfassade, alter Baum mit hellem Stamm und eine weite Rasenfläche bei Tageslicht",
    source: "photo-1600607688969-a5bfcd646154",
  },
  gardenNight: {
    file: "garden-night",
    width: 2600,
    height: 1733,
    widths: W4,
    color: "#575a57",
    alt: "Kubisches Haus mit schwarzer Fassade am Abend, umrahmt von großen Bäumen, mit sanft beleuchteten Stufen und Rasenterrassen",
    source: "photo-1600585154363-67eb9e2e2099",
  },
  cubicHouse: {
    file: "cubic-house-lawn",
    width: 2600,
    height: 1733,
    widths: W4,
    color: "#5d6164",
    alt: "Dunkle, kubische Architektur mit hohen Fensterbändern über einer gepflegten Rasenfläche in der blauen Stunde",
    source: "photo-1600585153490-76fb20a32601",
  },
  timberGravel: {
    file: "timber-gravel",
    width: 2600,
    height: 1733,
    widths: W4,
    color: "#7e7f7b",
    alt: "Moderner Eingangsbereich mit Holzverkleidung, großflächigen Natursteinplatten, Kiesflächen und Gräsern",
    source: "photo-1600566753190-17f0baa2a6c3",
  },
  wisteria: {
    file: "wisteria-walk",
    width: 2600,
    height: 3579,
    widths: W3,
    color: "#7f8669",
    alt: "Langer Gartenweg unter einem blühenden Glyzinien-Laubengang mit Licht und Schatten",
    source: "photo-1558293842-c0fd3db86157",
  },
  roseHedge: {
    file: "rose-hedge-path",
    width: 2600,
    height: 1463,
    widths: W4,
    color: "#7f7841",
    alt: "Von Buchshecken gesäumter Gartenweg zwischen blühenden Rosen, der auf einen kleinen Pavillon zuläuft",
    source: "photo-1585320806297-9794b3e4eeae",
  },
  naturalGarden: {
    file: "natural-garden",
    width: 2600,
    height: 1950,
    widths: W4,
    color: "#718d48",
    alt: "Naturnaher Landschaftsgarten mit lichter Wiese, Gehölzgruppen und blühenden Stauden am Rand",
    source: "photo-1594498653385-d5172c532c00",
  },
  cypressPool: {
    file: "cypress-pool-garden",
    width: 2600,
    height: 1733,
    widths: W4,
    color: "#5b6751",
    alt: "Mediterran anmutender Garten mit Pool, Natursteinmauer, Holzdeck und hohen Zypressen",
    source: "photo-1576013551627-0cc20b96c2a7",
  },
  poolTerrace: {
    file: "pool-terrace-dusk",
    width: 2600,
    height: 3900,
    widths: W3,
    color: "#483445",
    alt: "Terrasse mit schmalem Wasserbecken und Holzdeck vor einem farbigen Abendhimmel",
    source: "photo-1544984243-ec57ea16fe25",
  },
  mistyLake: {
    file: "misty-lake",
    width: 2600,
    height: 1830,
    widths: W4,
    color: "#717777",
    alt: "Stille Wasserfläche im Morgennebel, in der sich eine Baumgruppe spiegelt",
    source: "photo-1477322524744-0eece9e79640",
  },
  foliage: {
    file: "foliage-detail",
    width: 2600,
    height: 4622,
    widths: W3,
    color: "#273f38",
    alt: "Dichtes, dunkelgrünes Blattwerk in der Aufsicht",
    source: "photo-1518531933037-91b2f5f229cc",
  },
  succulent: {
    file: "succulent-detail",
    width: 2600,
    height: 3936,
    widths: W3,
    color: "#3c5650",
    alt: "Rosettenförmige Sukkulenten in gedämpften Grüntönen als Detailaufnahme",
    source: "photo-1446071103084-c257b5f70672",
  },
  fern: {
    file: "fern-detail",
    width: 2600,
    height: 3898,
    widths: W3,
    color: "#0b2a10",
    alt: "Farnwedel in tiefem Grün",
    source: "photo-1497250681960-ef046c08a56e",
  },
  lawnDetail: {
    file: "lawn-detail",
    width: 2600,
    height: 1463,
    widths: W4,
    color: "#5f6f22",
    alt: "Bodennahe Perspektive über einen dichten Rasen auf eine dunkle Holzlamellen-Einfriedung",
    source: "photo-1558904541-efa843a96f01",
  },
} satisfies Record<string, ImageAsset>;

export type ImageKey = keyof typeof images;

/* ------------------------------------------------------------------ */
/* Startseite                                                          */
/* ------------------------------------------------------------------ */

export const hero = {
  eyebrow: "Gartenkunst Galla — Knittelfeld",
  titleLines: ["Gärten,", "die bleiben."],
  subtitle:
    "Individuelle Gartenkunst. Mit Leidenschaft gestaltet, mit handwerklichem Anspruch verwirklicht.",
  cta: { label: "Unsere Gartenkunst entdecken", href: "#philosophie" },
  image: "gardenDusk" as ImageKey,
  coordinates: "47° 13′ N · 14° 50′ O",
  disciplines: ["Planung", "Gestaltung", "Realisierung"],
};

export const philosophy = {
  index: "01",
  label: "Philosophie",
  title: ["Ein Garten ist", "mehr als ein Garten."],
  lead: "Ein Garten ist kein Nebeneinander von Pflanzen. Er ist ein gestalteter Lebensraum, in dem Architektur, Natur und Persönlichkeit zu einem Ganzen finden.",
  paragraphs: [
    "Jeder Entwurf entsteht aus dem Ort heraus – aus dem Haus, dem Gelände, dem Licht und aus den Menschen, die dort leben werden. Architektonisches Konzept und Wohnatmosphäre setzen sich im Garten fort und lassen ihn zum erweiterten Wohn- und Gestaltungsraum werden.",
    "Der Begriff Kunst steht dabei für Individualität und gestalterische Tiefe. Das Fundament aber ist das Handwerk: ein umfassendes Verständnis für Material und Pflanze – und ein kompromissloser Anspruch an Qualität.",
  ],
  quote: "Aus bodenständigem Handwerk darf Gartenkunst erwachsen.",
  image: "mistyLake" as ImageKey,
  detailImage: "foliage" as ImageKey,
  elementsLabel: "Die Elemente der Gestaltung",
  elements: [
    "Pflanzen",
    "Räumliche Strukturen",
    "Stein",
    "Wasser",
    "Wege",
    "Achsen",
    "Perspektiven",
    "Durchblicke",
    "Übergänge",
    "Wachstum",
    "Farben",
  ],
};

export const services = {
  index: "02",
  label: "Leistungen",
  title: ["Von der ersten Idee", "bis zum letzten Detail."],
  intro:
    "Alles aus einer Hand – von der Planung bis zur Fertigstellung. Wo ein Projekt es verlangt, werden bewährte Partnerbetriebe eingebunden und koordiniert.",
  items: [
    {
      numeral: "I",
      title: "Gartenkonzeption & Planung",
      text: "Individuelle Gestaltungsideen, abgestimmt auf Architektur, Grundstück und persönliche Wünsche.",
      details: [
        "Ort, Architektur und Nutzung verstehen",
        "Räume, Achsen und Blickbeziehungen",
        "Material- und Pflanzenkonzept",
      ],
      image: "timberGravel" as ImageKey,
    },
    {
      numeral: "II",
      title: "Garten- & Landschaftsgestaltung",
      text: "Gestaltung von Grünräumen, Pflanzenkonzepten, Wegen, Plätzen und weiteren landschaftsarchitektonischen Elementen.",
      details: [
        "Grünräume und Pflanzungen",
        "Wege, Plätze und Terrassen",
        "Stein, Wasser und Übergänge",
      ],
      image: "fern" as ImageKey,
    },
    {
      numeral: "III",
      title: "Realisierung & Projektbegleitung",
      text: "Umsetzung und Koordination von Projekten mit handwerklichem Qualitätsanspruch und geeigneten Partnern.",
      details: [
        "Ausführung mit eigenem Team",
        "Koordination von Partnerbetrieben",
        "Begleitung bis zur Fertigstellung",
      ],
      image: "lawnDetail" as ImageKey,
    },
  ],
};

export type PortfolioItem = {
  category: string;
  caption: string;
  image: ImageKey;
  href?: string;
};

export const portfolio = {
  index: "03",
  label: "Impressionen",
  title: ["Räume,", "die berühren."],
  intro:
    "Vom Bauerngarten über reduziertes Gartendesign bis zur kompletten Außengestaltung eines Barockschlosses: Die Aufgaben sind so verschieden wie die Menschen, für die sie entstehen. Gemeinsam ist ihnen der Anspruch, für jeden Ort eine einzigartige Lösung zu finden.",
  categories: [
    "Private Gartenwelten",
    "Moderne Gartenarchitektur",
    "Naturnahe Gestaltung",
    "Repräsentative Außenanlagen",
  ],
  items: [
    {
      category: "Moderne Gartenarchitektur",
      caption: "Architektur und Bestandsbaum im Dialog",
      image: "gardenDay",
      href: "/projekte/gestaltungskonzept",
    },
    {
      category: "Private Gartenwelten",
      caption: "Ein Weg, der sich Zeit nimmt",
      image: "wisteria",
    },
    {
      category: "Repräsentative Außenanlagen",
      caption: "Wasser, Stein und mediterrane Gehölze",
      image: "cypressPool",
    },
    {
      category: "Naturnahe Gestaltung",
      caption: "Weite, Licht und gewachsene Strukturen",
      image: "naturalGarden",
    },
    {
      category: "Moderne Gartenarchitektur",
      caption: "Terrasse und Wasserbecken am Abend",
      image: "poolTerrace",
    },
    {
      category: "Private Gartenwelten",
      caption: "Achse, Hecke und Blüte",
      image: "roseHedge",
    },
  ] satisfies PortfolioItem[],
};

export const quality = {
  index: "04",
  label: "Qualität & Handwerk",
  title: ["Gestaltung beginnt", "mit Haltung."],
  text: "Außergewöhnliche Gärten entstehen nicht von der Stange. Sie entstehen aus Sorgfalt im Detail, aus Respekt vor dem Material und aus der Bereitschaft, den Dingen auf den Grund zu gehen.",
  principles: [
    {
      title: "Handwerk",
      text: "Das Fundament jeder Gestaltung: präzise Ausführung, die auch nach Jahren überzeugt.",
    },
    {
      title: "Individualität",
      text: "Keine halbherzigen Konzepte, keine Lösungen von der Stange – jeder Garten ist ein Unikat.",
    },
    {
      title: "Materialverständnis",
      text: "Stein, Holz, Wasser und Pflanze werden in ihrem Wesen verstanden und bewusst eingesetzt.",
    },
    {
      title: "Ausführung",
      text: "Große Teile der Wertschöpfung im eigenen Haus, ergänzt durch bewährte heimische Partner.",
    },
  ],
  quote:
    "Durch die Qualität unserer Mitarbeiter sind wir in der Lage, große Bereiche der Wertschöpfung auf allerhöchstem Niveau selbst abzudecken.",
  quoteSource: "Gartenkunst Galla",
  image: "succulent" as ImageKey,
};

export const about = {
  index: "05",
  label: "Über Heinrich Galla",
  title: ["Persönlichkeit schafft", "Einzigartigkeit."],
  lead: "Maßgeschneiderte Gartenkunst für höchste Ansprüche – dafür steht Heinrich Galla.",
  paragraphs: [
    "Der in Knittelfeld ansässige Garten- und Landschaftsgestalter sieht sich in erster Linie als Handwerker, der den Dingen auf den Grund geht. Gemeinsam mit seinem handverlesenen Team hat er die unterschiedlichsten gestalterischen Aufgaben übernommen und jeweils eigenständige Lösungen entwickelt.",
    "So ist Gartenkunst Galla zum bevorzugten Ansprechpartner für Auftraggeberinnen und Auftraggeber geworden, die sich nicht mit halbherzigen Konzepten zufriedengeben wollen – Privatpersonen ebenso wie Unternehmen, darunter zahlreiche Tourismusbetriebe.",
  ],
  closing:
    "Es entstehen Orte der Sammlung und der Entspannung, der stillen Freude und der angeregten Diskussion – Oasen des Lebens.",
  facts: [
    { label: "Sitz", value: "Knittelfeld, Steiermark" },
    { label: "Auftraggeber", value: "Private, Unternehmen, Tourismusbetriebe" },
    { label: "Leistungsumfang", value: "Von der Planung bis zur Ausführung" },
    { label: "Termine", value: "Nur nach Vereinbarung" },
  ],
  portraitNote:
    "Typografisches Portrait – Platz für ein autorisiertes Foto von Heinrich Galla",
};

export const interlude = {
  image: "gardenNight" as ImageKey,
  text: "Orte der Zerstreuung und der Sammlung, der Entspannung und der Kontemplation.",
};

export const contact = {
  index: "06",
  label: "Kontakt",
  title: ["Lassen Sie uns", "Ihren Garten", "neu denken."],
  subtitle:
    "Jeder außergewöhnliche Garten beginnt mit einer Idee. Wir freuen uns darauf, Ihre kennenzulernen.",
  steps: [
    { no: "01", title: "Kennenlernen", text: "Ein erstes Gespräch über Ort, Wünsche und Möglichkeiten." },
    { no: "02", title: "Konzept", text: "Eine individuelle Gestaltungsidee für Ihren Außenraum." },
    { no: "03", title: "Umsetzung", text: "Realisierung aus einer Hand – bis ins letzte Detail." },
  ],
  demoNotice:
    "Dieser Entwurf enthält bewusst kein Kontaktformular. Es werden keine Daten übertragen oder gespeichert.",
};

/* ------------------------------------------------------------------ */
/* Beispielhafte Projekt-Detailseite                                   */
/* ------------------------------------------------------------------ */

export const exampleProject = {
  slug: "gestaltungskonzept",
  eyebrow: "Beispielhafte Projektpräsentation",
  category: "Moderne Gartenarchitektur",
  title: ["Garten unter", "dem alten Baum"],
  subtitle: "Ein Gestaltungskonzept – illustriert mit Inspirationsbildern",
  heroImage: "gardenDay" as ImageKey,
  notice:
    "Diese Seite zeigt, wie realisierte Projekte künftig präsentiert werden könnten. Alle Bilder sind lizenzierte Inspirationsbilder (Unsplash). Es handelt sich um kein von Gartenkunst Galla ausgeführtes Projekt.",
  intro:
    "Ein mächtiger Bestandsbaum, ein Haus aus Holz und Glas und eine offene Fläche dazwischen: Der Entwurf versteht den Garten als ruhige Bühne, auf der Architektur und gewachsene Natur gleichberechtigt auftreten.",
  facts: [
    { label: "Kategorie", value: "Moderne Gartenarchitektur", placeholder: false },
    { label: "Leistungen", value: "Konzeption · Gestaltung · Realisierung", placeholder: false },
    { label: "Ort", value: "Wird bei realen Projekten ergänzt", placeholder: true },
    { label: "Fläche", value: "Wird bei realen Projekten ergänzt", placeholder: true },
    { label: "Fertigstellung", value: "Wird bei realen Projekten ergänzt", placeholder: true },
  ],
  idea: {
    label: "Die Gestaltungsidee",
    title: ["Der Baum als", "ruhende Mitte."],
    paragraphs: [
      "Am Anfang steht der Ort: ein alter Baum, dessen Krone den Raum bereits prägt, lange bevor geplant wird. Statt ihn zu umspielen, macht der Entwurf ihn zum Zentrum – alle Achsen, Blickbeziehungen und Wege beziehen sich auf ihn.",
      "Eine großzügige Rasenfläche bleibt bewusst frei. Sie schafft Weite, lässt die Architektur atmen und wird zur Bühne für Licht und Schatten im Lauf des Tages. Präzise Kanten und eine reduzierte Materialpalette sorgen dafür, dass Haus und Garten als ein Raum gelesen werden.",
    ],
  },
  elements: [
    {
      title: "Der Bestandsbaum als Mittelpunkt",
      text: "Wurzelbereich, Kronenraum und Schattenwurf bestimmen Lage und Form aller weiteren Elemente.",
    },
    {
      title: "Ruhige Fläche statt Fülle",
      text: "Eine offene Rasenfläche schafft Weite und lenkt den Blick auf das Wesentliche.",
    },
    {
      title: "Fließender Übergang",
      text: "Terrasse und Innenraum gehen ohne Bruch ineinander über – der Garten wird zum Wohnraum.",
    },
    {
      title: "Licht für die Abendstunden",
      text: "Zurückhaltende Beleuchtung inszeniert Baum, Stufen und Fassade nach Einbruch der Dunkelheit.",
    },
    {
      title: "Reduzierte Materialpalette",
      text: "Holz, Stein und Grün – wenige Materialien, sorgfältig gefügt und dauerhaft schön.",
    },
  ],
  gallery: {
    wide: "gardenDusk" as ImageKey,
    pairLeft: "foliage" as ImageKey,
    pairRight: "cubicHouse" as ImageKey,
    closing: "gardenNight" as ImageKey,
    detail: "lawnDetail" as ImageKey,
  },
};

/* ------------------------------------------------------------------ */
/* SEO                                                                  */
/* ------------------------------------------------------------------ */

export const seo = {
  title: "Gartenkunst Galla – Edelschmiede für außergewöhnliche Gärten",
  description:
    "Individuelle Garten- und Landschaftsgestaltung aus Knittelfeld – von der Planung bis zur Umsetzung. Unverbindlicher Designentwurf.",
};
