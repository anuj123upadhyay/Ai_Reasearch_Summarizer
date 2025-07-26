from fastapi import FastAPI, UploadFile, Form
from fastapi.middleware.cors import CORSMiddleware
import os
from pdf_utils import extract_text_by_sections
from gemini_utils import summarize_section, simplify_text, generate_flashcards, extract_mindmap_json

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/upload-pdf/")
async def upload_pdf(file: UploadFile):
    file_location = f"temp_{file.filename}"
    with open(file_location, "wb") as f:
        f.write(await file.read())
    sections = extract_text_by_sections(file_location)

    results = {}
    for section, text in sections.items():
        summary = summarize_section(text)
        simple_text = simplify_text(text)
        flashcards = generate_flashcards(text)
        mindmap = extract_mindmap_json(text)
        results[section] = {
            "summary": summary,
            "simplified": simple_text,
            "flashcards": flashcards,
            "mindmap": mindmap
        }
    os.remove(file_location)
    return {"sections": results}

@app.post("/ask-question/")
async def ask_question(question: str = Form(...), context: str = Form(...)):
    from gemini_utils import call_gemini
    return {"answer": call_gemini(f"Answer this question based on the research paper context:\n{context}\nQuestion: {question}")}
