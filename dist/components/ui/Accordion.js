"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { cn } from "../../lib/utils";
const Accordion = ({ parentClassName, className, circleLocation, secoundCircleLocation, children, icon, title, title_classname, open = false, sliding = true, animation = "slide", }) => {
    const [isOpen, setIsOpen] = useState(open);
    const toggleOpen = () => {
        if (sliding)
            setIsOpen(!isOpen);
    };
    const getAnimationClasses = () => {
        switch (animation) {
            case "scale":
                return isOpen
                    ? "max-h-screen scale-100 opacity-100"
                    : "max-h-0 scale-95 opacity-0";
            case "fade":
                return isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0";
            case "bounce":
                return isOpen
                    ? "max-h-screen opacity-100 animate-bounce"
                    : "max-h-0 opacity-0";
            case "slide":
            default:
                return isOpen
                    ? "max-h-screen translate-y-0 opacity-100"
                    : "max-h-0 -translate-y-2 opacity-0";
        }
    };
    return (_jsxs("div", { className: cn("relative overflow-hidden rounded-2xl", parentClassName), children: [_jsx("div", { className: cn("flex flex-row w-full items-start justify-between bg-white dark:bg-background-light border border-Neutral-100 dark:border-Neutral-400/50 rounded-2xl", className), children: _jsxs("div", { className: "flex flex-col w-full", children: [_jsxs("div", { onClick: toggleOpen, className: cn("p-4 flex flex-row justify-between items-center", sliding && "cursor-pointer"), children: [_jsxs("div", { className: "flex flex-row gap-2 items-center", children: [icon && (_jsx("span", { className: "bg-secondary-50 dark:bg-background-light rounded-full p-2", children: icon })), _jsx("div", { className: cn("text-Neutral-500 dark:text-white text-base font-medium inline-flex select-none", title_classname), children: title })] }), sliding && (_jsx("svg", { className: cn("w-4 h-4 transition-transform duration-300 text-gray-600", isOpen ? "rotate-180" : "rotate-90"), fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 5l7 7-7 7" }) }))] }), _jsx("div", { className: cn("overflow-hidden transition-all duration-300 ease-in-out", getAnimationClasses()), children: _jsx("div", { className: "p-4", children: children }) })] }) }), circleLocation && isOpen && (_jsx("div", { className: "w-full", children: _jsx("div", { className: cn("absolute transition-all duration-700 ease-in-out w-40 h-40 opacity-50 bg-violet-300/30 rounded-full blur-2xl pointer-events-none", circleLocation) }) })), secoundCircleLocation && isOpen && (_jsx("div", { className: "w-full", children: _jsx("div", { className: cn("absolute transition-all duration-700 ease-in-out w-40 h-40 opacity-50 bg-violet-300/30 rounded-full blur-2xl pointer-events-none", secoundCircleLocation) }) }))] }));
};
export default Accordion;
