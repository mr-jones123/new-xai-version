import { Card, CardContent } from "./ui/card";

interface ExplanationPanelProps {
  aiDetails: {
    // Explanation: string;
    AIResponse: string;
    LIMEOutput: Array<{ feature: string; weight: number }>;
  } | null;
}

export default function ExplanationPanel({ aiDetails }: ExplanationPanelProps) {
  if (!aiDetails) return null;

  return (
    <Card className="p-4">
      <CardContent>
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-bold">AI Response</h2>
            <p>{aiDetails.AIResponse}</p>
          </div>
          <div className="space-y-1">
            {aiDetails.LIMEOutput.map((item, index) => (
              <p key={index}>
                <span className="font-semibold">{item.feature}</span>:{" "}
                {item.weight.toFixed(4)}
              </p>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
