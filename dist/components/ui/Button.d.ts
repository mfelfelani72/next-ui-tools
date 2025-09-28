import React from "react";
type ButtonProps = {
    children: React.ReactNode;
    variant?: "primary" | "secondary" | "outline" | "danger";
    size?: "sm" | "md" | "lg";
    onClick?: () => void;
};
export default function Button({ children, variant, size, onClick, }: ButtonProps): import("react/jsx-runtime").JSX.Element;
export {};
