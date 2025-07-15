"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import Breadcrumbs from "@/components/breadcrumbs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What kind of travel content do you specialize in?",
    answer:
      "I specialize in authentic cultural immersion, sustainable travel, and personal storytelling. My content focuses on deep local experiences, responsible tourism practices, and narratives that inspire meaningful connections with destinations.",
  },
  {
    question: "Do you offer photography services separately from writing?",
    answer:
      "Yes, I offer standalone travel photography services. My portfolio includes destination photography, lifestyle, food, and cultural documentation. You can view my work samples on the Portfolio page.",
  },
  {
    question: "What is your approach to travel brand consulting?",
    answer:
      "My consulting approach is rooted in crafting compelling brand narratives that resonate with conscious travelers. I help tourism boards and travel companies develop content strategies, integrate sustainable practices, and engage their audience effectively.",
  },
  {
    question: "Are you available for international assignments?",
    answer:
      "I am available for global projects and have extensive experience working in diverse international settings. My passport is always ready for the next adventure.",
  },
  {
    question: "How can I collaborate with you?",
    answer:
      "The best way to start is by filling out the contact form on my Contact page. Tell me about your project, goals, and how you envision our collaboration. I'll get back to you within 48 hours to discuss further.",
  },
  {
    question: "What is your philosophy on sustainable travel?",
    answer:
      "Sustainable travel, to me, means minimizing negative impacts while maximizing positive ones. It involves respecting local cultures, supporting local economies, conserving natural resources, and ensuring that travel benefits both visitors and host communities.",
  },
  {
    question: "Do you offer workshops or speaking engagements?",
    answer:
      "Yes, I occasionally offer workshops on travel writing, photography, and sustainable tourism, as well as speaking engagements on my experiences and insights. Please contact me for availability and topics.",
  },
]

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "FAQ", href: "/faq" }]} />

          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="font-serif text-4xl md:text-6xl text-gray-800 mb-6">Frequently Asked Questions</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Find answers to common questions about my work, services, and travel philosophy.
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-medium text-lg hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 leading-relaxed text-base">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
