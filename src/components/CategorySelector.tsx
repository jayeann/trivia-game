import triviaLogo from "/trivia.svg";
import { mockData } from "../data/sampleQuestions";
import { useGameStore } from "../store/gameStore";

const CategorySelector = () => {
  const setPhase = useGameStore((state) => state.setPhase);
  return (
    <>
      <div className="flex items-center justify-center">
        <a href="#" target="_blank">
          <img className="size-50" src={triviaLogo} alt="trivia logo" />
        </a>
      </div>
      <h1 className="uppercase text-3xl lg:text-5xl xl:text-6xl text-white font-black double-shadow">
        Choose Category
      </h1>

      <div className="mt-20 flex flex-wrap gap-4">
        {mockData.map((item, index) => (
          <div
            key={index}
            onClick={() => setPhase("ROUND")}
            className="cursor-pointer text-2xl  flex items-center justify-center uppercase w-full h-15 bg-[#004357] rounded-2xl hover:border-2 hover:border-amber-300 text-white hover:text-amber-300 active:scale-105"
          >
            {item.category}
          </div>
        ))}
      </div>
    </>
  );
};

export default CategorySelector;
