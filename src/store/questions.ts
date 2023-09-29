import { create } from "zustand";
import { Question } from "../types";

interface State {
  questions: Question[];
  currentQuestion: number;
  fetchQuestions: (limit: number) => Promise<void>;
}

/*
create gets a callback and that callback must returns the object will be my GLOBAL state (or well know as Store)
The Store has 
    --State
    --Way to update the state
    Get and Set
*/

export const useQuestionsStore = create<State>((set, get) => {
  return {
    questions: [],
    currentQuestion: 0,

    fetchQuestions: async (limit: number) => {
      const res = await fetch("http://localhost:5173/data.json");
      const json = await res.json();
      const questions = json.sort(() => Math.random() - 0.5).slice(0, limit);
      // set(state => (state.questions = questions)); o set({ questions }); is exactly the same
      set({ questions });
    },
  };
});
