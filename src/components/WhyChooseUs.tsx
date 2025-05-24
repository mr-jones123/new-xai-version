import { CheckCircle, Brain, MessageSquareText, Sliders, Globe } from "lucide-react"

const features = [
  {
    icon: <Brain className="h-10 w-10 text-blue-500" />,
    title: "Honest & Transparent",
    description:
      "Our AI clearly indicates when it's uncertain about information, never making false claims or assumptions about news authenticity.",
  },
  {
    icon: <MessageSquareText className="h-10 w-10 text-blue-500" />,
    title: "Reliable Fact-Checking",
    description:
      "Powered by extensive databases and real-time verification, we provide accurate assessments of news credibility.",
  },
  {
    icon: <Globe className="h-10 w-10 text-blue-500" />,
    title: "Clear Results",
    description:
      "Get straightforward 'verified' or 'fake' classifications, backed by evidence and reasoning for each assessment.",
  },
]

const WhyChooseUs = () => {
  return (
    <section className="py-10 sm:py-16 md:py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4">Why Choose Us</h2>
          <p className="text-gray-500 max-w-2xl mx-auto px-2 font-geist">
            Our fake news detection system prioritizes accuracy and honesty, helping you navigate the complex world of online information with confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-sm border border-blue-100 hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4">
                <div className="bg-blue-50 p-2 sm:p-3 rounded-lg sm:rounded-xl">{feature.icon}</div>
                <div className="text-center sm:text-left">
                  <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-gray-800">{feature.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 font-geist">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full text-blue-700">
            <CheckCircle className="h-5 w-5" />
            <span className="font-medium font-geist">Committed to truth and accuracy in the digital age.</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
