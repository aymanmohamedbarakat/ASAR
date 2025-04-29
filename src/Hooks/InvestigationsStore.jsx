import { create } from "zustand";
import { investigations } from "../assets/frontend_assets/assets";


export const useInvestigations = create((set) => ({
    investigations: investigations,
  setInvestigations: (newInvestigations) => set({ investigations: newInvestigations }),
}));
