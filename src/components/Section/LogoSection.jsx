import React from "react"
import { FileText, CreditCard, UserCheck, Mail } from "lucide-react"

const logos = Array.from({ length: 10 }, (_, i) => ({
  src: `/assets/logo${i + 2}.png`,
  alt: `Logo ${i + 2}`,
}))

const steps = [
  {
    icon: <FileText className="w-6 h-6 text-white" />,
    title: "Fill up Application Form",
    bgColor: "bg-red-400",
  },
  {
    icon: <CreditCard className="w-6 h-6 text-white" />,
    title: "Make Online Payment",
    bgColor: "bg-green-400",
  },
  {
    icon: <UserCheck className="w-6 h-6 text-white" />,
    title: "Executive will Process Application",
    bgColor: "bg-yellow-400",
  },
  {
    icon: <Mail className="w-6 h-6 text-white" />,
    title: "Get Confirm Mail",
    bgColor: "bg-gray-400",
  },
]

export default function LogoSection() {
  return (
    <>
      {/* Clients Section */}
      <section className="py-16 overflow-hidden bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Happy Clients</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate
              resource-leveling customer service for state-of-the-art customer service.
            </p>
          </div>

          <div className="relative flex items-center justify-center h-[450px] mx-auto max-w-4xl">
            {/* Outer circular rings */}
            <div className="absolute w-[400px] h-[400px] rounded-full border border-gray-200"></div>
            <div className="absolute w-[300px] h-[300px] rounded-full border border-gray-200"></div>

            {/* Logos arranged in circular orbit */}
            <div className="absolute animate-spin-slow">
              {logos.map((logo, index) => (
                <div
                  key={index}
                  className="w-12 h-12 absolute top-0 left-0"
                  style={{
                    transform: `rotate(${index * 36}deg) translateX(150px) rotate(-${index * 36}deg)`, // Circular orbit
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  <div className="bg-white p-2 rounded-full shadow-sm hover:shadow-md transition-shadow">
                    <img
                      src={logo.src || "/placeholder.svg"}
                      alt={logo.alt}
                      className="w-8 h-8 rounded-full object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="inline-flex items-center text-primary hover:text-primary/90 font-semibold">
              Show more
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Process Steps Section */}
      <section className="bg-orange-400 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className={`${step.bgColor} p-4 rounded-full`}>{step.icon}</div>
                <span className="font-medium text-lg text-gray-800">{step.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
