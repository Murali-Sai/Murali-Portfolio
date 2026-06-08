import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/[0.06] pt-8 pb-10 text-center">
      <div className="mb-4 flex items-center justify-center gap-4">
        <a
          href={profile.socials.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-ink-muted transition-colors hover:text-accent-soft"
        >
          <Github size={18} />
        </a>
        <a
          href={profile.socials.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-ink-muted transition-colors hover:text-accent-soft"
        >
          <Linkedin size={18} />
        </a>
        <a
          href={`mailto:${profile.email}`}
          aria-label="Email"
          className="text-ink-muted transition-colors hover:text-accent-soft"
        >
          <Mail size={18} />
        </a>
      </div>
      <p className="text-xs text-ink-faint">
        © {new Date().getFullYear()} {profile.fullName}.
      </p>
    </footer>
  );
}
