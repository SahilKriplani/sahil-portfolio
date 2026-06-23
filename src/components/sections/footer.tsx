import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, XIcon } from "@/components/icons";
import { profile, social } from "@/data/portfolio";

export function Footer() {
  const links = [
    { icon: GithubIcon, href: social.github, label: "GitHub" },
    { icon: LinkedinIcon, href: social.linkedin, label: "LinkedIn" },
    { icon: Mail, href: `mailto:${social.email}`, label: "Email" },
    social.twitter ? { icon: XIcon, href: social.twitter, label: "X" } : null,
  ].filter(Boolean) as { icon: typeof Mail; href: string; label: string }[];

  return (
    <footer className="relative border-t border-border/60 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 sm:flex-row sm:px-8">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {profile.name}. Built with Next.js &amp; Tailwind.
        </p>
        <div className="flex items-center gap-2">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={l.label}
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border/60 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            >
              <l.icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
