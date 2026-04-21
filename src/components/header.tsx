import Image from "next/image";
import { ThemeToggle } from "@/components/theme-toggle";
import { InPageLink } from "@/components/in-page-link";
import { site } from "@/data/site";

const nav = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink/5 bg-surface/80 backdrop-blur-md dark:border-white/5">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <InPageLink
          sectionId="top"
          className="inline-flex items-center transition hover:opacity-90"
          aria-label={`${site.name} home`}
        >
          <Image
            src="/logoRKe.png"
            alt={`${site.name} logo`}
            width={96}
            height={32}
            className="h-8 w-auto object-contain sm:h-9"
            priority
          />
        </InPageLink>
        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {nav.map((item) => (
            <InPageLink
              key={item.id}
              sectionId={item.id}
              className="rounded-lg px-3 py-2 text-sm font-medium text-ink-muted transition hover:bg-accent-soft/50 hover:text-accent dark:hover:bg-accent-soft/30"
            >
              {item.label}
            </InPageLink>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
