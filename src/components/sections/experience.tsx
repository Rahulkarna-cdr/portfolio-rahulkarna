import { experience } from "@/data/site";

export function ExperienceSection() {
  return (
    <section id="experience" className="scroll-mt-24 border-b border-ink/5 py-20 dark:border-white/5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">Experience</h2>
        <p className="mt-3 max-w-2xl text-ink-muted">Impact-focused highlights, most recent first.</p>
        <ol className="relative mt-12 space-y-12 border-l border-accent/30 pl-8 dark:border-accent/40">
          {experience.map((job) => (
            <li key={`${job.company}-${job.start}`} className="relative">
              <span className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full border-2 border-accent bg-surface dark:bg-surface-muted" />
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <div>
                  <h3 className="font-display text-xl font-semibold text-ink">{job.title}</h3>
                  <p className="text-accent">
                    {job.company}
                    <span className="text-ink-muted"> · {job.location}</span>
                  </p>
                </div>
                <p className="text-sm font-medium text-ink-muted">
                  {job.start} — {job.end}
                </p>
              </div>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-ink-muted marker:text-accent">
                {job.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
