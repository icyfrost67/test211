"use client";

import { MusicToggle } from "./MusicToggle";
import { siteConfig } from "@/data/siteConfig";

const links = [
  ["Home", "#home"],
  ["Our Story", "#story"],
  ["Photos", "#photos"],
  ["Videos", "#videos"],
  ["Letter", "#letter"],
  ["Surprise", "#surprise"]
];

export function Navbar() {
  return (
    <nav className="fixed left-0 right-0 top-0 z-40 bg-gradient-to-b from-black via-black/80 to-transparent px-4 py-4 md:px-10">
      <div className="flex items-center justify-between gap-4">
        <a href="#home" className="text-2xl font-black tracking-tight text-love-red md:text-3xl">{siteConfig.brandName}</a>
        <div className="hidden items-center gap-6 text-sm text-white/75 md:flex">
          {links.map(([label, href]) => <a key={label} href={href} className="hover:text-white">{label}</a>)}
        </div>
        <MusicToggle />
      </div>
    </nav>
  );
}
