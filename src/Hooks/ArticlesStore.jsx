import { create } from "zustand";
import { articles } from "../assets/frontend_assets/assets";


export const useArticles = create((set) => ({
 articles: articles,
  setArticles: (newArticles) => set({ articles: newArticles }),
}));
