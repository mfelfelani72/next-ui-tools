"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { useAppStore } from "../store/appStore";
import { getDictionary } from "../dictionaries";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { languages } from "../config/language";
export const PostDetailPage = ({ id, lang }) => {
    const storeLang = useAppStore((state) => state.lang);
    const setLang = useAppStore((state) => state.setLang);
    const [dict, setDict] = useState(null);
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    // تعیین زبان: prop اولویت دارد
    const currentLang = lang !== null && lang !== void 0 ? lang : storeLang;
    useEffect(() => {
        let isMounted = true;
        getDictionary(currentLang).then((d) => {
            if (isMounted)
                setDict(d);
        });
        return () => {
            isMounted = false;
        };
    }, [currentLang]);
    const changeLang = (newLang) => {
        if (newLang === currentLang)
            return;
        if (!lang) {
            setLang(newLang);
            const segments = pathname.split("/").slice(1);
            if (segments.length > 0 && Object.keys(languages).includes(segments[0])) {
                segments[0] = newLang;
            }
            else {
                segments.unshift(newLang);
            }
            const newPath = "/" + segments.join("/");
            const search = searchParams.toString();
            router.push(search ? `${newPath}?${search}` : newPath);
        }
    };
    if (!dict)
        return _jsx("div", { children: "Loading..." });
    return (_jsxs("div", { children: [_jsxs("h2", { children: [dict.posts.title, " - ", id] }), _jsx("p", { children: dict.posts.description }), !lang && (_jsxs("div", { children: [_jsx("button", { onClick: () => changeLang("fa"), children: "\u0641\u0627\u0631\u0633\u06CC" }), _jsx("button", { onClick: () => changeLang("en"), children: "English" })] }))] }));
};
