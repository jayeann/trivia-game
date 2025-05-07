export interface CorrectAnswer {
  round: string;
  questionIndex: number;
  answer: string;
}

export interface GuessAnswer {
  key: string;
  value: string;
}

export interface Result {
  answer: string;
  isCorrect: boolean;
}
