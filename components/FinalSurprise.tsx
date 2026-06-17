"use client";

import { motion } from "framer-motion";
import { Heart, RotateCcw } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export function FinalSurprise() {
  return (
    <section id="surprise" className="relative min-h-screen overflow-hidden px-5 py-24 md:px-10">
      <div className="absolute inset-0 bg-[url('/images/surprise.svg')] bg-cover bg-center opacity-20" />
      <div className="absolute inset-0 hero-gradient" />
      {Array.from({ length: 24 }).map((_, i) => (
        <motion.div key={i} className="absolute text-love-pink/25" initial={{ y: "110vh", x: `${(i * 13) % 100}vw` }} animate={{ y: "-20vh", rotate: 180 }} transition={{ duration: 9 + i * .4, repeat: Infinity, delay: i * .2 }}>
          <Heart fill="currentColor" />
        </motion.div>
      ))}
      <div className="relative z-10 mx-auto flex min-h-[78vh] max-w-4xl flex-col items-center justify-center text-center">
        <p className="text-sm font-bold uppercase tracking-[.35em] text-love-soft">Final Episode</p>
        <h2 className="mt-5 text-4xl font-black leading-tight md:text-7xl">{siteConfig.finalMessage}</h2>
        <p className="mt-6 max-w-2xl text-lg text-white/75">Happy Birthday, my love. This website is yours forever — a small digital home for our memories.</p>
        <a href="#home" className="mt-9 flex items-center gap-2 rounded-xl bg-white px-6 py-4 font-bold text-black hover:bg-white/85"><RotateCcw /> Replay Our Story</a>
      </div>
    </section>
  );
}
