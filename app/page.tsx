import { Hero } from "@/components/Hero";
import { Territories } from "@/components/Territories";
import { Journey } from "@/components/Journey";
import { Contact } from "@/components/Contact";
import { ScrollProgress } from "@/components/ScrollProgress";
import { SectionDivider, SectionDividerReverse } from "@/components/SectionDivider";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <WhatsAppButton />
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
