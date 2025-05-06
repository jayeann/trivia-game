import "../styles/music_player.css";
import SendIcon from "../assets/SendIcons";
import MediaControls from "./MediaControls";
import { useRounds } from "../hooks/useRounds";
import { useGameStore } from "../store/gameStore";
import RoundControls from "./RoundControls";

const GameScreen = () => {
  const { data: rounds, isLoading, error } = useRounds();

  const currentRound = useGameStore((state) => state.currentRound);
  const currentQuestionIndex = useGameStore(
    (state) => state.currentQuestionIndex
  );

  //show the specific ui based on state
  if (isLoading) return <p>Loading rounds...</p>;
  if (!rounds || rounds.length === 0) return <div>No rounds available</div>;
  if (error) return <p>Error loading rounds: {String(error)}</p>;

  const roundContent = rounds[currentRound - 1];
  const currentQuestion = roundContent.questions[currentQuestionIndex];
  const isMediaAudio = currentQuestion?.mediaType === "audio" ? true : false;
  const isImage = currentQuestion?.mediaType === "image";

  return (
    <div className="h-screen w-full">
      <RoundControls />
      <div className="py-12 space-y-10">
        <h1 className="uppercase text-2xl xl:text-3xl text-gray-300 font-black">
          Round {roundContent.roundNumber}: {currentQuestionIndex + 1}/
          {roundContent.questions.length}
        </h1>
        <h2 className="uppercase text-5xl xl:text-6xl text-white font-black mini-double-shadow">
          {roundContent.title}
        </h2>
      </div>

      {isImage ? (
        <div className="h-1/2  flex items-center justify-center">
          <img
            className="w-auto h-1/2"
            src={currentQuestion?.url}
            alt={currentQuestion?.answer}
          />
        </div>
      ) : (
        <MediaControls isAudio={isMediaAudio} url={currentQuestion?.url} />
      )}

      <div className="flex justify-center p-8">
        <input
          type="text"
          placeholder="Enter your answer"
          className="w-full h-20 text-3xl uppercase p-4 border rounded-l-3xl text-center bg-white"
        />
        <button className="w-auto text-3xl p-4 bg-amber-300 text-[#004357] rounded-r-3xl hover:bg-amber-400 transition">
          <SendIcon className="w-10 h-10" />
        </button>
      </div>
      <p>
        <strong>Hint:</strong> {currentQuestion.hint}
      </p>
    </div>
  );
};

export default GameScreen;
