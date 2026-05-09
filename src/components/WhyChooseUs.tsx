"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal"

const content = [
  {
    title: "Discover New Sounds",
    description:
      "Explore trending tracks, hidden gems, and curated playlists from artists around the world. Find music that matches every mood, moment, and vibe with a personalized listening experience.",
  },
  {
    title: "Live Streaming Experience",
    description:
      "Stream your favorite songs instantly with crystal-clear audio and seamless playback. Enjoy uninterrupted music anytime, anywhere, whether you're relaxing, studying, or working out.",
  },
  {
    title: "Create & Share Playlists",
    description:
      "Build playlists for every occasion and share them with friends in a single click. Organize your favorite tracks, collaborate with others, and keep your music collection perfectly synced.",
  },
  {
    title: "Feel the Beat Everywhere",
    description:
      "Take your music with you across all devices. From late-night chill sessions to energetic morning workouts, enjoy unlimited access to your favorite artists and albums wherever you go.",
  },
];


function WhyChooseUs() {
  return (
    <div>
        <StickyScroll content={content} />
    </div>
  )
}

export default WhyChooseUs