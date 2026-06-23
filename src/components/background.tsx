"use client";

import { useEffect, useRef } from "react";

// Lightweight canvas starfield — no external dependency.
function Starfield() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    let stars: { x: number; y: number; z: number; r: number }[] = [];

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.floor((window.innerWidth * window.innerHeight) / 9000);
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        z: Math.random() * 0.6 + 0.4,
        r: Math.random() * 1.3 + 0.2,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      for (const s of stars) {
        if (!reduce) {
          s.y += s.z * 0.12;
          if (s.y > window.innerHeight) s.y = 0;
        }
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(180, 170, 255, ${s.z * 0.5})`;
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      className="pointer-events-none fixed inset-0 -z-10 h-full w-full opacity-70"
      aria-hidden
    />
  );
}

export function Background() {
  return (
    <>
      <Starfield />
      {/* Aurora blobs */}
      <div className="pointer-events-none fixed inset-0 -z-20 overflow-hidden" aria-hidden>
        <div className="absolute -top-32 left-1/4 h-[40rem] w-[40rem] animate-aurora rounded-full bg-[radial-gradient(circle,_color-mix(in_oklch,var(--nebula)_45%,transparent),transparent_60%)] blur-3xl" />
        <div className="absolute top-1/3 right-0 h-[36rem] w-[36rem] animate-aurora rounded-full bg-[radial-gradient(circle,_color-mix(in_oklch,var(--nebula-cyan)_40%,transparent),transparent_60%)] blur-3xl [animation-delay:-6s]" />
        <div className="absolute bottom-0 left-0 h-[34rem] w-[34rem] animate-aurora rounded-full bg-[radial-gradient(circle,_color-mix(in_oklch,var(--chart-3)_35%,transparent),transparent_60%)] blur-3xl [animation-delay:-12s]" />
      </div>
      {/* Grid overlay */}
      <div className="grid-bg pointer-events-none fixed inset-0 -z-20" aria-hidden />
    </>
  );
}
