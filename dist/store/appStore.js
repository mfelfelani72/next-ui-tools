import { create } from "zustand";
import { languages } from "../config/language";
function getInitialLang() {
    if (typeof window === "undefined")
        return "en";
    const firstSegment = window.location.pathname.split("/")[1];
    return firstSegment && firstSegment in languages
        ? firstSegment
        : "en";
}
const initialLang = getInitialLang();
export const useAppStore = create((set) => ({
    lang: initialLang,
    dir: languages[initialLang].dir,
    setLang: (lang) => set({ lang, dir: languages[lang].dir }),
}));
