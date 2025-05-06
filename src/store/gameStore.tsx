import { create } from "zustand";

type Question = {
  text: string;
  mediaType: "audio" | "video" | "image" | string;
  url?: string;
  hint?: string;
};

type GamePhase = "HOME" | "CATEGORY" | "ROUND" | "RESULTS";

type GameState = {
  category: string | null;
  currentRound: number;
  questions: Question[];
  questionsPerRound: number;
  currentQuestionIndex: number;
  score: number;
  phase: GamePhase;
  loading: boolean;

  setCurrentRound: (currentRound: number) => void;
  setCurrentQuestionIndex: (currentQuestionIndex: number) => void;
  setPhase: (phase: GamePhase) => void;

  incrementQuestionIndex: () => void;
  incrementRound: () => void;
};

export const useGameStore = create<GameState>((set, get) => ({
  phase: "HOME",
  category: null,
  questions: [],
  currentQuestionIndex: 0,
  score: 0,
  currentRound: 1,
  questionsPerRound: 0,
  loading: false,

  setPhase: (phase) => set({ phase }),
  setCurrentRound: (currentRound) => set({ currentRound }),
  setCurrentQuestionIndex: (currentQuestionIndex) =>
    set({ currentQuestionIndex }),

  incrementQuestionIndex: () =>
    set({ currentQuestionIndex: get().currentQuestionIndex + 1 }),

  incrementRound: () => set({ currentRound: get().currentRound + 1 }),
}));
