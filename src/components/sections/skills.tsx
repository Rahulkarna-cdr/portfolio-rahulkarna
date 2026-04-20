"use client";

import { SkillsSphere } from "@/components/skills-sphere";

export function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-24 border-b border-ink/5 py-20 dark:border-white/5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">Skills</h2>
        
        <SkillsSphere />
      </div>
    </section>
  );
}
