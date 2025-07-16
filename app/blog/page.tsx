import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Breadcrumbs from "@/components/breadcrumbs"
import { BookOpen, MapPin, Lightbulb } from "lucide-react"

const blogCategories = [
  {
    id: "destination-guides",
    title: "Destination Guides",
    description: "In-depth travel itineraries and local insights crafted from years of global writing experience.",
    image: "/images/destination.jpg",
    alt: "Scenic view of a travel destination",
    icon: <MapPin className="w-6 h-6 text-amber-600" />,
  },
  {
    id: "cultural-etiquette",
    title: "Cultural Etiquette",
    description: "Guides to navigating customs and traditions, ensuring respectful and enriching travels.",
    image: "/images/culture.jpg",
    alt: "Local cultural celebration",
    icon: <Lightbulb className="w-6 h-6 text-amber-600" />,
  },
  {
    id: "travel-marketing",
    title: "Travel & Hospitality Marketing",
    description: "Insights on brand storytelling, SEO strategies, and content marketing for travel businesses.",
    image: "/images/marketing.jpg",
    alt: "Creative marketing workspace",
    icon: <BookOpen className="w-6 h-6 text-amber-600" />,
  },
  {
    id: "eco-budget-travel",
    title: "Eco & Budget Travel",
    description: "Tips for sustainable, budget-friendly adventures inspired by slow travel philosophies.",
    image: "/images/eco.jpg",
    alt: "Eco-friendly travel gear",
    icon: <Lightbulb className="w-6 h-6 text-amber-600" />,
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
            <h1 className="font-serif text-4xl md:text-6xl text-gray-800 mb-6">Laura Michelle Cotto Blog</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore professional insights drawn from 10+ years in travel copywriting, cultural research,
              and hospitality marketing. 
              Discover destination stories, sustainable travel advice, and tips for growing your travel brand.
            </p>
          </div>

          {/* Blog Categories Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {blogCategories.map((category) => (
              // <Link key={category.id} href={`/blog/${category.id}`} className="group block">
                <article key={category.id}  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group-hover:transform group-hover:scale-105">
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <Image
                      src={category.image}
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
              // </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
