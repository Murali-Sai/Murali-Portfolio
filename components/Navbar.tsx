"use client";

import { useEffect, useState } from "react";
import { profile } from "@/lib/data";

// Five real destinations, so a three-part bar is the shape the page earns
// (layout.md § 7, gate 42). Ids are unchanged: they are the link targets.
const links = [
  { id: "projects", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "publications", label: "Research" },
];

export default function Navbar() {
  const [active, setActive] = useState("projects");
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
      className={`fixed inset-x-0 top-0 z-sticky-nav transition-colors duration-short ease-out ${
        scrolled
          ? "border-b border-rule bg-paper backdrop-blur"
          : "border-b border-transparent"
      }`}
    >
      <nav
        aria-label="Sections"
        className="container flex min-h-[64px] flex-wrap items-center justify-between gap-x-lg gap-y-xs py-sm"
      >
        <a
          href="#top"
          className="shrink-0 font-display text-lg leading-none text-ink no-underline transition-colors duration-micro ease-out hover:text-accent active:text-accent-2"
        >
          {profile.name}
        </a>

        <ul className="order-3 m-0 flex w-full list-none flex-wrap items-center gap-x-lg gap-y-2xs p-0 md:order-none md:w-auto">
          {links.map((l) => (
            <li key={l.id} className="shrink-0">
              <a
                href={`#${l.id}`}
                aria-current={active === l.id ? "true" : undefined}
                className={`block whitespace-nowrap py-xs text-sm no-underline transition-colors duration-micro ease-out active:text-accent-2 ${
                  active === l.id
                    ? "text-accent underline decoration-accent underline-offset-4"
                    : "text-ink-2 hover:text-accent"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={`mailto:${profile.email}`}
          className="shrink-0 text-sm text-accent underline decoration-rule-strong underline-offset-4 transition-colors duration-micro ease-out hover:text-accent-2 hover:decoration-current active:text-ink"
        >
          Get in touch
        </a>
      </nav>
    </header>
  );
}
