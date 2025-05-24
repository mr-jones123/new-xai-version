import type React from "react";
import { Search, Shield, AlertTriangle } from "lucide-react";

const HowItWorks = () => {
  return (
    <section className="py-12 sm:py-16 md:py-24">
      <div className="text-center mb-8 sm:mb-12 md:mb-16">
        <div className="border-t border-gray-200 my-10 sm:my-16 md:my-20"></div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4">
          How it works?
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto px-4 font-geist text-xl">
          Our AI-powered system helps you identify and verify news articles, ensuring you stay informed with accurate information.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 px-4">
        <article className="flex flex-col items-center">
          <div className="bg-blue-50 rounded-3xl p-6 mb-6 w-full max-w-sm min-h-64 relative overflow-hidden">
            <div className="absolute top-4 right-4 bg-blue-100 rounded-full p-2">
              <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                1
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-4 mb-4">
              <div className="flex items-center gap-2 mb-3">
                <Search className="h-5 w-5 text-blue-500" />
                <p className="text-sm font-medium">Submit News Article</p>
              </div>
              <div className="space-y-3">
                {[1, 2].map((item) => (
                  <div
                    key={item}
                    className="bg-gray-100 h-4 rounded-full w-full"
                  />
                ))}
              </div>
            </div>
            <div className="bg-blue-500 text-white rounded-xl p-4 ml-auto mr-4 max-w-[80%]">
              <p className="text-sm">Lalaya na ren ang ating tatay mula sa Hague!</p>
            </div>
            <div className="mt-4 flex items-center gap-2 bg-white rounded-full p-2 pr-3 border border-gray-200">
              <div className="bg-blue-100 p-2 rounded-full">
                <Search className="h-4 w-4 text-blue-500" />
              </div>
              <div className="bg-gray-100 h-4 rounded-full w-full" />
              <div className="bg-blue-500 rounded-full p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4 text-white"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
          <h3 className="text-2xl font-bold mb-2">Submit Content</h3>
          <p className="text-gray-500 text-center font-geist">
           Simply paste the contents of an article or a caption from social media that you might deem as fake information.
          </p>
        </article>

        <article className="flex flex-col items-center">
          <div className="bg-blue-50 rounded-3xl p-6 mb-6 w-full max-w-sm min-h-64 relative overflow-hidden">
            <div className="absolute top-4 right-4 bg-blue-100 rounded-full p-2">
              <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                2
              </div>
            </div>
            <div className="bg-blue-500 text-white rounded-xl p-4 mr-auto ml-4 max-w-[80%] mb-4">
              <p className="text-sm">Analyzing article credibility...</p>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-4">
              <div className="flex items-center gap-2 mb-3">
                <Shield className="h-5 w-5 text-blue-500" />
                <p className="text-sm font-medium">AI Analysis</p>
              </div>
              <div className="space-y-2">
                <div className="bg-gray-100 h-3 rounded-full w-full" />
                <div className="bg-gray-100 h-3 rounded-full w-[90%]" />
                <div className="bg-gray-100 h-3 rounded-full w-[80%]" />
                <div className="bg-gray-100 h-3 rounded-full w-[95%]" />
                <div className="bg-gray-100 h-3 rounded-full w-[60%]" />
              </div>
              <div className="mt-3 flex justify-end">
                <div className="bg-blue-100 text-blue-500 text-xs px-2 py-1 rounded-md">
                  View analysis →
                </div>
              </div>
            </div>
          </div>
          <h3 className="text-2xl font-bold mb-2">AI Analysis</h3>
          <p className="text-gray-500 text-center font-geist">
            Our AI examines multiple factors including source credibility, content consistency, and fact-checking against reliable databases.
          </p>
        </article>

        <article className="flex flex-col items-center">
          <div className="bg-blue-50 rounded-3xl p-6 mb-6 w-full max-w-sm min-h-64 relative overflow-hidden">
            <div className="absolute top-4 right-4 bg-blue-100 rounded-full p-2">
              <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                3
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-4 h-full">
              <div className="flex items-center gap-2 mb-3">
                <AlertTriangle className="h-5 w-5 text-blue-500" />
                <p className="text-sm font-medium">Results</p>
              </div>
              <div className="grid grid-cols-2 gap-3 mb-3">
                <div className="bg-blue-100 rounded-lg p-2">
                  <div className="h-2 w-[70%] bg-blue-500 rounded-full mb-1" />
                  <div className="h-2 w-[40%] bg-blue-400 rounded-full mb-1" />
                  <div className="h-2 w-[90%] bg-blue-600 rounded-full" />
                </div>
                <div className="bg-blue-100 rounded-lg p-2 flex items-end justify-around">
                  <div className="w-3 h-10 bg-blue-400 rounded-t-sm" />
                  <div className="w-3 h-6 bg-blue-500 rounded-t-sm" />
                  <div className="w-3 h-14 bg-blue-600 rounded-t-sm" />
                  <div className="w-3 h-8 bg-blue-400 rounded-t-sm" />
                </div>
              </div>
              <div className="bg-blue-100 rounded-lg p-2 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full border-4 border-blue-200 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full border-4 border-blue-300 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-blue-500"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h3 className="text-2xl font-bold mb-2">Verification Results</h3>
          <p className="text-gray-500 text-center font-geist">
              XeeAI will either return <span className="font-bold">verified</span> or <span className="font-bold">fake.</span>
          </p>
        </article>
      </div>
    </section>
  );
};

export default HowItWorks;
