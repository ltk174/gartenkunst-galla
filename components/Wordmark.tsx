import { company } from "@/content/site";

/** Typografische Wortmarke (kein Nachbau des bestehenden Logos). */
export function Wordmark({ withTagline = true }: { withTagline?: boolean }) {
  return (
    <span className="flex flex-col leading-none">
      <span className="font-serif text-[1.65rem] font-normal tracking-[-0.01em] sm:text-[1.8rem]">
        Gartenkunst <em className="font-light">Galla</em>
      </span>
      {withTagline && (
        <span className="mt-1.5 hidden text-[0.6rem] font-medium tracking-[0.24em] uppercase opacity-70 sm:block">
          {company.tagline}
        </span>
      )}
    </span>
  );
}
