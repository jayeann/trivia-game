import { CorrectAnswer, GuessAnswer } from "../types/answerTypes";

export const compareAnswers = (
  correctAnswers: CorrectAnswer[],
  guessAnswers: GuessAnswer[]
): {
  [round: string]: {
    question: number;
    answer: string;
    isCorrect: boolean;
    correctAnswer: string;
  }[];
} => {
  const resultsByRound: {
    [round: string]: {
      question: number;
      answer: string;
      isCorrect: boolean;
      correctAnswer: string;
    }[];
  } = {};

  // Initialize results by round
  correctAnswers.forEach((correct) => {
    if (!resultsByRound[correct.round.toString()]) {
      resultsByRound[correct.round.toString()] = [];
    }
    resultsByRound[correct.round].push({
      question: correct.questionIndex,
      answer: "",
      isCorrect: false,
      correctAnswer: correct.answer,
    });
  });

  // Process guess answers and compare them to correct answers
  guessAnswers.forEach((guess) => {
    const match = guess.key.match(/input-round-(\d+)-question-(\d+)/);
    if (!match) return;

    const [, round, questionIndexStr] = match; // No need for "_"
    const questionIndex = Number(questionIndexStr);
    const correct = correctAnswers.find(
      (c) => c.round.toString() === round && c.questionIndex === questionIndex
    );

    const normalize = (str: string) =>
      str.toLowerCase().replace(/['"]/g, "").trim();
    const isCorrect = correct
      ? normalize(correct.answer) === normalize(guess.value)
      : false;

    // Update the result for this question in the corresponding round
    if (resultsByRound[round]) {
      const result = resultsByRound[round].find(
        (r: { question: number; answer: string; isCorrect: boolean }) =>
          r.question === questionIndex
      );
      if (result) {
        result.answer = normalize(guess.value);
        result.isCorrect = isCorrect;
      }
    }
  });

  return resultsByRound;
};
