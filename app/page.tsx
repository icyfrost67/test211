"use client";

import { useMemo, useState } from "react";
import { PasswordScreen } from "@/components/PasswordScreen";
import { ProfileScreen } from "@/components/ProfileScreen";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { MemoryRow } from "@/components/MemoryRow";
import { MemoryModal } from "@/components/MemoryModal";
import { StoryTimeline } from "@/components/StoryTimeline";
import { PhotoGallery } from "@/components/PhotoGallery";
import { VideoGrid } from "@/components/VideoGrid";
import { BirthdayLetter } from "@/components/BirthdayLetter";
import { FinalSurprise } from "@/components/FinalSurprise";
import { memories, rows, type Memory } from "@/data/memories";

export default function Home() {
  const [unlocked, setUnlocked] = useState(false);
  const [profileSelected, setProfileSelected] = useState(false);
  const [selectedMemory, setSelectedMemory] = useState<Memory | null>(null);

  const storyMemories = useMemo(() => memories.filter((m) => m.category === "story" || m.category === "birthday"), []);

  function nextMemory() {
    if (!selectedMemory) return;
    const currentIndex = memories.findIndex((m) => m.id === selectedMemory.id);
    setSelectedMemory(memories[(currentIndex + 1) % memories.length]);
  }

  if (!unlocked) return <PasswordScreen onUnlock={() => setUnlocked(true)} />;
  if (!profileSelected) return <ProfileScreen onSelect={() => setProfileSelected(true)} />;

  return (
    <main className="min-h-screen bg-love-dark text-white">
      <Navbar />
      <HeroSection />
      <div className="relative z-10 -mt-20">
        {rows.map((row) => (
          <MemoryRow
            key={row.title}
            title={row.title}
            memories={memories.filter((memory) => (row.categories as readonly string[]).includes(memory.category))}
            onSelect={setSelectedMemory}
          />
        ))}
        <StoryTimeline memories={storyMemories} onSelect={setSelectedMemory} />
        <PhotoGallery memories={memories} onSelect={setSelectedMemory} />
        <VideoGrid memories={memories} onSelect={setSelectedMemory} />
        <BirthdayLetter />
        <FinalSurprise />
      </div>
      <MemoryModal memory={selectedMemory} onClose={() => setSelectedMemory(null)} onNext={nextMemory} />
    </main>
  );
}
