import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function RadioButton({ label, name, value, checked, onChange, }) {
    return (_jsxs("label", { className: "flex items-center gap-2 cursor-pointer", children: [_jsx("input", { type: "radio", name: name, value: value, checked: checked, onChange: () => onChange === null || onChange === void 0 ? void 0 : onChange(value), className: "hidden peer" }), _jsx("span", { className: "w-4 h-4 rounded-full border border-gray-500 flex items-center justify-center peer-checked:border-blue-600", children: _jsx("span", { className: "w-2 h-2 bg-blue-600 rounded-full peer-checked:block hidden" }) }), _jsx("span", { children: label })] }));
}
