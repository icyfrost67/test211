"use client";

import type { Memory } from "@/data/memories";

export function StoryTimeline({ memories, onSelect }: { memories: Memory[]; onSelect: (memory: Memory) => void }) {
  return (
    <section id="story" className="px-5 py-16 md:px-10">
      <p className="text-sm font-bold uppercase tracking-[.3em] text-love-soft">Our Story</p>
      <h2 className="mt-2 text-4xl font-black md:text-6xl">Episodes of Us</h2>
      <div className="mt-10 grid gap-4">
        {memories.slice(0, 5).map((memory) => (
          <button key={memory.id} onClick={() => onSelect(memory)} className="glass group rounded-2xl p-5 text-left transition hover:border-love-pink/50 hover:bg-white/10 md:flex md:items-center md:justify-between">
            <div>
              <p className="text-love-soft">Episode {memory.episodeNumber}</p>
              <h3 className="mt-1 text-2xl font-bold">{memory.title}</h3>
              <p className="mt-2 text-white/60">{memory.description}</p>
            </div>
            <span className="mt-4 inline-block rounded-full bg-white/10 px-4 py-2 text-sm md:mt-0">Open Episode</span>
          </button>
        ))}
      </div>
    </section>
  );
}
