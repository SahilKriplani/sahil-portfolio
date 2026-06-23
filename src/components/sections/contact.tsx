"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2, Mail, MapPin, Send } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { profile, social } from "@/data/portfolio";

type Status = "idle" | "loading" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setError("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) throw new Error(json.error ?? "Something went wrong.");
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's connect"
      description="Building something interesting, hiring, or just want to talk shop? Drop a line — I read every message."
    >
      <div className="grid gap-8 lg:grid-cols-5">
        {/* Direct links */}
        <Reveal className="lg:col-span-2">
          <div className="flex h-full flex-col gap-3">
            <a
              href={`mailto:${social.email}`}
              className="glass glass-hover flex items-center gap-3 rounded-2xl p-5"
            >
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-primary/15 text-primary">
                <Mail className="h-4 w-4" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">Email</p>
                <p className="text-sm font-medium">{social.email}</p>
              </div>
            </a>
            <a
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="glass glass-hover flex items-center gap-3 rounded-2xl p-5"
            >
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-primary/15 text-primary">
                <LinkedinIcon className="h-4 w-4" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">LinkedIn</p>
                <p className="text-sm font-medium">Connect with me</p>
              </div>
            </a>
            <a
              href={social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="glass glass-hover flex items-center gap-3 rounded-2xl p-5"
            >
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-primary/15 text-primary">
                <GithubIcon className="h-4 w-4" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">GitHub</p>
                <p className="text-sm font-medium">See my code</p>
              </div>
            </a>
            <div className="glass flex items-center gap-3 rounded-2xl p-5">
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-primary/15 text-primary">
                <MapPin className="h-4 w-4" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">Location</p>
                <p className="text-sm font-medium">{profile.location}</p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Form */}
        <Reveal delay={0.1} className="lg:col-span-3">
          <form onSubmit={onSubmit} className="glass gradient-border relative rounded-2xl p-6 sm:p-8">
            {/* Honeypot */}
            <input
              type="text"
              name="company"
              tabIndex={-1}
              autoComplete="off"
              className="absolute -left-[9999px]"
              aria-hidden
            />

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="flex flex-col gap-1.5">
                <span className="text-sm font-medium">Name</span>
                <input
                  name="name"
                  required
                  minLength={2}
                  placeholder="Jane Doe"
                  className="rounded-lg border border-border bg-card/50 px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-primary"
                />
              </label>
              <label className="flex flex-col gap-1.5">
                <span className="text-sm font-medium">Email</span>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="jane@company.com"
                  className="rounded-lg border border-border bg-card/50 px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-primary"
                />
              </label>
            </div>

            <label className="mt-4 flex flex-col gap-1.5">
              <span className="text-sm font-medium">Message</span>
              <textarea
                name="message"
                required
                minLength={10}
                rows={5}
                placeholder="Tell me what's on your mind…"
                className="resize-none rounded-lg border border-border bg-card/50 px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-primary"
              />
            </label>

            <button
              type="submit"
              disabled={status === "loading" || status === "success"}
              className="mt-5 inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 font-medium text-primary-foreground transition-all hover:opacity-90 disabled:opacity-60 glow"
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" /> Sending…
                </>
              ) : status === "success" ? (
                <>
                  <CheckCircle2 className="h-4 w-4" /> Message sent
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" /> Send message
                </>
              )}
            </button>

            {status === "success" && (
              <p className="mt-3 text-sm text-emerald-400">
                Thanks — I&apos;ll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="mt-3 text-sm text-destructive">{error}</p>
            )}
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
