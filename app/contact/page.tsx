"use client"

import type React from "react"
import { useState } from "react"
import { Send, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Breadcrumbs from "@/components/breadcrumbs"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Contact form submitted:", formData)
    setFormData({ name: "", email: "", project: "" })
    alert("Thank you for your message! I'll get back to you soon.")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Contact", href: "/contact" }]} />

          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="font-serif text-4xl md:text-6xl text-gray-800 mb-6">Get in Touch</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              I'd love to hear about your project, collaboration ideas, or simply connect over consulting opportunities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
            {/* Contact Information */}
            <div>
              <h2 className="font-serif text-3xl font-medium text-gray-800 mb-6">Let's Connect</h2>
              <div className="space-y-6 text-gray-600 text-lg">
                <div className="flex items-center">
                  <Mail className="w-6 h-6 text-amber-600 mr-4 flex-shrink-0" />
                  <a href="mailto:laura87michelle@gmail.com" className="hover:underline">
                    laura87michelle@gmail.com
                  </a>
                </div>
                <div className="flex items-center">
                  <Phone className="w-6 h-6 text-amber-600 mr-4 flex-shrink-0" />
                  <span>(206) 249-9023</span>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-amber-600 mr-4 flex-shrink-0 mt-1" />
                  <span>
                    6926 Kimberly Heights Ln.<br />
                    Jacksonville, FL 32222-1761
                  </span>
                </div>
              </div>
              <p className="text-gray-600 mt-8 leading-relaxed">
                Feel free to reach out directly via email or use the contact form below. I aim to respond to all
                inquiries within 48 hours.
              </p>
            </div>

            {/* Contact Form */}
            {/* <form onSubmit={handleSubmit} className="space-y-6 bg-gray-50 p-8 rounded-lg shadow-md">
              <h2 className="font-serif text-3xl font-medium text-gray-800 mb-6 text-center">Send a Message</h2>
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
            </form> */}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
