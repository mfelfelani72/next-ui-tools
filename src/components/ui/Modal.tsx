"use client";
import { ReactNode } from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
};

export default function Modal({ isOpen, onClose, title, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose} // کلیک روی بک‌گراند مودال بسته شود
    >
      <div
        className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 relative"
        onClick={(e) => e.stopPropagation()} // جلوگیری از بسته شدن مودال با کلیک روی محتوا
      >
        {/* Header */}
        {title && <h2 className="text-xl font-bold mb-4">{title}</h2>}

        {/* Content */}
        <div>{children}</div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 transition-colors"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
