"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function Modal({ isOpen, onClose, title, children }) {
    if (!isOpen)
        return null;
    return (_jsx("div", { className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50", onClick: onClose, children: _jsxs("div", { className: "bg-white rounded-lg shadow-lg max-w-lg w-full p-6 relative", onClick: (e) => e.stopPropagation(), children: [title && _jsx("h2", { className: "text-xl font-bold mb-4", children: title }), _jsx("div", { children: children }), _jsx("button", { onClick: onClose, className: "absolute top-2 right-2 text-gray-500 hover:text-gray-800 transition-colors", children: "\u2715" })] }) }));
}
