"use client"

import { motion } from "framer-motion"
import { Sparkles, Github } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50/30 via-white to-purple-50/20 flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        
        {/* AI Voice Therapy Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <a 
        className="mx-auto mb-5 flex max-w-fit animate-fade-up items-center justify-center space-x-2 overflow-hidden rounded-full bg-blue-100 px-7 py-2 transition-colors hover:bg-blue-200"
        >
          <svg className="h-5 w-5 text-[#1d9bf0]" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.847a4.5 4.5 0 003.09 3.09L15.75 12l-2.847.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423L16.5 15.75l.394 1.183a2.25 2.25 0 001.423 1.423L19.5 18.75l-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
          </svg>
          <p className="text-sm font-semibold text-[#1d9bf0]">
            Introducing AI Voice Therapy
          </p>
        </a>

        </motion.div>

        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6"
        >
          <h1
          className="animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent drop-shadow-sm [text-wrap:balance] md:text-7xl md:leading-[5rem]"
          style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
        >
          Your AI Wellness Companion for Mental Peace
        </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          
          className="mt-6 animate-fade-up text-center text-gray-500 opacity-0 [text-wrap:balance] md:text-xl"
          style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
        >
          Talk to AI, listen to healing stories, practice mindful breathing. 
          Transform your mental health with intelligent, personalized wellness.
        
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12"
        >
          {/* Primary CTA */}
          <Link href="/voice-therapy">
            <button className="group flex items-center space-x-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-xl">
              <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-white" style={{clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)"}} />
              </div>
              <span>Start AI Therapy</span>
            </button>
          </Link>

          {/* Secondary CTA */}
          <Link 
            href="https://github.com/yourusername/zenai-wellness" 
            target="_blank"
            className="group"
          >
            <button className="flex items-center space-x-3 bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-700 px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:shadow-lg transition-all">
              <Github className="w-5 h-5" />
              <span>Star on GitHub</span>
              <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-sm font-bold">5K</span>
            </button>
          </Link>
        </motion.div>

        {/* Status Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex items-center justify-center space-x-8 mt-12 text-sm text-gray-500"
        >
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span>AI-Powered</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span>24/7 Available</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
            <span>Privacy First</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}