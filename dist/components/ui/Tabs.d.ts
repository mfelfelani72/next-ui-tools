import { ReactNode } from "react";
type Tab = {
    label: string;
    content: ReactNode;
};
type TabsProps = {
    tabs: Tab[];
};
export default function Tabs({ tabs }: TabsProps): import("react/jsx-runtime").JSX.Element;
export {};
