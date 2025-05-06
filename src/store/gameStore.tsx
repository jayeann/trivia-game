import { create } from "zustand";

type Question = {
  text: string;
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

  setPhase: (phase: GamePhase) => void;
};

export const useGameStore = create<GameState>((set) => ({
  phase: "HOME",
  category: null,
  questions: [],
  currentQuestionIndex: 0,
  score: 0,
  currentRound: 0,
  questionsPerRound: 0,
  loading: false,

  setPhase: (phase) => set({ phase }),
}));
