export type MemoryType = "photo" | "video" | "slideshow";

export type Memory = {
  id: string;
  title: string;
  category: "story" | "photo" | "video" | "cute" | "birthday" | "reason" | "surprise";
  type: MemoryType;
  thumbnail: string;
  media?: string;
  images?: string[];
  date: string;
  location: string;
  description: string;
  message: string;
  episodeNumber: number;
  duration?: string;
};

// Replace these sample memories with your real photos/videos.
export const memories: Memory[] = [
  {
    id: "m1",
    title: "How We Met",
    category: "story",
    type: "slideshow",
    thumbnail: "/images/memory1.svg",
    images: ["/images/memory1.svg", "/images/memory2.svg", "/images/memory3.svg"],
    date: "Episode 1",
    location: "Our beginning",
    description: "The first chapter of our story.",
    message: "This was the start of something I will always treasure.",
    episodeNumber: 1
  },
  {
    id: "m2",
    title: "Favourite Smile",
    category: "photo",
    type: "photo",
    thumbnail: "/images/memory2.svg",
    media: "/images/memory2.svg",
    date: "Special Day",
    location: "With you",
    description: "One of my favourite photos of you.",
    message: "Your smile makes even ordinary days feel special.",
    episodeNumber: 2
  },
  {
    id: "m3",
    title: "Video Memory",
    category: "video",
    type: "video",
    thumbnail: "/images/video-thumb.svg",
    media: "/videos/video1.mp4",
    date: "A sweet moment",
    location: "Our memory lane",
    description: "A video memory to replay again and again.",
    message: "Some moments deserve to be watched forever.",
    episodeNumber: 3,
    duration: "0:30"
  },
  {
    id: "m4",
    title: "Cutest Moment",
    category: "cute",
    type: "photo",
    thumbnail: "/images/memory3.svg",
    media: "/images/memory3.svg",
    date: "Cute Episode",
    location: "My heart",
    description: "A tiny memory that means so much.",
    message: "You make my world softer and happier.",
    episodeNumber: 4
  },
  {
    id: "m5",
    title: "Birthday Special",
    category: "birthday",
    type: "slideshow",
    thumbnail: "/images/birthday.svg",
    images: ["/images/birthday.svg", "/images/memory1.svg", "/images/memory2.svg"],
    date: "Birthday Episode",
    location: "Today",
    description: "A birthday collection made only for you.",
    message: "Today is about celebrating the most beautiful person in my life.",
    episodeNumber: 5
  },
  {
    id: "m6",
    title: "Reason I Love You",
    category: "reason",
    type: "photo",
    thumbnail: "/images/reason.svg",
    media: "/images/reason.svg",
    date: "Always",
    location: "Everywhere",
    description: "Because you are you.",
    message: "I love your kindness, your smile, your heart, and the way you make life feel warm.",
    episodeNumber: 6
  },
  {
    id: "m7",
    title: "Final Surprise",
    category: "surprise",
    type: "photo",
    thumbnail: "/images/surprise.svg",
    media: "/images/surprise.svg",
    date: "Finale",
    location: "Forever",
    description: "The ending screen, but never the end of us.",
    message: "You will always be my favourite story.",
    episodeNumber: 7
  }
];

export const rows = [
  { title: "Continue Watching Our Story", categories: ["story"] },
  { title: "Our Best Memories", categories: ["story", "photo", "cute"] },
  { title: "Photo Stories", categories: ["photo"] },
  { title: "Video Memories", categories: ["video"] },
  { title: "Cute Moments", categories: ["cute"] },
  { title: "Birthday Specials", categories: ["birthday"] },
  { title: "Reasons I Love You", categories: ["reason"] },
  { title: "Final Surprise", categories: ["surprise"] }
] as const;
