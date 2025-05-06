import ReactPlayer from "react-player";

interface MediaPlayerProps {
  url: string;
  playing?: boolean;
  height?: string;
  width?: string;
  onEnded: () => void;
}

const BaseMediaPlayer = ({
  url,
  playing = true,
  height = "400px",
  width = "100%",
  onEnded,
}: MediaPlayerProps) => (
  <ReactPlayer
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
