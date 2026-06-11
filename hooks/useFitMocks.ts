"use client";

import { useEffect } from "react";

export function useFitMocks() {
  useEffect(() => {
    const fitMocks = () => {
      document.querySelectorAll<HTMLElement>(".mock-sova, .mock-nex").forEach((m) => {
        const p = m.closest(".proj-screen") as HTMLElement | null;
        if (!p) return;
        p.classList.add("has-fit");
        const w = p.clientWidth - 32;
        const h = p.clientHeight - 32;
        const s = Math.min(w / 520, h / 356);
        m.style.transform = `scale(${s})`;
        m.style.left = `${16 + Math.max(0, (w - 520 * s) / 2)}px`;
      });
    };

    fitMocks();

    const ro = new ResizeObserver(fitMocks);
    document.querySelectorAll(".mock-sova, .mock-nex").forEach((m) => {
      const p = m.closest(".proj-screen");
      if (p) ro.observe(p);
    });

    window.addEventListener("resize", fitMocks);
    window.addEventListener("load", fitMocks);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", fitMocks);
      window.removeEventListener("load", fitMocks);
    };
  }, []);
}
