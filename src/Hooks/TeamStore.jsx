import { create } from "zustand";
import { TeamMember } from "../assets/frontend_assets/assets";

export const useTeam = create((set) => ({
  TeamMember: TeamMember,
  setTeamMember: (newTeamMember) => set({ TeamMember: newTeamMember }),
}));
