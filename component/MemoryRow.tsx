"use client";

import type { Memory } from "@/data/memories";
import { MemoryCard } from "./MemoryCard";

export function MemoryRow({ title, memories, onSelect }: { title: string; memories: Memory[]; onSelect: (memory: Memory) => void }) {
  if (!memories.length) return null;
  return (
    <section className="mb-10 px-5 md:px-10">
      <h2 className="mb-4 text-xl font-bold md:text-2xl">{title}</h2>
      <div className="flex gap-4 overflow-x-auto pb-5">
        {memories.map((memory) => <MemoryCard key={memory.id} memory={memory} onClick={onSelect} />)}
      </div>
    </section>
  );
}
