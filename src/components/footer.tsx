import Link from "next/link";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-ink/10 py-10 dark:border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-4 sm:flex-row sm:items-center sm:px-6">
        <p className="text-sm text-ink-muted">
          © {new Date().getFullYear()} {site.name}. Built with Next.js.
        </p>
        <Link href="#top" className="text-sm font-medium text-accent hover:underline">
          Back to top
        </Link>
      </div>
    </footer>
  );
}
