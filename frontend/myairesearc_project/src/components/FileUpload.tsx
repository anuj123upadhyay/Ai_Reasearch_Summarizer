import React, { useState } from "react";
import { uploadPDF } from "../api";
import type { Sections } from "../types";

interface Props {
  setData: React.Dispatch<React.SetStateAction<Sections | null>>;
}

const FileUpload: React.FC<Props> = ({ setData }) => {
  const [loading, setLoading] = useState(false);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setLoading(true);
    try {
      const res = await uploadPDF(file);
      setData(res.data.sections);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center gap-2 w-full">
      <label
        htmlFor="pdf-upload"
        className="w-full flex flex-col items-center px-4 py-6 bg-[#23272f] text-orange-400 rounded-2xl shadow-md border-2 border-dashed border-orange-500 cursor-pointer transition hover:bg-[#18181b] hover:border-orange-400 focus-within:ring-2 focus-within:ring-orange-400"
      >
        <svg
          className="w-8 h-8 mb-2 text-orange-400"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 16v-8m0 0l-3 3m3-3l3 3M20 16.5V19a2 2 0 01-2 2H6a2 2 0 01-2-2v-2.5M16 16.5V19M8 16.5V19"
          />
        </svg>
        <span className="font-semibold text-base text-orange-300">
          Click or tap to upload PDF
        </span>
        <input
          id="pdf-upload"
          type="file"
          accept="application/pdf"
          onChange={handleUpload}
          className="hidden"
        />
      </label>
      {loading && (
        <p className="text-orange-400 text-sm mt-2 animate-pulse">
          Processing...
        </p>
      )}
    </div>
  );
};

export default FileUpload;
