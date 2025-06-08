 "use client"

import * as React from "react"
import Link from "next/link"
import { Mic, BookOpen, Wind, BarChart3, Shield, Menu, X } from "lucide-react"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"

// Navigation data
const therapyOptions = [
  {
    title: "Voice Counseling",
    href: "/voice-therapy",
    description: "Talk naturally with our AI therapist for personalized stress relief.",
  },
  {
    title: "Chat Therapy",
    href: "/chat-therapy", 
    description: "Text-based AI conversations for when you prefer typing.",
  },
  {
    title: "Crisis Support",
    href: "/crisis-support",
    description: "24/7 emergency AI intervention with human therapist escalation.",
  }
]

const storyCategories = [
  {
    title: "Meditation Stories",
    href: "/meditation-stories",
    description: "Guided narratives that transport you to peaceful realms.",
  },
  {
    title: "Sleep Stories", 
    href: "/sleep-stories",
    description: "Calming bedtime stories designed to help you fall asleep.",
  },
  {
    title: "Healing Journeys",
    href: "/healing-journeys", 
    description: "Personal transformation stories and recovery narratives.",
  }
]

function ListItem({
  className,
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"a"> & {
  title: string
  href: string
}) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}

export default function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

  return (
    <div className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-white/20 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 flex-shrink-0">
            <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-white" style={{clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)"}} />
            </div>
            <span className="text-2xl font-bold text-black">Calmly.</span>
          </Link>

          {/* Desktop Navigation - Following shadcn pattern */}
          <div className="hidden lg:flex items-center justify-center flex-1 max-w-4xl mx-8">
            <NavigationMenu viewport={false}>
              <NavigationMenuList>
                {/* Home */}
                <NavigationMenuItem>
                  <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                    <Link href="/" className="hover:bg-white/50">
                      Home
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                {/* AI Therapy - Featured */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-gradient-to-r from-blue-100/80 to-purple-100/80 text-blue-700 hover:bg-blue-200/80">
                    <Mic className="w-4 h-4 mr-2" />
                    AI Therapy
                    <span className="ml-2 px-2 py-0.5 text-xs bg-blue-500 text-white rounded-full">
                      New
                    </span>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <Link
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-blue-500/10 to-purple-500/10 p-6 no-underline outline-none focus:shadow-md"
                            href="/voice-therapy"
                          >
                            <Mic className="h-6 w-6 text-blue-600" />
                            <div className="mb-2 mt-4 text-lg font-medium">
                              AI Voice Therapy
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              Talk to our AI therapist anytime. Advanced voice recognition understands your emotions.
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      {therapyOptions.map((option) => (
                        <ListItem
                          key={option.title}
                          title={option.title}
                          href={option.href}
                        >
                          {option.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Stories */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="hover:bg-white/50">
                    <BookOpen className="w-4 h-4 mr-2" />
                    Stories
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {storyCategories.map((category) => (
                        <ListItem
                          key={category.title}
                          title={category.title}
                          href={category.href}
                        >
                          {category.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Breathing */}
<NavigationMenuItem>
  <NavigationMenuTrigger className="hover:bg-white/50">
    <Wind className="w-4 h-4 mr-2" />
    Breathing
  </NavigationMenuTrigger>
  <NavigationMenuContent>
    <ul className="grid w-[200px] gap-2 p-4">
      <li>
        <NavigationMenuLink asChild>
          <Link href="/breathing" className="block p-2 hover:bg-gray-50 rounded">
            <div className="font-medium">Breathing Exercises</div>
            <div className="text-muted-foreground text-sm">
              Guided breathing techniques for wellness
            </div>
          </Link>
        </NavigationMenuLink>
      </li>
    </ul>
  </NavigationMenuContent>
</NavigationMenuItem>

{/* Wellness */}
<NavigationMenuItem>
  <NavigationMenuTrigger className="hover:bg-white/50">
    <BarChart3 className="w-4 h-4 mr-2" />
    Wellness
  </NavigationMenuTrigger>
  <NavigationMenuContent>
    <ul className="grid w-[200px] gap-2 p-4">
      <li>
        <NavigationMenuLink asChild>
          <Link href="/wellness" className="block p-2 hover:bg-gray-50 rounded">
            <div className="font-medium">Wellness Dashboard</div>
            <div className="text-muted-foreground text-sm">
              Track your mental health progress
            </div>
          </Link>
        </NavigationMenuLink>
      </li>
    </ul>
  </NavigationMenuContent>
</NavigationMenuItem>

                {/* About */}
                <NavigationMenuItem>
                  <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                    <Link href="/about" className="hover:bg-white/50">
                      About
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4 flex-shrink-0">
            {/* Emergency Support */}
            <Link href="/crisis-support">
              <button className="hidden lg:flex items-center space-x-2 bg-red-500/90 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-red-600/90 transition-all shadow-sm">
                <Shield className="w-4 h-4" />
                <span>Emergency</span>
              </button>
            </Link>

            {/* Sign In Button */}
            <button className="bg-black/90 backdrop-blur-sm text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-black transition-all shadow-sm">
              Sign In
            </button>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/90 backdrop-blur-xl border border-white/20 rounded-lg mt-2 shadow-xl">
              <Link href="/" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md">
                Home
              </Link>
              <Link href="/voice-therapy" className="flex items-center px-3 py-2 text-base font-medium text-blue-700 hover:text-blue-900 hover:bg-blue-50 rounded-md">
                <Mic className="w-4 h-4 mr-2" />
                AI Therapy
                <span className="ml-2 px-2 py-0.5 text-xs bg-blue-500 text-white rounded-full">New</span>
              </Link>
              <Link href="/meditation-stories" className="flex items-center px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md">
                <BookOpen className="w-4 h-4 mr-2" />
                Stories
              </Link>
              <Link href="/breathing" className="flex items-center px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md">
                <Wind className="w-4 h-4 mr-2" />
                Breathing
              </Link>
              <Link href="/wellness" className="flex items-center px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md">
                <BarChart3 className="w-4 h-4 mr-2" />
                Wellness
              </Link>
              <Link href="/about" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md">
                About
              </Link>
              <Link href="/crisis-support" className="flex items-center px-3 py-2 text-base font-medium text-red-700 hover:text-red-900 hover:bg-red-50 rounded-md">
                <Shield className="w-4 h-4 mr-2" />
                Emergency Support
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
