"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
export default function Tabs({ tabs }) {
    const [activeIndex, setActiveIndex] = useState(0);
    return (_jsxs("div", { className: "w-full", children: [_jsx("div", { className: "flex border-b border-gray-300", children: tabs.map((tab, index) => (_jsx("button", { onClick: () => setActiveIndex(index), className: `px-4 py-2 -mb-px font-medium transition-colors duration-200 ${activeIndex === index
                        ? "border-b-2 border-blue-600 text-blue-600"
                        : "text-gray-600 hover:text-blue-600"}`, children: tab.label }, index))) }), _jsx("div", { className: "p-4 bg-gray-50 rounded-b-lg", children: tabs[activeIndex].content })] }));
}
