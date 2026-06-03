"use client";

import { useEffect, useState } from "react";
import { profile } from "@/lib/data";

const links = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "publications", label: "Publications" },
];

export default function Navbar() {
  const [active, setActive] = useState("about");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    links.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/[0.06] bg-bg/80 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center gap-1.5 px-2 py-3.5 sm:gap-2 sm:px-5 lg:px-8">
        <ul className="no-scrollbar flex min-w-0 flex-1 items-center gap-0.5 overflow-x-auto sm:gap-1">
          {links.map((l) => (
            <li key={l.id} className="shrink-0">
              <a
                href={`#${l.id}`}
                className={`block whitespace-nowrap rounded-full px-1.5 py-1.5 text-[11px] transition-colors sm:px-3.5 sm:text-sm ${
                  active === l.id
                    ? "bg-accent/10 text-accent-soft"
                    : "text-ink-muted hover:text-ink"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={profile.resume}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 rounded-full border border-accent/30 bg-accent/10 px-2.5 py-1.5 text-[11px] font-medium text-accent-soft transition-all hover:bg-accent/20 hover:shadow-glow sm:px-4 sm:text-sm"
        >
          Resume
        </a>
      </nav>
    </header>
  );
}
