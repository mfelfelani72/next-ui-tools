"use client"; 
import { useState } from "react";
import Checkbox from "@/components/ui/CheckBox";

export default function CheckboxExample() {
  const [checked, setChecked] = useState(false);

  return (
    <div className="p-4">
      <Checkbox label="موافقم" checked={checked} onChange={setChecked} />
      <p className="mt-2">وضعیت: {checked ? "فعال" : "غیرفعال"}</p>
    </div>
  );
}
