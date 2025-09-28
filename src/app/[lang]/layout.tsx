import { ReactNode } from "react";
import { getDictionary } from "../../dictionaries";
import { languages, Lang } from "../../config/language";

import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export async function generateStaticParams() {
  return Object.keys(languages).map((lang) => ({ lang }));
}

interface LangLayoutProps {
  children: ReactNode;
  params: { lang: string } | Promise<{ lang: string }>;
}

export default async function LangLayout({
  children,
  params,
}: LangLayoutProps) {
  // ⚡ حتما await params
  const { lang: paramLang } = await params;

  const lang = (paramLang in languages ? paramLang : "en") as Lang;
  const dir = languages[lang].dir;

  // لود دیکشنری برای این زبان
  const dict = await getDictionary(lang);

  return (
    <html lang={lang} dir={dir} className={geistSans.variable}>
      <body>{children}</body>
    </html>
  );
}
