"use client";

import type { Memory } from "@/data/memories";
import { MemoryCard } from "./MemoryCard";

export function VideoGrid({ memories, onSelect }: { memories: Memory[]; onSelect: (memory: Memory) => void }) {
  const videos = memories.filter((m) => m.type === "video");
  return (
    <section id="videos" className="px-5 py-16 md:px-10">
      <p className="text-sm font-bold uppercase tracking-[.3em] text-love-soft">Videos</p>
      <h2 className="mt-2 text-4xl font-black md:text-6xl">Video Memories</h2>
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {videos.map((memory) => <MemoryCard key={memory.id} memory={memory} onClick={onSelect} />)}
      </div>
    </section>
  );
}
