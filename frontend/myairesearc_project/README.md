# 📄 AI Research Paper Simplifier

A full-stack application to **upload research papers (PDF)** and get:
- Section-wise summaries
- Simplified explanations
- Flashcards for revision
- Mind map visualizations
- Chat-like Q&A powered by Gemini 2.5 Pro

Built with **React + TypeScript + Vite** (frontend) and **FastAPI** (backend), leveraging Google Gemini for advanced AI features.

---

## 🚀 Features

- **PDF Upload:** Drag & drop or select a research paper PDF.
- **Section Summaries:** Get concise bullet-point summaries for each section.
- **Simplified Text:** AI-generated, student-friendly explanations.
- **Flashcards:** Auto-generated Q&A flashcards for revision.
- **Mind Map:** Visualize the structure and key concepts of the paper.
- **AI Chat:** Ask questions about the paper in a chat interface, powered by Gemini 2.5 Pro.
- **Modern UI:** Responsive, clean, and easy to use.

---

## 🖥️ Tech Stack

- **Frontend:** React, TypeScript, Vite, TailwindCSS, react-markdown
- **Backend:** FastAPI, Python, python-dotenv, pdfminer, requests
- **AI:** Google Gemini 2.5 Pro API

---

## ⚡ Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/airesearch.git
cd airesearch
```

### 2. Backend Setup

```bash
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

- Create a `.env` file in `backend/`:
  ```
  GEMINI_API_KEY=your_gemini_api_key_here
  ```

- Start the FastAPI server:
  ```bash
  uvicorn main:app --reload
  ```

### 3. Frontend Setup

```bash
cd ../frontend/myairesearc_project
npm install
npm run dev
```

- Visit [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🛠️ Project Structure

```
airesearch/
├── backend/
│   ├── main.py
│   ├── gemini_utils.py
│   ├── pdf_utils.py
│   └── .env
└── frontend/
    └── myairesearc_project/
        ├── src/
        │   ├── components/
        │   │   ├── FileUpload.tsx
        │   │   ├── SummaryView.tsx
        │   │   ├── Flashcards.tsx
        │   │   ├── MindMap.tsx
        │   │   ├── QnA.tsx
        │   │   └── ChatGemini.tsx
        │   ├── App.tsx
        │   └── index.css
        └── ...
```

---

## 🧠 How It Works

1. **Upload PDF:** The backend extracts sections and text.
2. **AI Processing:** Each section is summarized, simplified, and flashcards/mindmaps are generated using Gemini.
3. **Frontend Display:** Results are shown in a modern, interactive UI.
4. **Chat:** Ask questions about the paper; Gemini answers in markdown.

---

## 📝 Customization

- **Change AI Model:** Edit `GEMINI_URL` in `backend/gemini_utils.py` to use a different Gemini model.
- **Styling:** Modify `index.css` or use Tailwind classes for custom UI.
- **Add Features:** Extend components or backend endpoints as needed.

---

## 🤖 Environment Variables

| Variable         | Description                |
|------------------|---------------------------|
| GEMINI_API_KEY   | Your Google Gemini API key|

---

## 🧩 Dependencies

- **Frontend:**  
  `react`, `typescript`, `vite`, `tailwindcss`, `react-markdown`
- **Backend:**  
  `fastapi`, `uvicorn`, `python-dotenv`, `pdfminer.six`, `requests`

---

## 📚 License

MIT License

---

## 🙏 Acknowledgements

- [Google Gemini](https://aistudio.google.com/)
- [FastAPI](https://fastapi.tiangolo.com/)
- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)

---

> **Made with ❤️ for AI-powered research!**