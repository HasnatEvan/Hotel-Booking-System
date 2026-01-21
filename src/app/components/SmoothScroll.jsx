"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function SmoothScroll({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.9, // ⬅️ faster (sweet spot)
      easing: (t) => 1 - Math.pow(1 - t, 4), // snappy but smooth
      smoothWheel: true,
      smoothTouch: false,
      wheelMultiplier: 1.3, // ⬅️ faster wheel scroll
      touchMultiplier: 1.4,
      infinite: false,
    });

    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return children;
}
