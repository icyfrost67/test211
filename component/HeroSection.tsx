"use client";

import { Play, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "@/data/siteConfig";

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-28">
      <div className="absolute inset-0">
        <div className="h-full w-full bg-[url('/images/hero.svg')] bg-cover bg-center opacity-70" />
        <div className="absolute inset-0 hero-gradient" />
      </div>
      <div className="relative z-10 flex min-h-[82vh] max-w-5xl flex-col justify-center px-5 md:px-12">
        <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="mb-4 text-sm font-bold uppercase tracking-[.35em] text-love-soft">
          Birthday Original Series
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .1 }} className="text-5xl font-black leading-tight md:text-8xl">
          {siteConfig.birthdayTitle}
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .2 }} className="mt-5 max-w-2xl text-lg text-white/80 md:text-2xl">
          {siteConfig.heroSubtitle}
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .3 }} className="mt-8 flex flex-wrap gap-4">
          <a href="#story" className="flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-bold text-black hover:bg-white/85"><Play fill="black" /> Start Watching</a>
          <a href="#letter" className="flex items-center gap-2 rounded-lg bg-white/15 px-6 py-3 font-bold text-white hover:bg-white/25"><Mail /> Open Birthday Letter</a>
        </motion.div>
      </div>
    </section>
  );
}
