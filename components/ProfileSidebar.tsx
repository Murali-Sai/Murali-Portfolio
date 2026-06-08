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

        <h1 className="mt-5 font-display text-[2.05rem] font-bold leading-tight tracking-tight text-sheen">
          {profile.name}
        </h1>
        <p className="mt-1 text-sm font-semibold text-accent-soft">
          {profile.title}
        </p>
        <p className="mt-2 text-xs leading-relaxed text-ink-muted">
          {profile.tagline}
        </p>

        <div className="mt-4 space-y-1.5 text-xs text-ink-faint">
          <p>{profile.org}</p>
          <p className="flex items-center justify-center gap-1.5">
            <MapPin size={13} className="text-accent" />
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
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-ink-muted transition-all hover:border-accent/40 hover:bg-accent/10 hover:text-accent-soft"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>

        <a
          href={profile.resume}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-4 py-2.5 text-sm font-semibold text-bg transition-all hover:bg-accent-soft hover:shadow-glow"
        >
          <FileDown size={16} />
          Download CV
        </a>
      </div>
    </aside>
  );
}
