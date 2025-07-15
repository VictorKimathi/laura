import Header from "@/components/header"
import Footer from "@/components/footer"
import Breadcrumbs from "@/components/breadcrumbs"
import Link from "next/link"
import Image from "next/image"
import { ExternalLink } from "lucide-react"

const mediaFeatures = [
  {
    id: 1,
    title: "Featured Interview: The Art of Slow Travel",
    publication: "Wanderlust Magazine",
    date: "October 2023",
    image: "/placeholder.svg?height=200&width=300",
    alt: "Laura Cotto being interviewed for Wanderlust Magazine",
    link: "#", // Placeholder link
  },
  {
    id: 2,
    title: "Guest Post: Sustainable Adventures in the Amazon",
    publication: "EcoTraveler Blog",
    date: "September 2023",
    image: "/placeholder.svg?height=200&width=300",
    alt: "Article about sustainable travel in the Amazon rainforest",
    link: "#", // Placeholder link
  },
  {
    id: 3,
    title: "Podcast Appearance: Cultural Immersion in Southeast Asia",
    publication: "The Nomadic Life Podcast",
    date: "August 2023",
    image: "/placeholder.svg?height=200&width=300",
    alt: "Podcast cover art with Laura Cotto as a guest",
    link: "#", // Placeholder link
  },
  {
    id: 4,
    title: "Photography Showcase: Faces of Marrakech",
    publication: "National Geographic Traveler",
    date: "July 2023",
    image: "/placeholder.svg?height=200&width=300",
    alt: "Photography feature on the people of Marrakech",
    link: "#", // Placeholder link
  },
  {
    id: 5,
    title: "Panel Discussion: The Future of Responsible Tourism",
    publication: "Global Travel Summit",
    date: "June 2023",
    image: "/placeholder.svg?height=200&width=300",
    alt: "Panel discussion on responsible tourism at a summit",
    link: "#", // Placeholder link
  },
]

export default function MediaPressPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Media / Press", href: "/media" }]} />

          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="font-serif text-4xl md:text-6xl text-gray-800 mb-6">Media & Press</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Features, interviews, and collaborations where my work and insights have been highlighted by leading
              publications and platforms.
            </p>
          </div>

          {/* Media Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mediaFeatures.map((feature) => (
              <div key={feature.id} className="bg-gray-50 rounded-lg shadow-md overflow-hidden">
                <div className="aspect-[3/2] relative">
                  <Image src={feature.image || "/placeholder.svg"} alt={feature.alt} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h2 className="font-serif text-xl font-medium text-gray-800 mb-2">{feature.title}</h2>
                  <p className="text-gray-600 text-sm mb-3">
                    {feature.publication} &bull; {feature.date}
                  </p>
                  <Link
                    href={feature.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-amber-600 hover:text-amber-700 transition-colors duration-200"
                  >
                    Read More
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
