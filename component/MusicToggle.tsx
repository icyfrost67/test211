"use client";

import { useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

export function MusicToggle() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  async function toggle() {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
      return;
    }
    try {
      await audioRef.current.play();
      setPlaying(true);
    } catch {
      setPlaying(false);
    }
  }

  return (
    <>
      <audio ref={audioRef} src="/audio/background.mp3" loop />
      <button onClick={toggle} className="flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm hover:bg-white/20">
        {playing ? <Volume2 size={17} /> : <VolumeX size={17} />}
        <span className="hidden sm:inline">Music</span>
      </button>
    </>
  );
}
