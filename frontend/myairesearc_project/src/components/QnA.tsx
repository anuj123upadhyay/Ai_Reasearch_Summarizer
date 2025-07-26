import React, { useState } from "react";
import { askQuestion } from "../api";

interface Props {
  context: string;
}

const QnA: React.FC<Props> = ({ context }) => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleAsk = async () => {
    if (!question.trim()) return;
    const res = await askQuestion(question, context);
    setAnswer(res.data.answer);
  };

  return (
    <div className="p-4 border rounded bg-white shadow mt-6">
      <h2 className="text-xl font-bold mb-2">Ask a Question</h2>
      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Ask something about the paper..."
        className="border p-2 w-full mb-2"
      />
      <button
        onClick={handleAsk}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Ask
      </button>
      {answer && (
        <div className="mt-4">
          <h3 className="font-semibold">Answer:</h3>
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

export default QnA;
