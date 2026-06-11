"use client";

import { useReducedMotion } from "framer-motion";
import type { ReactNode, MouseEvent } from "react";
import { useRef } from "react";

type MagneticProps = {
  children: ReactNode;
  className?: string;
  strength?: number;
  as?: "a" | "button";
  href?: string;
  onClick?: (e: MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => void;
  download?: boolean;
  target?: string;
  rel?: string;
  "aria-label"?: string;
  title?: string;
};

export function Magnetic({
  children,
  className,
  strength = 0.32,
  as = "a",
  href,
  onClick,
  download,
  target,
  rel,
  "aria-label": ariaLabel,
  title,
}: MagneticProps) {
  const reduced = useReducedMotion();
  const outerRef = useRef<HTMLElement>(null);
  const innerRef = useRef<HTMLSpanElement>(null);

  const resetMotion = () => {
    const inner = innerRef.current;
    if (!inner) return;
    inner.style.transform = "";
  };

  const onMove = (e: MouseEvent) => {
    if (reduced || !window.matchMedia("(pointer: fine)").matches) return;
    const btn = outerRef.current;
    const inner = innerRef.current;
    if (!btn || !inner) return;
    const r = btn.getBoundingClientRect();
    const mx = e.clientX - r.left - r.width / 2;
    const my = e.clientY - r.top - r.height / 2;
    inner.style.transform = `translate(${mx * strength}px, ${my * strength}px)`;
  };

  const onLeave = () => {
    resetMotion();
  };

  const onPointerDown = () => {
    resetMotion();
  };

  const handleClick = (e: MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    onClick?.(e);
  };

  if (as === "button") {
    return (
      <button
        type="button"
        ref={outerRef as React.RefObject<HTMLButtonElement>}
        className={className}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        onPointerDown={onPointerDown}
        onClick={handleClick}
        aria-label={ariaLabel}
        title={title}
        data-magnetic={strength}
      >
        <span className="btn-in" ref={innerRef}>
          {children}
        </span>
      </button>
    );
  }

  return (
    <a
      ref={outerRef as React.RefObject<HTMLAnchorElement>}
      className={className}
      href={href}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      onPointerDown={onPointerDown}
      onClick={handleClick}
      download={download}
      target={target}
      rel={rel}
      title={title}
      data-magnetic={strength}
    >
      <span className="btn-in" ref={innerRef}>
        {children}
      </span>
    </a>
  );
}
