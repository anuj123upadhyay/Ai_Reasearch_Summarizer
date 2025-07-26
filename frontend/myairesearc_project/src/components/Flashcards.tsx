import React from "react";
import type { Sections } from "../types";

interface Props {
  sections: Sections;
}

const Flashcards: React.FC<Props> = ({ sections }) => {
  return (
    <div className="mt-6">
      <h2 className="text-2xl font-bold mb-4">Flashcards</h2>
      {Object.keys(sections).map((section) => (
        <div key={section} className="p-4 border rounded bg-white shadow my-2">
          <h3 className="font-bold">{section}</h3>
          <p className="mt-2 whitespace-pre-wrap">{sections[section].flashcards}</p>
        </div>
      ))}
    </div>
  );
};

export default Flashcards;
