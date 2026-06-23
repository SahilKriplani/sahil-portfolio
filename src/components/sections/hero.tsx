"use client";

import { motion } from "framer-motion";
import { ArrowRight, FileDown, MapPin } from "lucide-react";
import { profile } from "@/data/portfolio";
import { Avatar } from "@/components/avatar";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-28">
      {/* Floating glass orbs for depth */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="glass animate-float absolute left-[12%] top-[24%] h-24 w-24 rounded-3xl rotate-12 opacity-70" />
        <div className="glass animate-float absolute right-[14%] top-[30%] h-16 w-16 rounded-2xl [animation-delay:-2s] opacity-70" />
        <div className="glass animate-float absolute bottom-[20%] left-[20%] h-14 w-14 rounded-full [animation-delay:-4s] opacity-60" />
        <div className="glass animate-float absolute bottom-[26%] right-[22%] h-20 w-20 rounded-3xl -rotate-12 [animation-delay:-3s] opacity-60" />
      </div>

      <div className="mx-auto w-full max-w-4xl px-5 text-center sm:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="mb-8 flex justify-center"
        >
          <Avatar size={150} className="glow" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/40 px-4 py-1.5 text-sm text-muted-foreground backdrop-blur"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          Open to building great things
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-5xl font-semibold tracking-tight sm:text-7xl"
        >
          {profile.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="text-gradient animate-gradient mt-4 text-2xl font-semibold tracking-tight sm:text-3xl"
        >
          {profile.tagline}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mx-auto mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg"
        >
          {profile.bio}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <a
            href="#projects"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 font-medium text-primary-foreground transition-all hover:opacity-90 glow sm:w-auto"
          >
            View Projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-border bg-card/40 px-6 py-3 font-medium backdrop-blur transition-colors hover:bg-accent sm:w-auto"
          >
            <FileDown className="h-4 w-4" />
            Resume
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-8 flex items-center justify-center gap-1.5 text-sm text-muted-foreground"
        >
          <MapPin className="h-4 w-4" />
          {profile.location}
        </motion.div>
      </div>
    </section>
  );
}
