import React from "react";

const HowItWorks: React.FC = () => {
    return (
    <section className="py-24">
        <div className="text-center mb-16">
        <div className="border-t border-gray-200 my-20"></div>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">How it works?</h2>
        <p className="text-gray-500 max-w-2xl mx-auto">
        See how our AI works—get answers, and understand the &lsquo;why&apos; behind them.
        </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <article className="flex flex-col items-center">
            <div className="bg-blue-50 rounded-3xl p-6 mb-6 w-full max-w-sm min-h-64 relative overflow-hidden">
            <div className="bg-blue-400 text-white rounded-full p-3 w-full max-w-xs mx-auto mb-4 text-center">
                <p className="text-sm">decription here</p>
            </div>
            <div className="space-y-3">
                {[1, 2, 3, 4].map((item) => (
                <div key={item} className="bg-blue-200/60 h-4 rounded-full w-full" />
                ))}
            </div>
            <div className="flex gap-3 mt-4">
                <div className="bg-blue-200/60 h-8 rounded-lg w-24" />
                <div className="bg-blue-200/60 h-8 rounded-lg w-24" />
            </div>
            </div>
            <h3 className="text-2xl font-bold mb-2">title here</h3>
            <p className="text-gray-500 text-center">
                description here
            </p>
        </article>

        <article className="flex flex-col items-center">
            <div className="bg-blue-50 rounded-3xl p-6 mb-6 w-full max-w-sm min-h-64 relative overflow-hidden">
            <div className="bg-blue-400 text-white rounded-full p-3 w-full max-w-xs mx-auto mb-4 flex justify-between items-center">
                <p className="text-sm">title here</p>
                <button aria-label="Close" className="text-white font-bold text-lg">×</button>
            </div>
            <div className="bg-white rounded-xl p-6 flex flex-col items-center justify-center h-40">
                {/* <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-blue-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    />
                </svg>
                </div> */}
                <p className="text-gray-500 text-sm mb-4">
                description here.
                </p>
                <button className="border border-blue-300 text-blue-500 rounded-full px-4 py-1 text-sm">
                Generate
                </button>
            </div>
            </div>
            <h3 className="text-2xl font-bold mb-2">title</h3>
            <p className="text-gray-500 text-center">
            description.
            </p>
        </article>

        <article className="flex flex-col items-center">
            <div className="bg-blue-50 rounded-3xl p-6 mb-6 w-full max-w-sm min-h-64 relative overflow-hidden">
            <div className="bg-blue-200/80 rounded-xl p-4 h-full">
            <div className="bg-blue-300/50 h-6 rounded-full w-full mb-4" />
            <div className="flex gap-3">
                <div className="bg-blue-300/50 h-20 rounded-lg w-1/3" />
                <div className="bg-blue-300/50 h-20 rounded-lg w-2/3" />
                </div>
            </div>
            </div>
            <h3 className="text-2xl font-bold mb-2">title</h3>
            <p className="text-gray-500 text-center">
            description.
            </p>
        </article>
        </div>
    </section>
    );
};

export default HowItWorks;
