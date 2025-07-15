import Header from "@/components/header"
import Footer from "@/components/footer"
import Breadcrumbs from "@/components/breadcrumbs"
import { Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    quote:
      "Laura's ability to capture the soul of a destination through her writing and photography is unparalleled. Her work on our 'Hidden Gems of Patagonia' campaign brought our vision to life and significantly boosted engagement.",
    author: "Maria Rodriguez",
    title: "Marketing Director, Adventure Travel Co.",
  },
  {
    id: 2,
    quote:
      "Working with Laura was a dream. Her deep understanding of cultural nuances and sustainable travel practices made our editorial series on Southeast Asia truly stand out. Her images are simply breathtaking.",
    author: "David Chen",
    title: "Editor-in-Chief, Global Explorer Magazine",
  },
  {
    id: 3,
    quote:
      "Laura's consulting insights transformed our approach to destination storytelling. She helped us craft a narrative that resonated deeply with our target audience, emphasizing authenticity and local experiences.",
    author: "Sophie Dubois",
    title: "Tourism Board Manager, Provence",
  },
  {
    id: 4,
    quote:
      "Her travel tips are invaluable, and her stories make you feel like you're right there with her. Laura's passion for responsible travel is truly inspiring.",
    author: "Jessica Lee",
    title: "Independent Traveler & Blogger",
  },
  {
    id: 5,
    quote:
      "Laura delivered exceptional content for our eco-tourism initiative in Costa Rica. Her writing was engaging, and her photography perfectly conveyed the beauty and fragility of the ecosystem.",
    author: "Carlos Ramirez",
    title: "Project Lead, Green Horizons NGO",
  },
]

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Testimonials", href: "/testimonials" }]} />

          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="font-serif text-4xl md:text-6xl text-gray-800 mb-6">What Clients Say</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Endorsements from editors, fellow travelers, and brand partners who have experienced the impact of my work
              in travel writing, photography, and consulting.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-gray-50 rounded-lg p-8 shadow-md">
                <Quote className="w-8 h-8 text-amber-600 mb-4" />
                <p className="text-gray-700 text-lg italic mb-6 leading-relaxed">"{testimonial.quote}"</p>
                <div className="font-medium text-gray-800">{testimonial.author}</div>
                <div className="text-sm text-gray-600">{testimonial.title}</div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
