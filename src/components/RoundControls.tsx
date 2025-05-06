import { useRounds } from "../hooks/useRounds";
import { useGameStore } from "../store/gameStore";
import backBtn from "../assets/back-button.svg";
import nextBtn from "../assets/next-button.svg";

function RoundControls() {
  const { data: rounds } = useRounds();

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

  const handleNext = () => {
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
  return (
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
  );
}

export default RoundControls;
