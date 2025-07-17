import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Breadcrumbs from "@/components/breadcrumbs"
import { BookOpen, MapPin, Lightbulb } from "lucide-react"

const blogCategories = [
  {
    id: "Family Travel",
    title: "Why Würzburg Should Be Every Family’s Next Europe Stop",
    description: "Families planning a European vacation often dream of Paris, Rome or London. But tucked away in Germany’s picturesque Franconia region lies a lesser-known gem that’s perfect for parents and kids alike: Würzburg. Packed with history, wine country charm and walkable adventures, it’s a storybook city that deserves a spot on your family itinerary.",
    image: "/images/destination.jpg",
    alt: "Scenic view of a travel destination",
    icon: <MapPin className="w-6 h-6 text-amber-600" />,
    href: 'Why_Würzburg_Should_Be_Every_Family’s_Next_Europe_Stop.pdf'
  },
  {
    id: "Travel Tips",
    title: "How Savvy Travelers Score Airline Upgrades for Almost Free",
    description: "Airline upgrades aren’t just for the elite. With a few clever strategies, seasoned travelers are snagging extra legroom, lounge access and sometimes even full-blown business class – without breaking the bank. Here’s how to travel smart, not spendy and raise your in-flight experience",
    image: "/images/culture.jpg",
    alt: "Local cultural celebration",
    icon: <Lightbulb className="w-6 h-6 text-amber-600" />,
    href: 'How_Savvy_Travelers_Score_Airline_Upgrades_for_Almost_Free.pdf'
  },
  {
    id: "U.S. Destinations",
    title: "10 U.S. Coastal Towns That Feel Straight Out Of The Mediterranean",
    description: "Sun-drenched terraces. Whitewashed cottages. Oceanfront promenades edged with bougainvillea. You’d be forgiven for thinking you’re in Positano or Mykonos – but these dreamy destinations are right here in the United States. Across California, Florida, the Carolinas and beyond, coastal towns are channeling the old-world charm of the Mediterranean. Think terracotta rooftops, blue-domed churches, cliffside trails and culinary traditions rooted in fresh seafood and sun-grown herbs.",
    image: "/images/marketing.jpg",
    alt: "Creative marketing workspace",
    icon: <BookOpen className="w-6 h-6 text-amber-600" />,
    href: '10_U.S._Coastal_Towns_That_Feel_Straight_Out_Of_The_Mediterranean.pdf'
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
