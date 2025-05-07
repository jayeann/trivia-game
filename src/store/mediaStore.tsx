import { create } from "zustand";

type MediaState = {
  isPlaying: boolean;
  isBgPlaying: boolean;

  setIsPlaying: (isPlaying: boolean) => void;
  setIsBgPlaying: (isBgPlaying: boolean) => void;
};

export const useMediaStore = create<MediaState>((set) => ({
  isPlaying: true,
  isBgPlaying: true,

  setIsPlaying: (isPlaying: boolean) => set({ isPlaying }),
  setIsBgPlaying: (isBgPlaying: boolean) => set({ isBgPlaying }),
}));
