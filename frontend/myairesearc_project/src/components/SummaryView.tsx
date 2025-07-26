import React from "react";
import type { Sections } from "../types";

interface Props {
  sections: Sections;
}

const SummaryView: React.FC<Props> = ({ sections }) => {
  return (
    <div className="mt-6">
      {Object.keys(sections).map((section) => (
        <div key={section} className="p-4 border rounded my-4 bg-white shadow">
          <h2 className="font-bold text-xl mb-2">{section}</h2>
          <h3 className="font-semibold">Summary:</h3>
          <p className="mb-2">{sections[section].summary}</p>
          <h3 className="font-semibold">Simplified:</h3>
          <p>{sections[section].simplified}</p>
        </div>
      ))}
    </div>
  );
};

export default SummaryView;
