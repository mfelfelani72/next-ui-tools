"use client"
import { useState } from "react";

type Option = "male" | "female";

export default function RadioExample() {
  const [selected, setSelected] = useState<Option>("male");

  return (
    <div className="p-4 flex flex-col gap-2">
      <label className="flex items-center gap-2">
        <input
          type="radio"
          name="gender"
          value="male"
          checked={selected === "male"}
          onChange={() => setSelected("male")}
          className="w-4 h-4 text-blue-600 border-gray-300"
        />
        مرد
      </label>
      <label className="flex items-center gap-2">
        <input
          type="radio"
          name="gender"
          value="female"
          checked={selected === "female"}
          onChange={() => setSelected("female")}
          className="w-4 h-4 text-blue-600 border-gray-300"
        />
        زن
      </label>
      <p>انتخاب شده: {selected}</p>
    </div>
  );
}
