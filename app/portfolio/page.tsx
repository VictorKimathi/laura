"use client"

import { useState } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Breadcrumbs from "@/components/breadcrumbs"

const workSamples = [
  {
    id: 1,
    src: "/placeholder.svg?height=800&width=1200",
    alt: "A vibrant street scene in Havana, Cuba, showcasing colorful colonial buildings and classic cars.",
    title: "Havana's Timeless Charm",
    category: "Photography, Travel Writing",
    description: "A photo essay and article capturing the unique atmosphere and resilient spirit of Havana.",
  },
  {
    id: 2,
    src: "/placeholder.svg?height=800&width=1200",
    alt: "A close-up of intricate traditional textiles being woven by an artisan in Cusco, Peru.",
    title: "Artisanal Traditions of Peru",
    category: "Photography, Cultural Immersion",
    description: "Documenting the ancient weaving techniques and vibrant textile culture of the Andean region.",
  },
  {
    id: 3,
    src: "/placeholder.svg?height=800&width=1200",
    alt: "A serene shot of a sustainable eco-lodge nestled in the rainforest canopy of Costa Rica.",
    title: "Eco-Tourism in Costa Rica",
    category: "Consulting, Travel Writing",
    description: "Developed content strategy and wrote promotional materials for a sustainable tourism initiative.",
  },
  {
    id: 4,
    src: "/placeholder.svg?height=800&width=1200",
    alt: "A bustling night market in Chiang Mai, Thailand, with various food stalls and local crafts.",
    title: "Flavors of Northern Thailand",
    category: "Photography, Food Writing",
    description: "A culinary journey through the street food and traditional markets of Chiang Mai.",
  },
  {
    id: 5,
    src: "/placeholder.svg?height=800&width=1200",
    alt: "A wide shot of the dramatic landscapes of Patagonia, Argentina, with towering mountains and glacial lakes.",
    title: "Patagonia: Land of Giants",
    category: "Photography, Adventure Travel",
    description: "Capturing the raw beauty and challenging trails of the Patagonian wilderness.",
  },
  {
    id: 6,
    src: "/placeholder.svg?height=800&width=1200",
    alt: "A local fisherman casting his net at sunrise on the coast of Zanzibar, Tanzania.",
    title: "Zanzibar's Coastal Life",
    category: "Photography, Cultural Storytelling",
    description: "An intimate look at the daily lives and traditions of the fishing communities in Zanzibar.",
  },
]

export default function PortfolioPage() {
  const [selectedSample, setSelectedSample] = useState<number | null>(null)

  const openLightbox = (sampleId: number) => {
    setSelectedSample(sampleId)
  }

  const closeLightbox = () => {
    setSelectedSample(null)
  }

  const navigateSample = (direction: "prev" | "next") => {
    if (selectedSample === null) return

    const currentIndex = workSamples.findIndex((sample) => sample.id === selectedSample)
    let newIndex

    if (direction === "prev") {
      newIndex = currentIndex > 0 ? currentIndex - 1 : workSamples.length - 1
    } else {
      newIndex = currentIndex < workSamples.length - 1 ? currentIndex + 1 : 0
    }

    setSelectedSample(workSamples[newIndex].id)
  }

  const selectedSampleData = workSamples.find((sample) => sample.id === selectedSample)

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Portfolio", href: "/portfolio" }]} />

          <div className="text-center mb-16">
            <h1 className="font-serif text-4xl md:text-6xl text-gray-800 mb-6">Portfolio & Work Samples</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A curated collection of my diverse work, showcasing my expertise in travel writing, photography, and brand
              consulting. Each project reflects my commitment to authentic storytelling and cultural immersion.
            </p>
          </div>

          {/* Work Samples Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {workSamples.map((sample) => (
              <div
                key={sample.id}
                className="group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => openLightbox(sample.id)}
              >
                <div className="aspect-[4/3] relative">
                  <Image
                    src={sample.src || "/placeholder.svg"}
                    alt={sample.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                </div>
                <div className="p-4 bg-white">
                  <h3 className="font-serif text-lg font-medium text-gray-800 mb-1">{sample.title}</h3>
                  <p className="text-sm text-gray-600">{sample.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Lightbox */}
      {selectedSample && selectedSampleData && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-amber-400 transition-colors duration-200"
            aria-label="Close lightbox"
          >
            <X size={32} />
          </button>

          <button
            onClick={() => navigateSample("prev")}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-amber-400 transition-colors duration-200"
            aria-label="Previous work sample"
          >
            <ChevronLeft size={48} />
          </button>

          <button
            onClick={() => navigateSample("next")}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-amber-400 transition-colors duration-200"
            aria-label="Next work sample"
          >
            <ChevronRight size={48} />
          </button>

          <div className="max-w-4xl max-h-full flex flex-col items-center">
            <div className="relative max-h-[80vh] w-full">
              <Image
                src={selectedSampleData.src || "/placeholder.svg"}
                alt={selectedSampleData.alt}
                width={1200}
                height={800}
                className="object-contain max-h-full w-auto mx-auto"
              />
            </div>
            <div className="text-center mt-4 text-white">
              <h3 className="font-serif text-xl mb-1">{selectedSampleData.title}</h3>
              <p className="text-gray-300">{selectedSampleData.category}</p>
              <p className="text-gray-300 text-sm mt-2">{selectedSampleData.description}</p>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}
