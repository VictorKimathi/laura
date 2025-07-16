import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Breadcrumbs from "@/components/breadcrumbs"

const travelStories = [
  {
    id: "destination-guides",
    title: "Destination Guides",
    description:
      "Tailored itineraries and immersive city and country guides from assignments with Matador Network and Lonely Planet.",
    image: "/images/destination-guides.jpg",
    alt: "A bustling street market with colorful stalls",
    stories: 14,
  },
  {
    id: "cultural-etiquette",
    title: "Cultural Etiquette & Local Insights",
    description:
      "Pieces that explore local customs, traditions, and cultural do’s and don’ts — helping travelers connect authentically.",
    image: "/images/cultural-etiquette.jpg",
    alt: "Locals participating in a vibrant traditional festival",
    stories: 9,
  },
  {
    id: "eco-slow-travel",
    title: "Eco & Slow Travel",
    description:
      "Essays and guides on sustainable tourism, slow travel, and budget-friendly ways to explore the world.",
    image: "/images/eco-travel.jpg",
    alt: "Backpacker walking through a lush forest trail",
    stories: 7,
  },
  {
    id: "hospitality-reviews",
    title: "Hotel Reviews & Hospitality",
    description:
      "Detailed hotel reviews and hospitality content crafted to showcase unique stays and experiences.",
    image: "/images/hospitality.jpg",
    alt: "Beautiful boutique hotel lounge area",
    stories: 6,
  },
  {
    id: "travel-gear-lifestyle",
    title: "Travel Gear & Lifestyle",
    description:
      "Content marketing and product storytelling from her time at WanderBright, blending travel gear insights with lifestyle narratives.",
    image: "/images/travel-gear.jpg",
    alt: "Flatlay of essential travel gear items on a wooden table",
    stories: 5,
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
              Dive into narratives from Laura Michelle Cotto’s decade-long journey as a travel copywriter. From
              destination guides to cultural etiquette, these stories capture the heart of travel and authentic
              connection.
            </p>
          </div>

          {/* Stories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {travelStories.map((story) => (
              <Link key={story.id} href={`/blog/travel-stories/${story.id}`} className="group block">
                <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group-hover:transform group-hover:scale-105">
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <Image
                      src={story.image}
                      alt={story.alt}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-medium tracking-wide bg-amber-600 px-2 py-1 rounded">
                          {story.stories} STORIES
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h2 className="font-serif text-2xl font-medium text-gray-800 mb-3 group-hover:text-amber-600 transition-colors duration-200">
                      {story.title}
                    </h2>
                    <p className="text-gray-600 leading-relaxed">{story.description}</p>
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
