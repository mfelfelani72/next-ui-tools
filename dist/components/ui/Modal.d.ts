import { ReactNode } from "react";
type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    children: ReactNode;
};
export default function Modal({ isOpen, onClose, title, children }: ModalProps): import("react/jsx-runtime").JSX.Element | null;
export {};
