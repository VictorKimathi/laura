import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Breadcrumbs from "@/components/breadcrumbs"

const regions = [
  {
    id: "southeast-asia",
    title: "Southeast Asia",
    description: "Exploring the vibrant cultures, ancient temples, and bustling markets of Southeast Asia",
    image: "/placeholder.svg?height=400&width=600",
    alt: "Traditional temple complex in Southeast Asia surrounded by lush greenery",
    stories: 8,
  },
  {
    id: "africa",
    title: "Africa",
    description: "Journey through diverse landscapes and rich cultural traditions across the African continent",
    image: "/placeholder.svg?height=400&width=600",
    alt: "African savanna landscape with acacia trees at sunset",
    stories: 6,
  },
  {
    id: "south-america",
    title: "South America",
    description: "From Andean peaks to Amazon rainforests, discovering the heart of South America",
    image: "/placeholder.svg?height=400&width=600",
    alt: "Colorful mountain village in the Andes with traditional architecture",
    stories: 10,
  },
  {
    id: "middle-east",
    title: "Middle East",
    description: "Uncovering ancient histories and modern cultures in the crossroads of civilizations",
    image: "/placeholder.svg?height=400&width=600",
    alt: "Historic Middle Eastern architecture with intricate geometric patterns",
    stories: 5,
  },
  {
    id: "food-markets",
    title: "Food & Markets",
    description: "Culinary adventures and local market discoveries from around the world",
    image: "/placeholder.svg?height=400&width=600",
    alt: "Vibrant local market with fresh produce and traditional foods",
    stories: 12,
  },
  {
    id: "sustainable-travel",
    title: "Sustainable Travel",
    description: "Stories of responsible tourism and community-based travel experiences",
    image: "/placeholder.svg?height=400&width=600",
    alt: "Eco-friendly accommodation in natural setting with local community involvement",
    stories: 7,
  },
]

export default function TravelStoriesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Blog", href: "/blog" },
              { label: "Travel Stories", href: "/blog/travel-stories" },
            ]}
          />

          <div className="text-center mb-16">
            <h1 className="font-serif text-4xl md:text-6xl text-gray-800 mb-6">Travel Stories</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Immersive narratives from my journeys around the world, celebrating the people, places, and experiences
              that make each destination unique. These stories go beyond the surface to explore the heart of cultural
              connection and sustainable travel.
            </p>
          </div>

          {/* Stories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regions.map((region) => (
              <Link key={region.id} href={`/blog/travel-stories/${region.id}`} className="group block">
                <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group-hover:transform group-hover:scale-105">
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <Image
                      src={region.image || "/placeholder.svg"}
                      alt={region.alt}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-medium tracking-wide bg-amber-600 px-2 py-1 rounded">
                          {region.stories} STORIES
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h2 className="font-serif text-2xl font-medium text-gray-800 mb-3 group-hover:text-amber-600 transition-colors duration-200">
                      {region.title}
                    </h2>
                    <p className="text-gray-600 leading-relaxed">{region.description}</p>
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
