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
              A comprehensive summary of my professional background, technical skills, education, and career achievements.
            </p>
          </div>

          {/* Resume Content */}
          <div className="max-w-4xl mx-auto bg-gray-50 rounded-lg p-8 md:p-12 shadow-md">
            <h2 className="font-serif text-3xl font-medium text-gray-800 mb-6 text-center">My Professional Journey</h2>

            <div className="prose prose-lg mx-auto text-gray-700 leading-relaxed space-y-8">
              <section>
                <h3 className="text-2xl font-semibold mb-2">Experience</h3>
                <ul>
                  <li>
                    <strong>Software Engineer</strong> at TechWave Solutions (2021 - Present)<br />
                    - Developed scalable web applications with React & Node.js.<br />
                    - Led team initiatives to improve code quality and performance by 30%.
                  </li>
                  <li>
                    <strong>Frontend Developer Intern</strong> at Pixel Dynamics (2020 - 2021)<br />
                    - Implemented responsive UI components using Tailwind CSS.<br />
                    - Collaborated on API integrations with backend teams.
                  </li>
                </ul>
              </section>

              <section>
                <h3 className="text-2xl font-semibold mb-2">Education</h3>
                <ul>
                  <li>B.Sc. Computer Science, Egerton University, Kenya (Expected 2026)</li>
                </ul>
              </section>

              <section>
                <h3 className="text-2xl font-semibold mb-2">Skills</h3>
                <ul className="grid grid-cols-2 gap-x-4">
                  <li>JavaScript / TypeScript</li>
                  <li>React & Next.js</li>
                  <li>Node.js & Express</li>
                  <li>REST & GraphQL APIs</li>
                  <li>Tailwind CSS</li>
                  <li>Git & CI/CD</li>
                  <li>SQL & NoSQL Databases</li>
                  <li>Unit & Integration Testing</li>
                </ul>
              </section>

              <section>
                <h3 className="text-2xl font-semibold mb-2">Certifications</h3>
                <ul>
                  <li>Certified Kubernetes Application Developer (CKAD) - 2025</li>
                  <li>Google Associate Cloud Engineer - 2024</li>
                </ul>
              </section>
            </div>

            <div className="mt-12 text-center">
              <Button asChild className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 text-lg">
                <a href="/Laura_Cotto_Resume.pdf" download="Laura_Cotto_Resume.pdf" aria-label="Download Resume PDF">
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
