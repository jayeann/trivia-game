import { useRounds } from "../hooks/useRounds";
import { compareAnswers } from "../utils/compareAnswers";
import { getAllLocalStorageAnswers } from "../utils/localStorage";

type Question = {
  answer: string;
};

type Round = {
  roundNumber: number;
  questions: Question[];
};

interface AnswerSummary {
  round: number;
  questionIndex: number;
  answer: string;
}

function ResultScreen() {
  const { data: rounds } = useRounds();

  if (!rounds) return null;

  const answersPerRound = (data: Round[]): AnswerSummary[] => {
    return data
      .map((round) =>
        round.questions.map((question, index) => ({
          round: round.roundNumber,
          questionIndex: index,
          answer: question.answer,
        }))
      )
      .flat();
  };

  const savedAllGuessAnswers = getAllLocalStorageAnswers();

  const answerPerRound = answersPerRound(rounds);
  const results = compareAnswers(answerPerRound, savedAllGuessAnswers);

  // Function to count total correct answers
  const countCorrectAnswers = () => {
    let correctCount = 0;
    Object.keys(results).forEach((round) => {
      results[round].forEach((res) => {
        if (res.isCorrect) correctCount++;
      });
    });
    return correctCount;
  };
  const totalCorrect = countCorrectAnswers();

  return (
    <div className="flex flex-col items-center justify-center h-full p-20">
      <h1 className="uppercase text-3xl lg:text-5xl xl:text-6xl text-white font-black double-shadow">
        You got {totalCorrect} out of {answerPerRound.length}
      </h1>

      <div className="mt-20 w-full min-h-[5rem] md:w-[400px]">
        {Object.keys(results).map((round, index) => (
          <div key={index} className="flex flex-wrap gap-4 ">
            <div className="mt-10 text-2xl text-white">Round {round} </div>

            {results[round].map((item, idx) => (
              <div
                key={idx}
                // onClick={() => toggleReveal(round)}
                className={`text-2xl flex items-center justify-center uppercase w-full h-20 cursor-pointer rounded-2xl transition-all ${
                  item.isCorrect
                    ? "bg-green-600 text-white"
                    : "bg-[#004357] hover:border-2 hover:border-amber-300 text-white hover:text-amber-300 active:scale-105"
                }`}
              >
                {item ? item.answer : "Click to Reveal"}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ResultScreen;
