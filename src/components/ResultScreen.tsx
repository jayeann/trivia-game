import React, { useState } from "react";

const answers = [
  { answer: "Answer 1", correct: true },
  { answer: "Answer 2", correct: false },
  { answer: "Answer 3", correct: true },
  { answer: "Answer 4", correct: false },
  { answer: "Answer 5", correct: false },
];

function ResultScreen() {
  const [revealed, setRevealed] = useState<boolean[]>(
    answers.map((a) => a.correct)
  );

  const toggleReveal = (index: number) => {
    if (!answers[index].correct) {
      const updated = [...revealed];
      updated[index] = true;
      setRevealed(updated);
    }
  };

  const correctCount = answers.filter((a) => a.correct).length;

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="uppercase text-3xl lg:text-5xl xl:text-6xl text-white font-black double-shadow">
        You got {correctCount} out of {answers.length}
      </h1>

      <div className="mt-20 flex flex-wrap gap-4 w-full h-20 min-h-[5rem] md:w-[400px] ">
        {answers.map((item, index) => (
          <div
            key={index}
            onClick={() => toggleReveal(index)}
            className={`text-2xl flex items-center justify-center uppercase w-full h-20 cursor-pointer rounded-2xl transition-all ${
              item.correct
                ? "bg-green-600 text-white"
                : "bg-[#004357] hover:border-2 hover:border-amber-300 text-white hover:text-amber-300 active:scale-105"
            }`}
          >
            {revealed[index] ? item.answer : "Click to Reveal"}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ResultScreen;
