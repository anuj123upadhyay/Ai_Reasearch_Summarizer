import React from "react";
import ReactMarkdown from "react-markdown";
import type { Sections } from "../types";

interface Props {
  sections: Sections;
}

const SummaryView: React.FC<Props> = ({ sections }) => {

  return (
    <div className="mt-6">
      {Object.keys(sections).map((section) => (
        <div
          key={section}
          className="p-4 border border-gray-700 rounded-2xl my-4 bg-[#23272f] shadow-lg text-orange-100"
        >
          <h2 className="font-bold text-xl mb-2 text-orange-300">{section}</h2>
          <h3 className="font-semibold text-orange-400">Summary:</h3>
          <div className="prose prose-invert max-w-none mb-2 text-orange-100">
            <ReactMarkdown>{sections[section].summary}</ReactMarkdown>
          </div>
          <h3 className="font-semibold text-orange-400">Simplified:</h3>
          <div className="prose prose-invert max-w-none text-orange-100">
            <ReactMarkdown>{sections[section].simplified}</ReactMarkdown>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SummaryView;
