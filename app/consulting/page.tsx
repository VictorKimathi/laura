"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { MapPin, Camera, PenTool, Users, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Breadcrumbs from "@/components/breadcrumbs"

export default function ConsultingPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", project: "" })
    alert("Thank you for your message! I'll get back to you soon.")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const services = [
    {
      icon: <MapPin className="w-8 h-8 text-amber-600" />,
      title: "Destination Storytelling",
      description:
        "Craft compelling narratives that capture the authentic essence of destinations, focusing on cultural depth and sustainable tourism practices.",
      features: [
        "Cultural research and insights",
        "Authentic story development",
        "Local community engagement",
        "Sustainable tourism focus",
      ],
    },
    {
      icon: <Camera className="w-8 h-8 text-amber-600" />,
      title: "Visual Content Creation",
      description:
        "Professional travel photography and visual storytelling that showcases destinations through an authentic, culturally-sensitive lens.",
      features: [
        "Professional travel photography",
        "Cultural documentation",
        "Brand-aligned visual content",
        "Social media optimization",
      ],
    },
    {
      icon: <PenTool className="w-8 h-8 text-amber-600" />,
      title: "Brand Strategy & Content",
      description:
        "Develop comprehensive travel brand strategies and content that resonates with conscious travelers and promotes responsible tourism.",
      features: [
        "Brand positioning strategy",
        "Content marketing plans",
        "Editorial calendar development",
        "Cross-platform content strategy",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Consulting", href: "/consulting" }]} />

          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="font-serif text-4xl md:text-6xl text-gray-800 mb-6">Travel Brand Consulting</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Partner with me to create authentic travel content and brand strategies that celebrate cultural diversity,
              promote sustainable tourism, and connect with conscious travelers seeking meaningful experiences.
            </p>
          </div>

          {/* Services Section */}
          <div className="mb-20">
            <h2 className="font-serif text-3xl md:text-4xl text-gray-800 text-center mb-12">
              How I Can Help Your Brand
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300">
                  <div className="mb-6">{service.icon}</div>
                  <h3 className="font-serif text-2xl font-medium text-gray-800 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-amber-600 rounded-full mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Process Section */}
          <div className="mb-20 bg-gray-50 rounded-lg p-8 md:p-12">
            <h2 className="font-serif text-3xl md:text-4xl text-gray-800 text-center mb-12">My Approach</h2>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-medium text-gray-800 mb-2">Discovery & Research</h3>
                      <p className="text-gray-600">
                        Deep dive into your brand values, target audience, and destination insights to create an
                        authentic foundation.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-medium text-gray-800 mb-2">Strategy Development</h3>
                      <p className="text-gray-600">
                        Craft a comprehensive content and brand strategy that aligns with sustainable tourism
                        principles.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-medium text-gray-800 mb-2">Content Creation</h3>
                      <p className="text-gray-600">
                        Produce high-quality, culturally-sensitive content that tells your destination's authentic
                        story.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="aspect-[4/3] relative rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Laura working on travel brand strategy with local community members"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl text-gray-800 mb-6">Work With Me</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Ready to create authentic travel content that makes a difference? Let's discuss how we can bring your
                brand's story to life.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <h3 className="font-serif text-2xl font-medium text-gray-800 mb-6">Let's Start a Conversation</h3>
                <div className="space-y-4 text-gray-600">
                  <p>
                    I work with tourism boards, travel brands, and organizations that are committed to promoting
                    sustainable and culturally-respectful travel experiences.
                  </p>
                  <p>
                    Whether you need destination storytelling, visual content creation, or comprehensive brand strategy,
                    I'd love to hear about your project and explore how we can work together.
                  </p>
                  <div className="pt-4">
                    <div className="flex items-center mb-2">
                      <Users className="w-5 h-5 text-amber-600 mr-2" />
                      <span className="font-medium">Typical project timeline: 4-12 weeks</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-5 h-5 text-amber-600 mr-2" />
                      <span className="font-medium">Available for global projects</span>
                    </div>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="project" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Description *
                  </label>
                  <Textarea
                    id="project"
                    name="project"
                    value={formData.project}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full"
                    placeholder="Tell me about your project, goals, timeline, and how I can help..."
                  />
                </div>

                <Button type="submit" className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 text-lg">
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
