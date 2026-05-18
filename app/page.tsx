import { Hero } from "@/components/Hero";
import { Manifesto } from "@/components/Manifesto";
import { Territories } from "@/components/Territories";
import { Journey } from "@/components/Journey";
import { Process } from "@/components/Process";
import { Founders } from "@/components/Founders";
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
        <Territories />
        <SectionDividerReverse />
        <Journey />
        <Process />
        <Founders />
        <SectionDivider />
        <Contact />
      </main>
    </>
  );
}
