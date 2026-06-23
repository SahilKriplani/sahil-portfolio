import { Eye, Lock, Rocket } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { Countdown } from "@/components/countdown";
import { ProjectThumb } from "@/components/project-thumb";
import type { Project, ProjectStatus } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const statusStyles: Record<ProjectStatus, string> = {
  Live: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
  "In Progress": "bg-amber-500/15 text-amber-400 border-amber-500/30",
  "Coming Soon": "bg-primary/15 text-primary border-primary/30",
};

export function ProjectCard({ project }: { project: Project }) {
  const isSoon = project.status === "Coming Soon";

  return (
    <div className="glass glass-hover gradient-border group relative flex h-full flex-col rounded-2xl p-4">
      <ProjectThumb project={project} />
      <div className="mt-4 flex items-start justify-between gap-3 px-1">
        <h3 className="text-lg font-semibold leading-tight">{project.name}</h3>
        <span
          className={cn(
            "inline-flex shrink-0 items-center gap-1 rounded-full border px-2.5 py-1 text-xs font-medium",
            statusStyles[project.status]
          )}
        >
          {isSoon && <Rocket className="h-3 w-3" />}
          {project.status}
        </span>
      </div>

      <p className="mt-3 flex-1 px-1 text-sm leading-6 text-muted-foreground">
        {project.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-1.5 px-1">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-md border border-border/60 bg-card/40 px-2 py-0.5 text-xs text-muted-foreground"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-5 border-t border-border/50 px-1 pt-4">
        {project.nda ? (
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Lock className="h-4 w-4" />
            Company project · confidential under NDA
          </div>
        ) : isSoon && project.launchDate ? (
          <Countdown date={project.launchDate} />
        ) : (
          <div className="flex flex-wrap items-center gap-2">
            {project.previewUrl && (
              <a
                href={project.previewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-3.5 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                <Eye className="h-3.5 w-3.5" />
                Preview
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-card/40 px-3.5 py-2 text-sm font-medium transition-colors hover:bg-accent"
              >
                <GithubIcon className="h-3.5 w-3.5" />
                Code
              </a>
            )}
            {!project.previewUrl && !project.repoUrl && (
              <span className="text-sm text-muted-foreground">
                Details coming soon
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
