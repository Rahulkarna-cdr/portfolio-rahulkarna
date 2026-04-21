import Image from "next/image";
import { certifications, education } from "@/data/site";
import { ScrollReveal } from "@/components/scroll-reveal";

function isExternalCredentialHref(href: string) {
  return href.startsWith("http://") || href.startsWith("https://");
}

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
            <ul className="mt-4 space-y-6">
              {certifications.map((c, index) => (
                <li key={c.name}>
                  <ScrollReveal delay={index * 130}>
                    <article className="group overflow-hidden rounded-xl border border-ink/10 bg-surface-muted/50 shadow-card-light transition duration-300 ease-out hover:-translate-y-1 hover:border-accent/35 hover:shadow-glow dark:border-white/10 dark:bg-surface-muted/30 dark:shadow-card">
                      <div className="relative aspect-[4/3] w-full bg-surface-muted dark:bg-slate-900/60">
                        <Image
                          src={c.imageSrc}
                          alt={`${c.name} certificate`}
                          fill
                          className="object-contain p-3 transition duration-500 ease-out group-hover:scale-[1.03]"
                          sizes="(max-width: 1024px) 100vw, 40vw"
                        />
                      </div>
                      <div className="border-t border-ink/5 p-4 dark:border-white/5">
                        <h4 className="font-display font-semibold text-ink transition-colors duration-300 group-hover:text-accent">
                          {c.name}
                        </h4>
                        <p className="mt-1 text-sm text-ink-muted">
                          {c.issuer} · {c.year}
                        </p>
                        {isExternalCredentialHref(c.href) ? (
                          <a
                            href={c.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 inline-flex rounded-lg bg-accent px-3 py-2 text-sm font-semibold text-white transition duration-300 hover:brightness-110"
                          >
                            View certificate
                          </a>
                        ) : null}
                      </div>
                    </article>
                  </ScrollReveal>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
