import { create } from "zustand";

interface AudioStore {
  isBgAudioPlaying: boolean;
  isMediaAudioPlaying: boolean;
  userPausedBgAudio: boolean;
  playBgAudio: () => void;
  pauseBgAudio: (manual?: boolean) => void;
  playMediaAudio: () => void;
  stopMediaAudio: () => void;
  toggleMediaAudio: () => void;
}

export const useAudioStore = create<AudioStore>((set, get) => ({
  isBgAudioPlaying: false,
  isMediaAudioPlaying: false,
  userPausedBgAudio: false,

  playBgAudio: () => {
    const { isMediaAudioPlaying, userPausedBgAudio } = get();
    if (!isMediaAudioPlaying && !userPausedBgAudio) {
      set({ isBgAudioPlaying: true });
    }
  },
  pauseBgAudio: (manual = false) => {
    set({ isBgAudioPlaying: false, userPausedBgAudio: manual });
  },
  playMediaAudio: () => {
    get().pauseBgAudio();
    set({ isMediaAudioPlaying: true });
  },
  stopMediaAudio: () => {
    set({ isMediaAudioPlaying: false });
    get().playBgAudio();
  },
  toggleMediaAudio: () => {
    const { isMediaAudioPlaying, playMediaAudio, stopMediaAudio } = get();
    if (isMediaAudioPlaying) {
      stopMediaAudio();
    } else {
      playMediaAudio();
    }
  },
}));
