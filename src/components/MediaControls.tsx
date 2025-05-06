import { useMediaStore } from "../store/mediaStore";
import playBtn from "../assets/play-button.svg";
import pauseBtn from "../assets/pause-button.svg";
import { Audio, Video } from "./MediaPlayer";

interface MediaProps {
  isAudio: boolean;
  url: string;
}

function MediaControls({ isAudio, url }: MediaProps) {
  const isPlaying = useMediaStore((state) => state.isPlaying);
  const setIsPlaying = useMediaStore((state) => state.setIsPlaying);

  const isAnimate = `${isPlaying ? `bar-animate` : ""}`;

  if (isAudio) {
    return (
      <>
        <Audio
          playing={isPlaying}
          onEnded={() => setIsPlaying(false)}
          url={url}
        />

        <div className="h-1/2 flex items-center justify-center">
          <div className="flex p-8 w-full min-h-1/2 space-x-10 bg-[#004357] rounded-2xl">
            <div className="flex-1 rounded-2xl bg-white flex justify-center items-center">
              <button
                className="w-20 h-20 flex items-center justify-center transform transition hover:scale-120 "
                onClick={() => setIsPlaying(!isPlaying)}
              >
                {isPlaying ? (
                  <img src={pauseBtn} alt="pause button" />
                ) : (
                  <img src={playBtn} alt="play button" />
                )}
              </button>
            </div>
            <div className="flex-1 rounded-2xl flex justify-center">
              <div className="music-player">
                <span className={`bar ${isAnimate}`} />
                <span className={`bar ${isAnimate}`} />
                <span className={`bar ${isAnimate}`} />
                <span className={`bar ${isAnimate}`} />
                <span className={`bar ${isAnimate}`} />
                <span className={`bar ${isAnimate}`} />
                <span className={`bar ${isAnimate}`} />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  return (
    <Video playing={isPlaying} onEnded={() => setIsPlaying(false)} url={url} />
  );
}

export default MediaControls;
