import { create } from "zustand";
import { blogs } from "../assets/frontend_assets/assets";


export const useBlog = create((set) => ({
  blogs: blogs,
  setBlogs: (newBlogs) => set({ blogs: newBlogs }),
}));
