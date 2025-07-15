import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Breadcrumbs from "@/components/breadcrumbs"

// Mock data for stories
const storiesByRegion: Record<string, any> = {
  "southeast-asia": {
    title: "Southeast Asia",
    description: "Stories from the vibrant cultures and ancient traditions of Southeast Asia",
    stories: [
      {
        id: 1,
        title: "The Temple Keeper of Angkor",
        excerpt: "Meeting the guardian of ancient wisdom in Cambodia's most sacred spaces",
        image: "/placeholder.svg?height=300&width=500",
        alt: "Ancient temple guardian in traditional dress at Angkor Wat",
        date: "2024-01-15",
        readTime: "8 min read",
        slug: "temple-keeper-angkor",
      },
      {
        id: 2,
        title: "Street Food Chronicles: Bangkok After Dark",
        excerpt: "Discovering the soul of Thai cuisine through late-night market adventures",
        image: "/placeholder.svg?height=300&width=500",
        alt: "Bustling Bangkok night market with street food vendors",
        date: "2024-01-08",
        readTime: "6 min read",
        slug: "bangkok-street-food",
      },
    ],
  },
  africa: {
    title: "Africa",
    description: "Journeys through the diverse landscapes and rich cultures of Africa",
    stories: [
      {
        id: 3,
        title: "Voices of the Sahara",
        excerpt: "Learning ancient navigation techniques from Tuareg nomads",
        image: "/placeholder.svg?height=300&width=500",
        alt: "Tuareg nomads with camels in the Sahara desert",
        date: "2023-12-20",
        readTime: "10 min read",
        slug: "voices-sahara",
      },
    ],
  },
}

interface PageProps {
  params: {
    region: string
  }
}

export default function RegionStoriesPage({ params }: PageProps) {
  const regionData = storiesByRegion[params.region]

  if (!regionData) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <main className="pt-24 pb-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="font-serif text-4xl text-gray-800 mb-4">Region Not Found</h1>
            <Link href="/blog/travel-stories" className="text-amber-600 hover:text-amber-700">
              ← Back to Travel Stories
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Blog", href: "/blog" },
              { label: "Travel Stories", href: "/blog/travel-stories" },
              { label: regionData.title, href: `/blog/travel-stories/${params.region}` },
            ]}
          />

          <div className="text-center mb-16">
            <h1 className="font-serif text-4xl md:text-6xl text-gray-800 mb-6">{regionData.title}</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">{regionData.description}</p>
          </div>

          {/* Stories List */}
          <div className="space-y-12">
            {regionData.stories.map((story: any) => (
              <article key={story.id} className="group">
                <Link href={`/blog/travel-stories/${params.region}/${story.slug}`}>
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="aspect-[3/2] relative overflow-hidden rounded-lg">
                      <Image
                        src={story.image || "/placeholder.svg"}
                        alt={story.alt}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {new Date(story.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {story.readTime}
                        </div>
                      </div>

                      <h2 className="font-serif text-3xl font-medium text-gray-800 group-hover:text-amber-600 transition-colors duration-200">
                        {story.title}
                      </h2>

                      <p className="text-gray-600 leading-relaxed text-lg">{story.excerpt}</p>

                      <div className="pt-2">
                        <span className="text-amber-600 font-medium group-hover:text-amber-700 transition-colors duration-200">
                          Read Story →
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
