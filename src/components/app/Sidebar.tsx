"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "خانه" },
  { href: "/en/home/button", label: "Button" },
  { href: "/en/home/checkBox", label: "checkBox" },
  { href: "/en/home/input", label: "input" },
  { href: "/en/home/modal", label: "modal" },
  { href: "/en/home/radioButton", label: "radioButton" },
  { href: "/en/home/table", label: "table" },
  { href: "/en/home/tab", label: "tab" },
  { href: "/en/home/settings", label: "تنظیمات" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 h-screen flex flex-col bg-gradient-to-b from-gray-800 to-gray-900 text-gray-200 shadow-xl">
      {/* Header */}
      <div className="p-6 font-bold text-2xl tracking-wide text-white border-b border-gray-700">
        ⚡ پنل من
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 flex flex-col gap-3">
        {links.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`
                relative px-4 py-3 rounded-lg flex items-center
                transition-all duration-300
                ${
                  isActive
                    ? "bg-gradient-to-r from-indigo-600 to-indigo-400 text-white font-semibold shadow-lg"
                    : "hover:bg-gray-800 hover:text-white"
                }
              `}
            >
              {/* Active indicator */}
              {isActive && (
                <span className="absolute left-0 top-0 h-full w-1 bg-yellow-400 rounded-r-md"></span>
              )}
              <span className="ml-2">{link.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
