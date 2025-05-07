import { CorrectAnswer, GuessAnswer } from "../types/answerTypes";

export const compareAnswers = (
  correctAnswers: CorrectAnswer[],
  guessAnswers: GuessAnswer[]
): {
  [round: number]: { question: number; answer: string; isCorrect: boolean }[];
} => {
  const resultsByRound: {
    [round: number]: { question: number; answer: string; isCorrect: boolean }[];
  } = {};

  // Initialize results by round
  correctAnswers.forEach((correct) => {
    if (!resultsByRound[correct.round]) {
      resultsByRound[correct.round] = [];
    }
    resultsByRound[correct.round].push({
      question: correct.questionIndex,
      answer: "",
      isCorrect: false,
    });
  });

  // Process guess answers and compare them to correct answers
  guessAnswers.forEach((guess) => {
    const match = guess.key.match(/input-round-(\d+)-question-(\d+)/);
    if (!match) return;

    const [, round, questionIndexStr] = match; // No need for "_"
    const questionIndex = Number(questionIndexStr);
    const correct = correctAnswers.find(
      (c) => c.round === round && c.questionIndex === questionIndex
    );

    const normalize = (str: string) =>
      str.toLowerCase().replace(/['"]/g, "").trim();
    const isCorrect = correct
      ? normalize(correct.answer) === normalize(guess.value)
      : false;

    // Update the result for this question in the corresponding round
    if (resultsByRound[round]) {
      const result = resultsByRound[round].find(
        (r) => r.question === questionIndex
      );
      if (result) {
        result.answer = guess.value;
        result.isCorrect = isCorrect;
      }
    }
  });

  return resultsByRound;
};
