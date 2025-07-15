import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Breadcrumbs from "@/components/breadcrumbs"
import { BookOpen, MapPin, Lightbulb } from "lucide-react"

const blogCategories = [
  {
    id: "travel-stories",
    title: "Travel Stories",
    description: "Immersive narratives from my journeys around the world, celebrating cultures and experiences.",
    image: "/placeholder.svg?height=400&width=600",
    alt: "Open travel journal with a pen and a map, symbolizing storytelling",
    icon: <BookOpen className="w-6 h-6 text-amber-600" />,
  },
  {
    id: "cultural-guides",
    title: "Cultural Guides",
    description: "Deep dives into local traditions, customs, and etiquette for a richer travel experience.",
    image: "/placeholder.svg?height=400&width=600",
    alt: "Traditional cultural artifacts from various regions",
    icon: <MapPin className="w-6 h-6 text-amber-600" />,
  },
  {
    id: "travel-tips",
    title: "Travel Tips & Advice",
    description: "Practical advice, packing lists, and insights for planning your next sustainable adventure.",
    image: "/placeholder.svg?height=400&width=600",
    alt: "Travel essentials like a passport, camera, and map on a wooden table",
    icon: <Lightbulb className="w-6 h-6 text-amber-600" />,
  },
  {
    id: "behind-the-scenes",
    title: "Behind the Scenes",
    description: "A look into the life of a travel writer and photographer, from challenges to triumphs.",
    image: "/placeholder.svg?height=400&width=600",
    alt: "Camera gear and a laptop on a desk, representing creative work",
    icon: <Lightbulb className="w-6 h-6 text-amber-600" />, // Reusing Lightbulb for now
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Blog", href: "/blog" }]} />

          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="font-serif text-4xl md:text-6xl text-gray-800 mb-6">Blog & Insights</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore cultural guides, practical travel tips, and behind-the-scenes stories from my adventures around
              the globe.
            </p>
          </div>

          {/* Blog Categories Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {blogCategories.map((category) => (
              <Link key={category.id} href={`/blog/${category.id}`} className="group block">
                <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group-hover:transform group-hover:scale-105">
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <Image
                      src={category.image || "/placeholder.svg"}
                      alt={category.alt}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <div className="flex items-center mb-2">
                        {category.icon}
                        <span className="text-sm font-medium tracking-wide ml-2">{category.title.toUpperCase()}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h2 className="font-serif text-2xl font-medium text-gray-800 mb-3 group-hover:text-amber-600 transition-colors duration-200">
                      {category.title}
                    </h2>
                    <p className="text-gray-600 leading-relaxed">{category.description}</p>
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
