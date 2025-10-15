import React, { useState, useRef, useEffect } from "react";
import {
  CloseSquareIcon,
  DangerSquareIcon,
  EmailIcon,
  MobielIcon,
  SunIcon,
  HideIcon,
  LockIcon,
  SearchIcon,
  ShowIcon,
  MoonIcon,
} from "../icon/icon";

import type {
  InputTextProps,
  InputEmailProps,
  InputMobileProps,
  InputPasswordProps,
  InputRePasswordProps,
  InputTextAreaProps,
  InputSearchProps,
  InputRadioButtonProps,
  InputToggleProps,
  InputDarkLightProps,
} from "./Input.types";
import { cn } from "@/lib/utils";

// Simple translation function replacement (no external library)
const translate = (key: string): string => {
  const translations: Record<string, string> = {
    error_invalid_email: "Please enter a valid email address",
    error_invalid_mobile: "Please enter a valid mobile number",
    error_min_length_password: "Password must be at least 5 characters",
    error_re_password: "Passwords do not match",
  };
  return translations[key] || key;
};

// InputText Component
export function InputText({
  label,
  className,
  id,
  disabled,
  value,
  onChange,
  onClear,
  ...props
}: InputTextProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  
  const handleClear = () => {
    if (inputRef.current) {
      inputRef.current.value = "";
      const event = new Event('input', { bubbles: true });
      inputRef.current.dispatchEvent(event);
    }
    onClear?.();
  };

  return (
    <div className="flex flex-col w-full">
      {label && (
        <label htmlFor={id} className="text-Neutral-300 text-[10px] font-medium px-3 mb-1">
          {label}
        </label>
      )}
      <div className="relative">
        <input
          ref={inputRef}
          id={id}
          type="text"
          disabled={disabled}
          value={value}
          onChange={onChange}
          className={cn(
            "autofill-input placeholder-Neutral-200 w-full px-[1rem] rtl:pl-[2.5rem] ltr:pr-[2.5rem] py-3 rounded-2xl bg-background-light border border-secondary-100 focus:outline-none focus:ring-0 focus:border-secondary-400 justify-between items-center relative",
            className
          )}
          {...props}
        />
        {!disabled && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute inset-y-0 rtl:left-0 ltr:right-0 flex items-center p-2"
          >
            <CloseSquareIcon className="text-Nutral-500" />
          </button>
        )}
      </div>
    </div>
  );
}

// InputEmail Component
export function InputEmail({
  label,
  className,
  id,
  variant = "default",
  error,
  disabled,
  placeholder,
  value,
  onChange,
  onClear,
  ...props
}: InputEmailProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [showError, setShowError] = useState(false);
  
  const handleClear = () => {
    if (inputRef.current) {
      inputRef.current.value = "";
      const event = new Event('input', { bubbles: true });
      inputRef.current.dispatchEvent(event);
    }
    onClear?.();
  };

  const emailPattern = "[\\-a-zA-Z0-9~!$%^&*_=+\\}\\{'?]+(\\.[-a-zA-Z0-9~!$%^&*_=+\\}\\{'?]+)*@[a-zA-Z0-9_][-a-zA-Z0-9_]*(\\.[-a-zA-Z0-9_]+)*\\.[a-zA-Z]{2,}(:[0-9]{1,5})?";

  if (variant === "auth") {
    return (
      <>
        {label && (
          <label htmlFor={id} className="text-Neutral-300 text-[10px] font-medium px-3 mb-1">
            {label}
          </label>
        )}
        <div className="relative">
          <input
            ref={inputRef}
            id={id}
            type="email"
            pattern={emailPattern}
            placeholder={placeholder}
            disabled={disabled}
            value={value}
            onChange={onChange}
            onBlur={() => setShowError(false)}
            onFocus={() => setShowError(false)}
            className={cn(
              "autofill-input peer placeholder-Neutral-200 w-full px-[2.7rem] py-3 rounded-2xl bg-secondary-50 dark:bg-background-light border border-secondary-100 focus:outline-none focus:ring-0 focus:border-secondary-400 justify-between items-center text-Neutral-500 dark:text-white relative",
              className
            )}
            {...props}
          />
          
          {!disabled && (
            <button
              type="button"
              onClick={handleClear}
              className="absolute inset-y-0 rtl:left-0 ltr:right-0 flex items-center p-2"
            >
              <CloseSquareIcon />
            </button>
          )}
          
          <div className="absolute inset-y-0 rtl:right-0 ltr:left-0 rtl:pr-3 ltr:pl-3 flex items-center pointer-events-none">
            <EmailIcon />
          </div>
          
          {error && !showError && (
            <div className="peer-focus:hidden absolute inset-x-0 mt-2 mx-3">
              <div className="text-Error-400 text-xs font-medium">{translate(error)}</div>
            </div>
          )}
          
          <div className="hidden peer-invalid:flex absolute mt-2 mx-3">
            <div className="text-Error-400 text-xs font-medium">
              {translate("error_invalid_email")}
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      {label && (
        <label htmlFor={id} className="text-Neutral-300 text-[10px] font-medium px-3 mb-1">
          {label}
        </label>
      )}
      <div className="flex flex-col relative">
        <input
          ref={inputRef}
          id={id}
          type="email"
          disabled={disabled}
          value={value}
          onChange={onChange}
          className={cn(
            "autofill-input rounded-2xl px-[2.7rem] h-12 py-6 border-2 border-Neutral-50 focus:outline-none focus:ring-0 focus:border-secondary-400",
            className
          )}
          {...props}
        />
        
        <div className="absolute inset-y-0 rtl:right-0 ltr:left-0 rtl:pr-3 ltr:pl-3 flex items-center pointer-events-none">
          <EmailIcon className="text-Nutral-500" />
        </div>
        
        {!disabled && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute inset-y-0 rtl:left-0 ltr:right-0 flex items-center p-2"
          >
            <CloseSquareIcon className="text-Nutral-500" />
          </button>
        )}
      </div>
    </>
  );
}

// InputMobile Component
export function InputMobile({
  label,
  className,
  id,
  error,
  disabled,
  placeholder,
  value,
  onChange,
  onClear,
  ...props
}: InputMobileProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [showError, setShowError] = useState(false);
  
  const handleClear = () => {
    if (inputRef.current) {
      inputRef.current.value = "";
      const event = new Event('input', { bubbles: true });
      inputRef.current.dispatchEvent(event);
    }
    onClear?.();
  };

  return (
    <>
      {label && (
        <label htmlFor={id} className="text-base font-medium text-Neutral-300 px-3 mb-1">
          {label}
        </label>
      )}
      <div className="relative">
        <input
          ref={inputRef}
          id={id}
          type="tel"
          inputMode="numeric"
          pattern="^09[0-9]{9}$"
          maxLength={11}
          placeholder={placeholder}
          disabled={disabled}
          value={value}
          onChange={onChange}
          onBlur={() => setShowError(false)}
          onFocus={() => setShowError(false)}
          className={cn(
            "autofill-input peer placeholder-Neutral-200 w-full px-[2.7rem] py-3 rounded-2xl bg-secondary-50 dark:bg-background-light border border-secondary-100 focus:outline-none focus:ring-0 focus:border-secondary-400 justify-between items-center text-Neutral-500 dark:text-white relative",
            className
          )}
          {...props}
        />
        
        {!disabled && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute inset-y-0 rtl:left-0 ltr:right-0 flex items-center p-2"
          >
            <CloseSquareIcon />
          </button>
        )}
        
        <div className="absolute inset-y-0 rtl:right-0 ltr:left-0 rtl:pr-3 ltr:pl-3 flex items-center pointer-events-none">
          <MobielIcon />
        </div>
        
        {error && !showError && (
          <div className="peer-focus:hidden absolute inset-x-0 mt-2 mx-3">
            <div className="text-Error-400 text-xs font-medium">{translate(error)}</div>
          </div>
        )}
        
        <div className="hidden peer-invalid:flex absolute mt-2 mx-3">
          <div className="text-Error-400 text-xs font-medium">
            {translate("error_invalid_mobile")}
          </div>
        </div>
      </div>
    </>
  );
}

// InputTextArea Component
export function InputTextArea({
  label,
  className,
  id,
  value,
  onChange,
  ...props
}: InputTextAreaProps) {
  return (
    <div className="flex flex-col">
      {label && (
        <label htmlFor={id} className="text-Neutral-300 text-[10px] font-medium px-3 mb-1">
          {label}
        </label>
      )}
      <textarea
        id={id}
        value={value}
        onChange={onChange}
        className={cn(
          "p-4 rounded-[20px] border-2 border-Neutral-50 focus:outline-none focus:ring-0 focus:border-secondary-400",
          className
        )}
        {...props}
      />
    </div>
  );
}

