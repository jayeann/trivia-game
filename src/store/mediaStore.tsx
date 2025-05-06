import { create } from "zustand";

type MediaState = {
  isPlaying: boolean;

  setIsPlaying: (isPlaying: boolean) => void;
};

export const useMediaStore = create<MediaState>((set) => ({
  isPlaying: true,

  setIsPlaying: (isPlaying: boolean) => set({ isPlaying }),
}));
