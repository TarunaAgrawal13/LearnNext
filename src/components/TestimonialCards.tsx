'use client'
import { cn } from "@/lib/utils";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
const musicSchoolTestimonials = [
  {
    quote:
      "Joining the music school completely changed my confidence as a performer. The mentors guided me patiently and helped me improve my stage presence and vocal control.",
    name: "Sophia Carter",
    title: "Vocal Student",
  },
  {
    quote:
      "The piano lessons are structured in a way that makes learning fun and engaging. I can now play my favorite songs with confidence and proper technique.",
    name: "Daniel Lee",
    title: "Piano Student",
  },
  {
    quote:
      "I always wanted to learn drums, and this school gave me the perfect environment to grow. The instructors are supportive and incredibly talented.",
    name: "Ryan Mitchell",
    title: "Drum Student",
  },
  {
    quote:
      "The guitar program helped me understand music theory while improving my practical skills. Every class feels inspiring and motivating.",
    name: "Emma Wilson",
    title: "Guitar Student",
  },
  {
    quote:
      "The teachers genuinely care about each student’s progress. I’ve improved my violin skills faster than I ever expected.",
    name: "Olivia Brown",
    title: "Violin Student",
  },
  {
    quote:
      "From songwriting to live performance training, this music school provided me with the tools to express myself creatively and professionally.",
    name: "Michael Adams",
    title: "Songwriting Student",
  },
  {
    quote:
      "The supportive community and hands-on teaching style made learning music enjoyable. I now feel ready to perform in front of audiences.",
    name: "Isabella Clark",
    title: "Keyboard Student",
  },
];


function MusicSchoolTestimonials() {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
        <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        )}
      />
        <h2 className="text-3xl font-bold text-center mb-8 z-10">Hear Our Harmony: Voices Of Success</h2>
        <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-6xl">
                <InfiniteMovingCards
                 items={musicSchoolTestimonials}
                 direction="right"
                 speed="slow"
                  />
            </div>
        </div>
    </div>
  )
}

export default MusicSchoolTestimonials