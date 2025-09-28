"use client";
import { useState } from "react";
import Modal from "@/components/ui/Modal";
import Button from "@/components/ui/Button";

export default function ModalExample() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-4 flex flex-col gap-4">
      <Button variant="primary" onClick={() => setIsOpen(true)}>
        باز کردن مودال
      </Button>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="عنوان مودال">
        <p>این یک محتوای نمونه برای مودال است.</p>
        <div className="mt-4 flex justify-end gap-2">
          <Button variant="secondary" onClick={() => setIsOpen(false)}>
            بستن
          </Button>
          <Button variant="primary" onClick={() => alert("تأیید شد")}>
            تأیید
          </Button>
        </div>
      </Modal>
    </div>
  );
}
