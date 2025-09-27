"use client";

import { useEffect, useState } from "react";
import { useAppStore } from "../store/appStore";
import { getDictionary } from "../dictionaries";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { languages, Lang } from "../config/language";

interface PostDetailPageProps {
  id: string;
  lang?: Lang; // اگر prop داده شود، اولویت دارد
}

export const PostDetailPage = ({ id, lang }: PostDetailPageProps) => {
  const storeLang = useAppStore((state) => state.lang);
  const setLang = useAppStore((state) => state.setLang);
  const [dict, setDict] = useState<any>(null);

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // تعیین زبان: prop اولویت دارد
  const currentLang = lang ?? storeLang;

  useEffect(() => {
    let isMounted = true;
    getDictionary(currentLang).then((d) => {
      if (isMounted) setDict(d);
    });
    return () => {
      isMounted = false;
    };
  }, [currentLang]);

  const changeLang = (newLang: Lang) => {
    if (newLang === currentLang) return;

    if (!lang) {
      setLang(newLang);

      const segments = pathname.split("/").slice(1);
      if (segments.length > 0 && Object.keys(languages).includes(segments[0])) {
        segments[0] = newLang;
      } else {
        segments.unshift(newLang);
      }
      const newPath = "/" + segments.join("/");
      const search = searchParams.toString();
      router.push(search ? `${newPath}?${search}` : newPath);
    }
  };

  if (!dict) return <div>Loading...</div>;

  return (
    <div>
      <h2>
        {dict.posts.title} - {id}
      </h2>
      <p>{dict.posts.description}</p>

      {!lang && (
        <div>
          <button onClick={() => changeLang("fa")}>فارسی</button>
          <button onClick={() => changeLang("en")}>English</button>
        </div>
      )}
    </div>
  );
};
