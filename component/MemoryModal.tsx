"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X, SkipForward } from "lucide-react";
import type { Memory } from "@/data/memories";

export function MemoryModal({ memory, onClose, onNext }: { memory: Memory | null; onClose: () => void; onNext: () => void }) {
  return (
    <AnimatePresence>
      {memory && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-3 md:p-8">
          <motion.div initial={{ y: 60, scale: .96 }} animate={{ y: 0, scale: 1 }} exit={{ y: 40, scale: .96 }} className="glass relative max-h-[92vh] w-full max-w-5xl overflow-y-auto rounded-2xl">
            <button onClick={onClose} className="absolute right-4 top-4 z-10 rounded-full bg-black/70 p-2 hover:bg-white/20"><X /></button>
            <div className="relative aspect-video bg-black">
              {memory.type === "video" ? (
                <video src={memory.media} poster={memory.thumbnail} controls className="h-full w-full" />
              ) : memory.type === "slideshow" && memory.images?.length ? (
                <div className="flex h-full snap-x overflow-x-auto">
                  {memory.images.map((src) => (
                    <div key={src} className="relative h-full min-w-full snap-center">
                      <Image src={src} alt={memory.title} fill className="object-cover" />
                    </div>
                  ))}
                </div>
              ) : (
                <Image src={memory.media || memory.thumbnail} alt={memory.title} fill className="object-cover" />
              )}
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black to-transparent" />
            </div>
            <div className="p-6 md:p-8">
              <p className="text-sm font-bold uppercase tracking-[.25em] text-love-soft">Episode {memory.episodeNumber}</p>
              <h2 className="mt-2 text-3xl font-black md:text-5xl">{memory.title}</h2>
              <p className="mt-2 text-white/55">{memory.date} • {memory.location}</p>
              <p className="mt-5 max-w-3xl text-lg text-white/80">{memory.description}</p>
              <blockquote className="mt-5 rounded-2xl border border-love-pink/30 bg-love-red/10 p-5 text-love-soft">“{memory.message}”</blockquote>
              <div className="mt-6 flex gap-3">
                <button onClick={onNext} className="flex items-center gap-2 rounded-lg bg-love-red px-5 py-3 font-bold hover:bg-love-pink"><SkipForward /> Next Memory</button>
                <button onClick={onClose} className="rounded-lg bg-white/10 px-5 py-3 font-bold hover:bg-white/20">Close</button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
