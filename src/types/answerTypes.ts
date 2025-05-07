export interface CorrectAnswer {
  round: number;
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
