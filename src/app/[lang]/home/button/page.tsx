'use client'

import Button from "@/components/ui/Button";

export default function ButtonExample() {
  return (
    <div className="flex gap-4 p-4">
      <Button variant="primary" onClick={() => alert("Primary clicked")}>
        Primary
      </Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="danger">Danger</Button>
    </div>
  );
}
