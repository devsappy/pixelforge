import Nav from "./components/Nav";
import Cursor from "./components/Cursor";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Signal from "./components/Signal";
import Skills from "./components/Skills";
import Journey from "./components/Journey";
import Services from "./components/Services";
import Process from "./components/Process";
import Stats from "./components/Stats";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <div className="grain" aria-hidden />
      <Cursor />
      <Nav />
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
      <Footer />
    </>
  );
}
