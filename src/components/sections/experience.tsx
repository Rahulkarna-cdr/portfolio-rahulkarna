import { experience } from "@/data/site";
import { ScrollReveal } from "@/components/scroll-reveal";

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative scroll-mt-24 border-b border-ink/5 py-16 dark:border-white/5"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <ScrollReveal className="text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Work <span className="text-accent">Experience</span>
          </h2>
          <div className="mx-auto mt-3 h-1 w-12 rounded-full bg-accent" />
        </ScrollReveal>

        <ScrollReveal delay={120} className="relative mx-auto mt-10 max-w-4xl">
          <span
            className="absolute bottom-0 left-[7px] top-0 w-px bg-slate-300/70 dark:bg-slate-500/45"
            aria-hidden
          />
          <ol className="space-y-6 pl-9 md:pl-10">
            {experience.map((job, index) => (
              <li key={`${job.company}-${job.start}`} className="relative">
                <ScrollReveal delay={index * 120}>
                  <span
                    className="absolute -left-10 top-2.5 h-4 w-4 rounded-full border-2 border-accent bg-surface shadow-[0_0_0_3px_rgba(59,130,246,0.2)] dark:bg-surface"
                    aria-hidden
                  >
                    <span className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent" />
                  </span>

                  <article className="rounded-2xl border border-slate-300/60 bg-surface-muted/45 px-4 py-4 shadow-card-light backdrop-blur-sm dark:border-slate-500/35 dark:bg-surface-muted/25 sm:px-5">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <h3 className="flex items-center gap-2 font-display text-2xl leading-tight font-semibold text-ink sm:text-[1.75rem]">
                          <span className="text-accent" aria-hidden>
                            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current">
                              <path d="M9 2a2 2 0 0 0-2 2v2H5a2 2 0 0 0-2 2v9a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a2 2 0 0 0-2-2h-2V4a2 2 0 0 0-2-2H9zm0 2h6v2H9V4zm-4 6h14v7a1 1 0 0 1-1 1h-5v-3h-2v3H6a1 1 0 0 1-1-1v-7z" />
                            </svg>
                          </span>
                          {job.title}
                        </h3>
                        <p className="mt-1 text-xs font-semibold text-accent sm:text-sm">
                          {job.company}
                          <span className="font-medium text-ink-muted"> · {job.location}</span>
                        </p>
                      </div>
                      <p className="text-xs font-medium text-ink-muted sm:text-sm">
                        {job.start} — {job.end}
                      </p>
                    </div>

                    <ul className="mt-3 space-y-2 text-sm text-ink-muted">
                      {job.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2.5">
                          <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                </ScrollReveal>
              </li>
            ))}
          </ol>
        </ScrollReveal>
      </div>
    </section>
  );
}
