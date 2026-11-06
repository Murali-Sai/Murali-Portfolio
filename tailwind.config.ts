import type { Config } from "tailwindcss";

/* Every colour, face and step resolves to a token in app/tokens.css (Floor 1).
   No alpha modifiers: the surface ladder uses its own rule and field tokens
   rather than a translucent accent. */
const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: "var(--color-paper)",
          2: "var(--color-paper-2)",
          3: "var(--color-paper-3)",
        },
        field: "var(--color-field)",
        ink: {
          DEFAULT: "var(--color-ink)",
          2: "var(--color-ink-2)",
        },
        muted: "var(--color-muted)",
        rule: {
          DEFAULT: "var(--color-rule)",
          strong: "var(--color-rule-strong)",
        },
        accent: {
          DEFAULT: "var(--color-accent)",
          2: "var(--color-accent-2)",
          ink: "var(--color-accent-ink)",
        },
      },
      fontFamily: {
        display: "var(--font-display)",
        sans: "var(--font-body)",
        mono: "var(--font-outlier)",
      },
      fontSize: {
        xs: "var(--text-xs)",
        sm: "var(--text-sm)",
        base: "var(--text-md)",
        lg: "var(--text-lg)",
        xl: "var(--text-xl)",
        lead: "var(--text-lead)",
        title: "var(--text-title)",
        section: "var(--text-section)",
        "display-s": "var(--text-display-s)",
        display: "var(--text-display)",
      },
      spacing: {
        "3xs": "var(--space-3xs)",
        "2xs": "var(--space-2xs)",
        xs: "var(--space-xs)",
        sm: "var(--space-sm)",
        md: "var(--space-md)",
        lg: "var(--space-lg)",
        xl: "var(--space-xl)",
        "2xl": "var(--space-2xl)",
        "3xl": "var(--space-3xl)",
        "4xl": "var(--space-4xl)",
      },
      borderRadius: {
        card: "var(--radius-card)",
        pill: "var(--radius-pill)",
      },
      transitionTimingFunction: {
        out: "var(--ease-out)",
        in: "var(--ease-in)",
        "in-out": "var(--ease-in-out)",
      },
      transitionDuration: {
        micro: "var(--dur-micro)",
        short: "var(--dur-short)",
        long: "var(--dur-long)",
      },
      zIndex: {
        "sticky-nav": "var(--z-sticky-nav)",
      },
    },
  },
  corePlugins: { container: false },
  plugins: [],
};

export default config;