// InputSearch Component
export function InputSearch({
  className,
  id,
  inputSearchRef,
  classNameParent,
  searchClassname,
  param,
  value,
  onChange,
  ...props
}: InputSearchProps) {
  return (
    <div ref={inputSearchRef} className={cn("relative", classNameParent)}>
      <div className="absolute rtl:right-3 ltr:left-3 h-full inline-flex items-center">
        <SearchIcon className={searchClassname} />
      </div>
      
      {param && (
        <div className="absolute rtl:left-4 ltr:right-4 h-full inline-flex flex-row-reverse items-center">
          <span className="text-Neutral-300 dark:text-Neutral-100 text-sm font-semibold leading-tight tracking-tight">
            {param}
          </span>
        </div>
      )}
      
      <input
        id={id}
        type="text"
        value={value}
        onChange={onChange}
        className={cn(
          `autofill-input w-full bg-secondary-50 dark:bg-background-light text-Neutral-400 dark:text-Neutral-100 rounded-2xl ${
            param ? "rtl:pr-11 rtl:pl-12 ltr:pl-11 ltr:pr-12" : "rtl:pr-11 ltr:pl-11"
          } h-11 border-2 border-Neutral-50 dark:border-background-light focus-visible:outline focus-visible:outline-white`,
          className
        )}
        {...props}
      />
    </div>
  );
}

// InputPassword Component
export function InputPassword({
  label,
  className,
  id,
  variant = "password",
  error,
  buttonFirstId,
  buttonSecondId,
  value,
  onChange,
  onClear,
  ...props
}: InputPasswordProps) {
  const [showPassword, setShowPassword] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  
  const handleClear = () => {
    if (inputRef.current) {
      inputRef.current.value = "";
      const event = new Event('input', { bubbles: true });
      inputRef.current.dispatchEvent(event);
    }
    onClear?.();
  };

  return (
    <>
      {label && (
        <label htmlFor={id} className="text-base font-medium text-Neutral-300 px-3">
          {label}
        </label>
      )}
      <div className="w-full relative mt-1">
        <input
          ref={inputRef}
          id={id}
          type={showPassword ? "text" : "password"}
          minLength={5}
          placeholder="xxxx xxxx xxxx xxxx"
          value={value}
          onChange={onChange}
          className={cn(
            "autofill-input peer placeholder-Neutral-200 w-full px-[2.7rem] py-3 rounded-2xl bg-secondary-50 dark:bg-background-light border border-secondary-100 focus:outline-none focus:ring-0 focus:border-secondary-400 justify-between items-center text-Neutral-500 dark:text-white relative",
            variant === "change_password" && "invalid:focus:border-Error-400 invalid:border-Error-400",
            className
          )}
          {...props}
        />
        
        <div className="absolute inset-y-0 rtl:right-0 ltr:left-0 rtl:pr-3 ltr:pl-3 flex items-center pointer-events-none">
          <LockIcon />
        </div>
        
        <div className="absolute inset-y-0 rtl:left-0 ltr:right-0 px-3 flex items-center">
          {variant === "password" ? (
            <button type="button" onClick={handleClear}>
              <CloseSquareIcon />
            </button>
          ) : (
            <button type="button" onClick={handleTogglePassword}>
              {showPassword ? <HideIcon /> : <ShowIcon />}
            </button>
          )}
        </div>
        
        {error && (
          <div className="peer-focus:hidden absolute mt-2 mx-3">
            <div className="text-Error-400 text-xs font-medium">{translate(error)}</div>
          </div>
        )}
        
        <div className="hidden peer-invalid:flex absolute my-2 mx-3">
          <div className="text-Error-400 text-xs font-medium">
            {translate("error_min_length_password")}
          </div>
        </div>
      </div>
    </>
  );
}

// InputRePassword Component
export function InputRePassword({
  label,
  id,
  buttonId,
  passwordFieldId = "ch_password",
  ...props
}: InputRePasswordProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [value, setValue] = useState("");
  
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    
    const passwordField = document.getElementById(passwordFieldId) as HTMLInputElement;
    if (passwordField && passwordField.value !== newValue) {
      setError("error_re_password");
    } else {
      setError("");
    }
  };

  return (
    <>
      {label && (
        <label htmlFor={id} className="text-base font-medium text-Neutral-300 px-3">
          {label}
        </label>
      )}
      <div className="w-full relative mt-1">
        <input
          id={id}
          type={showPassword ? "text" : "password"}
          placeholder="xxxx xxxx xxxx xxxx"
          value={value}
          onChange={handleChange}
          className={cn(
            "autofill-input placeholder-Neutral-200 w-full px-[2.7rem] py-3 rounded-2xl bg-secondary-50 dark:bg-background-light border border-secondary-100 focus:outline-none focus:ring-0 focus:border-secondary-400 justify-between items-center text-Neutral-500 dark:text-white relative",
            error && "!border-Error-400 !focus:border-Error-400"
          )}
          {...props}
        />
        
        <button
          type="button"
          onClick={handleTogglePassword}
          className="absolute inset-y-0 rtl:left-0 ltr:right-0 px-3 flex items-center cursor-pointer"
        >
          {showPassword ? <HideIcon /> : <ShowIcon />}
        </button>
        
        <div className="absolute inset-y-0 rtl:right-0 ltr:left-0 rtl:pr-3 ltr:pl-3 flex items-center pointer-events-none">
          <LockIcon />
        </div>
        
        {error && (
          <div className="absolute mt-2 mx-3">
            <div className="text-Error-400 text-xs font-medium">{translate(error)}</div>
          </div>
        )}
      </div>
    </>
  );
}

// InputDarkLight Component
export function InputDarkLight({ className }: InputDarkLightProps) {
  const [isDark, setIsDark] = useState(() => {
    return document.documentElement.classList.contains("dark");
  });
  
  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    
    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
    
    const themeColorMeta = document.querySelector('meta[name="theme-color"]');
    if (themeColorMeta) {
      themeColorMeta.setAttribute("content", "#e57c43");
    }
  };

  return (
    <div className="inline-flex items-center relative cursor-pointer" onClick={toggleTheme}>
      <input
        className="peer hidden"
        id="toggle"
        type="checkbox"
        checked={!isDark}
        onChange={() => {}}
      />
      <div className="relative w-[4rem] h-[2rem] peer-checked:bg-white bg-background rounded-full after:absolute after:content-[''] after:w-[1.5rem] after:h-[1.5rem] after:rounded-full after:top-[0.25rem] after:left-[0.25rem] after:bg-[linear-gradient(to_right,_#444350,_#444350)] peer-checked:after:bg-[linear-gradient(to_right,_#f97316,_#facc15)] active:after:w-[1.875rem] peer-checked:after:left-[3.75rem] peer-checked:after:translate-x-[-100%] shadow-sm duration-500 after:duration-500 after:shadow-md" />
      
      <MoonIcon
        width="1.25rem"
        height="1.25rem"
        color="white"
        className="peer-checked:fill-black opacity-60 peer-checked:opacity-70 fill-white absolute w-4 h-4 left-[0.5rem]"
      />
      
      <SunIcon
        width="1.25rem"
        height="1.25rem"
        color="white"
        className="fill-white peer-checked:opacity-60 absolute w-4 h-4 right-[0.5rem]"
      />
    </div>
  );
}

// InputRadioButton Component
export function InputRadioButton({
  className,
  id,
  index = 0,
  name,
  useIndex = true,
  onSortChange,
  ...props
}: InputRadioButtonProps) {
  const handleClick = () => {
    if (useIndex && onSortChange) {
      onSortChange(index);
    }
  };

  return (
    <div className="relative">
      <input
        type="radio"
        id={`${id}_RadioDropDownItem_${index}`}
        name={`RadioInput${name}`}
        onClick={handleClick}
        className={cn(
          "peer appearance-none absolute top-[-0.5rem] ltr:right-0 rtl:left-0 w-5 h-5 transition-all !bg-transparent dark:bg-transparent border-2 border-Neutral-300 rounded-sm cursor-pointer checked:!bg-primary-400 checked:!border-primary-400 focus:ring-0 focus:ring-offset-0 after:content-[''] after:absolute after:inset-0 after:bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxwb2x5bGluZSBwb2ludHM9IjIwIDYgOSAxNyA0IDEyIj48L3BvbHlsaW5lPjwvc3ZnPg==')] after:bg-no-repeat after:bg-center after:opacity-0 checked:after:opacity-100 z-30",
          className
        )}
        {...props}
      />
      
      <label
        htmlFor={`${id}_RadioDropDownItem_${index}`}
        className="absolute top-[-1.15rem] ltr:right-[-0.525rem] rtl:left-[-0.625rem] rounded-full h-[2.5rem] w-[2.5rem] flex justify-center items-center peer-checked:bg-white dark:peer-checked:bg-background z-10"
      />
    </div>
  );
}

// InputToggle Component
export function InputToggle({
  className,
  checked = false,
  onStatusChange,
  ...props
}: InputToggleProps) {
  const [isChecked, setIsChecked] = useState(() => {
    return typeof checked === "string" ? checked === "true" : Boolean(checked);
  });
  
  useEffect(() => {
    const newChecked = typeof checked === "string" ? checked === "true" : Boolean(checked);
    setIsChecked(newChecked);
  }, [checked]);
  
  const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.checked;
    setIsChecked(newValue);
    onStatusChange?.(newValue);
  };

  return (
    <label className={cn("inline-flex items-center cursor-pointer", className)}>
      <input
        type="checkbox"
        className="sr-only peer"
        checked={isChecked}
        onChange={handleToggle}
        {...props}
      />
      <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-2 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-300 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary-400 dark:peer-checked:bg-primary-400" />
    </label>
  );
}