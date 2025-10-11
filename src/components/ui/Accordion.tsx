"use client";

import React, { ReactNode, useState } from "react";
import { cn } from "../../lib/utils";

export type AccordionProps = {
  parentClassName?: string;
  className?: string;
  circleLocation?: string;
  secoundCircleLocation?: string;
  children: ReactNode;
  icon?: ReactNode;
  title: string;
  title_classname?: string;
  open?: boolean;
  sliding?: boolean;
  animation?: "scale" | "fade" | "slide" | "bounce";
};

const Accordion: React.FC<AccordionProps> = ({
  parentClassName,
  className,
  circleLocation,
  secoundCircleLocation,
  children,
  icon,
  title,
  title_classname,
  open = false,
  sliding = true,
  animation = "slide",
}) => {
  const [isOpen, setIsOpen] = useState(open);

  const toggleOpen = () => {
    if (sliding) setIsOpen(!isOpen);
  };

  const getAnimationClasses = () => {
    switch (animation) {
      case "scale":
        return isOpen
          ? "max-h-screen scale-100 opacity-100"
          : "max-h-0 scale-95 opacity-0";
      case "fade":
        return isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0";
      case "bounce":
        return isOpen
          ? "max-h-screen opacity-100 animate-bounce"
          : "max-h-0 opacity-0";
      case "slide":
      default:
        return isOpen
          ? "max-h-screen translate-y-0 opacity-100"
          : "max-h-0 -translate-y-2 opacity-0";
    }
  };

  return (
    <div
      className={cn("relative overflow-hidden rounded-2xl", parentClassName)}
    >
      <div
        className={cn(
          "flex flex-row w-full items-start justify-between bg-white dark:bg-background-light border border-Neutral-100 dark:border-Neutral-400/50 rounded-2xl",
          className
        )}
      >
        <div className="flex flex-col w-full">
          <div
            onClick={toggleOpen}
            className={cn(
              "p-4 flex flex-row justify-between items-center",
              sliding && "cursor-pointer"
            )}
          >
            <div className="flex flex-row gap-2 items-center">
              {icon && (
                <span className="bg-secondary-50 dark:bg-background-light rounded-full p-2">
                  {icon}
                </span>
              )}
              <div
                className={cn(
                  "text-Neutral-500 dark:text-white text-base font-medium inline-flex select-none",
                  title_classname
                )}
              >
                {title}
              </div>
            </div>

            {sliding && (
              <svg
                className={cn(
                  "w-4 h-4 transition-transform duration-300 text-gray-600",
                  isOpen ? "rotate-180" : "rotate-90"
                )}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            )}
          </div>

          {/* Content */}
          <div
            className={cn(
              "overflow-hidden transition-all duration-300 ease-in-out",
              getAnimationClasses()
            )}
          >
            <div className="p-4">{children}</div>
          </div>
        </div>
      </div>

      {/* Background Circles */}
      {circleLocation && isOpen && (
        <div className="w-full">
          <div
            className={cn(
              "absolute transition-all duration-700 ease-in-out w-40 h-40 opacity-50 bg-violet-300/30 rounded-full blur-2xl pointer-events-none",
              circleLocation
            )}
          />
        </div>
      )}
      {secoundCircleLocation && isOpen && (
        <div className="w-full">
          <div
            className={cn(
              "absolute transition-all duration-700 ease-in-out w-40 h-40 opacity-50 bg-violet-300/30 rounded-full blur-2xl pointer-events-none",
              secoundCircleLocation
            )}
          />
        </div>
      )}
    </div>
  );
};

export default Accordion;
