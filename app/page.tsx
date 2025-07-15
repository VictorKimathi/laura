"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Briefcase, BookOpen, Lightbulb, ChevronDown, Send } from "lucide-react" // Updated icons
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false)
  const [newsletterEmail, setNewsletterEmail] = useState("")

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Newsletter signup:", newsletterEmail)
    alert("Thank you for signing up for the newsletter!")
    setNewsletterEmail("")
  }

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

      {/* Main Sections Overview */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-gray-800 mb-6">Explore My Work</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Dive into my portfolio of work samples, discover my consulting services, and read immersive travel stories
            and insights.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Portfolio Card */}
          <Link href="/portfolio" className="group">
            <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105">
              <div className="aspect-[4/3] relative">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Diverse collection of travel photography and written work samples"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="flex items-center mb-2">
                  <Briefcase className="w-5 h-5 mr-2 text-amber-400" />
                  <span className="text-sm font-medium tracking-wide">PORTFOLIO</span>
                </div>
                <h3 className="font-serif text-2xl mb-2">Work Samples</h3>
                <p className="text-sm opacity-90">A curated collection of my best work</p>
              </div>
            </div>
          </Link>

          {/* Services Card */}
          <Link href="/services" className="group">
            <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105">
              <div className="aspect-[4/3] relative">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Professional consultation meeting with travel brand materials"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="flex items-center mb-2">
                  <Lightbulb className="w-5 h-5 mr-2 text-amber-400" />
                  <span className="text-sm font-medium tracking-wide">SERVICES</span>
                </div>
                <h3 className="font-serif text-2xl mb-2">Consulting & Content</h3>
                <p className="text-sm opacity-90">Expertise in travel brand strategy and content creation</p>
              </div>
            </div>
          </Link>

          {/* Blog/Insights Card */}
          <Link href="/blog" className="group">
            <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105">
              <div className="aspect-[4/3] relative">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Open travel journal with a pen and a map, symbolizing storytelling"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="flex items-center mb-2">
                  <BookOpen className="w-5 h-5 mr-2 text-amber-400" />
                  <span className="text-sm font-medium tracking-wide">BLOG</span>
                </div>
                <h3 className="font-serif text-2xl mb-2">Stories & Insights</h3>
                <p className="text-sm opacity-90">Cultural guides, travel tips, and behind-the-scenes adventures</p>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Welcome Section (existing) */}
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

      {/* Newsletter Signup Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-gray-800 mb-6">Stay Connected</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
            Receive my latest travel stories, photography updates, and insights on sustainable travel directly in your
            inbox.
          </p>
          <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              required
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-600 focus:border-amber-600"
            />
            <Button type="submit" className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 text-lg">
              <Send className="w-5 h-5 mr-2" />
              Sign Up
            </Button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  )
}
