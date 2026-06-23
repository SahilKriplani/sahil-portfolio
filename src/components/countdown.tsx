"use client";

import { useEffect, useState } from "react";

type Time = { d: number; h: number; m: number; s: number; done: boolean };

function diff(target: number): Time {
  const ms = Math.max(0, target - Date.now());
  return {
    d: Math.floor(ms / 86_400_000),
    h: Math.floor((ms / 3_600_000) % 24),
    m: Math.floor((ms / 60_000) % 60),
    s: Math.floor((ms / 1000) % 60),
    done: ms === 0,
  };
}

export function Countdown({ date }: { date: string }) {
  const target = new Date(date).getTime();
  // Start as null so the server HTML and the first client render are identical
  // (no time-based values). The live value is filled in after mount, which
  // avoids a hydration mismatch — the server can't know "now" the same instant
  // the client does.
  const [t, setT] = useState<Time | null>(null);

  useEffect(() => {
    setT(diff(target));
    const id = setInterval(() => setT(diff(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  if (t?.done) {
    return <span className="text-sm font-medium text-primary">Launching soon</span>;
  }

  const cells: [number | null, string][] = [
    [t?.d ?? null, "D"],
    [t?.h ?? null, "H"],
    [t?.m ?? null, "M"],
    [t?.s ?? null, "S"],
  ];

  return (
    <div className="flex items-center gap-1.5">
      {cells.map(([val, label]) => (
        <div
          key={label}
          className="flex min-w-[2.6rem] flex-col items-center rounded-lg border border-border/60 bg-card/50 px-2 py-1.5 backdrop-blur"
        >
          <span className="font-mono text-base font-semibold tabular-nums">
            {val === null ? "--" : String(val).padStart(2, "0")}
          </span>
          <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}
