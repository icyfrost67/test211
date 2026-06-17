"use client";

import { useState } from "react";
import Image from "next/image";
import type { Memory } from "@/data/memories";

const tabs = ["All", "Cute", "Funny", "Travel", "Special"];

export function PhotoGallery({ memories, onSelect }: { memories: Memory[]; onSelect: (memory: Memory) => void }) {
  const [tab, setTab] = useState("All");
  const photos = memories.filter((m) => m.type !== "video");

  return (
    <section id="photos" className="px-5 py-16 md:px-10">
      <p className="text-sm font-bold uppercase tracking-[.3em] text-love-soft">Photos</p>
      <h2 className="mt-2 text-4xl font-black md:text-6xl">Photo Stories</h2>
      <div className="mt-8 flex flex-wrap gap-3">
        {tabs.map((item) => (
          <button key={item} onClick={() => setTab(item)} className={`rounded-full px-5 py-2 text-sm font-bold ${tab === item ? "bg-love-red" : "bg-white/10 hover:bg-white/20"}`}>{item}</button>
        ))}
      </div>
      <div className="masonry mt-8">
        {photos.map((memory) => (
          <button key={memory.id} onClick={() => onSelect(memory)} className="masonry-item group relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-white/10 text-left">
            <Image src={memory.thumbnail} alt={memory.title} fill className="object-cover transition group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90" />
            <div className="absolute bottom-0 p-4">
              <h3 className="font-bold">{memory.title}</h3>
              <p className="text-sm text-white/60">{memory.location}</p>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}
