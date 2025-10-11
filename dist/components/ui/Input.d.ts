import React from "react";
type InputProps = {
    label?: string;
    type?: string;
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
export default function Input({ label, type, placeholder, value, onChange, }: InputProps): import("react/jsx-runtime").JSX.Element;
export {};
