import { create } from "zustand";
import { Question } from "../types/roundTypes";

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
  isLastQuestion: boolean;
  isLastRound: boolean;
  isClueVisible: boolean;

  setCurrentRound: (currentRound: number) => void;
  setCurrentQuestionIndex: (currentQuestionIndex: number) => void;
  setPhase: (phase: GamePhase) => void;
  setIsClueVisible: (isHintVisible: boolean) => void;

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
  isLastQuestion: false,
  isLastRound: false,
  isClueVisible: false,

  setIsClueVisible: (isClueVisible) => set({ isClueVisible }),

  setPhase: (phase) => set({ phase }),
  setCurrentRound: (currentRound) => set({ currentRound }),
  setCurrentQuestionIndex: (currentQuestionIndex) =>
    set({ currentQuestionIndex }),

  incrementQuestionIndex: () =>
    set({ currentQuestionIndex: get().currentQuestionIndex + 1 }),

  incrementRound: () => set({ currentRound: get().currentRound + 1 }),
}));
