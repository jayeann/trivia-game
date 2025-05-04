import "../styles/music_player.css";
import playBtn from "../assets/play-button.svg";
import pauseBtn from "../assets/pause-button.svg";
import SendIcon from "../assets/SendIcons";

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
      <div className="h-1/2 flex items-center justify-center">
        <div className="flex p-8 w-full min-h-1/2 space-x-10 bg-[#004357] rounded-2xl">
          <div className="flex-1 rounded-2xl bg-white flex justify-center items-center">
            <button className="w-20 h-20 flex items-center justify-center transform transition hover:scale-120 ">
              <img src={playBtn} alt="play button" />
            </button>
            <button className="w-20 h-20 flex items-center justify-center transform transition hover:scale-120 ">
              <img src={pauseBtn} alt="pause button" />
            </button>
          </div>
          <div className="flex-1 rounded-2xl flex justify-center">
            <div className="music-player">
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
          </div>
        </div>
      </div>

      {/* Input moved to a new line below */}
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
