export interface SectionData {
  summary: string;
  simplified: string;
  flashcards: string;
  mindmap: string;
}

export interface Sections {
  [key: string]: SectionData;
}
