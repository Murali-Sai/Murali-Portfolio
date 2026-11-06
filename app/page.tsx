import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Statement from "@/components/Statement";
import Experience from "@/components/Experience";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Publications from "@/components/Publications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <span id="top" />
      <main>
        <Hero />
        <Projects />
        <Statement />
        <Experience />
        <About />
        <Skills />
        <Publications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
