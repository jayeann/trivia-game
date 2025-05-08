import { useGameStore } from "../store/gameStore";
import ChatBubble from "./ChatBubble";
import hintBtn from "../assets/hint.svg";

type HintControlsProps = {
  hint: string;
};

function HintControl({ hint }: HintControlsProps) {
  const isClueVisible = useGameStore((state) => state.isClueVisible);
  const setIsClueVisible = useGameStore((state) => state.setIsClueVisible);
  const handleClueVisible = () => {
    setIsClueVisible(!isClueVisible);
  };
  return (
    <>
      {isClueVisible && <ChatBubble message={hint} />}
      <button
        className="fixed left-10 bottom-10 transform transition duration-300 hover:scale-110 active:scale-95 rounded-full "
        onClick={handleClueVisible}
      >
        <img className="w-16 md:w-20 lg:w-24" src={hintBtn} alt="hint button" />
      </button>
    </>
  );
}

export default HintControl;
