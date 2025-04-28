import { create } from "zustand";

export const useLinks = create(()=>({
    links: [
        { name: "الصفحة الرئيسية", path: "/" },
        { name: "أخبار", path: "/أخبار" },
        { name: "تقارير", path: "/تقارير" },
        { name: "تحقيقات", path: "/تحقيقات" },
        { name: "حوارات", path: "/حوارات" },
        { name: "مقالات", path: "/مقالات" },
        { name: "لماذا نحن ؟", path: "/لماذا-نحن" },
        { name: "تواصل معنا", path: "/تواصل-معنا" },
    ],
    setLinks: (newLinks) => set({ links: newLinks }),
}))


export const useSideHeader = create((set) => ({
    index: false,
    openSideHeader: () => set(() => ({ index: true })),
    closeSideHeader: () => set(() => ({ index: false })),
  }));