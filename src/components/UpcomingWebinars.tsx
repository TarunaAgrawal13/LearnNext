'use client'
import Link from "next/link"
import { HoverEffect } from "./ui/card-hover-effect";
function UpcomingWebinars() {

  const featuredWebinars = [
  {
    title: 'Mastering Guitar Basics',
    description:
      'Learn essential guitar chords, strumming patterns, and beginner-friendly techniques.',
    slug: 'mastering-guitar-basics',
    isFeatured: true,
  },
  {
    title: 'Understanding Music Theory',
    description:
      'Dive deep into the fundamentals of music theory and enhance your musical skills.',
    slug: 'understanding-music-theory',
    isFeatured: true,
  },
  {
    title: 'Vocal Training for Beginners',
    description:
      'Improve your singing voice with breathing exercises, pitch control, and vocal practice.',
    slug: 'vocal-training-for-beginners',
    isFeatured: true,
  },
  {
    title: 'Piano Essentials Workshop',
    description:
      'Explore piano basics including scales, hand coordination, and simple melodies.',
    slug: 'piano-essentials-workshop',
    isFeatured: false,
  },
  {
    title: 'Songwriting and Composition',
    description:
      'Discover how to write meaningful lyrics and create memorable melodies.',
    slug: 'songwriting-and-composition',
    isFeatured: true,
  },
  {
    title: 'Electronic Music Production',
    description:
      'Learn how to create electronic tracks using modern music production software.',
    slug: 'electronic-music-production',
    isFeatured: true,
  },
  {
    title: 'Drumming Techniques Masterclass',
    description:
      'Build rhythm, timing, and coordination with practical drumming exercises.',
    slug: 'drumming-techniques-masterclass',
    isFeatured: false,
  },
  {
    title: 'Live Performance Confidence',
    description:
      'Gain confidence on stage and learn techniques for engaging live performances.',
    slug: 'live-performance-confidence',
    isFeatured: true,
  },
];

  return (
    <div className="p-12 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center">
                <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED WEBINARS</h2>
                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Enhance Your Musical Journey</p>
            </div>

            <div className="mt-10">
               <HoverEffect 
                items={featuredWebinars.map(webinar => (
                    {
                        title:webinar.title,
                        description:webinar.description,
                        link: '/'
                    }
                ))}
               />
            </div>


            <div className="mt-10 text-center">
                <Link href={"/"} className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200">
                    View All webinars
                </Link>
            </div>
        </div>
    </div>
  )
}

export default UpcomingWebinars