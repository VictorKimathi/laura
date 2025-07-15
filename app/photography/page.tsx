"use client"

import { useState } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Breadcrumbs from "@/components/breadcrumbs"

const photos = [
  {
    id: 1,
    src: "/placeholder.svg?height=800&width=1200",
    alt: "Bustling spice market in Marrakech with vendors and colorful displays",
    title: "Marrakech Spice Market",
    location: "Morocco",
  },
  {
    id: 2,
    src: "/placeholder.svg?height=800&width=1200",
    alt: "Traditional fishing boats at sunrise on a Vietnamese beach",
    title: "Dawn Fishing Fleet",
    location: "Vietnam",
  },
  {
    id: 3,
    src: "/placeholder.svg?height=800&width=1200",
    alt: "Ancient temple ruins surrounded by jungle in Cambodia",
    title: "Temple in the Jungle",
    location: "Cambodia",
  },
  {
    id: 4,
    src: "/placeholder.svg?height=800&width=1200",
    alt: "Street food vendor preparing traditional dishes in Bangkok",
    title: "Bangkok Street Food",
    location: "Thailand",
  },
  {
    id: 5,
    src: "/placeholder.svg?height=800&width=1200",
    alt: "Colorful colonial architecture in Cartagena old town",
    title: "Colonial Colors",
    location: "Colombia",
  },
  {
    id: 6,
    src: "/placeholder.svg?height=800&width=1200",
    alt: "Local artisan crafting traditional pottery in Peru",
    title: "Master Craftsman",
    location: "Peru",
  },
  {
    id: 7,
    src: "/placeholder.svg?height=800&width=1200",
    alt: "Dramatic landscape of rice terraces in Bali at golden hour",
    title: "Bali Rice Terraces",
    location: "Indonesia",
  },
  {
    id: 8,
    src: "/placeholder.svg?height=800&width=1200",
    alt: "Traditional dance performance in cultural festival",
    title: "Cultural Festival",
    location: "India",
  },
  {
    id: 9,
    src: "/placeholder.svg?height=800&width=1200",
    alt: "Nomadic herders with their animals in vast desert landscape",
    title: "Desert Nomads",
    location: "Mongolia",
  },
]

export default function PhotographyPage() {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null)

  const openLightbox = (photoId: number) => {
    setSelectedPhoto(photoId)
  }

  const closeLightbox = () => {
    setSelectedPhoto(null)
  }

  const navigatePhoto = (direction: "prev" | "next") => {
    if (selectedPhoto === null) return

    const currentIndex = photos.findIndex((photo) => photo.id === selectedPhoto)
    let newIndex

    if (direction === "prev") {
      newIndex = currentIndex > 0 ? currentIndex - 1 : photos.length - 1
    } else {
      newIndex = currentIndex < photos.length - 1 ? currentIndex + 1 : 0
    }

    setSelectedPhoto(photos[newIndex].id)
  }

  const selectedPhotoData = photos.find((photo) => photo.id === selectedPhoto)

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Photography", href: "/photography" }]} />

          <div className="text-center mb-16">
            <h1 className="font-serif text-4xl md:text-6xl text-gray-800 mb-6">Travel Photography</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A visual journey through diverse cultures, landscapes, and authentic moments captured during my travels
              around the world. Each image tells a story of connection, discovery, and the beauty found in everyday life
              across different communities.
            </p>
          </div>

          {/* Photo Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {photos.map((photo) => (
              <div
                key={photo.id}
                className="group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => openLightbox(photo.id)}
              >
                <div className="aspect-[4/3] relative">
                  <Image
                    src={photo.src || "/placeholder.svg"}
                    alt={photo.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                </div>
                <div className="p-4 bg-white">
                  <h3 className="font-serif text-lg font-medium text-gray-800 mb-1">{photo.title}</h3>
                  <p className="text-sm text-gray-600">{photo.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Lightbox */}
      {selectedPhoto && selectedPhotoData && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-amber-400 transition-colors duration-200"
            aria-label="Close lightbox"
          >
            <X size={32} />
          </button>

          <button
            onClick={() => navigatePhoto("prev")}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-amber-400 transition-colors duration-200"
            aria-label="Previous photo"
          >
            <ChevronLeft size={48} />
          </button>

          <button
            onClick={() => navigatePhoto("next")}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-amber-400 transition-colors duration-200"
            aria-label="Next photo"
          >
            <ChevronRight size={48} />
          </button>

          <div className="max-w-4xl max-h-full flex flex-col items-center">
            <div className="relative max-h-[80vh] w-full">
              <Image
                src={selectedPhotoData.src || "/placeholder.svg"}
                alt={selectedPhotoData.alt}
                width={1200}
                height={800}
                className="object-contain max-h-full w-auto mx-auto"
              />
            </div>
            <div className="text-center mt-4 text-white">
              <h3 className="font-serif text-xl mb-1">{selectedPhotoData.title}</h3>
              <p className="text-gray-300">{selectedPhotoData.location}</p>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}
