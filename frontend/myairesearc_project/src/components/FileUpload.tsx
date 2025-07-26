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
    <div className="p-4 border rounded bg-white shadow">
      <input
        type="file"
        accept="application/pdf"
        onChange={handleUpload}
        className="block mb-2"
      />
      {loading && <p className="text-blue-600">Processing...</p>}
    </div>
  );
};

export default FileUpload;
