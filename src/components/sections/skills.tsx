"use client";

import { useMemo, useState } from "react";
import {
  skillCategories,
  skills,
  type SkillCategoryId,
} from "@/data/site";
import { SkillsSphere } from "@/components/skills-sphere";

export function SkillsSection() {
  const [filter, setFilter] = useState<SkillCategoryId>("all");

  const visible = useMemo(() => {
    if (filter === "all") return skills;
    return skills.filter((s) => s.category === filter);
  }, [filter]);

  return (
    <section id="skills" className="scroll-mt-24 border-b border-ink/5 py-20 dark:border-white/5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">Skills</h2>
        <p className="mt-3 max-w-2xl text-ink-muted">
          Grouped by domain—filter to scan faster.
        </p>
        <SkillsSphere />
        <div
          className="mt-8 flex flex-wrap gap-2"
          role="tablist"
          aria-label="Skill categories"
        >
          {skillCategories.map((c) => {
            const active = filter === c.id;
            return (
              <button
                key={c.id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setFilter(c.id)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
                  active
                    ? "bg-accent text-white shadow-glow"
                    : "border border-ink/10 bg-surface-muted text-ink-muted hover:border-accent/30 hover:text-accent dark:border-white/10 dark:bg-surface-muted/50"
                }`}
              >
                {c.label}
              </button>
            );
          })}
        </div>
        <ul className="mt-8 flex flex-wrap gap-2" aria-live="polite">
          {visible.map((s) => (
            <li key={s.name}>
              <span className="inline-flex rounded-lg border border-ink/10 bg-surface-muted/80 px-3 py-1.5 text-sm font-medium text-ink dark:border-white/10 dark:bg-surface-muted/40">
                {s.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
