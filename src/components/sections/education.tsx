import Link from "next/link";
import { certifications, education, site } from "@/data/site";
import { ScrollReveal } from "@/components/scroll-reveal";

export function EducationSection() {
  return (
    <section id="education" className="scroll-mt-24 border-b border-ink/5 py-20 dark:border-white/5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <ScrollReveal>
          <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">Education & credentials</h2>
        </ScrollReveal>
        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          <ScrollReveal delay={100}>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-ink-muted">Education</h3>
            <ul className="mt-4 space-y-6">
              {education.map((e, index) => (
                <li key={e.school}>
                  <ScrollReveal delay={index * 120}>
                    <div className="rounded-xl border border-ink/10 bg-surface-muted/50 p-4 dark:border-white/10 dark:bg-surface-muted/30">
                      <p className="font-display text-lg font-semibold text-ink">{e.degree}</p>
                      <p className="text-accent">{e.school}</p>
                      <p className="mt-1 text-sm text-ink-muted">{e.period}</p>
                      <p className="mt-2 text-sm text-ink-muted">{e.detail}</p>
                    </div>
                  </ScrollReveal>
                </li>
              ))}
            </ul>
          </ScrollReveal>
          <ScrollReveal delay={160}>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-ink-muted">Certifications</h3>
            <ul className="mt-4 space-y-3">
              {certifications.map((c, index) => (
                <li key={c.name}>
                  <ScrollReveal delay={index * 100}>
                    <Link
                      href={c.href}
                      className="flex flex-col rounded-xl border border-ink/10 bg-surface-muted/50 px-4 py-3 transition hover:border-accent/40 dark:border-white/10 dark:bg-surface-muted/30"
                    >
                      <span className="font-medium text-ink">{c.name}</span>
                      <span className="text-sm text-ink-muted">
                        {c.issuer} · {c.year}
                      </span>
                    </Link>
                  </ScrollReveal>
                </li>
              ))}
            </ul>
            <ScrollReveal delay={220}>
              <div className="mt-10 rounded-2xl border border-ink/10 bg-surface-muted/50 p-6 dark:border-white/10 dark:bg-surface-muted/30">
                <h3 className="font-display text-lg font-semibold text-ink">Resume</h3>
                <p className="mt-2 text-sm text-ink-muted">
                  Last updated: {site.resumeUpdated}
                </p>
                <Link
                  href={site.resumeUrl}
                  className="mt-4 inline-flex rounded-xl bg-accent px-4 py-2 text-sm font-semibold text-white hover:brightness-110"
                >
                  View / download PDF
                </Link>
              </div>
            </ScrollReveal>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
