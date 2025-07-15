"use client"

import { Button } from "@/components/ui/button"

import { Camera, PenTool, Users, Globe } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Breadcrumbs from "@/components/breadcrumbs"
import Link from "next/link"

export default function ServicesPage() {
  const services = [
    {
      icon: <PenTool className="w-8 h-8 text-amber-600" />,
      title: "Travel Writing & Editorial",
      description:
        "Crafting compelling narratives, destination guides, and feature articles that transport readers and inspire exploration. Specializing in cultural immersion, sustainable travel, and authentic experiences.",
      features: [
        "Feature articles & essays",
        "Destination guides & itineraries",
        "Blog content & web copy",
        "Copywriting for travel brands",
      ],
    },
    {
      icon: <Camera className="w-8 h-8 text-amber-600" />,
      title: "Travel Photography",
      description:
        "Capturing the essence of destinations through high-quality, evocative imagery. Specializing in natural light, candid moments, and culturally rich scenes that tell a story.",
      features: [
        "Destination photography",
        "Lifestyle & portraiture (travel context)",
        "Food & market photography",
        "Visual storytelling for campaigns",
      ],
    },
    {
      icon: <Users className="w-8 h-8 text-amber-600" />,
      title: "Travel Brand Consulting",
      description:
        "Strategic guidance for tourism boards, hotels, and travel companies seeking to enhance their brand narrative and connect with conscious travelers.",
      features: [
        "Brand storytelling workshops",
        "Content strategy development",
        "Sustainable tourism integration",
        "Audience engagement strategies",
      ],
    },
    {
      icon: <Globe className="w-8 h-8 text-amber-600" />,
      title: "Destination Storytelling Campaigns",
      description:
        "Developing and executing integrated campaigns that combine compelling writing, stunning photography, and strategic consulting to showcase destinations authentically.",
      features: [
        "Multi-platform content creation",
        "Influencer & media relations",
        "Campaign management & reporting",
        "Partnerships with local communities",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Services", href: "/services" }]} />

          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="font-serif text-4xl md:text-6xl text-gray-800 mb-6">My Services</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              I offer a range of services designed to help travel brands, publications, and organizations tell their
              stories authentically and connect with a global audience.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-20">
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

          {/* Work With Me CTA */}
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl text-gray-800 mb-6">Ready to Collaborate?</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              If you're a tourism board, travel brand, or publication looking for authentic storytelling, captivating
              visuals, or strategic guidance, I'd love to hear from you.
            </p>
            <Link href="/contact">
              <Button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 text-lg">Get in Touch</Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
