// src/config/language.ts
export const languages = {
  en: { dir: "ltr", name: "English" },
  fa: { dir: "rtl", name: "فارسی" },
  // زبان‌های دیگر اضافه کنید
} as const;

// Lang نوع کلیدهای languages است
export type Lang = keyof typeof languages;
