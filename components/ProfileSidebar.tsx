import { Github, Linkedin, Mail, Phone, MapPin, FileDown } from "lucide-react";
import { profile } from "@/lib/data";
import Avatar from "./Avatar";

const socialLinks = [
  { href: profile.socials.github, label: "GitHub", Icon: Github },
  { href: profile.socials.linkedin, label: "LinkedIn", Icon: Linkedin },
  { href: `mailto:${profile.email}`, label: "Email", Icon: Mail },
  { href: `tel:${profile.phone.replace(/[^+\d]/g, "")}`, label: "Phone", Icon: Phone },
];

export default function ProfileSidebar() {
  return (
    <aside className="lg:sticky lg:top-24 lg:self-start">
      <div className="card animate-fade-up p-8 text-center">
        <Avatar name={profile.name} />

        <h1 className="mt-5 font-display text-[2rem] font-extrabold uppercase leading-[0.95] tracking-tight text-ink">
          {profile.name.split(" ").slice(0, -1).join(" ")}{" "}
          <span className="text-accent">
            {profile.name.split(" ").slice(-1)}.
          </span>
        </h1>
        <p className="mt-2 font-mono text-xs uppercase tracking-widest text-accent-soft">
          {profile.title}
        </p>
        <p className="mt-3 text-xs leading-relaxed text-ink-muted">
          {profile.tagline}
        </p>

        <div className="mt-4 space-y-1.5 font-mono text-[11px] text-ink-faint">
          <p>{profile.org}</p>
          <p className="flex items-center justify-center gap-1.5">
            <MapPin size={12} className="text-accent" />
            {profile.location}
          </p>
        </div>

        <div className="mt-6 flex items-center justify-center gap-2.5">
          {socialLinks.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex h-9 w-9 items-center justify-center rounded-none border border-white/15 bg-transparent text-ink-muted transition-all hover:border-accent hover:text-accent-soft"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>

        <a
          href={profile.resume}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 flex w-full items-center justify-center gap-2 rounded-none bg-accent px-4 py-2.5 font-mono text-xs font-semibold uppercase tracking-wider text-bg transition-all hover:bg-accent-soft"
        >
          <FileDown size={16} />
          Download CV
        </a>
      </div>
    </aside>
  );
}
