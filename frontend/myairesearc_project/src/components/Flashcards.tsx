import React from "react";
import ReactMarkdown from "react-markdown";
import type { Sections } from "../types";

interface Props {
  sections: Sections;
}

const Flashcards: React.FC<Props> = ({ sections }) => {
  return (
    <div className="mt-6">
      <h2 className="text-2xl font-bold mb-4 text-orange-400">Flashcards</h2>
      {Object.keys(sections).map((section) => (
        <div
          key={section}
          className="p-4 border border-gray-700 rounded-2xl bg-[#23272f] shadow-lg my-2 text-orange-100"
        >
          <h3 className="font-bold text-orange-300">{section}</h3>
          <div className="mt-2 prose prose-invert max-w-none text-orange-100">
            <ReactMarkdown>{sections[section].flashcards}</ReactMarkdown>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Flashcards;
