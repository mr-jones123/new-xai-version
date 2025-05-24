"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Loader2 } from "lucide-react"

const facts = [

  "Fake news spreads rapidly on social media in the Philippines, especially during election periods.",
  "Fact-checking organizations like Vera Files and Rappler are key players in combating misinformation in the Philippines.",
  "You can help spot fake news by checking if a story is reported by multiple reputable news sources.",
  "Be cautious of sensational headlines or posts designed to trigger strong emotions – they can be signs of fake news.",
  "Always check the source of information. Is it a credible news outlet or an unfamiliar page?",
  "Misinformation in the Philippines often spreads through popular platforms like Facebook, TikTok, and messaging apps.",
  "Cross-referencing information with established fact-checking websites like Vera Files and Rappler can help verify its authenticity.",
  "Look for key details like the author, date, and sources cited in an article. Lack of these can be a red flag.",
]

export default function LoadingFacts() {
  const [currentFact, setCurrentFact] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFact((prev) => (prev + 1) % facts.length)
    }, 5000) // Change fact every 5 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex flex-col items-center justify-center space-y-6 p-4 w-full max-w-xl mx-auto my-8">
      <div className="flex items-center justify-center">
        <Loader2 className="h-10 w-10 text-primary animate-spin mr-2" />
        <h3 className="text-xl font-medium">Processing your request...</h3>
      </div>

      <Card className="w-full bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
        <CardContent className="pt-6">
          <div className="flex items-start space-x-3">
            <div className="bg-blue-100 p-2 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-blue-600"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 16v-4"></path>
                <path d="M12 8h.01"></path>
              </svg>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-1">Did you know?</h4>
              <p className="text-gray-700">{facts[currentFact]}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-center space-x-1">
        {facts.map((_, index) => (
          <div
            key={index}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === currentFact ? "w-6 bg-primary" : "w-2 bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
