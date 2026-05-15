import { Hero } from "@/components/Hero";
import { Territories } from "@/components/Territories";
import { Journey } from "@/components/Journey";
import { Contact } from "@/components/Contact";
import { ScrollProgress } from "@/components/ScrollProgress";
import { SectionDivider, SectionDividerReverse } from "@/components/SectionDivider";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <main>
        <Hero />
        <SectionDivider />
        <Territories />
        <SectionDividerReverse />
        <Journey />
        <SectionDivider />
        <Contact />
      </main>
    </>
  );
}
