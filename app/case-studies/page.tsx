import Header from "@/components/header"
import Footer from "@/components/footer"
import Breadcrumbs from "@/components/breadcrumbs"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

const caseStudies = [
  {
    id: 1,
    title: "Revitalizing Tourism in Rural Peru",
    excerpt:
      "A deep dive into a project focused on developing sustainable tourism initiatives in remote Andean communities, empowering local artisans and preserving cultural heritage.",
    image: "/placeholder.svg?height=400&width=600",
    alt: "Local Peruvian women in traditional attire showcasing handicrafts",
    slug: "rural-peru-tourism",
  },
  {
    id: 2,
    title: "Crafting a Narrative for Eco-Luxury Resorts in Bali",
    excerpt:
      "How strategic storytelling and visual content transformed the brand perception of a chain of eco-luxury resorts, attracting conscious travelers seeking immersive nature experiences.",
    image: "/placeholder.svg?height=400&width=600",
    alt: "Luxurious eco-resort villa surrounded by lush Balinese rice paddies",
    slug: "bali-eco-luxury",
  },
  {
    id: 3,
    title: "Promoting Authentic Food Experiences in Vietnam",
    excerpt:
      "A case study on a campaign designed to highlight Vietnam's diverse culinary landscape, focusing on street food culture and farm-to-table initiatives.",
    image: "/placeholder.svg?height=400&width=600",
    alt: "Vibrant Vietnamese street food stall with various dishes",
    slug: "vietnam-food-culture",
  },
  {
    id: 4,
    title: "Documenting Wildlife Conservation in Madagascar",
    excerpt:
      "An in-depth look at a project involving photography and writing to raise awareness for endangered species and conservation efforts in Madagascar's unique ecosystems.",
    image: "/placeholder.svg?height=400&width=600",
    alt: "Lemur in its natural habitat in Madagascar rainforest",
    slug: "madagascar-conservation",
  },
]

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Case Studies", href: "/case-studies" }]} />

          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="font-serif text-4xl md:text-6xl text-gray-800 mb-6">Case Studies</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Deep dives into successful collaborations and projects, showcasing the impact of authentic storytelling
              and strategic content in the travel industry.
            </p>
          </div>

          {/* Case Studies Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
              <Link key={study.id} href={`/case-studies/${study.slug}`} className="group block">
                <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group-hover:transform group-hover:scale-105">
                  <div className="aspect-[3/2] relative overflow-hidden">
                    <Image
                      src={study.image || "/placeholder.svg"}
                      alt={study.alt}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>

                  <div className="p-6">
                    <h2 className="font-serif text-2xl font-medium text-gray-800 mb-3 group-hover:text-amber-600 transition-colors duration-200">
                      {study.title}
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-4">{study.excerpt}</p>
                    <div className="inline-flex items-center text-amber-600 font-medium group-hover:text-amber-700 transition-colors duration-200">
                      View Case Study
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
