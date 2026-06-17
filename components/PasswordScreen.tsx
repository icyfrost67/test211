"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { Lock, Heart } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export function PasswordScreen({ onUnlock }: { onUnlock: () => void }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function submit(e: FormEvent) {
    e.preventDefault();
    if (password.trim().toLowerCase() === siteConfig.password.toLowerCase()) {
      onUnlock();
    } else {
      setError("Almost there, try our special password ❤️");
    }
  }

  return (
    <main className="min-h-screen hero-gradient flex items-center justify-center p-6 relative overflow-hidden">
      <FloatingHearts />
      <motion.form
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        onSubmit={submit}
        className="glass w-full max-w-md rounded-3xl p-8 text-center shadow-glow"
      >
        <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-love-red/20 text-love-pink">
          <Lock size={30} />
        </div>
        <h1 className="text-5xl font-black tracking-tight text-love-red">{siteConfig.brandName}</h1>
        <p className="mt-3 text-white/75">A birthday surprise made just for you</p>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter our secret password"
          className="mt-8 w-full rounded-xl border border-white/10 bg-white/10 px-4 py-4 text-white outline-none focus:border-love-pink"
        />
        {error && <p className="mt-3 text-sm text-love-soft">{error}</p>}
        <button className="mt-6 w-full rounded-xl bg-love-red px-5 py-4 font-bold transition hover:scale-[1.02] hover:bg-love-pink">
          Unlock LoveFlix
        </button>
        <p className="mt-5 text-xs text-white/40">Hint: change the password in data/siteConfig.ts</p>
      </motion.form>
    </main>
  );
}

function FloatingHearts() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {Array.from({ length: 18 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-love-pink/30"
          initial={{ y: "110vh", x: `${(i * 17) % 100}vw`, scale: 0.5 }}
          animate={{ y: "-10vh", rotate: 360 }}
          transition={{ duration: 10 + i, repeat: Infinity, delay: i * 0.35 }}
        >
          <Heart fill="currentColor" />
        </motion.div>
      ))}
    </div>
  );
}
