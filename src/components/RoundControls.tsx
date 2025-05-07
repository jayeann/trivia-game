import { useRounds } from "../hooks/useRounds";
import { useGameStore } from "../store/gameStore";
import backBtn from "../assets/back-button.svg";
import nextBtn from "../assets/next-button.svg";
import {
  clearAllLocalStorage,
  saveToLocalStorage,
} from "../utils/localStorage";

type RoundControlsProps = {
  inputValue: string;
  inputIdentifier: string;
};

function RoundControls({ inputValue, inputIdentifier }: RoundControlsProps) {
  const { data: rounds } = useRounds();

  const currentRound = useGameStore((state) => state.currentRound);
  const currentQuestionIndex = useGameStore(
    (state) => state.currentQuestionIndex
  );

  const setCurrentRound = useGameStore((state) => state.setCurrentRound);

  const setPhase = useGameStore((state) => state.setPhase);

  const setCurrentQuestionIndex = useGameStore(
    (state) => state.setCurrentQuestionIndex
  );

  const incrementQuestionIndex = useGameStore(
    (state) => state.incrementQuestionIndex
  );

  const incrementRound = useGameStore((state) => state.incrementRound);

  const setIsClueVisible = useGameStore((state) => state.setIsClueVisible);

  const handleNextBtn = () => {
    if (!inputValue.trim()) return;
    saveToLocalStorage(inputIdentifier, inputValue);
    if (rounds) {
      const roundContent = rounds[currentRound - 1];
      const isLastQuestion =
        currentQuestionIndex === roundContent.questions.length - 1;
      const isLastRound = currentRound === rounds.length;
      if (!isLastQuestion) {
        incrementQuestionIndex();
      } else if (!isLastRound) {
        incrementRound();
        setCurrentQuestionIndex(0); // reset for next round
      } else {
        setPhase("RESULTS");
      }
    } else {
      alert("Error retrieving rounds content.");
    }
  };

  const handleBackBtn = () => {
    if (rounds) {
      if (currentQuestionIndex > 0) {
        setCurrentQuestionIndex(currentQuestionIndex - 1);
      } else if (currentRound > 1) {
        setCurrentRound(currentRound - 1);
        const prevRoundQuestions = rounds[currentRound - 2].questions;
        setCurrentQuestionIndex(prevRoundQuestions.length - 1);
      } else {
        clearAllLocalStorage();
        setPhase("HOME");
      }
      setIsClueVisible(false);
    }
  };
  return (
    <>
      <button
        className="fixed left-10 top-10 transform transition duration-300 hover:scale-110 active:scale-95 rounded-full "
        onClick={handleBackBtn}
      >
        <img className="size-24" src={backBtn} alt="settings button" />
      </button>
      <button
        className={`fixed right-10 top-10 transform  transition duration-300 rounded-full ${
          !inputValue.trim()
            ? "opacity-50 cursor-not-allowed"
            : "hover:scale-110 active:scale-95"
        }  `}
        onClick={handleNextBtn}
        disabled={!inputValue.trim()}
      >
        <img className="size-24" src={nextBtn} alt="music on button" />
      </button>
    </>
  );
}

export default RoundControls;
