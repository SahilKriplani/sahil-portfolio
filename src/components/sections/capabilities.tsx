import { Check } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { capabilities } from "@/data/portfolio";

export function Capabilities() {
  return (
    <Section
      id="capabilities"
      eyebrow="What I Do"
      title="End-to-end engineering, built to ship"
      description="From the first wireframe to the production deploy, I work across the whole stack — turning ambiguous ideas into products that scale and stay maintainable."
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {capabilities.map((c, i) => (
          <Reveal key={c.title} delay={(i % 2) * 0.08}>
            <div className="glass glass-hover group relative h-full rounded-2xl p-7">
              {/* glowing index */}
              <span className="text-gradient text-2xl font-bold tracking-widest">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-xl font-semibold tracking-tight">
                {c.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                {c.blurb}
              </p>
              <ul className="mt-5 space-y-2.5">
                {c.points.map((p) => (
                  <li
                    key={p}
                    className="flex items-start gap-2.5 text-sm text-muted-foreground"
                  >
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-md bg-primary/15 text-primary">
                      <Check className="h-3 w-3" />
                    </span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
