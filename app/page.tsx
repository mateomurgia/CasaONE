import { Hero } from "@/components/Hero";
import { Manifesto } from "@/components/Manifesto";
import { Differentiators } from "@/components/Differentiators";
import { Territories } from "@/components/Territories";
import { Journey } from "@/components/Journey";
import { Team } from "@/components/Team";
import { Process } from "@/components/Process";
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
        <Manifesto />
        <Differentiators />
        <SectionDividerReverse />
        <Territories />
        <SectionDivider />
        <Journey />
        <SectionDividerReverse />
        <Team />
        <SectionDivider />
        <Process />
        <SectionDividerReverse />
        <Contact />
      </main>
    </>
  );
}
