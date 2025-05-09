"use client";

import { Bar, BarChart, CartesianGrid, LabelList, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

type LimeDataPoint = {
  feature: string;
  weight: number;
};

interface BarCustomProps {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  fill?: string;
  payload?: LimeDataPoint;
}

interface ExplanationPanelProps {
  aiDetails: {
    AIResponse: string;
    LIMEOutput: Array<LimeDataPoint>;
  } | null;
}

export default function ExplanationPanel({ aiDetails }: ExplanationPanelProps) {
  if (!aiDetails) return null;

  const limeData = aiDetails.LIMEOutput;

  // Custom renderer for tooltip bars
  const CustomBar: React.FC<BarCustomProps> = ({ x = 0, y = 0, width = 0, height = 0, payload }) => {
    if (!payload) return null;
    
    const { feature, weight } = payload;
    
    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <rect x={x} y={y} width={width} height={height} fill="#007bff" rx={4} ry={4} />
          </TooltipTrigger>
          <TooltipContent>
            <p><strong>{feature}</strong>: {weight.toFixed(3)}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  };

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
                      shape={(props: BarCustomProps) => <CustomBar {...props} />}
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