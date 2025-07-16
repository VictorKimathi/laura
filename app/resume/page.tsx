import Header from "@/components/header"
import Footer from "@/components/footer"
import Breadcrumbs from "@/components/breadcrumbs"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Resume / CV", href: "/resume" }]} />

          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="font-serif text-4xl md:text-6xl text-gray-800 mb-6">Resume & CV</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A detailed overview of my professional experience, skills, and qualifications in travel writing,
              lifestyle content, and brand consulting.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-gray-50 rounded-lg p-8 md:p-12 shadow-md">
            <h2 className="font-serif text-3xl font-medium text-gray-800 mb-6 text-center">My Professional Journey</h2>

            <div className="prose prose-lg mx-auto text-gray-700 leading-relaxed space-y-6">

              <h3>Laura Michelle Cotto</h3>
              <p>6926 Kimberly Heights Ln.<br />
              Jacksonville, FL 32222-1761<br />
              (206) 249-9023<br />
              laura87michelle@gmail.com</p>

              <h3>Professional Profile</h3>
              <p>
                Travel copywriter with 10+ years of experience producing engaging, SEO-optimized content 
                for digital audiences. Known for turning cultural insights and destination research into dynamic, 
                reader-focused narratives that inspire, inform, and convert. Strong background in lifestyle writing, 
                hospitality marketing, and editorial planning.
              </p>

              <h3>Experience</h3>
              <p>
                <strong>Freelance Travel Copywriter</strong><br />
                Remote / Various Clients — 2016 – Present<br />
                - Write destination guides, travel itineraries, hotel reviews, and seasonal features for outlets like Matador Network, Lonely Planet, and Culture Trip.<br />
                - Produce SEO-driven content that maintains editorial quality and local nuance.<br />
                - Conduct interviews with local experts, tour operators, and hoteliers.<br />
                - Regularly pitch and produce original stories on slow travel, budget travel, cultural etiquette, and eco-tourism.
              </p>
              <p>
                <strong>Content Marketing Specialist</strong><br />
                WanderBright Travel Gear — Tampa, FL — 2013 – 2016<br />
                - Led brand voice and blog content strategy for boutique travel gear brand.<br />
                - Created email marketing campaigns and product descriptions with a storytelling angle.<br />
                - Collaborated with influencers and photographers to generate user-driven content.
              </p>
              <p>
                <strong>Copywriter & Editorial Assistant</strong><br />
                Vibe Creative Co. — Asheville, NC — 2010 – 2013<br />
                - Wrote blog content, web copy, and branded articles for lifestyle and hospitality clients.<br />
                - Proofread and edited digital content for tone, accuracy, and structure.<br />
                - Supported the editorial team with client reports, topic ideation, and keyword research.
              </p>

              <h3>Education</h3>
              <p>
                <strong>B.A. in English & Communication</strong><br />
                University of North Carolina at Greensboro — Graduated 2009
              </p>

              <h3>Skills</h3>
              <p>
                Travel storytelling, SEO copywriting, WordPress & CMS platforms, 
                Google Analytics & Search Console, Cultural research & sourcing, 
                AP & in-house style guides
              </p>

              <h3>Additional Activities</h3>
              <p>
                Volunteer Contributor, JourneyWoman.com<br />
                Member, Travel Media Association of North America (TMANA)
              </p>
            </div>

            <div className="mt-12 text-center">
              <Button asChild className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 text-lg">
                <a 
                  href="/laura.docx" 
                  download="laura.docx" 
                  aria-label="Download Resume DOCX"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Full Resume (DOCX)
                </a>
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
