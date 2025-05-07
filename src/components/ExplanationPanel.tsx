"use client";

import { Bar, BarChart, CartesianGrid, LabelList, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ExplanationPanelProps {
  aiDetails: {
    AIResponse: string;
    LIMEOutput: Array<{ feature: string; weight: number }>;
  } | null;
}

export default function ExplanationPanel({ aiDetails }: ExplanationPanelProps) {
  if (!aiDetails) return null;

  const limeData = aiDetails.LIMEOutput;

  return (
    <Card style={{ backgroundColor: "#f8f9fa" }}>
      <CardHeader>
        <CardTitle>AI Explanation</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-bold">AI Response</h2>
            <p>{aiDetails.AIResponse}</p>
          </div>
          <div>
            <h2 className="text-lg font-bold">LIME Output</h2>
            {limeData.length > 0 ? (
              <div style={{ height: 300, overflow: "visible" }}> 
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={limeData}
                    layout="vertical"
                    margin={{ right: 16 }}
                  >
                    <CartesianGrid horizontal={false} />
                    <YAxis
                      dataKey="feature"
                      type="category"
                      tickLine={false}
                      tickMargin={10}
                      axisLine={false}
                      hide={true}
                    />
                    <XAxis
                      dataKey="weight"
                      type="number"
                    />
                    <Bar
                      dataKey="weight"
                      fill="#007bff"
                      radius={4}
                      barSize={30} 
                    >
                      <LabelList
                        dataKey="feature"
                        position="insideLeft"
                        offset={8}
                        className="fill-white"
                        fontSize={12}
                      />
                      <LabelList
                        dataKey="weight"
                        position="right"
                        offset={8}
                        className="fill-foreground"
                        fontSize={12}
                        formatter={(value: number) => value.toFixed(3)} 
                      />
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            ) : (
              <p>No data available</p>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
