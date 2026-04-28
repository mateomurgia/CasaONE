import { Hero } from "@/components/Hero";
import { Territories } from "@/components/Territories";
import { Journey } from "@/components/Journey";
import { Contact } from "@/components/Contact";
import { ScrollProgress } from "@/components/ScrollProgress";
import { CustomCursor } from "@/components/CustomCursor";
import { SectionDivider, SectionDividerReverse } from "@/components/SectionDivider";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <CustomCursor />
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
