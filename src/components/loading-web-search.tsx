"use client"

import { useState, useEffect } from "react"
import { Search } from "lucide-react"

const searchFacts = [
  "Searching the web for relevant sources...",
  "Finding credible news articles...",
  "Cross-referencing information...",
  "Analyzing source reliability...",
  "Gathering recent updates...",
]

export default function LoadingWebSearch() {
  const [currentFact, setCurrentFact] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFact((prev) => (prev + 1) % searchFacts.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-green-100 text-green-900 border border-green-200 p-4 rounded-lg">
      <div className="flex items-center space-x-2">
        <Search className="w-4 h-4 animate-pulse" />
        <div className="flex space-x-1">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
          <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
        </div>
        <span className="text-sm font-medium">{searchFacts[currentFact]}</span>
      </div>
    </div>
  )
}
