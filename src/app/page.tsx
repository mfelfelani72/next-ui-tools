import { redirect } from "next/navigation";
import { headers } from "next/headers";

const defaultLocale = "en";

export default async function RootPage() {
  const headerList = await headers();
  const acceptLang = headerList.get("accept-language") || "";
  let locale = defaultLocale;

  const langs = acceptLang.split(",").map((l) => l.split(";")[0].trim());
  for (const lang of langs) {
    const base = lang.split("-")[0];
    if (["fa", "en"].includes(base)) {
      locale = base;
      break;
    }
  }

  redirect(`/${locale}/home`);
}
