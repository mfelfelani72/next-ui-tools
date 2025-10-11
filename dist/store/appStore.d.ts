import { Lang } from "../config/language";
interface AppState {
    lang: Lang;
    dir: "ltr" | "rtl";
    setLang: (lang: Lang) => void;
}
export declare const useAppStore: import("zustand").UseBoundStore<import("zustand").StoreApi<AppState>>;
export {};
