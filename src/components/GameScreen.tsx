import "../styles/music_player.css";
import SendIcon from "../assets/SendIcons";
import MediaControls from "./MediaControls";
import { useRounds } from "../hooks/useRounds";
import { useGameStore } from "../store/gameStore";
import backBtn from "../assets/back-button.svg";
import nextBtn from "../assets/next-button.svg";

const GameScreen = () => {
  const { data: rounds, isLoading, error } = useRounds();
  const currentRound = useGameStore((state) => state.currentRound);
  const currentQuestionIndex = useGameStore(
    (state) => state.currentQuestionIndex
  );

  if (isLoading) return <p>Loading rounds...</p>;
  if (!rounds || rounds.length === 0) return <div>No rounds available</div>;
  if (error) return <p>Error loading rounds: {String(error)}</p>;

  const roundContent = rounds[currentRound];
  const currentQuestion = roundContent.questions[currentQuestionIndex];
  const isMediaAudio = currentQuestion.mediaType === "audio";

  return (
    <div className="h-screen">
      <>
        <button className="fixed left-10 top-10 transform transition duration-300 hover:scale-110 active:scale-95 rounded-full ">
          <img className="size-24" src={backBtn} alt="settings button" />
        </button>
        <button className="fixed right-10 top-10 transform  transition duration-300 hover:scale-110 active:scale-95 rounded-full ">
          <img className="size-24" src={nextBtn} alt="music on button" />
        </button>
      </>
      <div className="p-12 space-y-10">
        <h1 className="uppercase text-2xl xl:text-3xl text-gray-300 font-black">
          Round {roundContent.roundNumber}
        </h1>
        <h2 className="uppercase text-5xl xl:text-6xl text-white font-black mini-double-shadow">
          {roundContent.title}
        </h2>
      </div>

      <MediaControls isAudio={isMediaAudio} url={currentQuestion.url} />
      <div className="flex justify-center p-8">
        <input
          type="text"
          placeholder="Enter your answer"
          className="w-9/10 h-20 text-3xl uppercase p-4 border rounded-l-3xl text-center bg-white"
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
