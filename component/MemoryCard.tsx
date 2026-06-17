"use client";

import Image from "next/image";
import { PlayCircle } from "lucide-react";
import type { Memory } from "@/data/memories";

export function MemoryCard({ memory, onClick }: { memory: Memory; onClick: (memory: Memory) => void }) {
  return (
    <button onClick={() => onClick(memory)} className="group min-w-[240px] overflow-hidden rounded-xl bg-white/5 text-left shadow-xl transition hover:z-20 hover:scale-105 hover:bg-white/10 md:min-w-[300px]">
      <div className="relative aspect-video overflow-hidden">
        <Image src={memory.thumbnail} alt={memory.title} fill className="object-cover transition group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" />
        <PlayCircle className="absolute bottom-3 right-3 text-white drop-shadow" size={34} />
        <span className="absolute left-3 top-3 rounded-full bg-black/65 px-3 py-1 text-xs font-bold">EP {memory.episodeNumber}</span>
      </div>
      <div className="p-4">
        <h3 className="font-bold">{memory.title}</h3>
        <p className="mt-1 text-xs text-white/55">{memory.date} • {memory.location}</p>
      </div>
    </button>
  );
}
