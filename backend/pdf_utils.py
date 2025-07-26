import fitz  # PyMuPDF

def extract_text_by_sections(pdf_path: str):
    doc = fitz.open(pdf_path)
    text = ""
    for page in doc:
        text += page.get_text()
    sections = {}
    current_section = "General"
    for line in text.split("\n"):
        if line.strip().lower() in ["abstract", "introduction", "methods", "results", "conclusion"]:
            current_section = line.strip()
            sections[current_section] = ""
        else:
            sections[current_section] = sections.get(current_section, "") + " " + line
    return sections
