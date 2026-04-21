import Link from "next/link";
import { projects } from "@/data/site";
import { ScrollReveal } from "@/components/scroll-reveal";
import { GithubLogo } from "@/components/social-brand-icons";

export function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-24 border-b border-ink/5 py-20 dark:border-white/5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <ScrollReveal>
          <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">Featured projects</h2>
        </ScrollReveal>
        
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, index) => (
            <ScrollReveal key={p.title} delay={index * 120}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-ink/10 bg-surface-muted/50 shadow-card-light transition hover:-translate-y-1 hover:border-accent/35 hover:shadow-glow dark:border-white/10 dark:bg-surface-muted/30 dark:shadow-card">
                <div className="relative border-b border-ink/10 bg-gradient-to-br from-accent/12 via-surface-muted/90 to-transparent bg-grid-light bg-[length:20px_20px] px-6 pb-6 pt-7 dark:border-white/10 dark:from-accent/18 dark:via-surface-muted/50 dark:bg-grid-dark">
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-surface-muted/40 dark:to-surface-muted/30" aria-hidden />
                  <div className="relative">
                    <h3 className="font-display text-lg font-semibold text-ink group-hover:text-accent">{p.title}</h3>
                    <p className="mt-2 text-sm font-semibold leading-snug text-accent">{p.impact}</p>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="flex-1 text-sm leading-relaxed text-ink-muted">{p.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.stack.map((t) => (
                      <span
                        key={t}
                        className="rounded-md bg-accent-soft/70 px-2 py-0.5 text-xs font-medium text-accent dark:bg-accent-soft/40"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 flex">
                    <Link
                      href={p.links.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${p.title} repository`}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-ink/15 bg-surface-muted/60 text-ink transition hover:border-accent/45 hover:text-accent dark:border-white/15 dark:bg-surface-muted/40"
                    >
                      <GithubLogo className="h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
