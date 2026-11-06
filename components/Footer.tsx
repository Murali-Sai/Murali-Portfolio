import { profile } from "@/lib/data";

/**
 * A colophon (layout.md § 7): one line under a hairline, which is the right
 * close for a document.
 */
export default function Footer() {
  return (
    <footer className="container pb-2xl pt-xl">
      <hr className="rule" />
      <p className="mt-md text-sm text-muted">
        © {new Date().getFullYear()} {profile.fullName}. Set in Instrument Serif
        and Hanken Grotesk.
      </p>
    </footer>
  );
}
