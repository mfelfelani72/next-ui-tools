import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "danger";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  onClick,
}: ButtonProps) {
  const base = "rounded-lg font-medium focus:outline-none transition";
  const sizes = {
    sm: "px-2 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    outline: "border border-gray-400 text-gray-700 hover:bg-gray-100",
    danger: "border border-gray-400 text-gray-700 hover:bg-gray-100",
  };

  return (
    <button
      className={`${base} ${sizes[size]} ${variants[variant]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
