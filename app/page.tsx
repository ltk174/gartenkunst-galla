import { Hero } from "@/components/home/Hero";
import { Philosophy } from "@/components/home/Philosophy";
import { Services } from "@/components/home/Services";
import { Portfolio } from "@/components/home/Portfolio";
import { Quality } from "@/components/home/Quality";
import { About } from "@/components/home/About";
import { Interlude } from "@/components/home/Interlude";
import { ContactSection } from "@/components/ContactSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Philosophy />
      <Services />
      <Portfolio />
      <Quality />
      <About />
      <Interlude />
      <ContactSection />
    </>
  );
}
