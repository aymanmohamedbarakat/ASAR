import { create } from "zustand";
import { reports } from "../assets/frontend_assets/assets";

export const useReports = create((set) => ({
  reports: reports,
  setReports: (newReports) => set({ reports: newReports }),
}));
