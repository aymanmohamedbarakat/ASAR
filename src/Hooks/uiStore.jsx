import { create } from "zustand";

export const useLinks = create(()=>({
    links: [
        { name: "الصفحة الرئيسية", path: "/" },
        { name: "الأخبار", path: "/الأخبار" },
        { name: "تقارير", path: "/تقارير" },
        { name: "تحقيقات", path: "/تحقيقات" },
        { name: "حوارات", path: "/حوارات" },
        { name: "مقالات", path: "/مقالات" },
        { name: "لماذا نحن ؟", path: "/لماذا-نحن" },
        { name: "فريق العمل", path: "/فريق-العمل"},
    ],
    setLinks: (newLinks) => set({ links: newLinks }),
}))


export const useSideHeader = create((set) => ({
    index: false,
    openSideHeader: () => set(() => ({ index: true })),
    closeSideHeader: () => set(() => ({ index: false })),
  }));