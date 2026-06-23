"use client";

import { useEffect, useState } from "react";

function diff(target: number) {
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
  const [t, setT] = useState(() => diff(target));

  useEffect(() => {
    const id = setInterval(() => setT(diff(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  if (t.done) {
    return <span className="text-sm font-medium text-primary">Launching soon</span>;
  }

  const cells: [number, string][] = [
    [t.d, "D"],
    [t.h, "H"],
    [t.m, "M"],
    [t.s, "S"],
  ];

  return (
    <div className="flex items-center gap-1.5">
      {cells.map(([val, label]) => (
        <div
          key={label}
          className="flex min-w-[2.6rem] flex-col items-center rounded-lg border border-border/60 bg-card/50 px-2 py-1.5 backdrop-blur"
        >
          <span className="font-mono text-base font-semibold tabular-nums">
            {String(val).padStart(2, "0")}
          </span>
          <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}
