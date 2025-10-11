import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function Input({ label, type = "text", placeholder, value, onChange, }) {
    return (_jsxs("div", { className: "flex flex-col gap-1", children: [label && _jsx("label", { className: "text-sm font-medium", children: label }), _jsx("input", { type: type, placeholder: placeholder, value: value, onChange: onChange, className: "border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none" })] }));
}
