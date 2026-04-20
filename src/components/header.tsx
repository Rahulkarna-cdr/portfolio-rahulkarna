import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "@/components/theme-toggle";
import { site } from "@/data/site";

const nav = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink/5 bg-surface/80 backdrop-blur-md dark:border-white/5">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          href="#top"
          className="inline-flex items-center transition hover:opacity-90"
          aria-label={`${site.name} home`}
        >
          <Image
            src="/logoRKe.png"
            alt={`${site.name} logo`}
            width={132}
            height={44}
            className="w-auto object-contain"
            priority
          />
        </Link>
        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-ink-muted transition hover:bg-accent-soft/50 hover:text-accent dark:hover:bg-accent-soft/30"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link
            href="#contact"
            className="hidden rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-white shadow-glow transition hover:brightness-110 sm:inline-flex"
          >
            Let&apos;s talk
          </Link>
        </div>
      </div>
    </header>
  );
}
