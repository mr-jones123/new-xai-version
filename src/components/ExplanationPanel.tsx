"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { InfoIcon, AlertTriangleIcon, CheckCircleIcon, HelpCircleIcon, Search } from 'lucide-react'
import { Button } from "@/components/ui/button"

interface ExplanationPanelProps {
  aiDetails: {
    AIResponse: string
    localFidelity?: number | null
    rawPredictions?: number[]
  } | null
  userQuery: string
  onWebSearch?: (query: string) => Promise<void>
  webSearchLoading?: boolean
}

export default function ExplanationPanel({
  aiDetails,
  userQuery,
  onWebSearch,
  webSearchLoading = false
}: ExplanationPanelProps) {
  const [activeTab, setActiveTab] = useState("overview")
  const [isUncertainResponse, setIsUncertainResponse] = useState(false)

  useEffect(() => {
    if (aiDetails?.AIResponse) {
      const uncertaintyPhrases = [
        "i don't know",
        "don't know",
        "cannot answer",
        "can't answer",
        "unable to",
        "not sure",
        "uncertain",
        "no information",
        "insufficient information",
        "out of topic",
      ]

      const lowerCaseResponse = aiDetails.AIResponse.toLowerCase()
      const isUncertain = uncertaintyPhrases.some((phrase) => lowerCaseResponse.includes(phrase))
      setIsUncertainResponse(isUncertain)
    }
  }, [aiDetails])

  if (!aiDetails) return null

  // Process raw predictions to create confidence scores
  const getConfidenceScores = () => {
    if (!aiDetails.rawPredictions || aiDetails.rawPredictions.length === 0) {
       return [
        { name: "Verified", value: 0, color: "#10b981" },
        { name: "Fake", value: 0, color: "#ef4444" },
        { name: "Uncertain", value: 100, color: "#f59e0b" },
      ];
    }

    const total = aiDetails.rawPredictions.reduce((sum, val) => sum + val, 0)
    if (total === 0) {
         return [
        { name: "Verified", value: 0, color: "#10b981" },
        { name: "Fake", value: 0, color: "#ef4444" },
        { name: "Uncertain", value: 100, color: "#f59e0b" },
      ];
    }

    const scores = [
      {
        name: "Verified",
        value: (aiDetails.rawPredictions[0] / total) * 100,
        color: "#10b981",
      },
      {
        name: "Fake",
        value: (aiDetails.rawPredictions[1] / total) * 100,
        color: "#ef4444",
      },
    ]

    if (aiDetails.rawPredictions.length > 2) {
      scores.push({
        name: "Uncertain",
        value: (aiDetails.rawPredictions[2] / total) * 100,
        color: "#f59e0b",
      })
    } else {
      const sum = scores.reduce((acc, score) => acc + score.value, 0);
        if (sum < 100) {
            scores.push({
                name: "Uncertain",
                value: 100 - sum,
                color: "#f59e0b",
            });
        }
    }

    return scores.sort((a, b) => b.value - a.value);
  }

  const confidenceScores = getConfidenceScores()

  const verdict = confidenceScores.reduce((prev, current) => {
      if (current.name === "Uncertain") {
          return (prev.name === "Uncertain" || prev.value === 0) ? current : prev;
      }
      return prev.value > current.value ? prev : current;
  });

  const getVerdictDisplay = () => {
    switch (verdict.name) {
      case "Verified":
        return {
          color: "bg-green-100 text-green-800 border-green-200",
          icon: <CheckCircleIcon className="h-5 w-5 text-green-600 mr-1" />,
          description: "This content appears to be reliable based on our analysis.",
        }
      case "Fake":
        return {
          color: "bg-red-100 text-red-800 border-red-200",
          icon: <AlertTriangleIcon className="h-5 w-5 text-red-600 mr-1" />,
          description: "This content shows strong indicators of being false or misleading.",
        }
      default:
        return {
          color: "bg-amber-100 text-amber-800 border-amber-200",
          icon: <HelpCircleIcon className="h-5 w-5 text-amber-600 mr-1" />,
          description: isUncertainResponse
            ? "The AI couldn't analyze this content. It may be out of topic or require more context."
            : "We couldn't confidently determine the reliability of this content.",
        }
    }
  }

  const verdictDisplay = getVerdictDisplay()

  const handleWebQuery = async () => {
    if (!userQuery || !onWebSearch) return
  
    try {
      await onWebSearch(userQuery)
    } catch (error) {
      console.error('Web search error:', error)
    }
  }

  return (
    <Card className="h-full overflow-hidden border-0 shadow-md">
      <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b pb-4">
        <CardTitle className="flex items-center text-xl">
          <InfoIcon className="mr-2 h-5 w-5 text-blue-600" />
          AI Analysis
        </CardTitle>
        <CardDescription>Understanding the AI's assessment</CardDescription>
      </CardHeader>

      <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="w-full">
        <div className="px-4 border-b">
          <TabsList className="w-full justify-start bg-transparent h-12 p-0">
            <TabsTrigger
              value="overview"
              className="data-[state=active]:border-b-2 data-[state=active]:border-blue-600 data-[state=active]:shadow-none rounded-none h-12"
            >
              Details
            </TabsTrigger>
          </TabsList>
        </div>

        <CardContent className="p-0">
          <TabsContent value="overview" className="m-0 p-4 space-y-4">
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-1">AI RESPONSE</h3>
              <p className="p-3 bg-gray-50 rounded-md text-gray-800 whitespace-pre-wrap">{aiDetails.AIResponse}</p>
            </div>

            {isUncertainResponse ? (
              <div className="bg-amber-50 p-4 rounded-md">
                <div className="flex items-center mb-2">
                  <HelpCircleIcon className="h-5 w-5 text-amber-600 mr-2" />
                  <h3 className="font-medium text-amber-800">Unable to Analyze</h3>
                </div>
                <p className="text-sm text-amber-700">
                  The AI couldn't analyze this content. It may be out of topic, contain nonsensical text, or require
                  more context.
                </p>
              </div>
            ) : (
              <>
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-1">AI VERDICT</h3>
                  <div className="flex items-center mb-2">
                    <div
                      className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${verdictDisplay.color}`}
                    >
                      {verdictDisplay.icon}
                      {verdict.name}
                    </div>
                    <span className="ml-2 text-lg font-bold">{verdict.value.toFixed(1)}% Confidence</span>
                  </div>
                  <p className="text-sm text-gray-600">{verdictDisplay.description}</p>
                </div>
              </>
            )}

            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-2">DOUBLE CHECK</h3>
              <div className="flex flex-col gap-2">
                <Button
                  onClick={handleWebQuery}
                  disabled={webSearchLoading || !userQuery}
                  className="flex items-center justify-center gap-2 bg-blue-50 text-blue-800 border-blue-200 hover:bg-blue-100"
                >
                  <Search className="h-4 w-4" />
                  {webSearchLoading ? "Searching..." : "Search on the Web"}
                </Button>
              </div>
            </div>
          </TabsContent>
        </CardContent>
      </Tabs>
    </Card>
  )
}