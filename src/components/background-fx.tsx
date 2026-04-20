"use client";

import { useEffect } from "react";

export function BackgroundFX() {
  useEffect(() => {
    const root = document.documentElement;
    let frame = 0;

    const update = (x: number, y: number) => {
      const mx = `${(x / window.innerWidth) * 100}%`;
      const my = `${(y / window.innerHeight) * 100}%`;
      root.style.setProperty("--mouse-x", mx);
      root.style.setProperty("--mouse-y", my);
    };

    const onMove = (event: PointerEvent) => {
      if (frame) cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => update(event.clientX, event.clientY));
    };

    const onTouch = (event: TouchEvent) => {
      const touch = event.touches[0];
      if (!touch) return;
      if (frame) cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => update(touch.clientX, touch.clientY));
    };

    update(window.innerWidth / 2, window.innerHeight / 2);
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("touchmove", onTouch, { passive: true });

    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("touchmove", onTouch);
    };
  }, []);

  return (
    <div aria-hidden className="background-fx">
      <div className="background-grid" />
      <div className="background-flow" />
      <div className="background-noise" />
      <div className="background-glow" />
    </div>
  );
}
