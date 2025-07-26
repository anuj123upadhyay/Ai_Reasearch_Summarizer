// import React, { useState } from "react";

// const BACKEND_URL = "http://127.0.0.1:8000/ask-question/";

// const ChatGemini: React.FC<{ context: string }> = ({ context }) => {
//   const [messages, setMessages] = useState<{ sender: string; text: string }[]>([]);
//   const [input, setInput] = useState("");
//   const [loading, setLoading] = useState(false);

//   const sendMessage = async () => {
//     if (!input.trim()) return;
//     setMessages([...messages, { sender: "user", text: input }]);
//     setLoading(true);

//     const formData = new FormData();
//     formData.append("question", input);
//     formData.append("context", context);

//     try {
//       const res = await fetch(BACKEND_URL, {
//         method: "POST",
//         body: formData,
//       });
//       const data = await res.json();
//       setMessages((msgs) => [
//         ...msgs,
//         { sender: "gemini", text: data.answer },
//       ]);
//     } catch (err) {
//       setMessages((msgs) => [
//         ...msgs,
//         { sender: "gemini", text: "Error: Could not get response." },
//       ]);
//     }
//     setInput("");
//     setLoading(false);
//   };

//   return (
//     <div className="flex flex-col h-[400px] w-full max-w-lg mx-auto border rounded shadow bg-white">
//       <div className="flex-1 overflow-y-auto p-4 space-y-2">
//         {messages.map((msg, idx) => (
//           <div
//             key={idx}
//             className={`p-2 rounded ${
//               msg.sender === "user"
//                 ? "bg-blue-100 text-right ml-16"
//                 : "bg-gray-100 text-left mr-16"
//             }`}
//           >
//             <span className="font-semibold">{msg.sender === "user" ? "You" : "Gemini"}:</span> {msg.text}
//           </div>
//         ))}
//         {loading && <div className="text-gray-400">Gemini is typing...</div>}
//       </div>
//       <div className="p-2 border-t flex">
//         <input
//           className="flex-1 border rounded px-2 py-1 mr-2"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           onKeyDown={(e) => e.key === "Enter" && sendMessage()}
//           placeholder="Ask a question..."
//           disabled={loading}
//         />
//         <button
//           className="bg-blue-500 text-white px-4 py-1 rounded"
//           onClick={sendMessage}
//           disabled={loading}
//         >
//           Send
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ChatGemini;






import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

const BACKEND_URL = "http://127.0.0.1:8000/ask-question/";

const ChatGemini: React.FC<{ context: string }> = ({ context }) => {
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;
    setMessages([...messages, { sender: "user", text: input }]);
    setLoading(true);

    const formData = new FormData();
    formData.append("question", input);
    formData.append("context", context);

    try {
      const res = await fetch(BACKEND_URL, {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      setMessages((msgs) => [
        ...msgs,
        { sender: "gemini", text: data.answer },
      ]);
    } catch (err) {
      setMessages((msgs) => [
        ...msgs,
        { sender: "gemini", text: "Error: Could not get response." },
      ]);
    }
    setInput("");
    setLoading(false);
  };

  return (
    <div className="flex flex-col h-[400px] w-full max-w-lg mx-auto border rounded shadow bg-white">
      <div className="flex-1 overflow-y-auto p-4 space-y-2">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`p-2 rounded ${
              msg.sender === "user"
                ? "bg-blue-100 text-right ml-16"
                : "bg-gray-100 text-left mr-16"
            }`}
          >
            <span className="font-semibold">{msg.sender === "user" ? "You" : "Gemini"}:</span>{" "}
            {msg.sender === "gemini" ? (
              <ReactMarkdown>{msg.text}</ReactMarkdown>
            ) : (
              msg.text
            )}
          </div>
        ))}
        {loading && <div className="text-gray-400">Gemini is typing...</div>}
      </div>
      <div className="p-2 border-t flex">
        <input
          className="flex-1 border rounded px-2 py-1 mr-2"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          placeholder="Ask a question..."
          disabled={loading}
        />
        <button
          className="bg-blue-500 text-white px-4 py-1 rounded"
          onClick={sendMessage}
          disabled={loading}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatGemini;