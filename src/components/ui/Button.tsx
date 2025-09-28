import React from "react";

type ButtonProps = {
  children?: React.ReactNode;
  variant?:
    | "primary"
    | "secondary"
    | "outline"
    | "danger"
    | "success"
    | "warning"
    | "icon";
  size?: "sm" | "md" | "lg" | "xl";
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  type?: "button" | "submit" | "reset";
  fullWidth?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  className?: string;
  title?: string;
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  onClick,
  disabled = false,
  loading = false,
  type = "button",
  fullWidth = false,
  icon,
  iconPosition = "left",
  className = "",
  title,
}: ButtonProps) {
  const base = `
    inline-flex items-center justify-center gap-2
    rounded-xl font-medium focus:outline-none 
    focus:ring-2 focus:ring-offset-2 transition-all duration-200
    disabled:opacity-50 disabled:cursor-not-allowed
    active:scale-95
    min-h-[2.5rem]
  `;

  const sizes = {
    sm: "px-4 py-2 text-sm min-h-[2rem]",
    md: "px-6 py-3 text-base min-h-[2.5rem]",
    lg: "px-8 py-4 text-lg min-h-[3rem]",
    xl: "px-10 py-5 text-xl min-h-[3.5rem]",
  };

  const variants = {
    primary:
      "bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 focus:ring-blue-500 shadow-lg",
    secondary:
      "bg-gradient-to-r from-gray-100 to-gray-200 text-gray-900 hover:from-gray-200 hover:to-gray-300 focus:ring-gray-400 shadow-md",
    outline:
      "border-2 border-gray-300 bg-transparent text-gray-700 hover:bg-gray-50 focus:ring-blue-400",
    danger:
      "bg-gradient-to-r from-red-600 to-red-700 text-white hover:from-red-700 hover:to-red-800 focus:ring-red-500 shadow-lg",
    success:
      "bg-gradient-to-r from-green-600 to-green-700 text-white hover:from-green-700 hover:to-green-800 focus:ring-green-500 shadow-lg",
    warning:
      "bg-gradient-to-r from-yellow-500 to-yellow-600 text-white hover:from-yellow-600 hover:to-yellow-700 focus:ring-yellow-500 shadow-lg",
    icon: "bg-transparent text-red-500 hover:bg-red-50 focus:ring-red-200 border-0 shadow-none",
  };

  const widthClass = fullWidth ? "w-full" : "";
  const isDisabled = disabled || loading;

  // اگر فقط آیکون باشد، استایل‌های مخصوص اعمال شود
  const isIconOnly = !children && icon;
  const iconOnlyClass = isIconOnly
    ? "aspect-square p-2 justify-center min-w-[2.5rem]"
    : "";

  const renderContent = () => {
    if (loading) {
      return (
        <>
          <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          {children || "Loading..."}
        </>
      );
    }

    if (isIconOnly) {
      return (
        <span className="text-xl flex items-center justify-center w-full h-full">
          {icon}
        </span>
      );
    }

    return (
      <>
        {icon && iconPosition === "left" && (
          <span className="text-lg flex-shrink-0">{icon}</span>
        )}
        {children && <span className="flex-1 text-center">{children}</span>}
        {icon && iconPosition === "right" && (
          <span className="text-lg flex-shrink-0">{icon}</span>
        )}
      </>
    );
  };

  return (
    <button
      type={type}
      className={`
        ${base} 
        ${sizes[size]} 
        ${variants[variant]}
        ${widthClass}
        ${iconOnlyClass}
        ${className}
      `.trim()}
      onClick={onClick}
      disabled={isDisabled}
      title={title}
      aria-label={title}
    >
      {renderContent()}
    </button>
  );
}
