import Navbar from "@/components/Navbar";
import ProfileSidebar from "@/components/ProfileSidebar";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Publications from "@/components/Publications";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <span id="top" />
      <main className="mx-auto max-w-6xl px-5 pb-12 pt-24 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[320px_1fr] lg:gap-12">
          <ProfileSidebar />
          <div className="min-w-0 space-y-16">
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Publications />
            <Footer />
          </div>
        </div>
      </main>
    </>
  );
}
