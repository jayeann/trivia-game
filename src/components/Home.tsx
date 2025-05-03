import triviaLogo from "/trivia.svg";
import playBtn from "../assets/play-button.svg";
import { useGameStore } from "../store/gameStore";

const Home = () => {
  const setPhase = useGameStore((state) => state.setPhase);
  return (
    <>
      <div className="flex items-center justify-center">
        <a href="#" target="_blank">
          <img className="size-96" src={triviaLogo} alt="trivia logo" />
        </a>
      </div>
      <h1 className="uppercase text-6xl lg:text-7xl xl:text-8xl text-white font-black double-shadow">
        Name that
      </h1>

      <button
        onClick={() => setPhase("CATEGORY")}
        className="fixed bottom-50 left-1/2 transform -translate-x-1/2 transition duration-300 hover:scale-120 active:scale-95 rounded-full "
      >
        <img className="size-40" src={playBtn} alt="play button" />
      </button>
    </>
  );
};

export default Home;
