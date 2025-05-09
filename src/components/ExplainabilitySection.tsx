import { Info, AlertCircle, CheckCircle } from "lucide-react"

const ExplainabilitySection = () => {
  return (
    <section className="pt-20 pb-10 bg-gradient-to-br from-blue-50/50 to-white rounded-3xl my-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Phone mockup */}
          <div className="relative mx-auto max-w-sm">
            <div className="bg-gray-900 rounded-[40px] p-2 shadow-xl border-4 border-gray-800">
              <div className="bg-white rounded-[32px] overflow-hidden h-[580px] relative">
                {/* Phone status bar */}
                <div className="bg-gray-100 p-2 flex justify-between items-center">
                  <div className="text-xs font-medium">9:41</div>
                  <div className="w-32 h-5 bg-black rounded-full mx-auto absolute left-0 right-0"></div>
                  <div className="flex items-center gap-1">
                    <div className="w-4 h-4 rounded-full bg-gray-400"></div>
                    <div className="w-4 h-4 rounded-full bg-gray-400"></div>
                  </div>
                </div>

                {/* Chat header */}
                <div className="p-3 border-b flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white">
                    <Info size={16} />
                  </div>
                  <div>
                    <div className="font-medium">XeeAI Assistant</div>
                    <div className="text-xs text-gray-500">Explainable AI</div>
                  </div>
                </div>

                {/* Chat content */}
                <div className="p-3 h-[450px] overflow-y-auto bg-gray-50">
                  {/* User message */}
                  <div className="flex justify-end mb-4">
                    <div className="bg-gray-200 rounded-2xl rounded-tr-sm p-3 max-w-[80%]">
                      <p className="text-sm">Why should I trust this recommendation?</p>
                    </div>
                  </div>

                  {/* AI response */}
                  <div className="flex mb-4">
                    <div className="bg-blue-500 text-white rounded-2xl rounded-tl-sm p-3 max-w-[80%]">
                      <p className="text-sm">
                        Based on your financial history and goals, I recommend this investment strategy.
                      </p>
                    </div>
                  </div>

                  {/* User follow-up */}
                  <div className="flex justify-end mb-4">
                    <div className="bg-gray-200 rounded-2xl rounded-tr-sm p-3 max-w-[80%]">
                      <p className="text-sm">Can you explain how you reached this conclusion?</p>
                    </div>
                  </div>

                  {/* AI explanation */}
                  <div className="flex mb-4">
                    <div className="bg-blue-500 text-white rounded-2xl rounded-tl-sm p-3 max-w-[80%]">
                      <p className="text-sm">Here&apos;s my reasoning:</p>
                      <div className="mt-2 p-2 bg-blue-600 rounded-lg text-xs">
                        <p className="mb-1">• Your risk tolerance score: 7/10</p>
                        <p className="mb-1">• Time horizon: 15+ years</p>
                        <p className="mb-1">• Key factors: retirement goals, market conditions</p>
                        <p>• Confidence level: 87%</p>
                      </div>
                      <p className="text-xs mt-2">Tap for detailed explanation →</p>
                    </div>
                  </div>

                  {/* Explainability feature highlight */}
                  <div className="bg-white border border-blue-200 rounded-xl p-3 shadow-sm mb-4">
                    <div className="flex items-center gap-2 text-blue-600 text-sm font-medium mb-2">
                      <AlertCircle size={16} />
                      <span>Explainability Feature</span>
                    </div>
                    <p className="text-xs text-gray-600">
                      This AI provides transparent reasoning behind its recommendations, allowing you to understand and
                      verify its decision process.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature cards */}
            <div className="absolute -right-24 top-20 bg-white rounded-xl p-4 shadow-md border border-blue-100 w-48">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-500 mb-2">
                <CheckCircle size={16} />
              </div>
              <h4 className="font-medium text-sm">Token Analysis</h4>
              <p className="text-xs text-gray-500 mt-1">
                See which parts of your input influenced the AI&apos;s response most.
              </p>
            </div>

            <div className="absolute -right-16 top-64 bg-white rounded-xl p-4 shadow-md border border-blue-100 w-48">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-500 mb-2">
                <CheckCircle size={16} />
              </div>
              <h4 className="font-medium text-sm">LIME Integration</h4>
              <p className="text-xs text-gray-500 mt-1">
                Visualize how the model interprets your queries with local explanations.
              </p>
            </div>
          </div>

          {/* Right side - Content */}
          <div>
            <div className="inline-block px-4 py-1 bg-blue-100 rounded-full text-blue-700 text-sm font-medium mb-4">
              Transparency & Trust
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Explainability Matters</h2>

            <div className="space-y-4 text-gray-600">
              <p>
                Modern AI systems—especially large language models—can generate highly convincing outputs, yet often
                operate as black boxes, leaving users unsure how or why certain answers are produced. This lack of
                transparency raises serious concerns around trust, accountability, and fairness.
              </p>

              <p>
                Explainable AI (XAI) addresses this challenge by making model decisions understandable to humans. By
                highlighting which parts of an input most influenced the output, users can better assess the
                reliability, bias, and rationale behind AI-generated responses.
              </p>

              <p>
                Our project integrates XAI techniques like LIME (Local Interpretable Model-agnostic Explanations) and
                token-weight analysis to make the inner workings of our chatbot transparent and interpretable. We
                believe this is essential for building ethical, responsible AI systems—especially in contexts like
                education, law, healthcare, and research.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg my-6">
                <p className="italic text-gray-700">
                  &quot;Explanations are necessary for trust. Without them, users are left to guess or blindly follow AI
                  decisions.&quot;
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  — Ribeiro et al., &quot;Why Should I Trust You?&quot;: Explaining the Predictions of Any Classifier (2016)
                </p>
              </div>

              <p>
                By prioritizing explainability, we move toward AI systems that are not just powerful, but also
                accountable, fair, and human-aligned.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExplainabilitySection
