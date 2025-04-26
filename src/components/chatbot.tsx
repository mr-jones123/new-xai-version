"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ChatInterface from "@/components/ChatInterface";

interface ResponseType {
  // explanation: string;
  AIResponse: string;
  LIMEOutput: string;
}

export default function Chatbot() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState<ResponseType | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (input: string): Promise<string> => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/lime-algorithm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ input }),
      });

      if (!res.ok) {
        throw new Error(`Server error: ${res.status}`);
      }

      const text = await res.text();

      if (!text) {
        throw new Error("Empty response from server");
      }

      const data: ResponseType = JSON.parse(text);

      // You can modify the returned format here if you want.
      return `AI Response: ${data.AIResponse}\nExplanation: ${data.LIMEOutput}`;
    } catch (error) {
      console.error("Error fetching data:", error);
      return "Sorry, something went wrong.";
    } finally {
      setLoading(false);
    }
  };

  return (
    /*<div className="max-w-xl mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">XAI Chatbot</h1>
      <div className="flex gap-2 mb-4">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a sentence..."
        />
        <Button onClick={handleSubmit} disabled={loading}>
          {loading ? "Analyzing..." : "Submit"}
        </Button>
      </div>
      {response && (
        <Card className="mt-4">
          <CardContent className="p-4">
            <p className="text-lg font-bold italic">
              AI Response: {response.AIResponse}
            </p>
            <p className="text-lg font-semibold">Explanation:</p>
            <hr className="my-2" />
            <p>
              LIME Output: <strong>{response.LIMEOutput}</strong>
            </p>
          </CardContent>
        </Card>
      )}
    </div>*/
    <div className="max-w-4xl mx-auto p-4">
      <ChatInterface onSubmit={handleSubmit} loading={false} />
    </div>
  );
}
