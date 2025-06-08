"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface Card {
  category: string
  title: string
  src: string
  content: React.ReactNode
}

export const AppleCarousel = ({
  cards,
  initialScroll = 0
}: {
  cards: Card[]
  initialScroll?: number
}) => {
  const carouselRef = React.useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = React.useState(false)
  const [canScrollRight, setCanScrollRight] = React.useState(true)

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll
      checkScrollability()
    }
  }, [initialScroll])

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth)
    }
  }

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" })
    }
  }

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" })
    }
  }

  return (
    <div className="relative w-full">
      <div
        className="flex w-full overflow-x-scroll overscroll-x-auto py-10 md:py-20 scroll-smooth [scrollbar-width:none]"
        ref={carouselRef}
        onScroll={checkScrollability}
      >
        <div className={cn("absolute right-0 z-[1000] h-auto w-[5%] overflow-hidden bg-gradient-to-l")}>
        </div>

        <div className={cn("flex flex-row justify-start gap-4 pl-4", "max-w-7xl mx-auto")}>
          {cards.map((card, index) => (
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.5,
                  delay: 0.2 * index,
                  ease: "easeOut",
                  once: true,
                },
              }}
              key={"card" + index}
              className="last:pr-[5%] md:last:pr-[33%] rounded-3xl"
            >
              <div className="h-80 w-56 md:h-[40rem] md:w-96 overflow-hidden bg-gray-100 dark:bg-neutral-900 rounded-3xl md:rounded-3xl relative">
                <div className="absolute inset-0">
                  <img
                    src={card.src}
                    alt={card.title}
                    className="object-cover absolute inset-0 h-full w-full"
                  />
                </div>
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8">
                  <motion.p
                    layoutId={`category-${card.category}`}
                    className="text-white text-sm md:text-base font-medium mb-2"
                  >
                    {card.category}
                  </motion.p>
                  <motion.p
                    layoutId={`title-${card.title}`}
                    className="text-white text-xl md:text-3xl font-bold max-w-xs"
                  >
                    {card.title}
                  </motion.p>
                  <div className="text-white text-sm md:text-base mt-4">
                    {card.content}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="flex justify-end gap-2 mr-10">
        <button
          className="relative z-40 h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50"
          onClick={scrollLeft}
          disabled={!canScrollLeft}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <button
          className="relative z-40 h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50"
          onClick={scrollRight}
          disabled={!canScrollRight}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  )
}

// Wellness Carousel Data
const wellnessCards = [
  {
    category: "AI Therapy",
    title: "Talk with your AI companion.",
    src: "https://images.unsplash.com/photo-1617953141905-b27fb1745fb5?q=80&w=2069&auto=format&fit=crop",
    content: (
      <p>
        Experience personalized AI therapy sessions that understand your emotions and provide real-time support for stress relief and mental wellness.
      </p>
    ),
  },
  {
    category: "Meditation",
    title: "Find your inner peace.",
    src: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2020&auto=format&fit=crop",
    content: (
      <p>
        Immerse yourself in guided meditation stories that transport you to peaceful realms and help you achieve deep relaxation.
      </p>
    ),
  },
  {
    category: "Breathing",
    title: "Master mindful breathing.",
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop",
    content: (
      <p>
        Learn powerful breathing techniques with AI guidance that adapts to your stress levels for optimal wellness results.
      </p>
    ),
  },
  {
    category: "Progress",
    title: "Track your wellness journey.",
    src: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?q=80&w=2071&auto=format&fit=crop",
    content: (
      <p>
        Monitor your mental health progress with detailed insights and personalized recommendations for continuous improvement.
      </p>
    ),
  },
  {
    category: "Community",
    title: "Connect with others.",
    src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2069&auto=format&fit=crop",
    content: (
      <p>
        Join a supportive community of individuals on similar wellness journeys, sharing experiences and encouragement.
      </p>
    ),
  },
]

// Main Carousel Section Component
export default function WellnessCarousel() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-black mb-4">
            Get to know your wellness.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover personalized AI therapy, guided meditation, and mindful breathing techniques designed for your mental wellness journey.
          </p>
        </div>
        
        <AppleCarousel cards={wellnessCards} />
      </div>
    </section>
  )
}