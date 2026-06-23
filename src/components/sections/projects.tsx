import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { ProjectCard } from "@/components/project-card";
import { projects, companyProjects } from "@/data/portfolio";

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Things I'm building"
      description="A growing suite of products — from a personal productivity OS to real-time and AI systems. Some are live, the rest are inbound."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <Reveal key={p.name} delay={(i % 3) * 0.08}>
            <ProjectCard project={p} />
          </Reveal>
        ))}
      </div>

      {/* Professional / NDA work */}
      <Reveal className="mt-16">
        <h3 className="text-xl font-semibold tracking-tight">Professional Work</h3>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
          Production systems shipped at TechRays Labs. Code is under NDA, so these
          are described rather than linked.
        </p>
      </Reveal>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        {companyProjects.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.08}>
            <ProjectCard project={p} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
