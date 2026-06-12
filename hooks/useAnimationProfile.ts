"use client";

import { useReducedMotion } from "framer-motion";
import { useMediaQuery } from "@/hooks/useMediaQuery";

export type AnimationProfile = {
  /** 0 when reduced motion is on; otherwise 0.6 mobile, 0.72 tablet, 1 desktop */
  intensity: number;
  /** Mouse-follow parallax — desktop pointer devices only */
  allowParallax: boolean;
  /** Fraction of hero particles to render (0–1) */
  particleRatio: number;
};

export function useAnimationProfile(): AnimationProfile {
  const reduced = useReducedMotion();
  const isMobile = useMediaQuery("(max-width: 767px)");
  const isTablet = useMediaQuery("(min-width: 768px) and (max-width: 1023px)");
  const isCoarsePointer = useMediaQuery("(pointer: coarse)");

  if (reduced) {
    return { intensity: 0, allowParallax: false, particleRatio: 0 };
  }

  const intensity = isMobile ? 0.6 : isTablet ? 0.72 : 1;
  const particleRatio = isMobile ? 0.55 : isTablet ? 0.75 : 1;
  const allowParallax = !isMobile && !isTablet && !isCoarsePointer;

  return { intensity, allowParallax, particleRatio };
}

/** Scale a motion offset by the current device intensity (30–40% reduction on mobile/tablet). */
export function scaleMotion(value: number, intensity: number): number {
  return value * intensity;
}

/** Evenly sample particles for lower counts without clustering. */
export function sampleParticles<T>(items: T[], ratio: number): T[] {
  if (ratio >= 1) return items;
  if (ratio <= 0) return [];

  const count = Math.max(4, Math.round(items.length * ratio));
  const step = items.length / count;

  return Array.from({ length: count }, (_, i) => items[Math.min(items.length - 1, Math.floor(i * step))]);
}
