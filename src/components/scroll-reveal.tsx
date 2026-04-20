"use client";

import { useEffect, useRef, useState } from "react";

type ScrollRevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  yOffset?: number;
  once?: boolean;
};

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  yOffset = 24,
  once = true,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (!entry) return;

        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            observer.unobserve(entry.target);
          }
          return;
        }

        if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -8% 0px",
      }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [once]);

  return (
    <div
      ref={ref}
      className={`transform-gpu will-change-transform motion-reduce:transform-none motion-reduce:transition-none ${
        isVisible
          ? "translate-y-0 scale-100 opacity-100 blur-0 transition-all duration-700 ease-out"
          : "opacity-0 blur-[2px] transition-all duration-700 ease-out"
      } ${className}`}
      style={{
        transform: isVisible ? "translateY(0)" : `translateY(${yOffset}px)`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
