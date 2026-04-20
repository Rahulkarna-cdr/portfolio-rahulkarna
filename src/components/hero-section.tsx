import Link from "next/link";
import { heroCode, site, stats } from "@/data/site";
import { TypingCodeBlock } from "@/components/typing-code-block";

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-ink/5 bg-grid-light bg-[length:48px_48px] dark:border-white/5 dark:bg-grid-dark"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent dark:from-accent/10" />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 md:items-center md:py-24">
        <div>
          {site.openToWork ? (
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent-soft/60 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent dark:bg-accent-soft/40">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              Open to opportunities
            </p>
          ) : null}
          <h1 className="font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl lg:text-6xl">
            Building{" "}
            <span className="bg-gradient-to-r from-accent to-sky-400 bg-clip-text text-transparent dark:to-blue-300">
              reliable
            </span>{" "}
            digital products.
          </h1>
          <p className="mt-5 max-w-xl text-lg text-ink-muted">{site.tagline}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="#projects"
              className="inline-flex items-center justify-center rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              View work
            </Link>
            <Link
              href={site.resumeUrl}
              className="inline-flex items-center justify-center rounded-xl border border-ink/15 bg-surface-muted/80 px-5 py-3 text-sm font-semibold text-ink transition hover:border-accent/40 hover:text-accent dark:border-white/15 dark:bg-surface-muted/40"
            >
              Download CV
            </Link>
          </div>
          <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-ink/10 pt-8 dark:border-white/10">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="text-xs font-medium uppercase tracking-wide text-ink-muted">{s.label}</dt>
                <dd className="mt-1 font-display text-xl font-semibold text-ink">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="relative flex w-full justify-center md:justify-end">
          <TypingCodeBlock code={heroCode} className="w-full max-w-lg" />
        </div>
      </div>
    </section>
  );
}
