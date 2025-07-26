import requests
import os
from dotenv import load_dotenv

load_dotenv()
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")
GEMINI_URL = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-pro:generateContent?key={GEMINI_API_KEY}"

def call_gemini(prompt: str):
    payload = {
        "contents": [{"parts": [{"text": prompt}]}]
    }
    response = requests.post(GEMINI_URL, json=payload)
    response.raise_for_status()
    # Get the markdown text from Gemini
    markdown_text = response.json()["candidates"][0]["content"]["parts"][0]["text"]
    return markdown_text

def summarize_section(text: str):
    return call_gemini(f"Summarize the following research paper section into concise bullet points:\n{text}")

def simplify_text(text: str):
    return call_gemini(f"Explain this text in simple language for students:\n{text}")

def generate_flashcards(text: str):
    return call_gemini(f"Create 5 question-answer flashcards from this research paper section:\n{text}")

def extract_mindmap_json(text: str):
    return call_gemini(f"Extract key concepts and relationships from this text. Output as JSON in this format:\n"
                       f"{{'nodes': ['Concept1', 'Concept2'], 'edges': [{{'from': 'Concept1', 'to': 'Concept2'}}]}}\n"
                       f"Text:\n{text}")
