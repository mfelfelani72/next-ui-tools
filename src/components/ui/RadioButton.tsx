import React from "react";

type RadioProps = {
  label: string;
  name: string;
  value: string;
  checked?: boolean;
  onChange?: (value: string) => void;
};

export default function RadioButton({
  label,
  name,
  value,
  checked,
  onChange,
}: RadioProps) {
  return (
    <label className="flex items-center gap-2 cursor-pointer">
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={() => onChange?.(value)}
        className="hidden peer"
      />
      <span className="w-4 h-4 rounded-full border border-gray-500 flex items-center justify-center peer-checked:border-blue-600">
        <span className="w-2 h-2 bg-blue-600 rounded-full peer-checked:block hidden"></span>
      </span>
      <span>{label}</span>
    </label>
  );
}
