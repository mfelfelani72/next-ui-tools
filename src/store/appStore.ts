import { create } from "zustand";
import { languages, Lang } from "../config/language";

interface AppState {
  lang: Lang;
  dir: "ltr" | "rtl";
  setLang: (lang: Lang) => void;
}

function getInitialLang(): Lang {
  if (typeof window === "undefined") return "en";
  const firstSegment = window.location.pathname.split("/")[1];
  return firstSegment && firstSegment in languages
    ? (firstSegment as Lang)
    : "en";
}

const initialLang = getInitialLang();

export const useAppStore = create<AppState>((set) => ({
  lang: initialLang,
  dir: languages[initialLang].dir,
  setLang: (lang: Lang) => set({ lang, dir: languages[lang].dir }),
}));
