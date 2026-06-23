import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { skills } from "@/data/portfolio";

function SkillRow({
  items,
  reverse,
  accent,
}: {
  items: readonly string[];
  reverse?: boolean;
  accent?: boolean;
}) {
  // Duplicate enough times for a seamless loop even with few items.
  const loop = [...items, ...items, ...items, ...items];
  return (
    <div className="marquee-row relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)]">
      <div
        className={`flex w-max gap-3 ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
      >
        {loop.map((skill, i) => (
          <span
            key={`${skill}-${i}`}
            className={`glass glass-hover whitespace-nowrap rounded-xl px-5 py-2.5 text-sm font-medium ${
              accent ? "text-primary" : "text-foreground/90"
            }`}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Skills() {
  const categories = Object.entries(skills);

  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="The stack I build and ship with"
      description="Tools I reach for daily — and the ones I'm actively leveling up. Hover any row to pause it."
    >
      <div className="flex flex-col gap-7">
        {categories.map(([category, items], idx) => (
          <Reveal key={category} delay={idx * 0.05}>
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">
              {category}
            </p>
            <SkillRow
              items={items}
              reverse={idx % 2 === 1}
              accent={category === "Currently Learning"}
            />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
