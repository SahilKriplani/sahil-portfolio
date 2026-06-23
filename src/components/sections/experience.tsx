import { Briefcase, GraduationCap } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { experience, education } from "@/data/portfolio";

export function Experience() {
  return (
    <Section id="experience" eyebrow="Journey" title="Experience & Education">
      <div className="relative">
        {/* Timeline rail */}
        <div className="absolute left-[15px] top-2 bottom-2 w-px bg-gradient-to-b from-primary/60 via-border to-transparent sm:left-[19px]" />

        <div className="flex flex-col gap-6">
          {experience.map((job, i) => (
            <Reveal key={job.company} delay={i * 0.05}>
              <div className="relative pl-12 sm:pl-16">
                <span className="absolute left-0 top-1 grid h-8 w-8 place-items-center rounded-full border border-primary/30 bg-card text-primary glow sm:h-10 sm:w-10">
                  <Briefcase className="h-4 w-4" />
                </span>
                <div className="glass rounded-2xl p-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="text-lg font-semibold">{job.role}</h3>
                    <span className="text-sm text-muted-foreground">{job.period}</span>
                  </div>
                  <p className="mt-1 text-sm font-medium text-primary">
                    {job.company} · {job.location}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {job.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex gap-2.5 text-sm leading-6 text-muted-foreground"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}

          {education.map((edu, i) => (
            <Reveal key={edu.school} delay={(experience.length + i) * 0.05}>
              <div className="relative pl-12 sm:pl-16">
                <span className="absolute left-0 top-1 grid h-8 w-8 place-items-center rounded-full border border-primary/30 bg-card text-primary sm:h-10 sm:w-10">
                  <GraduationCap className="h-4 w-4" />
                </span>
                <div className="glass rounded-2xl p-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="text-lg font-semibold">{edu.degree}</h3>
                    <span className="text-sm text-muted-foreground">{edu.period}</span>
                  </div>
                  <p className="mt-1 text-sm font-medium text-primary">{edu.school}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
