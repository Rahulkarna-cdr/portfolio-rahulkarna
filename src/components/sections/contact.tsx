import Link from "next/link";
import { site } from "@/data/site";
import { ScrollReveal } from "@/components/scroll-reveal";
import { GithubLogo, GmailLogo, LinkedinLogo } from "@/components/social-brand-icons";

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-24 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <ScrollReveal>
          <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">Contact</h2>
        </ScrollReveal>
        <ScrollReveal delay={80}>
          <p className="mt-3 max-w-2xl text-ink-muted">
            Open to internships, freelance work, and collaborations. Reach out via email or socials—I&apos;ll get back to you soon.
          </p>
        </ScrollReveal>
        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <ScrollReveal delay={120}>
            <div className="rounded-2xl border border-ink/10 bg-surface-muted/50 p-8 dark:border-white/10 dark:bg-surface-muted/30">
              <p className="text-sm font-semibold uppercase tracking-wide text-ink-muted">Email</p>
              <Link href={`mailto:${site.email}`} className="mt-2 inline-block text-lg font-semibold text-accent hover:underline">
                {site.email}
              </Link>
              <p className="mt-6 text-sm font-semibold uppercase tracking-wide text-ink-muted">Location</p>
              <p className="mt-2 text-ink">{site.location}</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={180}>
            <div className="rounded-2xl border border-ink/10 bg-gradient-to-br from-accent/10 via-surface-muted/50 to-transparent p-8 dark:border-white/10 dark:from-accent/15">
              <p className="text-sm font-semibold uppercase tracking-wide text-ink-muted">Social</p>
              <ul className="mt-4 flex flex-wrap items-center gap-3" role="list">
                <li>
                  <Link
                    href={site.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub profile"
                    className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-ink/15 bg-surface-muted/60 text-ink shadow-sm transition hover:border-accent/45 hover:text-accent hover:shadow-glow dark:border-white/15 dark:bg-surface-muted/40"
                  >
                    <GithubLogo className="h-6 w-6" />
                  </Link>
                </li>
                <li>
                  <Link
                    href={site.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn profile"
                    className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-ink/15 bg-surface-muted/60 text-ink shadow-sm transition hover:border-accent/45 hover:text-accent hover:shadow-glow dark:border-white/15 dark:bg-surface-muted/40"
                  >
                    <LinkedinLogo className="h-6 w-6" />
                  </Link>
                </li>
                <li>
                  <Link
                    href={`mailto:${site.email}`}
                    aria-label="Email via Gmail"
                    className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-ink/15 bg-surface-muted/60 text-ink shadow-sm transition hover:border-accent/45 hover:text-accent hover:shadow-glow dark:border-white/15 dark:bg-surface-muted/40"
                  >
                    <GmailLogo className="h-6 w-6" />
                  </Link>
                </li>
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
