import Image from "next/image";
import { about, site } from "@/data/site";

export function AboutSection() {
  const avatarSvg = site.avatarSrc.endsWith(".svg");

  return (
    <section id="about" className="scroll-mt-24 border-b border-ink/5 py-20 dark:border-white/5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">About</h2>
        <div className="mt-8 flex flex-col gap-8 md:flex-row md:items-start">
          <div className="relative h-36 w-36 shrink-0 overflow-hidden rounded-2xl border border-ink/10 bg-surface-muted shadow-card-light dark:border-white/10 dark:shadow-card">
            <Image
              src={site.avatarSrc}
              alt={site.name}
              width={144}
              height={144}
              className="h-full w-full object-cover"
              unoptimized={avatarSvg}
              priority
            />
          </div>
          <div className="min-w-0 flex-1">
            <p className="max-w-3xl text-lg text-ink-muted">{about.lead}</p>
            <p className="mt-4 max-w-3xl text-ink-muted">{about.body}</p>
            <p className="mt-6 rounded-xl border border-accent/20 bg-accent-soft/40 px-4 py-3 text-sm text-ink dark:bg-accent-soft/25">
              <span className="font-semibold text-accent">Currently:</span> {about.learning}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
