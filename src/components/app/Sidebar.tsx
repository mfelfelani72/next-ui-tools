"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

interface NavItem {
  id: string;
  href?: string;
  label: string;
  icon?: string;
  children?: NavItem[];
}

const navigation: NavItem[] = [
  {
    id: "home",
    href: "/",
    label: "خانه",
    icon: "🏠",
  },
  {
    id: "components",
    label: "کامپوننت‌ها",
    icon: "📦",
    children: [
      { id: "button", href: "/en/home/button", label: "Button" },
      { id: "checkbox", href: "/en/home/checkBox", label: "Checkbox" },
      { id: "input", href: "/en/home/input", label: "Input" },
      { id: "modal", href: "/en/home/modal", label: "Modal" },
      {
        id: "radioButton",
        href: "/en/home/radioButton",
        label: "Radio Button",
      },
      { id: "table", href: "/en/home/table", label: "Table" },
      { id: "tab", href: "/en/home/tab", label: "Tab" },
    ],
  },
  {
    id: "settings",
    href: "/en/home/settings",
    label: "تنظیمات",
    icon: "⚙️",
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [expandedItems, setExpandedItems] = useState<Set<string>>(
    new Set(["components"])
  );
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const toggleItem = (id: string): void => {
    setExpandedItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const toggleTheme = (): void => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  const renderTree = (items: NavItem[]) => {
    return items.map((item) => {
      const hasChildren = item.children && item.children.length > 0;
      const isExpanded = expandedItems.has(item.id);
      const isActive = item.href && pathname === item.href;

      return (
        <div key={item.id} className="mb-1">
          <div
            className={`
              flex items-center justify-between p-3 rounded-lg 
              transition-colors duration-200 cursor-pointer
              ${
                isActive
                  ? darkMode
                    ? "bg-indigo-600 text-white"
                    : "bg-indigo-50 text-indigo-600 border border-indigo-200"
                  : darkMode
                  ? "hover:bg-gray-700 text-gray-200"
                  : "hover:bg-gray-100 text-gray-800"
              }
            `}
            onClick={() => hasChildren && toggleItem(item.id)}
          >
            {item.href ? (
              <Link href={item.href} className="flex items-center w-full">
                {item.icon && <span className="mr-3 text-lg">{item.icon}</span>}
                <span className="text-sm font-medium">{item.label}</span>
              </Link>
            ) : (
              <div className="flex items-center w-full">
                {item.icon && <span className="mr-3 text-lg">{item.icon}</span>}
                <span className="text-sm font-medium">{item.label}</span>
              </div>
            )}

            {hasChildren && (
              <span className="mr-2">
                {isExpanded ? (
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 15l7-7 7 7"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                )}
              </span>
            )}
          </div>

          {hasChildren && isExpanded && (
            <div
              className={`ml-6 pl-4 border-l ${
                darkMode ? "border-gray-600" : "border-gray-300"
              }`}
            >
              {renderTree(item.children!)}
            </div>
          )}
        </div>
      );
    });
  };

  return (
    <aside
      className={`
      w-64 h-screen flex flex-col shadow-lg
      ${darkMode ? "bg-gray-800 text-gray-200" : "bg-white text-gray-800"}
    `}
    >
      {/* Header */}
      <div
        className={`
        p-5 flex items-center justify-between
        ${darkMode ? "border-b border-gray-700" : "border-b border-gray-200"}
      `}
      >
        <div
          className={`
          text-xl font-bold
          ${darkMode ? "text-indigo-400" : "text-indigo-600"}
        `}
        >
          پنل من
        </div>
        <button
          onClick={toggleTheme}
          className={`
            p-2 rounded-full transition-colors
            ${
              darkMode
                ? "bg-gray-700 text-yellow-300 hover:bg-gray-600"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }
          `}
          aria-label="Toggle theme"
        >
          {darkMode ? (
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          ) : (
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 overflow-y-auto">{renderTree(navigation)}</nav>

      {/* User Profile */}
      <div
        className={`
        p-4 flex items-center
        ${darkMode ? "border-t border-gray-700" : "border-t border-gray-200"}
      `}
      >
        <div className="bg-gray-200 border-2 border-dashed rounded-xl w-10 h-10" />
        <div className="ml-3">
          <div className="text-sm font-medium">کاربر مهمان</div>
          <div
            className={`text-xs ${
              darkMode ? "text-gray-400" : "text-gray-500"
            }`}
          >
            مدیر
          </div>
        </div>
      </div>
    </aside>
  );
}
