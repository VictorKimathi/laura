import Image from "next/image"
import Link from "next/link"
import { Instagram, Linkedin, MapPin, Camera, PenTool } from "lucide-react"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Breadcrumbs from "@/components/breadcrumbs"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "About", href: "/about" }]} />

          {/* Hero Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="aspect-[3/4] relative rounded-lg overflow-hidden">
              <Image
                src="/laurafemale.png?height=800&width=600"
                alt="Laura Michelle Cotto photographing local artisans in a traditional market setting"
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-6">
              <h1 className="font-serif text-4xl md:text-6xl text-gray-800">Hello, I'm Laura</h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                A travel writer, photographer, and consultant passionate about authentic cultural experiences and
                sustainable tourism.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                For over a decade, I've been exploring the world with a deep commitment to responsible travel, cultural
                immersion, and storytelling that celebrates the authentic spirit of each destination I visit.
              </p>

              <div className="flex space-x-6 pt-4">
                <Link
                  href="https://instagram.com"
                  className="text-gray-600 hover:text-amber-600 transition-colors duration-200"
                  aria-label="Follow on Instagram"
                >
                  <Instagram size={24} />
                </Link>
                <Link
                  href="https://pinterest.com"
                  className="text-gray-600 hover:text-amber-600 transition-colors duration-200"
                  aria-label="Follow on Pinterest"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.219-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.888-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.357-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12.001 24c6.624 0 11.999-5.373 11.999-12C24 5.372 18.626.001 12.001.001z" />
                  </svg>
                </Link>
                <Link
                  href="https://linkedin.com"
                  className="text-gray-600 hover:text-amber-600 transition-colors duration-200"
                  aria-label="Connect on LinkedIn"
                >
                  <Linkedin size={24} />
                </Link>
              </div>
            </div>
          </div>

          {/* Story Section */}
          <div className="max-w-4xl mx-auto mb-20">
            <h2 className="font-serif text-3xl md:text-4xl text-gray-800 text-center mb-12">My Story</h2>

            <div className="prose prose-lg mx-auto text-gray-600 leading-relaxed space-y-6">
              <p>
                My journey into travel writing began with a simple belief: that the most meaningful travel experiences
                happen when we move beyond tourist attractions to connect with local communities, understand different
                cultures, and travel in ways that benefit the places we visit.
              </p>

              <p>
                Over the years, I've had the privilege of documenting stories from over 40 countries, from learning
                traditional weaving techniques with artisans in Peru to understanding sustainable fishing practices with
                coastal communities in Vietnam. Each experience has deepened my commitment to responsible tourism and
                authentic storytelling.
              </p>

              <p>
                What sets my work apart is the time I invest in each destination—often spending weeks or months in a
                place to truly understand its culture, challenges, and beauty. I believe that slow, mindful travel not
                only creates better stories but also fosters more meaningful connections between travelers and the
                communities they visit.
              </p>

              <p>
                Today, I combine my passion for travel with my expertise in brand strategy and content creation, helping
                tourism organizations and travel brands tell their stories in ways that celebrate cultural authenticity
                and promote sustainable practices.
              </p>
            </div>
          </div>

          {/* Values Section */}
          <div className="bg-gray-50 rounded-lg p-8 md:p-12 mb-20">
            <h2 className="font-serif text-3xl md:text-4xl text-gray-800 text-center mb-12">What Drives My Work</h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Camera className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-serif text-xl font-medium text-gray-800 mb-3">Authentic Storytelling</h3>
                <p className="text-gray-600 leading-relaxed">
                  Every story I tell is rooted in genuine cultural exchange and deep respect for local communities and
                  traditions.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-serif text-xl font-medium text-gray-800 mb-3">Sustainable Travel</h3>
                <p className="text-gray-600 leading-relaxed">
                  I'm committed to promoting travel practices that benefit local economies and preserve cultural and
                  natural heritage.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <PenTool className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-serif text-xl font-medium text-gray-800 mb-3">Cultural Immersion</h3>
                <p className="text-gray-600 leading-relaxed">
                  I believe the best travel experiences come from taking time to truly understand and appreciate
                  different ways of life.
                </p>
              </div>
            </div>
          </div>

          {/* Favorites Section */}
          <div className="max-w-4xl mx-auto mb-20">
            <h2 className="font-serif text-3xl md:text-4xl text-gray-800 text-center mb-12">A Few of My Favorites</h2>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="font-serif text-2xl font-medium text-gray-800 mb-4">Destinations That Changed Me</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-amber-600 rounded-full mr-3 mt-2 flex-shrink-0" />
                    <span>
                      <strong>Bhutan:</strong> Where Gross National Happiness taught me new ways to measure success
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-amber-600 rounded-full mr-3 mt-2 flex-shrink-0" />
                    <span>
                      <strong>Madagascar:</strong> Discovering conservation efforts that blend science with local wisdom
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-amber-600 rounded-full mr-3 mt-2 flex-shrink-0" />
                    <span>
                      <strong>Socotra Island:</strong> Finding endemic species and ancient traditions in isolation
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-serif text-2xl font-medium text-gray-800 mb-4">Travel Philosophy</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-amber-600 rounded-full mr-3 mt-2 flex-shrink-0" />
                    <span>Always learn basic phrases in the local language</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-amber-600 rounded-full mr-3 mt-2 flex-shrink-0" />
                    <span>Spend money with local businesses and artisans</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-amber-600 rounded-full mr-3 mt-2 flex-shrink-0" />
                    <span>Travel slowly and stay longer in fewer places</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-amber-600 rounded-full mr-3 mt-2 flex-shrink-0" />
                    <span>Leave only footprints, take only photographs</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-gray-800 mb-6">Let's Connect</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Whether you're interested in collaborating on a project, learning more about sustainable travel, or simply
              sharing travel stories, I'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 text-lg">
                <Link href="/consulting">Work With Me</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-amber-600 text-amber-600 hover:bg-amber-50 px-8 py-3 text-lg bg-transparent"
              >
                <a href="mailto:hello@lauramichellecotto.com">Send Email</a>
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
