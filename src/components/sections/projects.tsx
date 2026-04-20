import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/site";

function isSvgPath(src: string) {
  return src.endsWith(".svg");
}

export function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-24 border-b border-ink/5 py-20 dark:border-white/5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">Featured projects</h2>
        <p className="mt-3 max-w-2xl text-ink-muted">
          Problem, build, and measurable outcomes—swap thumbnails in{" "}
          <code className="rounded bg-surface-muted px-1 text-sm dark:bg-surface-muted/80">public/projects/</code> or set{" "}
          <code className="rounded bg-surface-muted px-1 text-sm dark:bg-surface-muted/80">imageSrc</code> to a remote URL.
        </p>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group flex flex-col overflow-hidden rounded-2xl border border-ink/10 bg-surface-muted/50 shadow-card-light transition hover:border-accent/35 hover:shadow-glow dark:border-white/10 dark:bg-surface-muted/30 dark:shadow-card"
            >
              <div className="relative aspect-[16/10] w-full bg-surface-muted dark:bg-slate-900/80">
                <Image
                  src={p.imageSrc}
                  alt={`${p.title} preview`}
                  fill
                  className="object-cover transition duration-300 group-hover:scale-[1.02]"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  unoptimized={isSvgPath(p.imageSrc)}
                  priority={false}
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-lg font-semibold text-ink group-hover:text-accent">{p.title}</h3>
                <p className="mt-2 text-sm font-semibold text-accent">{p.impact}</p>
                <p className="mt-3 flex-1 text-sm text-ink-muted">{p.description}</p>
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
                <div className="mt-6 flex gap-3 text-sm font-semibold">
                  <Link href={p.links.live} className="text-accent hover:underline">
                    Live
                  </Link>
                  <Link href={p.links.repo} className="text-ink-muted hover:text-accent hover:underline">
                    Source
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
