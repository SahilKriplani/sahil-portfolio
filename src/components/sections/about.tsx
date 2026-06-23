import { Briefcase, GraduationCap, MapPin, Sparkles } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { profile, marquee, experience, education } from "@/data/portfolio";

const facts = [
  { icon: Briefcase, label: "Currently", value: experience[0].company },
  { icon: Sparkles, label: "Focus", value: "Full-stack SaaS · AI workflows" },
  { icon: GraduationCap, label: "Education", value: education[0].degree.split("(")[0].trim() },
  { icon: MapPin, label: "Based in", value: profile.location },
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="Engineer who ships, not just writes code"
    >
      <div className="grid gap-8 lg:grid-cols-5">
        <Reveal className="lg:col-span-3">
          <div className="glass rounded-2xl p-7">
            <p className="text-base leading-8 text-muted-foreground">
              {profile.bio}
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              I care about the boring parts that make products real: query
              indexing that cuts latency, CI/CD that ships without downtime, and
              tests that let you refactor without fear. Outside of work I&apos;m
              deep in DSA, system design, and building my own products.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-2">
          <div className="grid h-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {facts.map((f) => (
              <div
                key={f.label}
                className="glass flex items-start gap-3 rounded-2xl p-5"
              >
                <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary/15 text-primary">
                  <f.icon className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">
                    {f.label}
                  </p>
                  <p className="text-sm font-medium">{f.value}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      {/* Tech marquee */}
      <div className="relative mt-14 overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_12%,#000_88%,transparent)]">
        <div className="flex w-max animate-marquee gap-3">
          {[...marquee, ...marquee].map((tech, i) => (
            <span
              key={`${tech}-${i}`}
              className="whitespace-nowrap rounded-full border border-border/60 bg-card/40 px-5 py-2 text-sm text-muted-foreground backdrop-blur"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Section>
  );
}
