import ReactPlayer from "react-player";

interface MediaPlayerProps {
  url: string;
  playing?: boolean;
  height?: string;
  width?: string;
  loop?: boolean;
  volume?: number;
  onEnded: () => void;
}

const BaseMediaPlayer = ({
  url,
  playing = true,
  height = "300px",
  width = "100%",
  loop = false,
  volume = 1.0,
  onEnded,
}: MediaPlayerProps) => (
  <ReactPlayer
    volume={volume}
    loop={loop}
    url={url}
    playing={playing}
    controls
    onEnded={onEnded}
    height={height}
    width={width}
    config={{
      file: {
        attributes: {
          controlsList: "nodownload noplaybackrate nopictureinpicture",
          disablePictureInPicture: true,
        },
      },
    }}
  />
);

export const Audio = (props: MediaPlayerProps) => (
  <BaseMediaPlayer {...props} height="0" width="0" />
);

export const Video = (props: MediaPlayerProps) => (
  <BaseMediaPlayer {...props} />
);
