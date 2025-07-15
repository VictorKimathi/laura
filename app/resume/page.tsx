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
              photography, and brand consulting.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-gray-50 rounded-lg p-8 md:p-12 shadow-md">
            <h2 className="font-serif text-3xl font-medium text-gray-800 mb-6 text-center">My Professional Journey</h2>

            <div className="prose prose-lg mx-auto text-gray-700 leading-relaxed space-y-6">
              <p>
                With over a decade of experience in the travel industry, I have honed my skills in crafting compelling
                narratives, capturing evocative imagery, and developing strategic content for diverse platforms. My work
                is driven by a passion for authentic cultural exchange and a commitment to promoting sustainable travel
                practices.
              </p>
              <p>
                My expertise spans editorial writing for leading travel publications, visual content creation for
                tourism boards, and strategic consulting for travel brands seeking to connect with a global audience. I
                am adept at research, interviewing, project management, and delivering high-quality content that
                inspires and informs.
              </p>
              <p>
                For a comprehensive look at my professional background, including detailed experience, education,
                awards, and key skills, please download my full Resume/CV.
              </p>
            </div>

            <div className="mt-12 text-center">
              <Button asChild className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 text-lg">
                <a href="/placeholder.pdf" download="Laura_Cotto_Resume.pdf" aria-label="Download Resume PDF">
                  <Download className="w-5 h-5 mr-2" />
                  Download Full Resume (PDF)
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
