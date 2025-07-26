import axios from "axios";

const API_BASE = "http://localhost:8000";

export const uploadPDF = async (file: File) => {
  const formData = new FormData();
  formData.append("file", file);
  return await axios.post(`${API_BASE}/upload-pdf/`, formData);
};

export const askQuestion = async (question: string, context: string) => {
  const formData = new FormData();
  formData.append("question", question);
  formData.append("context", context);
  return await axios.post(`${API_BASE}/ask-question/`, formData);
};
