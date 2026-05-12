'use client'
import { WavyBackground } from "./ui/wavy-background"
import { AnimatedTooltip } from "./ui/animated-tooltip";
const instructors = [
  {
    id: 1,
    name: 'Elena Briggs',
    designation: 'Vocal Coach',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Marcus Reed',
    designation: 'Guitar Mentor',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'Sophia Carter',
    designation: 'Piano Instructor',
    image:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 4,
    name: 'Daniel Hayes',
    designation: 'Drum Coach',
    image:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 5,
    name: 'Isabella Moore',
    designation: 'Violin Trainer',
    image:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 6,
    name: 'Noah Bennett',
    designation: 'Music Producer',
    image:
      'https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=800&auto=format&fit=crop',
  },
];

function Instructors() {
  return (
    <div className="relative h-[40rem] overflow-hidden flex items-center justify-center">
      <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
        <h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8">Meet Our Instructor</h2>
        <p className="text-base md:text-lg text-white text-center mb-4">Discover the talented professionals who will guide your musical journey</p>
        <div className="flex flex-row items-center justify-center mb-10 w-full">
            <AnimatedTooltip items={instructors} />
        </div>
      </WavyBackground>
    </div>
  )
}

export default Instructors