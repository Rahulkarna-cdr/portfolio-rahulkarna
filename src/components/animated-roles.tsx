"use client";

import { useEffect, useState } from "react";

type AnimatedRolesProps = {
  roles: string[];
  typingSpeedMs?: number;
  deletingSpeedMs?: number;
  holdMs?: number;
};

const SWITCH_DELAY_MS = 220;

export function AnimatedRoles({
  roles,
  typingSpeedMs = 58,
  deletingSpeedMs = 34,
  holdMs = 1000,
}: AnimatedRolesProps) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (roles.length === 0) return;

    const currentRole = roles[roleIndex] ?? "";
    const atFullWord = displayText === currentRole;
    const atEmpty = displayText.length === 0;

    let timeoutMs = isDeleting ? deletingSpeedMs : typingSpeedMs;

    if (!isDeleting && atFullWord) {
      timeoutMs = holdMs;
    }
    if (isDeleting && atEmpty) {
      timeoutMs = SWITCH_DELAY_MS;
    }

    const timer = window.setTimeout(() => {
      if (!isDeleting && atFullWord) {
        setIsDeleting(true);
        return;
      }

      if (isDeleting && atEmpty) {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
        return;
      }

      setDisplayText((prev) =>
        isDeleting ? prev.slice(0, Math.max(0, prev.length - 1)) : currentRole.slice(0, prev.length + 1)
      );
    }, timeoutMs);

    return () => window.clearTimeout(timer);
  }, [displayText, deletingSpeedMs, holdMs, isDeleting, roleIndex, roles, typingSpeedMs]);

  return (
    <span className="inline-flex items-center text-accent">
      {displayText}
      <span
        className="ml-1 inline-block h-[1em] w-[2px] animate-pulse bg-accent align-[-0.14em]"
        aria-hidden
      />
    </span>
  );
}
