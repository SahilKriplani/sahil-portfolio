"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { profile } from "@/data/portfolio";

interface AvatarProps {
  className?: string;
  size?: number;
}

export function Avatar({ className, size = 160 }: AvatarProps) {
  const [failed, setFailed] = useState(false);

  const initials = profile.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <div
      className={cn(
        "relative grid place-items-center overflow-hidden rounded-full",
        className
      )}
      style={{ width: size, height: size }}
    >
      {/* Glowing animated ring */}
      <div className="absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,var(--nebula),var(--nebula-cyan),var(--chart-3),var(--nebula))] animate-[spin_8s_linear_infinite]" />
      <div className="absolute inset-[3px] rounded-full bg-card" />

      {failed ? (
        <span className="text-gradient relative text-4xl font-bold tracking-tight">
          {initials}
        </span>
      ) : (
        // Plain <img> (not next/image) so a missing file degrades gracefully.
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={profile.image}
          alt={profile.name}
          onError={() => setFailed(true)}
          className="relative h-full w-full rounded-full object-cover object-top p-[3px]"
        />
      )}
    </div>
  );
}
