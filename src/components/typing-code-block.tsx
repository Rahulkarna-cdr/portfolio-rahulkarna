"use client";

import { Highlight } from "prism-react-renderer";
import { useEffect, useMemo, useState } from "react";
import { useHtmlThemeLight } from "@/hooks/use-html-theme-light";
import { vibrantDark, vibrantLight } from "@/lib/vibrant-code-themes";

const MS_PER_CHAR = 38;

type Props = {
  code: string;
  /** Prism language id */
  language?: string;
  className?: string;
};

export function TypingCodeBlock({ code, language = "tsx", className = "" }: Props) {
  const isLight = useHtmlThemeLight();
  const [mounted, setMounted] = useState(false);
  const [length, setLength] = useState(0);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    setLength(0);
  }, [code]);

  useEffect(() => {
    if (!mounted || length >= code.length) return;
    const t = window.setTimeout(() => setLength((n) => n + 1), MS_PER_CHAR);
    return () => window.clearTimeout(t);
  }, [mounted, length, code.length]);

  const prismTheme = isLight ? vibrantLight : vibrantDark;

  const visible = useMemo(() => code.slice(0, length), [code, length]);
  const isTyping = length < code.length;

  return (
    <div
      className={`overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-card-light dark:border-white/10 dark:bg-[#0e1424] dark:shadow-card ${className}`}
    >
      <div className="flex items-center gap-2 border-b border-slate-200/90 bg-white px-4 py-2.5 dark:border-indigo-500/20 dark:bg-[#12182c]">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" aria-hidden />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" aria-hidden />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" aria-hidden />
        <span className="ml-3 font-mono text-[11px] font-medium text-slate-600 dark:text-sky-300">
          portfolio.tsx
        </span>
      </div>
      <Highlight theme={prismTheme} code={visible} language={language}>
        {({ className: preClass, style, tokens, getLineProps, getTokenProps }) => {
          const { backgroundColor: _unusedBg, color: _unusedFg, ...chrome } = style ?? {};
          void _unusedBg;
          void _unusedFg;
          return (
            <pre
              className={`${preClass} m-0 overflow-x-auto bg-white p-4 text-[13px] leading-relaxed text-slate-900 sm:text-sm dark:bg-[#0c1020] dark:text-[#e8f1ff]`}
              style={{
                ...chrome,
                fontFamily:
                  'ui-monospace, SFMono-Regular, "Cascadia Code", "Fira Code", Menlo, Monaco, Consolas, monospace',
                margin: 0,
              }}
              tabIndex={0}
              aria-label="Animated code sample"
            >
              {tokens.map((line, lineIndex) => (
                <div key={lineIndex} {...getLineProps({ line })}>
                  {line.map((token, tokenIndex) => (
                    <span key={tokenIndex} {...getTokenProps({ token })} />
                  ))}
                  {isTyping && lineIndex === tokens.length - 1 ? (
                    <span
                      className="ml-0.5 inline-block min-h-[1.1em] w-2 translate-y-px animate-pulse bg-sky-600 align-middle shadow-[0_0_10px_rgba(2,132,199,0.65)] dark:bg-cyan-300 dark:shadow-[0_0_14px_rgba(103,232,249,0.85)]"
                      aria-hidden
                    />
                  ) : null}
                </div>
              ))}
            </pre>
          );
        }}
      </Highlight>
    </div>
  );
}
