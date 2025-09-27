"use client"; // ✅ must be exactly like this

import { useState, ChangeEvent } from "react";
import Input from "@/components/ui/Input";

export default function InputExample() {
  const [text, setText] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <div className="p-4">
      <Input
        value={text}
        onChange={handleChange}
        placeholder="نام خود را وارد کنید"
      />
      <p className="mt-2 text-gray-700">مقدار وارد شده: {text}</p>
    </div>
  );
}
