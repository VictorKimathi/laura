"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Camera, BookOpen, Users, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Stunning landscape view from a mountain peak at golden hour"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div
          className={`relative z-10 text-center text-white px-4 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h1 className="font-serif text-5xl md:text-7xl font-light tracking-wide mb-6">LAURA MICHELLE COTTO</h1>
          <p className="text-xl md:text-2xl font-light tracking-wider mb-8 max-w-2xl mx-auto">
            Travel Writer, Photographer, Consultant
          </p>
          <p className="text-lg md:text-xl font-light max-w-3xl mx-auto leading-relaxed">
            Capturing authentic stories and sustainable adventures from around the world
          </p>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <ChevronDown size={32} />
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-gray-800 mb-6">Explore My World</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Journey with me through immersive photography, compelling stories, and expert travel consulting that
            celebrates authentic cultural experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Photography Card */}
          <Link href="/photography" className="group">
            <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105">
              <div className="aspect-[4/3] relative">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Vibrant street market scene with local vendors and colorful spices"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="flex items-center mb-2">
                  <Camera className="w-5 h-5 mr-2 text-amber-400" />
                  <span className="text-sm font-medium tracking-wide">PHOTOGRAPHY</span>
                </div>
                <h3 className="font-serif text-2xl mb-2">Travel Photography</h3>
                <p className="text-sm opacity-90">Visual stories from every corner of the globe</p>
              </div>
            </div>
          </Link>

          {/* Travel Stories Card */}
          <Link href="/travel-stories" className="group">
            <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105">
              <div className="aspect-[4/3] relative">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Ancient temple architecture with intricate cultural details"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="flex items-center mb-2">
                  <BookOpen className="w-5 h-5 mr-2 text-amber-400" />
                  <span className="text-sm font-medium tracking-wide">STORIES</span>
                </div>
                <h3 className="font-serif text-2xl mb-2">Travel Stories</h3>
                <p className="text-sm opacity-90">Immersive narratives of cultural discovery</p>
              </div>
            </div>
          </Link>

          {/* Consulting Card */}
          <Link href="/consulting" className="group">
            <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105">
              <div className="aspect-[4/3] relative">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Professional travel consultation meeting with destination planning materials"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="flex items-center mb-2">
                  <Users className="w-5 h-5 mr-2 text-amber-400" />
                  <span className="text-sm font-medium tracking-wide">CONSULTING</span>
                </div>
                <h3 className="font-serif text-2xl mb-2">Brand Consulting</h3>
                <p className="text-sm opacity-90">Strategic travel brand development and storytelling</p>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-gray-800 mb-8">Welcome to My Journey</h2>
          <div className="prose prose-lg mx-auto text-gray-600 leading-relaxed">
            <p className="text-xl mb-6">
              I believe that travel is more than just visiting places—it's about connecting with cultures, understanding
              communities, and sharing stories that inspire sustainable exploration.
            </p>
            <p className="text-lg">
              Through my lens and words, I capture the authentic essence of destinations around the world, focusing on
              meaningful experiences that celebrate local traditions while promoting responsible tourism. Join me as we
              explore the extraordinary in the everyday, one story at a time.
            </p>
          </div>
          <div className="mt-12">
            <Button asChild className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 text-lg">
              <Link href="/about">Learn More About Me</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
