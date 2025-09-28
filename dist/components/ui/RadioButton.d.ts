type RadioProps = {
    label: string;
    name: string;
    value: string;
    checked?: boolean;
    onChange?: (value: string) => void;
};
export default function RadioButton({ label, name, value, checked, onChange, }: RadioProps): import("react/jsx-runtime").JSX.Element;
export {};
