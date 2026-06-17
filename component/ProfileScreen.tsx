"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { siteConfig } from "@/data/siteConfig";

export function ProfileScreen({ onSelect }: { onSelect: () => void }) {
  return (
    <main className="min-h-screen bg-love-dark flex flex-col items-center justify-center p-6">
      <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-12 text-center text-4xl font-semibold md:text-6xl">
        Who&apos;s watching?
      </motion.h1>
      <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-10">
        {siteConfig.profiles.map((profile, index) => (
          <motion.button
            key={profile.name}
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            onClick={onSelect}
            className="group text-center"
          >
            <div className="relative h-32 w-32 overflow-hidden rounded-2xl border-4 border-transparent bg-white/10 transition group-hover:scale-105 group-hover:border-white md:h-40 md:w-40">
              <Image src={profile.avatar} alt={profile.name} fill className="object-cover" />
            </div>
            <p className="mt-4 text-lg text-white/60 transition group-hover:text-white">{profile.name}</p>
          </motion.button>
        ))}
      </div>
      <p className="mt-12 text-sm text-white/35">Choose a profile to enter your private birthday cinema.</p>
    </main>
  );
}
