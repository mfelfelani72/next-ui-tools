import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function Checkbox({ label, checked, onChange }) {
    return (_jsxs("label", { className: "flex items-center gap-2 cursor-pointer", children: [_jsx("input", { type: "checkbox", checked: checked, onChange: (e) => onChange === null || onChange === void 0 ? void 0 : onChange(e.target.checked), className: "w-4 h-4 accent-blue-600 rounded" }), _jsx("span", { children: label })] }));
}
