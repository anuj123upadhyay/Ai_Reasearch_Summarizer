





// import React, { useState } from "react";
// import FileUpload from "./components/FileUpload";
// import SummaryView from "./components/SummaryView";
// import Flashcards from "./components/Flashcards";
// import QnA from "./components/QnA";
// import MindMap from "./components/MindMap";
// import type { Sections } from "./types";
// import ChatGemini from "./components/ChatGemini";

// const App: React.FC = () => {
//   const [data, setData] = useState<Sections | null>(null);

//   return (
//     <div className="p-8 bg-gray-100 min-h-screen">
//       <h1 className="text-3xl font-bold mb-6 text-center">
//         Research Paper Simplifier
//       </h1>

//       {/* Upload PDF */}
//       <div className="mb-6 flex justify-center">
//         <FileUpload setData={setData} />
//       </div>

//       {data ? (
//         <div className="max-w-5xl mx-auto">
//           {/* Summaries and Simplified Text */}
//           <SummaryView sections={data} />

//           {/* Flashcards */}
//           <Flashcards sections={data} />

//           {/* Q&A Section */}
//           <QnA context={JSON.stringify(data)} />

//           {/* Mind Map Visualization (Abstract section as example) */}
//           {data["Abstract"]?.mindmap && (
//             <MindMap data={data["Abstract"].mindmap} />
//           )}
//         </div>
//       ) : (
//         <p className="text-center text-gray-500 mt-8">
//           Upload a PDF to get started!
//         </p>
//       )}
//     </div>
//   );
// };

// export default App;











import React, { useState } from "react";
import FileUpload from "./components/FileUpload";
import SummaryView from "./components/SummaryView";
import Flashcards from "./components/Flashcards";
import QnA from "./components/QnA";
import MindMap from "./components/MindMap";
import type { Sections } from "./types";
import ChatGemini from "./components/ChatGemini";

const App: React.FC = () => {
  const [data, setData] = useState<Sections | null>(null);

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Research Paper Simplifier
      </h1>

      {/* Upload PDF */}
      <div className="mb-6 flex justify-center">
        <FileUpload setData={setData} />
      </div>

      {data ? (
        <div className="max-w-5xl mx-auto">
          {/* Summaries and Simplified Text */}
          <SummaryView sections={data} />

          {/* Flashcards */}
          <Flashcards sections={data} />

          {/* Q&A Section */}
          <QnA context={JSON.stringify(data)} />

          {/* Mind Map Visualization (Abstract section as example) */}
          {data["Abstract"]?.mindmap && (
            <MindMap data={data["Abstract"].mindmap} />
          )}

          {/* Chat-like Gemini Interface */}
          <div className="mt-8">
            <ChatGemini context={JSON.stringify(data)} />
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-8">
          Upload a PDF to get started!
        </p>
      )}
    </div>
  );
};

export default App;
