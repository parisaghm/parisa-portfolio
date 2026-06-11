import { AIProcess } from "@/components/AIProcess";
import { About } from "@/components/About";
import { AmbientBackground } from "@/components/AmbientBackground";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";

export default function Home() {
  return (
    <>
      <AmbientBackground />
      <Navbar />
      <span id="top" />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <AIProcess />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
