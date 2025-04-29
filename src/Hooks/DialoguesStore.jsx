import { create } from "zustand";
import { dialogues } from "../assets/frontend_assets/assets";

export const useDialogues = create((set) => ({
  dialogues: dialogues,
  setDialogues: (newDialogues) => set({ Dialogues: newDialogues }),
}));
