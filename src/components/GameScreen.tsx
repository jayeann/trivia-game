import React, { useState, useEffect } from "react";
import "../styles/music_player.css";
import MediaControls from "./MediaControls";
import { useRounds } from "../hooks/useRounds";
import { useGameStore } from "../store/gameStore";
import RoundControls from "./RoundControls";
import { DotLoader } from "./Loader";
import { getFromLocalStorage } from "../utils/localStorage";
import Footer from "./Footer";
import ChatBubble from "./ChatBubble";

const GameScreen = () => {
  const { data: rounds, isLoading, error } = useRounds();

  const currentRound = useGameStore((state) => state.currentRound);
  const currentQuestionIndex = useGameStore(
    (state) => state.currentQuestionIndex
  );

  const [inputValue, setInputValue] = useState<string>("");

  // Always define inputIdentifier, even if temporarily blank
  let inputIdentifier = "";

  // Once rounds are available, we can assign inputIdentifier
  const round = rounds?.[currentRound - 1];
  const question = round?.questions?.[currentQuestionIndex];
  if (round) {
    inputIdentifier = `input-round-${round.roundNumber}-question-${
      currentQuestionIndex + 1
    }`;
  }

  // ✅ Always call useEffect
  useEffect(() => {
    if (!inputIdentifier) return;
    const savedAnswer = getFromLocalStorage<string>(inputIdentifier);
    setInputValue(savedAnswer ?? "");
  }, [inputIdentifier]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  // ✅ Now safe to return early
  if (isLoading) return <DotLoader />;
  if (error) return <p>Error loading rounds: {String(error)}</p>;
  if (!rounds || rounds.length === 0 || !round || !question)
    return <div>No rounds or question data available</div>;

  const isAudio = question.mediaType === "audio";
  const isImage = question.mediaType === "image";

  return (
    <div className="h-screen w-full">
      <RoundControls
        inputValue={inputValue}
        inputIdentifier={inputIdentifier}
      />

      <div className="py-12 space-y-10">
        <h1 className="uppercase text-2xl xl:text-3xl text-gray-300 font-black">
          Round {round.roundNumber}: {currentQuestionIndex + 1}/
          {round.questions.length}
        </h1>
        <h2 className="uppercase text-5xl xl:text-6xl text-white font-black mini-double-shadow">
          {round.title}
        </h2>
      </div>

      {isImage ? (
        <div className="h-1/2 flex items-center justify-center">
          <img
            className="w-auto h-1/2"
            src={question.url}
            alt={question.answer}
          />
        </div>
      ) : (
        <MediaControls isAudio={isAudio} url={question.url} />
      )}

      <div className="flex justify-center p-8">
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Enter your answer"
          className="w-full h-20 text-3xl uppercase p-4 border rounded-3xl text-center bg-white"
        />
      </div>

      <ChatBubble message={question.hint} />
      <Footer clue={question.hint} />
    </div>
  );
};

export default GameScreen;
