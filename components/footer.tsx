import Link from "next/link"
import { Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="font-serif text-2xl font-medium tracking-wide mb-2">LAURA MICHELLE COTTO</h3>
            <p className="text-gray-400">Travel Writer, Photographer, Consultant</p>
          </div>

          <div className="flex flex-col items-center md:items-end">
  
            <a
              href="mailto:laura87michelle@gmail.com"
              className="text-gray-400 hover:text-amber-400 transition-colors duration-200"
            >
              laura87michelle@gmail.com
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Laura Michelle Cotto. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
