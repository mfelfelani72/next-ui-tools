var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// components/ui/Button.tsx
import { forwardRef } from "react";
import { cn } from "../../lib/utils";
const Button = forwardRef((_a, ref) => {
    var { className, variant = "primary", size = "md", loading = false, icon, iconPosition = "left", fullWidth = false, clickAnimation = "none", children, disabled } = _a, props = __rest(_a, ["className", "variant", "size", "loading", "icon", "iconPosition", "fullWidth", "clickAnimation", "children", "disabled"]);
    const isDisabled = disabled || loading;
    // Variant styles
    const variantStyles = {
        primary: "bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 focus:ring-blue-500",
        secondary: "bg-gray-600 text-white hover:bg-gray-700 active:bg-gray-800 focus:ring-gray-500",
        outline: "border border-gray-300 bg-transparent hover:bg-gray-50 text-gray-700 focus:ring-blue-500",
        danger: "bg-red-600 text-white hover:bg-red-700 active:bg-red-800 focus:ring-red-500",
        success: "bg-green-600 text-white hover:bg-green-700 active:bg-green-800 focus:ring-green-500",
        warning: "bg-yellow-500 text-white hover:bg-yellow-600 active:bg-yellow-700 focus:ring-yellow-500",
        icon: "bg-transparent hover:bg-gray-100 text-gray-600 focus:ring-gray-500",
    };
    // Size styles
    const sizeStyles = {
        sm: "h-8 px-3 text-xs",
        md: "h-10 px-4 py-2",
        lg: "h-12 px-6 text-lg",
        xl: "h-14 px-8 text-xl",
    };
    // Click animation styles
    const animationStyles = {
        none: "",
        scale: "active:scale-95 transition-transform duration-150",
        bounce: "active:scale-110 transition-transform duration-150",
        pulse: "active:animate-pulse transition-all duration-150",
        press: "active:translate-y-1 transition-transform duration-150",
    };
    const baseStyles = "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";
    return (_jsxs("button", Object.assign({ className: cn(baseStyles, variantStyles[variant], sizeStyles[size], animationStyles[clickAnimation], fullWidth && "w-full", loading && "cursor-wait", className), disabled: isDisabled, ref: ref }, props, { children: [loading && (_jsxs("svg", { className: "mr-2 h-4 w-4 animate-spin", fill: "none", viewBox: "0 0 24 24", children: [_jsx("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }), _jsx("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" })] })), !loading && icon && iconPosition === "left" && (_jsx("span", { className: "mr-2", children: icon })), children, !loading && icon && iconPosition === "right" && (_jsx("span", { className: "ml-2", children: icon }))] })));
});
Button.displayName = "Button";
export default Button;
