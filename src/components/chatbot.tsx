"use client"
import { useState, useRef } from "react"
import ChatInterface, { type ChatInterfaceRef } from "@/components/ChatInterface"
import ExplanationPanel from "./ExplanationPanel"

type LimeDataPoint = {
  feature: string
  weight: number
}

type ChatbotProps = {
  chatId: string
}

interface ResponseType {
  aiDetails: {
    AIResponse: string
    LIMEOutput: Array<LimeDataPoint>
    localFidelity?: number | null
    rawPredictions?: number[]
  } | null
}

export default function Chatbot() {
  const [response, setResponse] = useState<ResponseType | null>(null)
  const [loading, setLoading] = useState(false)
  const [webSearchLoading, setWebSearchLoading] = useState(false)
  const [currentQuery, setCurrentQuery] = useState<string>("")
  const chatInterfaceRef = useRef<ChatInterfaceRef>(null)

  const handleSubmit = async (input: string): Promise<string> => {
    setLoading(true)
    setCurrentQuery(input)

    const tryEndpoint = async (endpoint: string) => {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ input }),
      })

      if (!res.ok) {
        throw new Error(`Server error: ${res.status}`)
      }

      const text = await res.text()

      if (!text) {
        throw new Error("Empty response from server")
      }

      return text
    }

    try {
      // Try primary endpoint first
      let text
      try {
        text = await tryEndpoint(process.env.NEXT_PUBLIC_FLASK_ENDPOINT as string)
      } catch (error) {
        console.log("Primary endpoint failed, trying fallback...")
        // Try fallback endpoint
        text = await tryEndpoint(process.env.NEXT_PUBLIC_FLASK_FALLBACK_ENDPOINT as string)
      }

      try {
        const data = JSON.parse(text)

        // Transform the data from backend format to match your ResponseType interface
        const formattedResponse: ResponseType = {
          aiDetails: {
            AIResponse: data.AIResponse || "No response provided",
            LIMEOutput: data.LIMEOutput || [],
            localFidelity: data.localFidelity || null,
            rawPredictions: data.rawPredictions || [],
          },
        }

        setResponse(formattedResponse)

        if (data.LIMEOutput) {
          console.log("Parsed LIME Output:", data.LIMEOutput)
        } else {
          console.log("No LIME output available in response")
        }

        return `AI Response: ${data.AIResponse || "No response provided"}`
      } catch (error) {
        console.error("Error parsing response:", error)
        return "Sorry, something went wrong."
      }
    } catch (error) {
      console.error("Error fetching data:", error)
      return "Sorry, something went wrong."
    } finally {
      setLoading(false)
    }
  }

  const handleWebSearch = async (query: string): Promise<void> => {
    setWebSearchLoading(true)

    try {
      const response = await fetch("/api/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
      })

      if (!response.ok) {
        throw new Error("Web search failed")
      }

      const results = await response.json()

      // Format the search results for display
      let searchResultText = "🔍 Here are some relevant sources I found:\n\n"

      if (results && results.length > 0) {
        results.forEach((result: { title: string; url: string; summary: string }, index: number) => {
          searchResultText += `📰 **${result.title}**\n`
          searchResultText += `📝 ${result.summary}\n`
          searchResultText += `🔗 [Read more](${result.url})\n`
          if (index < results.length - 1) {
            searchResultText += "\n---\n\n"
          }
        })
      } else {
        searchResultText = "I couldn't find any related sources for this query."
      }

      // Add the web search message through the ref
      if (chatInterfaceRef.current) {
        chatInterfaceRef.current.addWebSearchMessage(searchResultText)
      }
    } catch (error) {
      console.error("Web search error:", error)
      if (chatInterfaceRef.current) {
        chatInterfaceRef.current.addWebSearchMessage(
          "Sorry, I encountered an error while searching the web. Please try again later.",
        )
      }
    } finally {
      setWebSearchLoading(false)
    }
  }

  return (
    <div className="flex max-w-7xl mx-auto p-4 h-[100dvh] gap-4">
      <div className={response ? "flex-1" : "w-full"}>
        <ChatInterface
          ref={chatInterfaceRef}
          onSubmit={handleSubmit}
          loading={loading}
          webSearchLoading={webSearchLoading}
        />
      </div>

      {response?.aiDetails && (
        <div className="w-[350px] hidden md:block">
          <ExplanationPanel
            aiDetails={response.aiDetails}
            userQuery={currentQuery}
            onWebSearch={handleWebSearch}
            webSearchLoading={webSearchLoading}
          />
        </div>
      )}
    </div>
  )
}
