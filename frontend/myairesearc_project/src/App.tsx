import React, { useState } from "react";
import FileUpload from "./components/FileUpload";
import SummaryView from "./components/SummaryView";
import Flashcards from "./components/Flashcards";
import MindMap from "./components/MindMap";
import type { Sections } from "./types";
import ChatGemini from "./components/ChatGemini";

const App: React.FC = () => {
  const [data, setData] = useState<Sections | null>(null);

  return (
    <div className="px-2 sm:px-4 py-6 min-h-screen bg-[#18181b] text-orange-400 font-sans flex flex-col items-center">
      <h1 className="text-3xl mt-10 sm:text-4xl font-extrabold mb-8 sm:mb-10 text-center tracking-wide drop-shadow-lg text-orange-400 w-full">
        <span className="inline-block px-4 sm:px-6 py-2 rounded-2xl bg-[#23272f] border border-gray-700 shadow-md w-full max-w-2xl mx-auto">
          Research Paper Simplifier{" "}
          <span className="text-orange-500">| Powered by Gemini</span>
        </span>
      </h1>

      {/* Upload PDF */}
      <div className="mb-8 flex justify-center w-full">
        <div className="bg-[#23272f] rounded-2xl shadow-lg p-4 sm:p-8 border border-gray-700 w-full max-w-xl transition-all duration-300">
          <FileUpload setData={setData} />
        </div>
      </div>

      {data ? (
        <div className="w-full max-w-5xl mx-auto space-y-6 sm:space-y-8">
          {/* Summaries and Simplified Text */}
          <div className="bg-[#23272f] rounded-2xl shadow-lg p-4 sm:p-8 border border-gray-700 transition-all duration-300">
            <SummaryView sections={data} />
          </div>

          {/* Flashcards */}
          <div className="bg-[#23272f] rounded-2xl shadow-lg p-4 sm:p-8 border border-gray-700 transition-all duration-300">
            <Flashcards sections={data} />
          </div>

          {/* Mind Map Visualization (show for all sections with mindmap) */}
          {Object.entries(data).map(
            ([section, sectionData]) =>
              sectionData.mindmap && (
                <div
                  key={section + "-mindmap"}
                  className="bg-[#23272f] rounded-2xl shadow-lg p-4 sm:p-8 border border-gray-700 transition-all duration-300"
                >
                  <h3 className="text-lg font-bold text-orange-400 mb-2">
                    {section} Mind Map
                  </h3>
                  <MindMap data={sectionData.mindmap} />
                </div>
              )
          )}

          {/* Chat-like Gemini Interface */}
          <div className="bg-[#23272f] rounded-2xl shadow-lg p-4 sm:p-8 border border-gray-700 mt-6 sm:mt-8 transition-all duration-300">
            <ChatGemini context={JSON.stringify(data)} />
          </div>
        </div>
      ) : (
        <p className="text-center text-orange-300 mt-16 sm:mt-20 text-base sm:text-lg animate-pulse px-2">
          Hey there!{" "}
          <span className="font-semibold text-orange-400">Upload a PDF</span> to
          get started with summarizing and exploring your research paper.
        </p>
      )}
    </div>
  );
};

export default App;
