import { images, type ImageKey } from "@/content/site";

type PhotoProps = {
  image: ImageKey;
  /** responsive `sizes`-Angabe, z. B. "(min-width: 1024px) 50vw, 100vw" */
  sizes: string;
  className?: string;
  /** Bild sofort laden (nur für das erste sichtbare Bild verwenden) */
  priority?: boolean;
  /** Alternativtext überschreiben, "" für rein dekorative Bilder */
  alt?: string;
};

/**
 * Responsives Bild mit vorgerenderten WebP-Größen (statisch exportierbar,
 * ohne Bildoptimierungs-Server). Die Platzhalterfarbe verhindert harte
 * Weißblitzer während des Ladens.
 */
export function Photo({ image, sizes, className, priority = false, alt }: PhotoProps) {
  const asset = images[image];
  const largest = asset.widths[asset.widths.length - 1];
  const srcSet = asset.widths
    .map((w) => `/images/${asset.file}-${w}.webp ${w}w`)
    .join(", ");

  return (
    // eslint-disable-next-line @next/next/no-img-element -- bewusst: statischer Export mit eigenen srcSets
    <img
      src={`/images/${asset.file}-${Math.min(1600, largest)}.webp`}
      srcSet={srcSet}
      sizes={sizes}
      width={asset.width}
      height={asset.height}
      alt={alt ?? asset.alt}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "auto"}
      decoding={priority ? "sync" : "async"}
      className={`photo-grade ${className ?? ""}`}
      style={{ backgroundColor: asset.color }}
    />
  );
}
