"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

interface NavItem {
  id: string;
  href?: string;
  label: string;
  children?: NavItem[];
}

// نمونه داده ناوبری
const navigation: NavItem[] = [
  { id: "home", href: "/", label: "Home" },
  {
    id: "ui-kits",
    label: "UI Kits",
    children: [
      { id: "buttons", label: "Buttons", href: "/en/home/button" },
      { id: "input", href: "/en/home/input", label: "Input" },
      { id: "checkbox", href: "/en/home/checkbox", label: "Checkbox" },
      { id: "radio", href: "/en/home/radio", label: "Radio" },
    ],
  },
  { id: "docs", href: "/docs", label: "Documentation" },
  {
    id: "settings",
    href: "/settings",
    label: "Settings",
    children: [
      {
        id: "input",
        href: "/ui/forms/input",
        label: "Input",
        children: [
          {
            id: "input1",
            href: "/ui/forms/input",
            label: "Input",
            children: [
              { id: "input2", href: "/ui/forms/input", label: "Input" },
              { id: "checkbox", href: "/ui/forms/checkbox", label: "Checkbox" },
              { id: "radio", href: "/ui/forms/radio", label: "Radio" },
            ],
          },
          { id: "checkbox", href: "/ui/forms/checkbox", label: "Checkbox" },
          { id: "radio", href: "/ui/forms/radio", label: "Radio" },
        ],
      },
      { id: "checkbox", href: "/ui/forms/checkbox", label: "Checkbox" },
      { id: "radio", href: "/ui/forms/radio", label: "Radio" },
    ],
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [expandedItems, setExpandedItems] = useState<Set<string>>(
    new Set(["ui-kits"])
  );

  const toggleItem = (id: string) => {
    setExpandedItems((prev) => {
      const newSet = new Set(prev);
      newSet.has(id) ? newSet.delete(id) : newSet.add(id);
      return newSet;
    });
  };

  const renderTree = (items: NavItem[], level = 0) =>
    items.map((item) => {
      const hasChildren = item.children && item.children.length > 0;
      const isExpanded = expandedItems.has(item.id);
      const isActive = item.href && pathname === item.href;

      return (
        <div key={item.id}>
          <div
            className="flex items-center justify-between py-2 px-3 rounded cursor-pointer"
            style={{ paddingLeft: `${level * 16 + 8}px` }}
          >
            {item.href ? (
              <Link
                href={item.href}
                className={`text-sm font-medium cursor-pointer transition-colors ${
                  isActive
                    ? "text-indigo-600"
                    : "text-gray-800 hover:text-indigo-600"
                }`}
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-sm font-medium cursor-pointer">
                {item.label}
              </span>
            )}

            {hasChildren && (
              <span
                className="ml-1 flex-shrink-0 cursor-pointer"
                onClick={() => toggleItem(item.id)}
              >
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
            <div className="border-l border-gray-300 ml-2">
              {renderTree(item.children!, level + 1)}
            </div>
          )}
        </div>
      );
    });

  return (
    <aside className="w-64 h-[calc(100vh-16px)] m-2 flex flex-col shadow-[0_4px_20px_rgba(0,0,0,0.25)] bg-white rounded-lg">
      {/* Header Logo */}
      <div className="p-4">
        <span className="text-xl font-bold text-indigo-600">Forma UI</span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-2 overflow-y-auto">{renderTree(navigation)}</nav>

      {/* Footer / Signature */}
      <div className="p-4 text-xs text-gray-500 text-center">
        Build Smarter, Ship Faster
      </div>
    </aside>
  );
}
