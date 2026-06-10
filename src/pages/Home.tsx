import Seo from "../components/Seo";
import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import Signal from "../components/Signal";
import Skills from "../components/Skills";
import Journey from "../components/Journey";
import Services from "../components/Services";
import Process from "../components/Process";
import Stats from "../components/Stats";
import CTA from "../components/CTA";

export default function Home() {
  return (
    <>
      <Seo
        title="GPTShopExpert — Get Your Business Cited by AI"
        description="GPTShopExpert is a GEO & AEO agency. We get your business found and cited by ChatGPT, Perplexity, Gemini, and Google AI Overviews — with AI-citation audits, schema, llms.txt, and GEO-ready websites."
        path="/"
      />
      <main>
        <Hero />
        <Marquee />
        <Signal />
        <Skills />
        <Journey />
        <Services />
        <Process />
        <Stats />
        <CTA />
      </main>
    </>
  );
}
