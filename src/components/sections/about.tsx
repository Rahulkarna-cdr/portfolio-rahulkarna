import Image from "next/image";
import { about, site } from "@/data/site";
import { ScrollReveal } from "@/components/scroll-reveal";

export function AboutSection() {
  const avatarSvg = site.avatarSrc.endsWith(".svg");

  return (
    <section id="about" className="scroll-mt-24 border-b border-ink/5 py-20 dark:border-white/5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <ScrollReveal>
          <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">About</h2>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <div className="mt-10 flex flex-col gap-10 md:flex-row md:items-stretch md:gap-12">
            <div className="mx-auto shrink-0 md:mx-0">
              <div className="relative">
                <div
                  className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-accent/25 via-sky-400/15 to-transparent opacity-80 blur-xl dark:from-accent/35 dark:via-sky-400/20"
                  aria-hidden
                />
                <div className="relative rounded-[1.75rem] border border-ink/10 bg-gradient-to-b from-surface-muted/90 to-surface-muted/40 p-1 shadow-[0_20px_50px_-20px_rgb(37_99_235_/_0.35)] dark:border-white/10 dark:from-surface-muted/50 dark:to-surface-muted/20 dark:shadow-[0_24px_60px_-24px_rgb(59_130_246_/_0.45)]">
                  <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-white/80 to-accent-soft/30 ring-1 ring-ink/5 dark:from-white/5 dark:to-accent-soft/20 dark:ring-white/10">
                    <div className="flex aspect-square w-[200px] items-center justify-center sm:w-[220px] md:w-[240px]">
                      <Image
                        src={site.avatarSrc}
                        alt={`${site.name} — illustration`}
                        width={240}
                        height={240}
                        className="h-full w-full object-contain p-4 sm:p-5"
                        unoptimized={avatarSvg}
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="min-w-0 flex-1 md:flex md:flex-col md:justify-center">
              <p className="max-w-3xl text-lg leading-relaxed text-ink-muted">{about.lead}</p>
              <p className="mt-4 max-w-3xl leading-relaxed text-ink-muted">{about.body}</p>
              <p className="mt-8 rounded-2xl border border-accent/25 bg-gradient-to-r from-accent-soft/50 via-accent-soft/30 to-transparent px-5 py-4 text-sm leading-relaxed text-ink shadow-sm dark:border-accent/30 dark:from-accent-soft/30 dark:via-accent-soft/15 dark:to-transparent">
                <span className="font-semibold text-accent">Currently:</span> {about.learning}
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
