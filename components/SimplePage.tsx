import type { ReactNode } from "react";

type SimplePageProps = {
  eyebrow: string;
  title: string;
  children: ReactNode;
};

/** Schlichte Textseite für Demo- und Informationsbereiche. */
export function SimplePage({ eyebrow, title, children }: SimplePageProps) {
  return (
    <div className="bg-cream pt-44 pb-28 sm:pt-52 lg:pb-40">
      <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-4">
          <p className="eyebrow text-bronze-deep">{eyebrow}</p>
          <h1 className="display-lg hyphenate mt-6">{title}</h1>
        </div>
        <div className="max-w-2xl space-y-6 text-[0.98rem] leading-[1.8] text-anthracite/80 lg:col-span-7 lg:col-start-6 lg:pt-10">
          {children}
        </div>
      </div>
    </div>
  );
}
