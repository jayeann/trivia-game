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

  const setPhase = useGameStore((state) => state.setPhase);

  const setCurrentQuestionIndex = useGameStore(
    (state) => state.setCurrentQuestionIndex
  );

  const incrementQuestionIndex = useGameStore(
    (state) => state.incrementQuestionIndex
  );

  const incrementRound = useGameStore((state) => state.incrementRound);

  //show the specific ui based on state
  if (isLoading) return <p>Loading rounds...</p>;
  if (!rounds || rounds.length === 0) return <div>No rounds available</div>;
  if (error) return <p>Error loading rounds: {String(error)}</p>;

  const roundContent = rounds[currentRound - 1];
  const currentQuestion = roundContent.questions[currentQuestionIndex];
  const isMediaAudio = currentQuestion?.mediaType === "audio" ? true : false;
  const isImage = currentQuestion?.mediaType === "image";
  const isLastQuestion =
    currentQuestionIndex === roundContent.questions.length - 1;
  const isLastRound = currentRound === rounds.length;
  const handleNext = () => {
    if (!isLastQuestion) {
      incrementQuestionIndex();
    } else if (!isLastRound) {
      incrementRound();
      setCurrentQuestionIndex(0); // reset for next round
    } else {
      setPhase("RESULTS");
    }
  };

  return (
    <div className="h-screen">
      <>
        <button className="fixed left-10 top-10 transform transition duration-300 hover:scale-110 active:scale-95 rounded-full ">
          <img className="size-24" src={backBtn} alt="settings button" />
        </button>
        <button
          className="fixed right-10 top-10 transform  transition duration-300 hover:scale-110 active:scale-95 rounded-full "
          onClick={handleNext}
        >
          <img className="size-24" src={nextBtn} alt="music on button" />
        </button>
      </>
      <div className="p-12 space-y-10">
        <h1 className="uppercase text-2xl xl:text-3xl text-gray-300 font-black">
          Round {roundContent.roundNumber}
        </h1>
        <h2 className="uppercase text-5xl xl:text-6xl text-white font-black mini-double-shadow">
          {roundContent.title} {currentQuestionIndex + 1}/
          {roundContent.questions.length}
        </h2>
      </div>

      {isImage ? (
        <img
          className="w-full h-1/3"
          src={currentQuestion?.url}
          alt={currentQuestion?.answer}
        />
      ) : (
        <MediaControls isAudio={isMediaAudio} url={currentQuestion?.url} />
      )}

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
