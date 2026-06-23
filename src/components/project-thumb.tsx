"use client";

import { useState, type ComponentType } from "react";
import {
  Bot,
  Gauge,
  Layers,
  ReceiptText,
  Share2,
  ShoppingCart,
  Sparkles,
  Users,
  type LucideProps,
} from "lucide-react";
import type { Project } from "@/data/portfolio";

type Theme = { icon: ComponentType<LucideProps>; from: string; to: string };

// Per-project art: a relevant icon + an on-brand two-colour gradient.
const themes: Record<string, Theme> = {
  "LifeOS — Operating System for Self": {
    icon: Gauge,
    from: "oklch(0.6 0.22 290)",
    to: "oklch(0.7 0.16 215)",
  },
  SyncRoom: {
    icon: Users,
    from: "oklch(0.62 0.2 250)",
    to: "oklch(0.72 0.15 190)",
  },
  "Quantum Queue": {
    icon: Layers,
    from: "oklch(0.55 0.23 285)",
    to: "oklch(0.65 0.22 330)",
  },
  "Echo AI": {
    icon: Bot,
    from: "oklch(0.62 0.18 160)",
    to: "oklch(0.7 0.15 205)",
  },
  "Nexus Commerce Engine": {
    icon: ShoppingCart,
    from: "oklch(0.68 0.18 60)",
    to: "oklch(0.64 0.2 350)",
  },
  "AI-Based Invoicing & Billing Platform": {
    icon: ReceiptText,
    from: "oklch(0.58 0.2 290)",
    to: "oklch(0.6 0.18 250)",
  },
  "AI-Powered Social Media Automation Tool": {
    icon: Share2,
    from: "oklch(0.64 0.2 330)",
    to: "oklch(0.68 0.18 40)",
  },
};

export function ProjectThumb({ project }: { project: Project }) {
  const [failed, setFailed] = useState(false);
  const theme = themes[project.name] ?? {
    icon: Sparkles,
    from: "oklch(0.6 0.22 290)",
    to: "oklch(0.7 0.16 215)",
  };
  const Icon = theme.icon;
  const showImage = project.image && !failed;

  return (
    <div className="relative h-40 w-full overflow-hidden rounded-xl border border-border/50">
      {showImage ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={project.image}
          alt={project.name}
          onError={() => setFailed(true)}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        <div
          className="relative h-full w-full transition-transform duration-500 group-hover:scale-105"
          style={{
            backgroundImage: `linear-gradient(135deg, ${theme.from}, ${theme.to})`,
          }}
        >
          {/* grid + sheen overlays */}
          <div
            className="absolute inset-0 opacity-25"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(255,255,255,.18) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.18) 1px, transparent 1px)",
              backgroundSize: "26px 26px",
            }}
          />
          <div className="absolute -right-8 -top-10 h-40 w-40 rounded-full bg-white/25 blur-3xl" />
          <div className="absolute inset-0 grid place-items-center">
            <Icon className="h-14 w-14 text-white/90 drop-shadow" strokeWidth={1.4} />
          </div>
        </div>
      )}
      {/* bottom fade into the card */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-card/80 to-transparent" />
    </div>
  );
}
