export interface Question {
  id: string;
  mediaType: "audio" | "video" | "image" | string;
  url: string;
  answer: string;
  hint?: string;
}

export interface Round {
  id?: string;
  roundNumber: number;
  title: string;
  createdAt: string;
  questions: Question[];
}
