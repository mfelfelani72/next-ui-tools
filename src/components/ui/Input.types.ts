import { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

// Type definitions
export type BaseInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
};

export type InputTextProps = BaseInputProps & {
  onClear?: () => void;
};

export type InputEmailProps = BaseInputProps & {
  variant?: "auth" | "default";
  onClear?: () => void;
};

export type InputMobileProps = BaseInputProps & {
  onClear?: () => void;
};

export type InputPasswordProps = BaseInputProps & {
  variant?: "password" | "change_password";
  buttonFirstId?: string;
  buttonSecondId?: string;
  onClear?: () => void;
};

export type InputRePasswordProps = BaseInputProps & {
  buttonId?: string;
  passwordFieldId?: string;
};

export type InputTextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label?: string;
};

export type InputSearchProps = BaseInputProps & {
  inputSearchRef?: React.RefObject<HTMLDivElement>;
  classNameParent?: string;
  searchClassname?: string;
  param?: string;
};

export type InputRadioButtonProps = InputHTMLAttributes<HTMLInputElement> & {
  index?: number;
  useIndex?: boolean;
  onSortChange?: (index: number) => void;
};

export type InputToggleProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'onChange'> & {
  onStatusChange?: (value: boolean) => void;
};

export type InputDarkLightProps = {
  className?: string;
};