import "../styles/music_player.css";
import SendIcon from "../assets/SendIcons";
import MediaControls from "./MediaControls";

const GameScreen = () => {
  return (
    <div className="h-screen">
      <div className="p-12 space-y-10">
        <h1 className="uppercase text-2xl xl:text-3xl text-gray-300 font-black">
          Round
        </h1>
        <h2 className="uppercase text-5xl xl:text-6xl text-white font-black mini-double-shadow">
          Name that song
        </h2>
      </div>

      <MediaControls
        isAudio={false}
        url="https://raw.githubusercontent.com/jayeann/media-player-test/refs/heads/main/movie/movie-1.MOV"
      />
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
    </div>
  );
};

export default GameScreen;
