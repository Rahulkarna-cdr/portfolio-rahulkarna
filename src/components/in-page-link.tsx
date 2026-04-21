"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";
import { useLenisScroll } from "@/components/providers";

type InPageLinkProps = {
  sectionId: string;
  className?: string;
  children: ReactNode;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "onClick">;

export function InPageLink({ sectionId, className, children, ...rest }: InPageLinkProps) {
  const { scrollToSection } = useLenisScroll();

  return (
    <a
      href={`#${sectionId}`}
      className={className}
      onClick={(e) => {
        e.preventDefault();
        scrollToSection(sectionId);
      }}
      {...rest}
    >
      {children}
    </a>
  );
}
