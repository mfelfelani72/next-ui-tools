import React from "react";
import { cn } from "../../lib/utils";

interface IconProps {
  className?: string;
  width?: string | number;
  height?: string | number;
  color?: string;
}



export const SearchIcon = ({ className, ...props }: IconProps) => (
  <svg
    className={cn("text-Neutral-200 dark:text-white w-6 h-6", className)}
    viewBox="0 0 24 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="Iconly/Curved/Light/Search">
      <g id="Search">
        <path
          id="Stroke 1"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.2754 2.5824C16.003 2.5824 19.8364 6.24121 19.8364 10.7556C19.8364 15.27 16.003 18.9289 11.2754 18.9289C6.54686 18.9289 2.71448 15.27 2.71448 10.7556C2.71448 6.24121 6.54686 2.5824 11.2754 2.5824Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Stroke 3"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19.899 17.6414C20.678 17.6414 21.3095 18.2451 21.3095 18.988C21.3095 19.7326 20.678 20.3355 19.899 20.3355C19.1199 20.3355 18.4875 19.7326 18.4875 18.988C18.4875 18.2451 19.1199 17.6414 19.899 17.6414Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </g>
  </svg>
);



export const FolderIcon = ({ className, ...props }: IconProps) => (
  <svg
    className={cn("text-Neutral-200 dark:text-white w-6 h-6", className)}
    viewBox="0 0 24 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="Iconly/Curved/Light/Folder">
      <g id="Folder">
        <path
          id="Stroke 1"
          d="M7.30566 13.9052H16.8987"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Stroke 2"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.5 7.43621C2.5 5.1049 3.75 3.10274 6.122 2.63811C8.493 2.17257 10.295 2.33351 11.792 3.10455C13.29 3.8756 12.861 5.01397 14.4 5.84957C15.94 6.68608 18.417 5.4295 20.035 7.09615C21.729 8.841 21.72 11.5196 21.72 13.2272C21.72 19.7156 17.913 20.2302 12.11 20.2302C6.307 20.2302 2.5 19.7811 2.5 13.2272V7.43621Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </g>
  </svg>
);


export const WalletIcon = ({ className, ...props }: IconProps) => (
  <svg
    className={cn("text-Neutral-200 dark:text-white w-6 h-6", className)}
    viewBox="0 0 24 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="Iconly/Curved/Light/Wallet">
      <g id="Wallet">
        <path
          id="Stroke 1"
          d="M21.1712 14.0019H17.2845C15.8693 14.0019 14.7217 12.9063 14.7217 11.5542C14.7217 10.2031 15.8693 9.10742 17.2845 9.10742H21.1407"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Stroke 3"
          d="M17.7221 11.4983H17.4249"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Stroke 5"
          d="M7.6062 7.76593H11.6662"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Stroke 7"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.71411 11.6892C2.71411 5.57455 5.03887 3.53693 12.0151 3.53693C18.9903 3.53693 21.3151 5.57455 21.3151 11.6892C21.3151 17.803 18.9903 19.8416 12.0151 19.8416C5.03887 19.8416 2.71411 17.803 2.71411 11.6892Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </g>
  </svg>
);


export const GraphIcon = ({ className, ...props }: IconProps) => (
  <svg
    className={cn("text-Neutral-200 dark:text-white w-6 h-6", className)}
    viewBox="0 0 24 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="Iconly/Curved/Light/Graph">
      <g id="Graph">
        <path
          id="Stroke 1"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.6786 3.18797C12.9706 3.96606 12.6886 8.85894 13.5116 9.64563C14.3346 10.4304 19.2796 10.0332 20.4676 9.14058C23.3256 6.99153 15.9386 0.70381 13.6786 3.18797Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Stroke 3"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.1376 13.1565C19.2216 14.1914 16.3476 20.0915 10.6516 20.0915C6.39758 20.0915 2.94958 16.7996 2.94958 12.7393C2.94958 7.6793 8.17859 4.44283 9.67759 5.87394C10.5406 6.69786 9.56858 10.5749 11.1166 12.0538C12.6646 13.5326 17.0536 12.1216 18.1376 13.1565Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </g>
  </svg>
);



export const BookmarkIcon = ({ className, ...props }: IconProps) => (
  <svg
    className={cn("text-Neutral-200 dark:text-white w-6 h-6", className)}
    viewBox="0 0 24 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="Iconly/Curved/Light/Bookmark">
      <g id="Bookmark">
        <path
          id="Stroke 1"
          d="M8.54248 8.79126H15.3975"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Stroke 2"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.9702 2.37781C5.58324 2.37781 4.50424 3.2676 4.50424 10.4251C4.50424 18.4379 4.34724 20.5173 5.94324 20.5173C7.53824 20.5173 10.1432 17.0001 11.9702 17.0001C13.7972 17.0001 16.4022 20.5173 17.9972 20.5173C19.5932 20.5173 19.4362 18.4379 19.4362 10.4251C19.4362 3.2676 18.3572 2.37781 11.9702 2.37781Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </g>
  </svg>
);


export const CategoryIcon = ({ className, ...props }: IconProps) => (
  <svg
    className={cn("text-Neutral-200 dark:text-white w-6 h-6", className)}
    viewBox="0 0 24 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="Iconly/Curved/Light/Category">
      <g id="Category">
        <path
          id="Stroke 1"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M21.0004 6.36258C21.0004 8.2993 19.3552 9.86999 17.3266 9.86999C15.298 9.86999 13.6537 8.2993 13.6537 6.36258C13.6537 4.42585 15.298 2.85516 17.3266 2.85516C19.3552 2.85516 21.0004 4.42585 21.0004 6.36258Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Stroke 3"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.3467 6.36258C10.3467 8.2993 8.7024 9.86999 6.6729 9.86999C4.6452 9.86999 3 8.2993 3 6.36258C3 4.42585 4.6452 2.85516 6.6729 2.85516C8.7024 2.85516 10.3467 4.42585 10.3467 6.36258Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Stroke 5"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M21.0004 16.4712C21.0004 18.4079 19.3552 19.9777 17.3266 19.9777C15.298 19.9777 13.6537 18.4079 13.6537 16.4712C13.6537 14.5345 15.298 12.9638 17.3266 12.9638C19.3552 12.9638 21.0004 14.5345 21.0004 16.4712Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Stroke 7"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.3467 16.4712C10.3467 18.4079 8.7024 19.9777 6.6729 19.9777C4.6452 19.9777 3 18.4079 3 16.4712C3 14.5345 4.6452 12.9638 6.6729 12.9638C8.7024 12.9638 10.3467 14.5345 10.3467 16.4712Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </g>
  </svg>
);


export const HomeIcon = ({ className, ...props }: IconProps) => (
  <svg
    className={cn("text-Neutral-200 dark:text-white w-6 h-6", className)}
    viewBox="0 0 24 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="Iconly/Curved/Light/Home">
      <g id="Home">
        <path
          id="Stroke 1"
          d="M9.07874 15.3957H14.8937"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Stroke 2"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.40002 13.083C2.40002 7.707 3.01402 8.0822 6.31902 5.15601C7.76502 4.04473 10.015 1.90045 11.958 1.90045C13.9 1.90045 16.195 4.03423 17.654 5.15601C20.959 8.0822 21.572 7.707 21.572 13.083C21.572 20.9947 19.613 20.9947 11.986 20.9947C4.35903 20.9947 2.40002 20.9947 2.40002 13.083Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </g>
  </svg>
);



export const NotificationIcon = ({ className, ...props }: IconProps) => (
  <svg
    className={cn("text-Neutral-200 dark:text-white w-6 h-6", className)}
    viewBox="0 0 24 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="Iconly/Curved/Light/Notification">
      <g id="Notification">
        <path
          id="Stroke 1"
          d="M12 2C8.13401 2 5 5.13401 5 9V15H19V9C19 5.13401 15.866 2 12 2Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Stroke 2"
          d="M12 22C13.6569 22 15 20.6569 15 19H9C9 20.6569 10.3431 22 12 22Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </g>
  </svg>
);


export const ChatIcon = ({ className, ...props }: IconProps) => (
  <svg
    className={cn("text-Neutral-200 dark:text-white w-6 h-6", className)}
    viewBox="0 0 24 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="Iconly/Curved/Light/Chat">
      <g id="Chat">
        <path
          id="Stroke 11"
          d="M15.9393 11.8419H15.9483"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Stroke 13"
          d="M11.9304 11.8419H11.9394"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Stroke 15"
          d="M7.9214 11.8419H7.9304"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Stroke 4"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19.071 18.1972C16.0159 21.1153 11.4896 21.7457 7.78631 20.1106C7.23961 19.9005 3.70113 20.836 2.93334 20.1039C2.16555 19.3708 3.14639 15.9921 2.92631 15.4701C1.21285 11.935 1.87411 7.6121 4.9302 4.69498C8.83147 0.968941 15.1698 0.968941 19.071 4.69498C22.9803 8.42678 22.9723 14.4721 19.071 18.1972Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </g>
  </svg>
);


export const HeartIcon = ({ className, ...props }: IconProps) => (
  <svg
    className={cn("text-Neutral-200 dark:text-white w-6 h-6", className)}
    viewBox="0 0 24 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="Iconly/Curved/Light/Heart">
      <g id="Heart">
        <path
          id="Stroke 1"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.9219 11.8736C1.8489 8.67536 3.1039 4.69899 6.6209 3.61826C8.4709 3.0483 10.7539 3.52374 12.0509 5.23172C13.2739 3.46073 15.6229 3.05212 17.4709 3.61826C20.9869 4.69899 22.2489 8.67536 21.1769 11.8736C19.5069 16.9432 13.6799 19.5839 12.0509 19.5839C10.4229 19.5839 4.6479 17.0023 2.9219 11.8736Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Stroke 3"
          d="M15.7886 7.21246C16.9956 7.33085 17.7506 8.24451 17.7056 9.52477"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </g>
  </svg>
);


export const PaperIcon = ({ className, ...props }: IconProps) => (
  <svg
    className={cn("text-Neutral-200 dark:text-white w-6 h-6", className)}
    viewBox="0 0 24 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="Iconly/Curved/Light/Paper">
      <g id="Paper">
        <path
          id="Stroke 1"
          d="M6 2H18C19.1046 2 20 2.89543 20 4V19C20 20.1046 19.1046 21 18 21H6C4.89543 21 4 20.1046 4 19V4C4 2.89543 4.89543 2 6 2Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Stroke 2"
          d="M8 7H16"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Stroke 3"
          d="M8 11H16"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Stroke 4"
          d="M8 15H12"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </g>
  </svg>
);



export const PaperPlusIcon = ({ className, ...props }: IconProps) => (
  <svg
    className={cn("text-Neutral-200 dark:text-white w-6 h-6", className)}
    viewBox="0 0 24 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="Iconly/Curved/Light/Paper Plus">
      <g id="Paper Plus">
        <path
          id="Stroke 1"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20.1601 7.91504L14.4901 2.7596C13.7601 2.66413 12.9401 2.61639 12.0401 2.61639C5.75015 2.61639 3.65015 4.83132 3.65015 11.4475C3.65015 18.0732 5.75015 20.2785 12.0401 20.2785C18.3401 20.2785 20.4401 18.0732 20.4401 11.4475C20.4401 10.0918 20.3501 8.91748 20.1601 7.91504Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Stroke 3"
          d="M13.9341 2.69534V5.23583C13.9341 7.00968 15.4401 8.44652 17.2981 8.44652H20.2491"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Stroke 5"
          d="M14.3125 12.3837H9.41248"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Stroke 7"
          d="M11.8633 14.7229V10.0448"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </g>
  </svg>
);


export const PaperNegativeIcon = ({ className, ...props }: IconProps) => (
  <svg
    className={cn("text-Neutral-200 dark:text-white w-6 h-6", className)}
    viewBox="0 0 24 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="Iconly/Curved/Light/Paper Negative">
      <g id="Paper Negative">
        <path
          id="Stroke 1"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20.1598 7.91504L14.4898 2.7596C13.7598 2.66413 12.9398 2.61639 12.0398 2.61639C5.74978 2.61639 3.64978 4.83132 3.64978 11.4475C3.64978 18.0732 5.74978 20.2785 12.0398 20.2785C18.3398 20.2785 20.4398 18.0732 20.4398 11.4475C20.4398 10.0918 20.3498 8.91748 20.1598 7.91504Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Stroke 3"
          d="M13.9342 2.69534V5.23583C13.9342 7.00968 15.4402 8.44652 17.2982 8.44652H20.2492"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Stroke 5"
          d="M14.3122 12.3837H9.41223"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </g>
  </svg>
);


export const PaperFailIcon = ({ className, ...props }: IconProps) => (
  <svg
    className={cn("text-Neutral-200 dark:text-white w-6 h-6", className)}
    viewBox="0 0 24 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="Iconly/Curved/Light/Paper Fail">
      <g id="Paper Fail">
        <path
          id="Stroke 1"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20.1601 7.91504L14.4901 2.7596C13.7601 2.66413 12.9401 2.61639 12.0401 2.61639C5.75015 2.61639 3.65015 4.83132 3.65015 11.4475C3.65015 18.0732 5.75015 20.2785 12.0401 20.2785C18.3401 20.2785 20.4401 18.0732 20.4401 11.4475C20.4401 10.0918 20.3501 8.91748 20.1601 7.91504Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Stroke 3"
          d="M13.9341 2.69534V5.23583C13.9341 7.00968 15.4401 8.44652 17.2981 8.44652H20.2491"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Stroke 5"
          d="M13.5952 14.039L10.1292 10.73"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Stroke 7"
          d="M10.1299 14.039L13.5959 10.73"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </g>
  </svg>
);


export const PaperDownloadIcon = ({ className, ...props }: IconProps) => (
  <svg
    className={cn("text-Neutral-200 dark:text-white w-6 h-6", className)}
    viewBox="0 0 24 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="Iconly/Curved/Light/Paper Download">
      <g id="Paper Download">
        <path
          id="Stroke 1"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20.1598 7.91504L14.4898 2.7596C13.7598 2.66413 12.9398 2.61639 12.0398 2.61639C5.74978 2.61639 3.64978 4.83132 3.64978 11.4475C3.64978 18.0732 5.74978 20.2785 12.0398 20.2785C18.3398 20.2785 20.4398 18.0732 20.4398 11.4475C20.4398 10.0918 20.3498 8.91748 20.1598 7.91504Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Stroke 3"
          d="M13.9342 2.69534V5.23583C13.9342 7.00968 15.4402 8.44652 17.2982 8.44652H20.2492"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Stroke 5"
          d="M11.6603 15.2828V9.51541"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Stroke 7"
          d="M9.31458 13.0345L11.6596 15.2828L14.0046 13.0345"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </g>
  </svg>
);


export const PaperUploadIcon = ({ className, ...props }: IconProps) => (
  <svg
    className={cn("text-Neutral-200 dark:text-white w-6 h-6", className)}
    viewBox="0 0 24 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="Iconly/Curved/Light/Paper Upload">
      <g id="Paper Upload">
        <path
          id="Stroke 1"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20.1601 7.91504L14.4901 2.7596C13.7601 2.66413 12.9401 2.61639 12.0401 2.61639C5.75015 2.61639 3.65015 4.83132 3.65015 11.4475C3.65015 18.0732 5.75015 20.2785 12.0401 20.2785C18.3401 20.2785 20.4401 18.0732 20.4401 11.4475C20.4401 10.0918 20.3501 8.91748 20.1601 7.91504Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Stroke 3"
          d="M13.9341 2.69534V5.23583C13.9341 7.00968 15.4401 8.44652 17.2981 8.44652H20.2491"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Stroke 5"
          d="M11.6597 9.51532V15.2827"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Stroke 7"
          d="M14.0048 11.7642L11.6598 9.51581L9.31482 11.7642"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </g>
  </svg>
);


export const SendIcon = ({ className, ...props }: IconProps) => (
  <svg
    className={cn("text-Neutral-200 dark:text-white w-6 h-6", className)}
    viewBox="0 0 24 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="Iconly/Curved/Light/Send">
      <g id="Send">
        <path
          id="Stroke 1"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.4933 11.8659C11.4933 11.8659 -0.483351 9.50048 3.6786 7.20674C7.19075 5.27126 19.2947 1.94357 20.9857 2.80338C21.8863 4.4178 18.4007 15.9736 16.3734 19.3266C13.9709 23.3001 11.4933 11.8659 11.4933 11.8659Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Stroke 3"
          d="M11.4933 11.8659L20.9857 2.80338"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </g>
  </svg>
);


export const PasswordIcon = ({ className, ...props }: IconProps) => (
  <svg
    className={cn("text-Neutral-200 dark:text-white w-6 h-6", className)}
    viewBox="0 0 24 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="Iconly/Curved/Light/Password">
      <g id="Password">
        <path
          id="Stroke 1"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17 10.5V7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7V10.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Stroke 2"
          d="M5 10.5H19C20.6569 10.5 22 11.8431 22 13.5V18.5C22 20.1569 20.6569 21.5 19 21.5H5C3.34315 21.5 2 20.1569 2 18.5V13.5C2 11.8431 3.34315 10.5 5 10.5Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Stroke 3"
          d="M12 14.5V17.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </g>
  </svg>
);

export const SwapIcon = ({ className, ...props }: IconProps) => (
  <svg
    className={cn("text-Neutral-200 dark:text-white w-6 h-6", className)}
    viewBox="0 0 24 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="Iconly/Curved/Light/Swap">
      <g id="Swap">
        <path
          id="Stroke 1"
          d="M6.97913 4.38394V16.4305"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Stroke 3"
          d="M2.90002 8.297C2.90002 8.297 5.06902 4.38269 6.97802 4.38269C8.88602 4.38269 11.056 8.297 11.056 8.297"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Stroke 5"
          d="M16.9059 18.5387V6.49213"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Stroke 7"
          d="M20.985 14.6252C20.985 14.6252 18.815 18.5395 16.907 18.5395C14.999 18.5395 12.829 14.6252 12.829 14.6252"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </g>
  </svg>
);


export const WorkIcon = ({ className, ...props }: IconProps) => (
  <svg
    className={cn("text-Neutral-200 dark:text-white w-6 h-6", className)}
    viewBox="0 0 24 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="Iconly/Curved/Light/Work">
      <g id="Work">
        <path
          id="Stroke 1"
          d="M11.9611 15.7598V13.2508"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Stroke 2"
          d="M21.0895 10.9489L21.0605 10.969C18.6385 12.3934 15.4405 13.2536 11.9565 13.2536C8.47246 13.2536 5.28346 12.3934 2.86246 10.969L2.83246 10.9489"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Stroke 4"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.75018 12.7371C2.75018 6.86369 5.05318 4.90558 11.9612 4.90558C18.8702 4.90558 21.1722 6.86369 21.1722 12.7371C21.1722 18.6104 18.8702 20.5686 11.9612 20.5686C5.05318 20.5686 2.75018 18.6104 2.75018 12.7371Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Stroke 6"
          d="M15.2238 5.11715V4.51568C15.2238 3.30893 14.3008 2.33035 13.1638 2.33035H10.7588C9.62179 2.33035 8.69879 3.30893 8.69879 4.51568V5.11715"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </g>
  </svg>
);


export const ScanIcon = ({ className, ...props }: IconProps) => (
  <svg
    className={cn("text-Neutral-200 dark:text-white w-6 h-6", className)}
    viewBox="0 0 24 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="Iconly/Curved/Light/Scan">
      <g id="Scan">
        <path
          id="Stroke 1"
          d="M4.5 2.5V6.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Stroke 2"
          d="M2.5 4.5H6.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Stroke 3"
          d="M19.5 2.5V6.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Stroke 4"
          d="M17.5 4.5H21.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Stroke 5"
          d="M4.5 20.5V16.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Stroke 6"
          d="M2.5 18.5H6.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Stroke 7"
          d="M19.5 20.5V16.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Stroke 8"
          d="M17.5 18.5H21.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </g>
  </svg>
);


export const ActivityIcon = ({ className, ...props }: IconProps) => (
  <svg
    className={cn("text-Neutral-200 dark:text-white w-6 h-6", className)}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="Iconly/Curved/Light/Activity">
      <g id="Activity">
        <path
          id="Stroke 1"
          d="M6.91711 14.6359L9.91011 10.9231L13.3241 13.4817L16.2531 9.87289"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Stroke 2"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19.6671 2.69833C20.7291 2.69833 21.5891 3.51938 21.5891 4.53329C21.5891 5.54623 20.7291 6.36824 19.6671 6.36824C18.6051 6.36824 17.7451 5.54623 17.7451 4.53329C17.7451 3.51938 18.6051 2.69833 19.6671 2.69833Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Stroke 4"
          d="M20.7555 9.30399C20.8885 10.1585 20.9495 11.1208 20.9495 12.2006C20.9495 18.8244 18.6375 21.0316 11.6995 21.0316C4.76246 21.0316 2.44946 18.8244 2.44946 12.2006C2.44946 5.57775 4.76246 3.36951 11.6995 3.36951C12.8095 3.36951 13.8005 3.42583 14.6825 3.54804"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </g>
  </svg>
);


export const CalendarIcon = ({ className, ...props }: IconProps) => (
  <svg
    className={cn("text-Neutral-200 dark:text-white w-6 h-6", className)}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="Iconly/Curved/Light/Calendar">
      <g id="Calendar">
        <path
          id="Stroke 1"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.74976 12.6518C2.74976 6.01081 5.06876 3.79779 12.0238 3.79779C18.9798 3.79779 21.2988 6.01081 21.2988 12.6518C21.2988 19.2927 18.9798 21.5058 12.0238 21.5058C5.06876 21.5058 2.74976 19.2927 2.74976 12.6518Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Stroke 3"
          d="M3.02515 9.35647H21.0331"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Stroke 5"
          d="M16.4285 13.1152H16.4375"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Stroke 7"
          d="M12.0291 13.1152H12.0381"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Stroke 9"
          d="M7.62135 13.1152H7.63035"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Stroke 11"
          d="M16.4285 16.7927H16.4375"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Stroke 13"
          d="M12.0291 16.7927H12.0381"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Stroke 15"
          d="M7.62135 16.7927H7.63035"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Stroke 17"
          d="M16.033 2.41202V5.52628"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Stroke 19"
          d="M8.02466 2.41202V5.52628"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </g>
  </svg>
);


export const MessageIcon = ({ className, ...props }: IconProps) => (
  <svg
    className={cn("text-Neutral-200 dark:text-white w-6 h-6", className)}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="Iconly/Curved/Light/Message">
      <g id="Message">
        <path
          id="Stroke 1"
          d="M17.5448 9.06531C17.5448 9.06531 14.3348 12.7435 11.9869 12.7435C9.64004 12.7435 6.39392 9.06531 6.39392 9.06531"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Stroke 3"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.45203 11.8815C2.45203 5.35308 4.83298 3.17758 11.9758 3.17758C19.1187 3.17758 21.4996 5.35308 21.4996 11.8815C21.4996 18.4089 19.1187 20.5854 11.9758 20.5854C4.83298 20.5854 2.45203 18.4089 2.45203 11.8815Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </g>
  </svg>
);


export const VideoIcon = ({ className, ...props }: IconProps) => (
  <svg
    className={cn("text-Neutral-200 dark:text-white w-6 h-6", className)}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="Iconly/Curved/Light/Video">
      <g id="Video">
        <path
          id="Stroke 1"
          d="M16.1515 9.68946C17.9896 8.29831 20.4563 6.95262 20.9229 7.43453C21.6943 8.22557 21.6277 15.7541 20.9229 16.4724C20.4943 16.918 18.0086 15.5723 16.1515 14.1902"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Stroke 3"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.5144 11.9466C2.5144 6.98935 4.23917 5.33725 9.41536 5.33725C14.5906 5.33725 16.3154 6.98935 16.3154 11.9466C16.3154 16.9029 14.5906 18.5559 9.41536 18.5559C4.23917 18.5559 2.5144 16.9029 2.5144 11.9466Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </g>
  </svg>
);



export const PlusIcon = ({ className, ...props }: IconProps) => (
  <svg
    className={cn("text-Neutral-200 dark:text-white w-6 h-6", className)}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="Iconly/Curved/Light/Plus">
      <g id="Plus">
        <path
          id="Stroke 1"
          d="M12.0369 8.53412V15.3588"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Stroke 2"
          d="M15.6147 11.9465H8.45886"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Stroke 3"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.30005 11.9465C2.30005 4.97507 4.73479 2.6506 12.0369 2.6506C19.339 2.6506 21.7737 4.97507 21.7737 11.9465C21.7737 18.9179 19.339 21.2423 12.0369 21.2423C4.73479 21.2423 2.30005 18.9179 2.30005 11.9465Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </g>
  </svg>
);


export const ChartIcon = ({ className, ...props }: IconProps) => (
  <svg
    className={cn("text-Neutral-200 dark:text-white w-6 h-6", className)}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="Iconly/Curved/Light/Chart">
      <g id="Chart">
        <path
          id="Stroke 1"
          d="M7.4831 10.251V16.6415"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Stroke 2"
          d="M12.0369 7.1925V16.6421"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Stroke 3"
          d="M16.5157 13.6281V16.6419"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Stroke 4"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.30005 11.9465C2.30005 4.97507 4.73479 2.6506 12.0369 2.6506C19.339 2.6506 21.7737 4.97507 21.7737 11.9465C21.7737 18.9179 19.339 21.2423 12.0369 21.2423C4.73479 21.2423 2.30005 18.9179 2.30005 11.9465Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </g>
  </svg>
);



export const ArrowDownCircleIcon = ({ className, ...props }: IconProps) => (
  <svg
    className={cn("text-Neutral-200 dark:text-white w-6 h-6", className)}
    viewBox="0 0 24 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="Iconly/Curved/Light/Arrow - Down Circle">
      <g id="Arrow - Down Circle">
        <path
          id="Stroke 1"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.75031 11.4476C2.75031 18.0705 5.06331 20.2787 12.0003 20.2787C18.9373 20.2787 21.2503 18.0705 21.2503 11.4476C21.2503 4.82482 18.9373 2.61658 12.0003 2.61658C5.06331 2.61658 2.75031 4.82482 2.75031 11.4476Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Stroke 3"
          d="M8.52863 10.071C8.52863 10.071 10.9206 13.3992 12.0006 13.3992C13.0806 13.3992 15.4706 10.071 15.4706 10.071"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </g>
  </svg>
);


export const ArrowDownSquareIcon = ({ className, ...props }: IconProps) => (
  <svg
    className={cn("text-Neutral-200 dark:text-white w-6 h-6", className)}
    viewBox="0 0 24 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="Iconly/Curved/Light/Arrow - Down Square">
      <g id="Arrow - Down Square">
        <path
          id="Stroke 1"
          d="M12.0001 15.3485V7.5466"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Stroke 2"
          d="M15.752 11.7548C15.752 11.7548 13.224 15.3483 12 15.3483C10.776 15.3483 8.25201 11.7548 8.25201 11.7548"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Stroke 4"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.75012 11.4476C2.75012 18.0705 5.06312 20.2787 12.0001 20.2787C18.9371 20.2787 21.2501 18.0705 21.2501 11.4476C21.2501 4.82482 18.9371 2.61658 12.0001 2.61658C5.06312 2.61658 2.75012 4.82482 2.75012 11.4476Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </g>
  </svg>
);


export const ArrowDownIcon = ({ className, ...props }: IconProps) => (
  <svg
    className={cn("text-Neutral-200 dark:text-white w-6 h-6", className)}
    viewBox="0 0 24 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="Iconly/Curved/Light/Arrow - Down">
      <g id="Arrow - Down">
        <path
          id="Stroke 1"
          d="M12.2743 18.8467V4.526"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Stroke 3"
          d="M18.2988 13.0704C18.2988 13.0704 15.0378 18.8464 12.2758 18.8464C9.51182 18.8464 6.24982 13.0704 6.24982 13.0704"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </g>
  </svg>
);


export const ArrowDown2Icon = ({ className, ...props }: IconProps) => (
  <svg
    className={cn("text-Neutral-200 dark:text-white w-6 h-6", className)}
    viewBox="0 0 24 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="Iconly/Curved/Light/Arrow - Down 2">
      <g id="Arrow - Down 2">
        <path
          id="Stroke 1"
          d="M19 8.10608C19 8.10608 14.856 14.789 12 14.789C9.145 14.789 5 8.10608 5 8.10608"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </g>
  </svg>
);



export const ArrowDown3Icon = ({ className, ...props }: IconProps) => (
  <svg
    className={cn("text-Neutral-200 dark:text-white w-6 h-6", className)}
    viewBox="0 0 24 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="Iconly/Curved/Light/Arrow - Down 3">
      <g id="Arrow - Down 3">
        <path
          id="Stroke 1"
          d="M11.8939 12.1159V3.57129"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Stroke 3"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.8998 19.4231C13.1558 19.4231 17.1708 13.3473 16.4488 12.658C15.7268 11.9687 8.14181 11.9028 7.35081 12.658C6.55981 13.4141 10.6448 19.4231 11.8998 19.4231Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </g>
  </svg>
);


export const CoinIcon = ({ className, ...props }: IconProps) => (
  <svg
    className={cn("text-Neutral-200 dark:text-white w-6 h-6", className)}
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_6115_6756)">
      <path
        d="M11.9986 0.785645C9.01674 0.789395 6.15809 1.97559 4.0496 4.08408C1.94111 6.19257 0.75491 9.05122 0.75116 12.0331C0.75341 15.0159 1.93895 17.876 4.0476 19.9857C6.15625 22.0954 9.01576 23.2824 11.9986 23.2862C14.9824 23.2839 17.8434 22.0976 19.9532 19.9877C22.0631 17.8779 23.2494 15.0169 23.2517 12.0331C23.2479 9.04975 22.0606 6.18982 19.9502 4.08108C17.8399 1.97235 14.9819 0.787144 11.9986 0.785645ZM11.9986 2.28511C13.2799 2.28325 14.5489 2.53415 15.7331 3.02344C16.9173 3.51273 17.9933 4.23081 18.8996 5.13655C19.8059 6.04229 20.5246 7.11791 21.0146 8.30181C21.5045 9.4857 21.7562 10.7546 21.7551 12.0359C21.7554 13.3171 21.5033 14.5858 21.0131 15.7696C20.5229 16.9533 19.8042 18.0288 18.8981 18.9346C17.992 19.8404 16.9163 20.5588 15.7325 21.0487C14.5486 21.5385 13.2798 21.7903 11.9986 21.7895C10.7173 21.7907 9.44838 21.539 8.26449 21.049C7.08059 20.5591 6.00498 19.8404 5.09923 18.9341C4.19349 18.0278 3.47541 16.9518 2.98612 15.7676C2.49683 14.5834 2.24593 13.3144 2.24779 12.0331C2.2463 10.7522 2.4975 9.48354 2.98699 8.29984C3.47649 7.11615 4.19467 6.04064 5.10041 5.13489C6.00615 4.22915 7.08166 3.51097 8.26536 3.02147C9.44905 2.53198 10.7177 2.28079 11.9986 2.28228V2.28511ZM11.9901 6.03804C11.7919 6.04176 11.6031 6.12371 11.4651 6.26602C11.327 6.40832 11.2508 6.59944 11.2531 6.79769V7.42979C10.0428 7.65655 9.00532 8.43605 9.00532 9.78813C9.00532 10.7235 9.4305 11.4832 9.99741 11.9254C10.5643 12.3676 11.2049 12.5603 11.7662 12.7474C12.3302 12.9373 12.8149 13.1159 13.0899 13.3313C13.3677 13.5439 13.4981 13.7281 13.4981 14.2894C13.4981 15.5366 10.5048 15.5366 10.5048 14.2894C10.5111 14.187 10.4964 14.0845 10.4615 13.9881C10.4267 13.8916 10.3725 13.8034 10.3023 13.7287C10.232 13.654 10.1472 13.5945 10.0531 13.5538C9.95903 13.5131 9.85758 13.4921 9.75506 13.4921C9.65253 13.4921 9.55109 13.5131 9.45698 13.5538C9.36287 13.5945 9.27808 13.654 9.20785 13.7287C9.13761 13.8034 9.08341 13.8916 9.04858 13.9881C9.01375 14.0845 8.99903 14.187 9.00532 14.2894C9.00532 15.6386 10.0428 16.4209 11.2531 16.6477V17.277C11.2468 17.3793 11.2615 17.4818 11.2964 17.5783C11.3312 17.6747 11.3854 17.763 11.4556 17.8377C11.5259 17.9124 11.6107 17.9719 11.7048 18.0126C11.7989 18.0532 11.9003 18.0742 12.0028 18.0742C12.1054 18.0742 12.2068 18.0532 12.3009 18.0126C12.395 17.9719 12.4798 17.9124 12.55 17.8377C12.6203 17.763 12.6745 17.6747 12.7093 17.5783C12.7442 17.4818 12.7589 17.3793 12.7526 17.277V16.6449C13.9629 16.4181 15.0004 15.6358 15.0004 14.2865C15.0004 13.3483 14.5752 12.5886 14.0083 12.1493C13.4414 11.7071 12.8008 11.5087 12.2395 11.3216C11.6755 11.1345 11.1907 10.956 10.913 10.7434C10.638 10.5279 10.5048 10.3465 10.5048 9.78529C10.5048 8.53526 13.4981 8.53526 13.4981 9.78529C13.4981 9.98451 13.5772 10.1756 13.7181 10.3164C13.8589 10.4573 14.05 10.5364 14.2492 10.5364C14.4484 10.5364 14.6395 10.4573 14.7804 10.3164C14.9212 10.1756 15.0004 9.98451 15.0004 9.78529C15.0004 8.43605 13.9629 7.65655 12.7526 7.42696V6.79486C12.7537 6.6943 12.7347 6.59453 12.6966 6.50147C12.6584 6.40841 12.602 6.32395 12.5306 6.2531C12.4593 6.18226 12.3744 6.12646 12.281 6.08903C12.1877 6.0516 12.0878 6.0333 11.9873 6.0352L11.9901 6.03804Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="clip0_6115_6756">
        <rect width="24" height="24" fill="white" transform="translate(0 0.0344849)" />
      </clipPath>
    </defs>
  </svg>
);


export const ArrowRightCircleIcon = ({ className, ...props }: IconProps) => (
  <svg
    className={cn("text-Neutral-200 dark:text-white w-6 h-6", className)}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.0001 20.7421C18.9371 20.7421 21.2501 18.5338 21.2501 11.911C21.2501 5.28817 18.9371 3.07993 12.0001 3.07993C5.06312 3.07993 2.75012 5.28817 2.75012 11.911C2.75012 18.5338 5.06312 20.7421 12.0001 20.7421Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.5582 15.2255C10.5582 15.2255 14.0442 12.9418 14.0442 11.9107C14.0442 10.8796 10.5582 8.59787 10.5582 8.59787"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </svg>
);



export const ArrowRightSquareIcon = ({ className, ...props }: IconProps) => (
  <svg
    className={cn("text-Neutral-200 dark:text-white w-6 h-6", className)}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g>
      <path
        d="M16.086 11.9112H7.914"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.3218 8.32924C12.3218 8.32924 16.0858 10.7427 16.0858 11.9113C16.0858 13.0799 12.3218 15.4896 12.3218 15.4896"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.0001 20.7423C18.9371 20.7423 21.2501 18.534 21.2501 11.9112C21.2501 5.28839 18.9371 3.08014 12.0001 3.08014C5.06312 3.08014 2.75012 5.28839 2.75012 11.9112C2.75012 18.534 5.06312 20.7423 12.0001 20.7423Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </svg>
);

export const ArrowRightIcon = ({ className, ...props }: IconProps) => (
  <svg
    className={cn("text-Neutral-200 dark:text-white w-6 h-6", className)}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g>
      <path
        d="M19.7501 11.6494H4.75012"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.6998 5.89776C13.6998 5.89776 19.7498 9.01107 19.7498 11.648C19.7498 14.2868 13.6998 17.4011 13.6998 17.4011"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </svg>
);


export const ArrowRight2Icon = ({ className, ...props }: IconProps) => (
  <svg
    className={cn("text-Neutral-200 dark:text-white w-6 h-6", className)}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g>
      <path
        d="M8.5 5.22833C8.5 5.22833 15.5 9.18465 15.5 11.9113C15.5 14.637 8.5 18.5943 8.5 18.5943"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </svg>
);


export const ArrowRight3Icon = ({ className, ...props }: IconProps) => (
  <svg
    className={cn("text-Neutral-200 dark:text-white w-6 h-6", className)}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g>
      <path
        d="M12.7001 12.0126H3.75012"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.3539 12.0069C20.3539 10.8078 13.9899 6.97467 13.2679 7.66397C12.5459 8.35327 12.4769 15.5948 13.2679 16.3499C14.0599 17.1051 20.3539 13.2051 20.3539 12.0069Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </svg>
);


export const ArrowUpCircleIcon = ({ className, ...props }: IconProps) => (
  <svg
    className={cn("text-Neutral-200 dark:text-white w-6 h-6", className)}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.2497 12.375C21.2497 5.75216 18.9367 3.54392 11.9997 3.54392C5.0627 3.54392 2.74969 5.75216 2.74969 12.375C2.74969 18.9978 5.0627 21.2061 11.9997 21.2061C18.9367 21.2061 21.2497 18.9978 21.2497 12.375Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.4714 13.7516C15.4714 13.7516 13.0794 10.4235 11.9994 10.4235C10.9194 10.4235 8.52937 13.7516 8.52937 13.7516"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </svg>
);


export const ArrowLeftCircleIcon = ({ className, ...props }: IconProps) => (
  <svg
    className={cn("text-Neutral-200 dark:text-white w-6 h-6", className)}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.9999 3.00806C5.06288 3.00806 2.74988 5.2163 2.74988 11.8391C2.74988 18.462 5.06288 20.6702 11.9999 20.6702C18.9369 20.6702 21.2499 18.462 21.2499 11.8391C21.2499 5.2163 18.9369 3.00806 11.9999 3.00806Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.4418 8.52466C13.4418 8.52466 9.95577 10.8083 9.95577 11.8394C9.95577 12.8705 13.4418 15.1523 13.4418 15.1523"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </svg>
);


export const ArrowUpSquareIcon = ({ className, ...props }: IconProps) => (
  <svg
    className={cn("text-Neutral-200 dark:text-white w-6 h-6", className)}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 8.474L12 16.276"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.248 12.068C8.248 12.068 10.776 8.474 12 8.474C13.224 8.474 15.748 12.068 15.748 12.068"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21.25 12.375C21.25 5.752 18.937 3.544 12 3.544C5.063 3.544 2.75 5.752 2.75 12.375C2.75 18.998 5.063 21.206 12 21.206C18.937 21.206 21.25 18.998 21.25 12.375Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ArrowLeftSquareIcon = ({ className, ...props }: IconProps) => (
  <svg
    className={cn("text-Neutral-200 dark:text-white w-6 h-6", className)}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7.914 11.839H16.086"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.678 15.421C11.678 15.421 7.914 13.007 7.914 11.839C7.914 10.67 11.678 8.261 11.678 8.261"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 3.008C5.063 3.008 2.75 5.216 2.75 11.839C2.75 18.462 5.063 20.67 12 20.67C18.937 20.67 21.25 18.462 21.25 11.839C21.25 5.216 18.937 3.008 12 3.008Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ArrowUpIcon = ({ className, ...props }: IconProps) => (
  <svg
    className={cn("text-Neutral-200 dark:text-white w-6 h-6", className)}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M11.726 4.976V19.297"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.701 10.752C5.701 10.752 8.962 4.976 11.724 4.976C14.488 4.976 17.75 10.752 17.75 10.752"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ArrowUp2Icon = ({ className, ...props }: IconProps) => (
  <svg
    className={cn("text-Neutral-200 dark:text-white w-6 h-6", className)}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M5 15.717C5 15.717 9.144 9.034 12 9.034C14.855 9.034 19 15.717 19 15.717"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);


export const ArrowUp3Icon = ({ className, ...props }: IconProps) => (
  <svg
    className={cn("text-Neutral-200 dark:text-white w-6 h-6", className)}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12.106 11.707L12.106 20.251"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.100 4.400C10.844 4.400 6.829 10.475 7.551 11.165C8.273 11.854 15.858 11.920 16.649 11.165C17.440 10.409 13.355 4.400 12.100 4.400Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

export const ArrowLeftIcon = ({ className, ...props }: IconProps) => (
  <svg
    className={cn("text-Neutral-200 dark:text-white w-6 h-6", className)}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4.25 12.101L19.25 12.101"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.3 17.852C10.3 17.852 4.25 14.739 4.25 12.102C4.25 9.463 10.3 6.349 10.3 6.349"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);



export const ArrowLeft2Icon = ({ className, ...props }: IconProps) => (
  <svg
    className={cn("text-Neutral-200 dark:text-white w-6 h-6", className)}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M15.5 18.522C15.5 18.522 8.5 14.566 8.5 11.839C8.5 9.113 15.5 5.156 15.5 5.156"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);


export const ArrowLeft3Icon = ({ className, ...props }: IconProps) => (
  <svg
    className={cn("text-Neutral-200 dark:text-white w-6 h-6", className)}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M11.3 11.738L20.25 11.738"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.646 11.743C3.646 12.942 10.01 16.775 10.732 16.086C11.454 15.397 11.523 8.155 10.732 7.4C9.94 6.645 3.646 10.545 3.646 11.743Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);


export const GameIcon = ({ className, ...props }: IconProps) => (
  <svg
    className={cn("text-Neutral-200 dark:text-white w-6 h-6", className)}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M9.255 11.971V15.384"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.079 13.677H7.432"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15.477 12.075H15.375"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17.208 15.332H17.106"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.514 2.571C8.521 3.252 9.106 3.799 9.82 3.793H10.828C11.931 3.785 12.833 4.628 12.848 5.681V6.643"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21.812 13.721C21.812 8.413 19.426 6.643 12.265 6.643C5.103 6.643 2.716 8.413 2.716 13.721C2.716 19.03 5.103 20.799 12.265 20.799C19.426 20.799 21.812 19.03 21.812 13.721Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const BagIcon = ({ className, ...props }: IconProps) => (
  <svg
    className={cn("text-Neutral-200 dark:text-white w-6 h-6", className)}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6.5 7.5H17.5C18.3284 7.5 19 8.17157 19 9V18.5C19 19.3284 18.3284 20 17.5 20H6.5C5.67157 20 5 19.3284 5 18.5V9C5 8.17157 5.67157 7.5 6.5 7.5Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9 7.5V5.5C9 4.11929 10.1193 3 11.5 3H12.5C13.8807 3 15 4.11929 15 5.5V7.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 7.5H19V18.5H5V7.5Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);



export const Bag2Icon = ({ className, ...props }: IconProps) => (
  <svg
    className={cn("text-Neutral-200 dark:text-white w-6 h-6", className)}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M15.75 9.498V6.603C15.755 4.609 14.066 2.989 11.978 2.984C9.889 2.981 8.193 4.593 8.188 6.587V9.498"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.95 14.019C2.95 8.965 5.205 7.28 11.969 7.28C18.733 7.28 20.988 8.965 20.988 14.019C20.988 19.072 18.733 20.757 11.969 20.757C5.205 20.757 2.95 19.072 2.95 14.019Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);


export const TicketStarIcon = ({ className, ...props }: IconProps) => (
  <svg
    className={cn("text-Neutral-200 dark:text-white w-6 h-6", className)}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21.44 13.815C18.779 13.815 18.779 9.887 21.44 9.887C21.44 5.336 21.44 3.711 12.045 3.711C2.65 3.711 2.65 5.336 2.65 9.887C5.311 9.887 5.311 13.815 2.65 13.815C2.65 18.367 2.65 19.992 12.045 19.992C21.44 19.992 21.44 18.367 21.44 13.815Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.045 9.211C11.362 9.211 11.297 10.251 10.891 10.619C10.484 10.986 9.221 10.566 9.045 11.218C8.87 11.871 10.007 12.093 10.148 12.653C10.288 13.213 9.594 13.999 10.187 14.392C10.781 14.783 11.42 13.897 12.045 13.897C12.67 13.897 13.309 14.783 13.903 14.392C14.497 13.999 13.802 13.213 13.942 12.653C14.082 12.093 15.22 11.871 15.045 11.218C14.869 10.566 13.606 10.986 13.199 10.619C12.793 10.251 12.728 9.211 12.045 9.211Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);



export const MoreCircleIcon = ({ className, ...props }: IconProps) => (
  <svg
    className={cn("text-Neutral-200 dark:text-white w-6 h-6", className)}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.75 11.911C2.75 5.289 5.063 3.08 12 3.08C18.937 3.08 21.25 5.289 21.25 11.911C21.25 18.534 18.937 20.743 12 20.743C5.063 20.743 2.75 18.534 2.75 11.911Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15.205 13.725H15.214"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.205 9.906H12.214"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.196 13.725H9.205"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);



export const MoreSquareIcon = ({ className, ...props }: IconProps) => (
  <svg
    className={cn("text-Neutral-200 dark:text-white w-6 h-6", className)}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.75 11.911C2.75 5.289 5.063 3.08 12 3.08C18.937 3.08 21.25 5.289 21.25 11.911C21.25 18.534 18.937 20.743 12 20.743C5.063 20.743 2.75 18.534 2.75 11.911Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15.994 11.911H16.003"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.995 11.911H12.004"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.996 11.911H8.005"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);



export const DiscountIcon = ({ className, ...props }: IconProps) => (
  <svg
    className={cn("text-Neutral-200 dark:text-white w-6 h-6", className)}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.75 11.911C2.75 5.289 5.063 3.08 12 3.08C18.937 3.08 21.25 5.289 21.25 11.911C21.25 18.534 18.937 20.743 12 20.743C5.063 20.743 2.75 18.534 2.75 11.911Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.43 14.365L14.57 9.458"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.496 14.298H14.505"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.496 9.525H9.505"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);



export const BuyIcon = ({ className, ...props }: IconProps) => (
  <svg
    className={cn("text-Neutral-200 dark:text-white w-6 h-6", className)}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M5.409 6.796C7.719 6.692 10.028 6.584 12.339 6.506C13.412 6.469 14.485 6.438 15.558 6.425C16.583 6.412 17.693 6.284 18.656 6.698C21.959 8.117 20.566 13.822 18.283 15.515C16.692 16.695 14.148 16.783 12.217 16.735C10.425 16.692 8.263 16.497 6.755 15.471C4.156 13.704 5.514 8.889 5.429 5.596C5.48 3.753 3.385 3.454 3.385 3.454"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.885 10.137H15.658"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.149 19.328C7.449 19.328 7.693 19.561 7.693 19.848C7.693 20.135 7.449 20.368 7.149 20.368C6.848 20.368 6.604 20.135 6.604 19.848C6.604 19.561 6.848 19.328 7.149 19.328Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.48 19.328C17.781 19.328 18.025 19.561 18.025 19.848C18.025 20.135 17.781 20.368 17.48 20.368C17.18 20.368 16.936 20.135 16.936 19.848C16.936 19.561 17.18 19.328 17.48 19.328Z"
      fill="currentColor"
    />
  </svg>
);



export const InfoSquaresIcon = ({ className, ...props }: IconProps) => (
  <svg
    className={cn("text-Neutral-200 dark:text-white w-6 h-6", className)}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M2.75 11.911C2.75 5.289 5.063 3.08 12 3.08C18.937 3.08 21.25 5.289 21.25 11.911C21.25 18.534 18.937 20.743 12 20.743C5.063 20.743 2.75 18.534 2.75 11.911Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15.994 11.911H16.003"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.995 11.911H12.004"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.996 11.911H8.005"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);



export const DangerSquareIcon = ({ className, ...props }: IconProps) => (
  <svg
    className={cn("text-Neutral-200 dark:text-white w-6 h-6", className)}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M2.75 11.911C2.75 5.289 5.063 3.08 12 3.08C18.937 3.08 21.25 5.289 21.25 11.911C21.25 18.534 18.937 20.743 12 20.743C5.063 20.743 2.75 18.534 2.75 11.911Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 8.193V11.911"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.995 15.253H12.004"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);



export const DangerTriangleIcon = ({ className, ...props }: IconProps) => (
  <svg
    className={cn("text-Neutral-200 dark:text-white w-6 h-6", className)}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 20.504C5.506 20.504 2.957 20.063 2.544 17.834C2.13 15.604 4.774 11.412 5.588 10.029C8.313 5.404 10.164 3.319 12 3.319C13.836 3.319 15.687 5.404 18.412 10.029C19.226 11.412 21.87 15.604 21.456 17.834C21.044 20.063 18.494 20.504 12 20.504Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 8.57V12.288"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.996 15.63H12.005"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);



export const CloseSquareIcon = ({ className, ...props }: IconProps) => (
  <svg
    className={cn("text-Neutral-200 dark:text-white w-6 h-6", className)}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M14.394 9.615L9.602 14.19"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.4 14.196L9.6 9.613"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.75 11.911C2.75 18.534 5.063 20.743 12 20.743C18.937 20.743 21.25 18.534 21.25 11.911C21.25 5.288 18.937 3.08 12 3.08C5.063 3.08 2.75 5.288 2.75 11.911Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);


export const TickSquareIcon = ({ className, ...props }: IconProps) => (
  <svg
    className={cn("text-Neutral-200 dark:text-white w-6 h-6", className)}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8.44 11.911L10.814 14.177L15.56 9.646"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.75 11.911C2.75 18.534 5.063 20.743 12 20.743C18.937 20.743 21.25 18.534 21.25 11.911C21.25 5.288 18.937 3.08 12 3.08C5.063 3.08 2.75 5.288 2.75 11.911Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);


export const DiscoveryIcon = ({ className, ...props }: IconProps) => (
  <svg
    className={cn("text-Neutral-200 dark:text-white w-6 h-6", className)}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.75 12.375C2.75 18.998 5.063 21.206 12 21.206C18.937 21.206 21.25 18.998 21.25 12.375C21.25 5.752 18.937 3.544 12 3.544C5.063 3.544 2.75 5.752 2.75 12.375Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.698 15.528L10.272 10.726L15.302 9.223L13.728 14.024L8.698 15.528Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);


export const LocationIcon = ({ className, ...props }: IconProps) => (
  <svg
    className={cn("text-Neutral-200 dark:text-white w-6 h-6", className)}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.51 11.144C14.51 9.825 13.391 8.757 12.01 8.757C10.629 8.757 9.51 9.825 9.51 11.144C9.51 12.462 10.629 13.53 12.01 13.53C13.391 13.53 14.51 12.462 14.51 11.144Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 20.968C9.101 20.968 4.5 16.155 4.5 11.037C4.5 7.032 7.857 3.783 12 3.783C16.142 3.783 19.5 7.032 19.5 11.037C19.5 16.155 14.898 20.968 12 20.968Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);


export const DocumentIcon = ({ className, ...props }: IconProps) => (
  <svg
    className={cn("text-Neutral-200 dark:text-white w-6 h-6", className)}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M15.596 15.904H8.376"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15.596 12.315H8.376"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.131 8.726H8.376"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.61 12.375C3.61 18.998 5.708 21.206 12.001 21.206C18.295 21.206 20.392 18.998 20.392 12.375C20.392 5.752 18.295 3.544 12.001 3.544C5.708 3.544 3.61 5.752 3.61 12.375Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);



export const SettingIcon = ({ className, ...props }: IconProps) => (
  <svg
    className={cn("text-Neutral-200 dark:text-white w-6 h-6", className)}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 9.988C13.381 9.988 14.5 11.057 14.5 12.375C14.5 13.694 13.381 14.762 12 14.762C10.619 14.762 9.5 13.694 9.5 12.375C9.5 11.057 10.619 9.988 12 9.988Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20.168 7.84C19.485 6.702 17.971 6.313 16.789 6.97C15.76 7.541 14.474 6.827 14.474 5.685C14.474 4.371 13.366 3.305 12 3.305C10.634 3.305 9.525 4.371 9.525 5.685C9.525 6.827 8.24 7.541 7.212 6.97C6.028 6.313 4.515 6.702 3.832 7.84C3.149 8.979 3.554 10.434 4.738 11.09C5.765 11.662 5.765 13.089 4.738 13.66C3.554 14.317 3.149 15.772 3.832 16.91C4.515 18.048 6.028 18.438 7.212 17.781C8.24 17.21 9.525 17.924 9.525 19.066C9.525 20.379 10.634 21.445 12 21.445C13.366 21.445 14.474 20.379 14.474 19.066C14.474 17.924 15.76 17.21 16.789 17.781C17.971 18.438 19.485 18.048 20.168 16.91C20.852 15.772 20.446 14.317 19.263 13.66C18.234 13.089 18.234 11.662 19.263 11.09C20.446 10.434 20.852 8.979 20.168 7.84Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);


export const TimeSquareIcon = ({ className, ...props }: IconProps) => (
  <svg
    className={cn("text-Neutral-200 dark:text-white w-6 h-6", className)}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M2.75 12.375C2.75 18.998 5.063 21.206 12 21.206C18.937 21.206 21.25 18.998 21.25 12.375C21.25 5.752 18.937 3.544 12 3.544C5.063 3.544 2.75 5.752 2.75 12.375Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15.39 14.302L12 12.37V8.207"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);


export const TimeCircleIcon = ({ className, ...props }: IconProps) => (
  <svg
    className={cn("text-Neutral-200 dark:text-white w-6 h-6", className)}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M21.25 12.375C21.25 17.252 17.109 21.206 12 21.206C6.892 21.206 2.75 17.252 2.75 12.375C2.75 7.498 6.892 3.544 12 3.544C17.109 3.544 21.25 7.498 21.25 12.375Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16.191 13.108L11.661 13.037V8.409"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);



export const VolumeUpIcon = ({ className, ...props }: IconProps) => (
  <svg
    className={cn("text-Neutral-200 dark:text-white w-6 h-6", className)}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M19.436 6.431C21.929 9.983 21.937 14.67 19.436 18.229"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16.989 8.764C18.271 10.981 18.271 13.687 16.989 15.897"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2.682 12.33C2.68 13.52 2.682 14.916 3.711 15.75C4.741 16.585 5.558 16.24 6.89 16.658C8.222 17.078 10.089 19.662 12.15 18.495C13.265 17.739 13.79 16.312 13.79 12.33C13.79 8.348 13.289 6.937 12.15 6.165C10.089 4.999 8.222 7.583 6.89 8.002C5.558 8.421 4.741 8.076 3.711 8.911C2.682 9.745 2.68 11.14 2.682 12.33Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);



export const VolumeDownIcon = ({ className, ...props }: IconProps) => (
  <svg
    className={cn("text-Neutral-200 dark:text-white w-6 h-6", className)}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M18.656 9.162C19.909 11.33 19.909 13.976 18.656 16.137"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4.667 12.649C4.664 13.813 4.667 15.177 5.673 15.993C6.68 16.809 7.479 16.472 8.781 16.882C10.084 17.291 11.909 19.819 13.925 18.677C15.015 17.938 15.529 16.543 15.529 12.649C15.529 8.756 15.038 7.376 13.925 6.622C11.909 5.481 10.084 8.008 8.781 8.417C7.479 8.827 6.68 8.49 5.673 9.306C4.667 10.121 4.664 11.486 4.667 12.649Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);




export const VolumeOffIcon = ({ className, ...props }: IconProps) => (
  <svg
    className={cn("text-Neutral-200 dark:text-white w-6 h-6", className)}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8.404 16.722C7.321 16.483 6.587 16.671 5.684 15.945C4.672 15.125 4.664 13.75 4.672 12.579C4.664 11.409 4.672 10.034 5.684 9.214C6.695 8.394 7.5 8.727 8.815 8.317C10.121 7.907 11.956 5.361 13.987 6.506C14.81 7.061 15.293 7.967 15.49 9.957"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15.579 13.972C15.463 16.842 14.944 17.995 13.987 18.644C12.949 19.234 11.956 18.849 11.07 18.277"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20.285 5.378L4.941 20.028"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);



export const StarIcon = ({ className, ...props }: IconProps) => (
  <svg
    className={cn("text-Neutral-200 dark:text-white w-6 h-6", className)}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 2.75L14.85 9.45L22 10.27L16 15.23L17.35 22.25L12 18.5L6.65 22.25L8 15.23L2 10.27L9.15 9.45L12 2.75Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);


export const TicketIcon = ({ className, ...props }: IconProps) => (
  <svg
    className={cn("text-Neutral-200 dark:text-white w-6 h-6", className)}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M13.359 4.356V6.891"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.359 17.668V19.788"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.359 14.804V9.755"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21.5 14.333C18.809 14.333 18.809 10.417 21.5 10.417C21.5 5.879 21.5 4.26 12 4.26C2.5 4.26 2.5 5.879 2.5 10.417C5.191 10.417 5.191 14.333 2.5 14.333C2.5 18.87 2.5 20.49 12 20.49C21.5 20.49 21.5 18.87 21.5 14.333Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);



export const CameraIcon = ({ className, ...props }: IconProps) => (
  <svg
    className={cn("text-Neutral-200 dark:text-white w-6 h-6", className)}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M15.438 12.851C15.438 11.192 14.03 9.848 12.293 9.848C10.556 9.848 9.148 11.192 9.148 12.851C9.148 14.509 10.556 15.853 12.293 15.853C14.03 15.853 15.438 14.509 15.438 12.851Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.293 20.204C20.338 20.204 21.296 17.902 21.296 12.916C21.296 9.421 20.812 7.55 17.762 6.746C17.482 6.662 17.172 6.501 16.92 6.237C16.514 5.812 16.217 4.506 15.236 4.111C14.255 3.717 10.315 3.736 9.349 4.111C8.385 4.488 8.072 5.812 7.665 6.237C7.414 6.501 7.104 6.662 6.823 6.746C3.774 7.55 3.289 9.421 3.289 12.916C3.289 17.902 4.247 20.204 12.293 20.204Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17.205 9.511H17.214"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);



export const ProfileIcon = ({ className, ...props }: IconProps) => (
  <svg
    className={cn("text-Neutral-200 dark:text-white w-6 h-6", className)}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M11.845 21.6C8.153 21.6 5 21.051 5 18.854C5 16.658 8.133 14.63 11.845 14.63C15.536 14.63 18.689 16.638 18.689 18.835C18.689 21.03 15.556 21.6 11.845 21.6Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.837 11.586C14.26 11.586 16.224 9.711 16.224 7.398C16.224 5.085 14.26 3.21 11.837 3.21C9.415 3.21 7.45 5.085 7.45 7.398C7.442 9.704 9.392 11.578 11.806 11.586C11.817 11.586 11.827 11.586 11.837 11.586Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);



export const AddUserIcon = ({ className, ...props }: IconProps) => (
  <svg
    className={cn("text-Neutral-200 dark:text-white w-6 h-6", className)}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M9.922 21.739C6.108 21.739 2.85 21.188 2.85 18.983C2.85 16.777 6.087 14.772 9.922 14.772C13.736 14.772 16.994 16.758 16.994 18.963C16.994 21.167 13.757 21.739 9.922 21.739Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.922 11.627C12.425 11.627 14.455 9.689 14.455 7.299C14.455 4.908 12.425 2.971 9.922 2.971C7.419 2.971 5.389 4.908 5.389 7.299C5.38 9.68 7.396 11.618 9.89 11.627H9.922Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M19.131 8.68V12.508"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M21.178 10.594H17.088"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);


export const TwoUsersIcon = ({ className, ...props }: IconProps) => (
  <svg
    className={cn("text-Neutral-200 dark:text-white w-6 h-6", className)}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {/* First User */}
    <path
      d="M7.5 21.739C4.5 21.739 2 21.188 2 18.983C2 16.777 4.5 14.772 7.5 14.772C10.5 14.772 13 16.758 13 18.963C13 21.167 10.5 21.739 7.5 21.739Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.5 11.627C9.5 11.627 11 9.689 11 7.299C11 4.908 9.5 2.971 7.5 2.971C5.5 2.971 4 4.908 4 7.299C4 9.68 5.5 11.618 7.5 11.627Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* Second User (smaller, behind the first) */}
    <path
      d="M16.5 21.739C13.5 21.739 11 21.188 11 18.983C11 16.777 13.5 14.772 16.5 14.772C19.5 14.772 22 16.758 22 18.963C22 21.167 19.5 21.739 16.5 21.739Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16.5 11.627C18.5 11.627 20 9.689 20 7.299C20 4.908 18.5 2.971 16.5 2.971C14.5 2.971 13 4.908 13 7.299C13 9.68 14.5 11.618 16.5 11.627Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ThreeUsersIcon = ({ className, ...props }: IconProps) => (
  <svg
    className={cn("text-Neutral-200 dark:text-white w-6 h-6", className)}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {/* Center User */}
    <path
      d="M11.972 20.364C8.733 20.364 5.966 19.897 5.966 18.023C5.966 16.15 8.715 14.52 11.972 14.52C15.211 14.52 17.978 16.135 17.978 18.007C17.978 19.879 15.229 20.364 11.972 20.364Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.973 11.849C14.098 11.849 15.823 10.204 15.823 8.174C15.823 6.144 14.098 4.498 11.973 4.498C9.846 4.498 8.122 6.144 8.122 8.174C8.116 10.196 9.826 11.842 11.946 11.849H11.973Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* Right User */}
    <path
      d="M18.362 10.84C19.599 10.524 20.511 9.447 20.511 8.164C20.511 6.827 19.518 5.71 18.196 5.452"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18.943 13.85C20.697 13.85 22.195 14.985 22.195 15.999C22.195 16.595 21.678 17.246 20.894 17.421"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* Left User */}
    <path
      d="M5.584 10.84C4.346 10.524 3.434 9.447 3.434 8.164C3.434 6.827 4.427 5.71 5.749 5.452"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.002 13.85C3.248 13.85 1.75 14.985 1.75 15.999C1.75 16.595 2.267 17.246 3.052 17.421"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);



export const LoginIcon = ({ className, ...props }: IconProps) => (
  <svg
    className={cn("text-Neutral-200 dark:text-white w-6 h-6", className)}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {/* Arrow Line */}
    <path
      d="M14.791 12.49H2.75"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Arrowhead */}
    <path
      d="M11.864 9.706L14.792 12.49L11.864 15.274"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Curved Container */}
    <path
      d="M7.259 8.203C7.589 4.785 8.929 3.544 14.259 3.544C21.36 3.544 21.36 5.749 21.36 12.375C21.36 19.001 21.36 21.206 14.259 21.206C8.929 21.206 7.589 19.965 7.259 16.547"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);


export const LogoutIcon = ({ className, ...props }: IconProps) => (
  <svg
    className={cn("text-Neutral-200 dark:text-white w-6 h-6", className)}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {/* Arrow Line */}
    <path
      d="M21.791 12.49H9.75"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Arrowhead */}
    <path
      d="M18.864 9.706L21.792 12.49L18.864 15.274"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Curved Container */}
    <path
      d="M16.36 8.203C16.03 4.785 14.69 3.544 9.36 3.544C2.259 3.544 2.259 5.749 2.259 12.375C2.259 19.001 2.259 21.206 9.36 21.206C14.69 21.206 16.03 19.965 16.36 16.547"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);



export const DownloadIcon = ({ className, ...props }: IconProps) => (
  <svg
    className={cn("text-Neutral-200 dark:text-white w-6 h-6", className)}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {/* Vertical Line */}
    <path
      d="M11.879 15.04V3.544"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Arrowhead */}
    <path
      d="M14.795 12.245L11.879 15.041L8.963 12.245"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Curved Base */}
    <path
      d="M16.37 7.849C19.949 8.164 21.25 9.443 21.25 14.532C21.25 21.31 18.939 21.31 12 21.31C5.059 21.31 2.75 21.31 2.75 14.532C2.75 9.443 4.05 8.164 7.63 7.849"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);




export const UploadIcon = ({ className, ...props }: IconProps) => (
  <svg
    className={cn("text-Neutral-200 dark:text-white w-6 h-6", className)}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {/* Vertical Line */}
    <path
      d="M12.121 3.028V14.523"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Arrowhead */}
    <path
      d="M9.205 5.822L12.121 3.026L15.037 5.822"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Curved Base */}
    <path
      d="M7.63 8.213C4.05 8.528 2.75 9.807 2.75 14.896C2.75 21.675 5.06 21.675 12 21.675C18.94 21.675 21.25 21.675 21.25 14.896C21.25 9.807 19.95 8.528 16.37 8.213"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);


export const VoiceIcon = ({ className, ...props }: IconProps) => (
  <svg
    className={cn("text-Neutral-200 dark:text-white w-6 h-6", className)}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {/* Curved top */}
    <path
      d="M6.365 13.441C6.365 16.43 8.903 18.854 12.034 18.854C15.166 18.854 17.704 16.43 17.704 13.441"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Vertical curves */}
    <path
      d="M17.704 10.333V8.181C17.704 5.192 15.166 2.769 12.034 2.769C8.903 2.769 6.365 5.192 6.365 8.181V10.333"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Vertical bottom line */}
    <path
      d="M12.034 20.908V18.854"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Horizontal base line */}
    <path
      d="M4.9 13.441H19.168"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);


export const Voice2Icon = ({ className, ...props }: IconProps) => (
  <svg
    className={cn("text-Neutral-200 dark:text-white w-6 h-6", className)}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {/* Curved top */}
    <path
      d="M6.604 13.588C6.604 16.428 9.015 18.73 11.99 18.73C14.965 18.73 17.376 16.428 17.376 13.588"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Vertical curves */}
    <path
      d="M17.376 10.636V8.591C17.376 5.752 14.965 3.45 11.99 3.45C9.015 3.45 6.604 5.752 6.604 8.591V10.636"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Vertical bottom line */}
    <path
      d="M11.99 20.682V18.73"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Horizontal base line */}
    <path
      d="M5.212 13.588H18.768"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Additional horizontal lines */}
    <path
      d="M10.497 10.361H13.482"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.491 7.716H11.488"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);



export const DeleteIcon = ({ className, ...props }: IconProps) => (
  <svg
    className={cn("text-Neutral-200 dark:text-white w-6 h-6", className)}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {/* Main curved body */}
    <path
      d="M18.889 9.504C18.889 17.16 20.044 20.62 12.28 20.62C4.515 20.62 5.693 17.16 5.693 9.504"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Top horizontal line */}
    <path
      d="M20.365 6.569H4.215"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Lid / top curve */}
    <path
      d="M15.715 6.569C15.715 6.569 16.244 2.974 12.289 2.974C8.336 2.974 8.864 6.569 8.864 6.569"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);



export const EditIcon = ({ className, ...props }: IconProps) => (
  <svg
    className={cn("text-Neutral-200 dark:text-white w-6 h-6", className)}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {/* Pencil body */}
    <path
      d="M3 21H7.5L17.81 10.69C18.2 10.3 18.2 9.66 17.81 9.27L14.73 6.19C14.34 5.8 13.7 5.8 13.31 6.19L3 16.5V21Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Pencil tip */}
    <path
      d="M14.71 5.289L18.711 9.29"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);



export const EditSquareIcon = ({ className, ...props }: IconProps) => (
  <svg
    className={cn("text-Neutral-200 dark:text-white w-6 h-6", className)}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {/* Outer curved square */}
    <path
      d="M12.0002 3.008C5.0632 3.008 2.7502 5.216 2.7502 11.839C2.7502 18.462 5.0632 20.67 12.0002 20.67C18.9372 20.67 21.2502 18.462 21.2502 11.839"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Pencil body */}
    <path
      d="M19.5285 4.491V4.491C18.5355 3.652 17.0185 3.74 16.1395 4.688C16.1395 4.688 11.7705 9.399 10.2555 11.035C8.73853 12.669 9.85053 14.927 9.85053 14.927C9.85053 14.927 12.3545 15.684 13.8485 14.073C15.3435 12.461 19.7345 7.727 19.7345 7.727C20.6135 6.779 20.5205 5.33 19.5285 4.491Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Pencil tip */}
    <path
      d="M15.009 5.92L18.604 8.959"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);


export const PlayIcon = ({ className, ...props }: IconProps) => (
  <svg
    className={cn("text-Neutral-200 dark:text-white w-6 h-6", className)}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {/* Outer curved play button */}
    <path
      d="M2.75 11.839C2.75 18.462 5.063 20.67 12 20.67C18.937 20.67 21.25 18.462 21.25 11.839C21.25 5.216 18.937 3.008 12 3.008C5.063 3.008 2.75 5.216 2.75 11.839Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Play triangle */}
    <path
      d="M15.416 11.701C15.416 10.838 10.832 8.077 10.312 8.573C9.793 9.07 9.742 14.285 10.312 14.829C10.883 15.374 15.416 12.564 15.416 11.701Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);


export const ShieldDoneIcon = ({ className, ...props }: IconProps) => (
  <svg
    className={cn("text-Neutral-200 dark:text-white w-6 h-6", className)}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {/* Shield outline */}
    <path
      d="M11.984 21.01C14.319 21.01 19.656 18.793 19.656 12.678C19.656 6.564 19.934 6.085 19.319 5.497C18.703 4.909 15.493 3.008 11.984 3.008C8.475 3.008 5.265 4.909 4.65 5.497C4.034 6.085 4.312 6.564 4.312 12.678C4.312 18.793 9.65 21.01 11.984 21.01Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Check mark */}
    <path
      d="M9.386 11.719L11.278 13.529L15.176 9.805"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);


export const ShieldFailIcon = ({ className, ...props }: IconProps) => (
  <svg
    className={cn("text-Neutral-200 dark:text-white w-6 h-6", className)}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {/* Shield outline */}
    <path
      d="M11.985 21.01C14.319 21.01 19.657 18.793 19.657 12.678C19.657 6.564 19.935 6.085 19.319 5.497C18.703 4.909 15.494 3.008 11.985 3.008C8.476 3.008 5.266 4.909 4.65 5.497C4.034 6.085 4.312 6.564 4.312 12.678C4.312 18.793 9.65 21.01 11.985 21.01Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* X mark */}
    <path
      d="M13.864 13.581L10.105 9.993"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.105 13.581L13.864 9.993"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ShowIcon = ({ className, ...props }: IconProps) => (
  <svg
    className={cn("text-Neutral-200 dark:text-white w-6 h-6 cursor-pointer", className)}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {/* Eye pupil */}
    <path
      d="M15.164 11.889C15.164 13.556 13.748 14.907 12.002 14.907C10.256 14.907 8.84 13.556 8.84 11.889C8.84 10.221 10.256 8.87 12.002 8.87C13.748 8.87 15.164 10.221 15.164 11.889Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Eye outline */}
    <path
      d="M2.75 11.889C2.75 15.02 6.892 18.86 12.002 18.86C17.111 18.86 21.254 15.023 21.254 11.889C21.254 8.754 17.111 4.917 12.002 4.917C6.892 4.917 2.75 8.757 2.75 11.889Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);




export const HideIcon = ({ className, ...props }: IconProps) => (
  <svg
    className={cn(
      "text-Neutral-200 dark:text-white w-6 h-6 cursor-pointer",
      className
    )}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6.42 17.7298C4.19 16.2698 2.75 14.0698 2.75 12.1398C2.75 8.85984 6.89 4.83984 12 4.83984C14.09 4.83984 16.03 5.50984 17.59 6.54984"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M19.8497 8.61035C20.7407 9.74035 21.2597 10.9904 21.2597 12.1404C21.2597 15.4204 17.1097 19.4404 11.9997 19.4404C11.0897 19.4404 10.2007 19.3104 9.36969 19.0804"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.76572 14.3667C9.17072 13.7777 8.83772 12.9747 8.84072 12.1377C8.83672 10.3927 10.2487 8.97469 11.9947 8.97169C12.8347 8.96969 13.6407 9.30269 14.2347 9.89669"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15.1095 12.6992C14.8755 13.9912 13.8645 15.0042 12.5725 15.2412"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M19.8917 4.25L4.11768 20.024"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);


export const FilterIcon = ({ className, ...props }: IconProps) => (
  <svg
    className={cn("text-Neutral-200 dark:text-white w-6 h-6", className)}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {/* Bottom line */}
    <path
      d="M10.484 16.846H4.011"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Bottom circle */}
    <path
      d="M14.545 16.847C14.545 18.796 15.226 19.445 17.267 19.445C19.308 19.445 19.989 18.796 19.989 16.847C19.989 14.897 19.308 14.248 17.267 14.248C15.226 14.248 14.545 14.897 14.545 16.847Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Top line */}
    <path
      d="M13.517 6.832H19.988"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Top circle */}
    <path
      d="M9.455 6.831C9.455 4.883 8.775 4.232 6.734 4.232C4.692 4.232 4.011 4.883 4.011 6.831C4.011 8.78 4.692 9.43 6.734 9.43C8.775 9.43 9.455 8.78 9.455 6.831Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ImageIcon = ({ className, ...props }: IconProps) => (
  <svg
    className={cn("text-Neutral-200 dark:text-white w-6 h-6", className)}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {/* Path for small mountain */}
    <path
      d="M6.071 16.096C6.071 16.096 6.883 14.533 8.065 14.533C9.247 14.533 9.851 15.846 11.161 15.846C12.47 15.846 13.939 12.554 15.423 12.554C16.905 12.554 17.971 14.837 17.971 14.837"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Circle / sun */}
    <path
      d="M10.139 9.075C10.139 9.896 9.442 10.562 8.581 10.562C7.721 10.562 7.024 9.896 7.024 9.075C7.024 8.254 7.721 7.587 8.581 7.587C9.442 7.588 10.139 8.254 10.139 9.075Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Main rounded rectangle */}
    <path
      d="M2.75 11.839C2.75 18.462 5.063 20.67 12 20.67C18.937 20.67 21.25 18.462 21.25 11.839C21.25 5.216 18.937 3.008 12 3.008C5.063 3.008 2.75 5.216 2.75 11.839Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);



export const Image2Icon = ({ className, ...props }: IconProps) => (
  <svg
    className={cn("text-Neutral-200 dark:text-white w-6 h-6", className)}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {/* Path for small mountain */}
    <path
      d="M6.071 16.096C6.071 16.096 6.883 14.533 8.065 14.533C9.247 14.533 9.851 15.846 11.161 15.846C12.47 15.846 13.939 12.554 15.423 12.554C16.905 12.554 17.971 14.837 17.971 14.837"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Circle / sun */}
    <path
      d="M10.139 9.075C10.139 9.896 9.442 10.562 8.581 10.562C7.721 10.562 7.024 9.896 7.024 9.075C7.024 8.254 7.721 7.587 8.581 7.587C9.442 7.588 10.139 8.254 10.139 9.075Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Main rounded rectangle */}
    <path
      d="M2.75 11.839C2.75 18.462 5.063 20.67 12 20.67C18.937 20.67 21.25 18.462 21.25 11.839C21.25 5.216 18.937 3.008 12 3.008C5.063 3.008 2.75 5.216 2.75 11.839Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);



export const CallIcon = ({ className, ...props }: IconProps) => (
  <svg
    className={cn("text-Neutral-200 dark:text-white w-6 h-6", className)}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8.201 15.466C1.303 8.879 2.283 5.863 3.011 4.892C3.104 4.734 5.406 1.444 7.875 3.374C14.001 8.191 6.245 7.51 11.389 12.422C16.535 17.334 15.821 9.929 20.866 15.777C22.888 18.134 19.441 20.332 19.278 20.421C18.26 21.116 15.1 22.052 8.201 15.466Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);



export const CallingIcon = ({ className, ...props }: IconProps) => (
  <svg
    className={cn("text-Neutral-200 dark:text-white w-6 h-6", className)}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {/* Curved signal arcs */}
    <path
      d="M14.353 3.008C18.054 3.4 20.978 6.188 21.394 9.721"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.353 6.39C16.124 6.719 17.508 8.041 17.853 9.732"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Main phone/hand shape */}
    <path
      d="M7.700 15.943C0.803 9.357 1.783 6.341 2.511 5.369C2.604 5.212 4.906 1.921 7.375 3.852C13.501 8.669 5.745 7.988 10.889 12.9C16.035 17.811 15.32 10.407 20.366 16.254C22.388 18.612 18.941 20.81 18.778 20.898C17.76 21.593 14.599 22.53 7.700 15.943Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);


export const CallMissedIcon = ({ className, ...props }: IconProps) => (
  <svg
    className={cn("text-Neutral-200 dark:text-white w-6 h-6", className)}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {/* Cross mark */}
    <path
      d="M21.328 3.008L15.328 8.736"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15.328 3.008L21.328 8.736"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Main phone/hand shape */}
    <path
      d="M7.701 15.943C0.802 9.357 1.783 6.341 2.511 5.368C2.604 5.212 4.906 1.921 7.375 3.852C13.501 8.669 5.745 7.988 10.89 12.9C16.034 17.811 15.32 10.407 20.366 16.254C22.388 18.612 18.941 20.809 18.778 20.898C17.759 21.593 14.6 22.53 7.701 15.943Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);


export const CallSilentIcon = ({ className, ...props }: IconProps) => (
  <svg
    className={cn("text-Neutral-200 dark:text-white w-6 h-6", className)}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {/* Curved handset (top-left) */}
    <path
      d="M6.109 12.849C1.523 7.73 2.371 5.277 3.009 4.416C3.104 4.253 5.408 0.97 7.87 2.895C12.721 6.716 8.869 7.081 9.612 9.504"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Curved handset (bottom-right) */}
    <path
      d="M11.585 12.139C16.512 16.669 15.886 9.534 20.864 15.301C22.891 17.663 19.441 19.852 19.271 19.943C18.274 20.632 15.163 21.555 8.401 15.18"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Slash line for silent */}
    <path
      d="M2 20.909L20.5 3.247"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);


export const LockIcon = ({ className, ...props }: IconProps) => (
  <svg
    className={cn("text-Neutral-200 dark:text-white w-6 h-6", className)}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {/* Lock shackle */}
    <path
      d="M16.471 9.36V7.308C16.44 4.903 14.372 2.978 11.854 3.008C9.387 3.038 7.392 4.934 7.35 7.289V9.36"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Keyhole line */}
    <path
      d="M11.91 13.897V16.018"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Lock body */}
    <path
      d="M11.91 8.807C6.165 8.807 4.25 10.304 4.25 14.794C4.25 19.285 6.165 20.782 11.91 20.782C17.655 20.782 19.571 19.285 19.571 14.794C19.571 10.304 17.655 8.807 11.91 8.807Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);



export const Filter2Icon = ({ className, ...props }: IconProps) => (
  <svg
    className={cn("text-Neutral-200 dark:text-white w-6 h-6", className)}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12.004 20.431C9.992 20.431 9.984 18.516 9.984 15.275C9.984 12.035 3 9.764 3 6.207C3 3.202 5.79 3.247 11.999 3.247C18.21 3.247 21 3.202 21 6.207C21 9.764 14.017 12.035 14.017 15.275C14.017 18.516 14.014 20.431 12.004 20.431Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);


export const UnlockIcon = ({ className, ...props }: IconProps) => (
  <svg
    className={cn("text-Neutral-200 dark:text-white w-6 h-6", className)}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {/* Shackle in unlocked position */}
    <path
      d="M16.276 6.099C15.703 4.29 13.931 2.984 11.853 3.009C9.386 3.037 7.391 4.934 7.349 7.289V9.36"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Keyhole line */}
    <path
      d="M11.91 13.897V16.018"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Lock body */}
    <path
      d="M11.91 8.807C6.165 8.807 4.25 10.304 4.25 14.794C4.25 19.285 6.165 20.782 11.91 20.782C17.656 20.782 19.571 19.285 19.571 14.794C19.571 10.304 17.656 8.807 11.91 8.807Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// old icons 



export const RefreshIcon = ({ className, ...props }: IconProps) => (
  <svg
    className={cn("w-6 h-6 dark:text-white text-Neutral-500", className)}
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M2.30677 14.7587C2.54907 14.7587 2.78895 14.6505 2.94726 14.4437L3.2986 13.9874C3.56277 15.5477 4.24169 17.0082 5.26425 18.2159C6.28681 19.4236 7.61536 20.3341 9.1107 20.8519C10.9599 21.4968 12.9711 21.5075 14.8271 20.8825C16.683 20.2574 18.278 19.032 19.3602 17.3999C19.4786 17.2212 19.5211 17.0029 19.4785 16.7928C19.4358 16.5828 19.3115 16.3984 19.1329 16.28C18.9542 16.1617 18.7359 16.1191 18.5258 16.1618C18.3158 16.2044 18.1314 16.3287 18.013 16.5074C17.129 17.8404 15.8262 18.8411 14.3103 19.3516C12.7944 19.862 11.1516 19.8531 9.64135 19.3262C8.39638 18.8947 7.2936 18.13 6.45297 17.1153C5.61235 16.1007 5.06607 14.8749 4.87359 13.5714L5.56497 14.1037C5.73473 14.2344 5.94945 14.2923 6.16188 14.2646C6.37432 14.237 6.56708 14.1261 6.69774 13.9563C6.82841 13.7865 6.88629 13.5718 6.85865 13.3594C6.83101 13.1469 6.7201 12.9542 6.55034 12.8235L4.63532 11.3495C4.2339 11.0402 3.66287 10.8665 3.29941 11.3406L1.66789 13.4592C1.57584 13.5786 1.51907 13.7213 1.50403 13.8713C1.48898 14.0213 1.51626 14.1726 1.58277 14.3078C1.64928 14.4431 1.75236 14.5571 1.88032 14.6368C2.00828 14.7165 2.15601 14.7587 2.30677 14.7587Z"
      fill="currentColor"
    />
    <path
      d="M4.86713 8.73745C5.23785 8.98379 5.73943 8.88202 5.98739 8.51049C6.8719 7.17797 8.17471 6.17769 9.69045 5.66732C11.2062 5.15696 12.8487 5.16552 14.359 5.69167C15.604 6.12319 16.7068 6.88788 17.5474 7.90252C18.388 8.91717 18.9343 10.1429 19.1268 11.4464L18.4354 10.9142C18.3514 10.8495 18.2554 10.8019 18.153 10.7743C18.0506 10.7467 17.9437 10.7396 17.8385 10.7533C17.7333 10.7669 17.6319 10.8012 17.5399 10.8541C17.448 10.907 17.3673 10.9775 17.3026 11.0616C17.2379 11.1456 17.1904 11.2416 17.1628 11.344C17.1352 11.4464 17.1281 11.5533 17.1417 11.6585C17.1554 11.7637 17.1897 11.8651 17.2426 11.9571C17.2955 12.049 17.366 12.1296 17.45 12.1943L19.3651 13.6684C19.7738 13.9826 20.3319 14.1586 20.701 13.6772L22.3325 11.5587C22.3972 11.4747 22.4446 11.3788 22.4722 11.2764C22.4998 11.1741 22.5069 11.0673 22.4932 10.9622C22.4796 10.8571 22.4453 10.7557 22.3924 10.6638C22.3396 10.5719 22.2691 10.4914 22.1851 10.4267C22.1011 10.3621 22.0052 10.3146 21.9028 10.287C21.8005 10.2594 21.6937 10.2523 21.5886 10.266C21.4835 10.2797 21.3821 10.3139 21.2902 10.3668C21.1983 10.4197 21.1178 10.4901 21.0531 10.5741L20.7018 11.0305Z"
      fill="currentColor"
    />
  </svg>
);

export const MenuIcon = ({ className, ...props }: IconProps) => (
  <svg
    className={cn(
      "w-6 h-6 dark:text-white text-Neutral-500 ltr:rotate-y-180",
      className
    )}
    viewBox="0 0 24 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20.9456 5.75002C20.9456 5.49585 20.8446 5.2521 20.6649 5.07238C20.4851 4.89265 20.2414 4.79169 19.9872 4.79169H4.65389C4.39972 4.79169 4.15597 4.89265 3.97625 5.07238C3.79652 5.2521 3.69556 5.49585 3.69556 5.75002C3.69556 6.00419 3.79652 6.24794 3.97625 6.42766C4.15597 6.60739 4.39972 6.70835 4.65389 6.70835H19.9872C20.2414 6.70835 20.4851 6.60739 20.6649 6.42766C20.8446 6.24794 20.9456 6.00419 20.9456 5.75002ZM20.9456 11.5C20.9456 11.2459 20.8446 11.0021 20.6649 10.8224C20.4851 10.6427 20.2414 10.5417 19.9872 10.5417H10.4039C10.1497 10.5417 9.90597 10.6427 9.72625 10.8224C9.54652 11.0021 9.44556 11.2459 9.44556 11.5C9.44556 11.7542 9.54652 11.9979 9.72625 12.1777C9.90597 12.3574 10.1497 12.4584 10.4039 12.4584H19.9872C20.2414 12.4584 20.4851 12.3574 20.6649 12.1777C20.8446 11.9979 20.9456 11.7542 20.9456 11.5ZM20.9456 17.25C20.9456 16.9959 20.8446 16.7521 20.6649 16.5724C20.4851 16.3927 20.2414 16.2917 19.9872 16.2917H15.1956C14.9414 16.2917 14.6976 16.3927 14.5179 16.5724C14.3382 16.7521 14.2372 16.9959 14.2372 17.25C14.2372 17.5042 14.3382 17.7479 14.5179 17.9277C14.6976 18.1074 14.9414 18.2084 15.1956 18.2084H19.9872C20.2414 18.2084 20.4851 18.1074 20.6649 17.9277C20.8446 17.7479 20.9456 17.5042 20.9456 17.25Z"
      fill="currentColor"
    />
  </svg>
);

export const EmailIcon = ({ className, ...props }: IconProps) => (
  <svg
    className={cn("text-Neutral-200 dark:text-white w-6 h-6", className)}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M17.5448 9.01904C17.5448 9.01904 14.3348 12.8717 11.9869 12.8717C9.64004 12.8717 6.39392 9.01904 6.39392 9.01904"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.45203 11.9688C2.45203 5.13075 4.83298 2.85205 11.9758 2.85205C19.1187 2.85205 21.4996 5.13075 21.4996 11.9688C21.4996 18.8059 19.1187 21.0856 11.9758 21.0856C4.83298 21.0856 2.45203 18.8059 2.45203 11.9688Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const TelegramIcon = ({ className, ...props }: IconProps) => (
  <svg
    className={cn("text-Neutral-200 dark:text-white w-6 h-6", className)}
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8.84784 13.9848L8.517 18.6382C8.99034 18.6382 9.19535 18.4349 9.44118 18.1907L11.6604 16.0698L16.2588 19.4374C17.1022 19.9074 17.6964 19.6599 17.9239 18.6615L20.9423 4.51787L20.9431 4.51704C21.2106 3.27034 20.4923 2.78283 19.6706 3.08867L1.9285 9.88134C0.717641 10.3513 0.735975 11.0264 1.72267 11.3322L6.25861 12.7431L16.7947 6.15041C17.2905 5.82207 17.7414 6.00374 17.3705 6.33209L8.84784 13.9848Z"
      fill="currentColor"
    />
  </svg>
);

export const InstagramIcon = ({ className, ...props }: IconProps) => (
  <svg
    className={cn("text-Neutral-200 dark:text-white w-6 h-6", className)}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_7224_54161)">
      <path
        d="M14.168 1.66406H5.83464C3.53345 1.66406 1.66797 3.52954 1.66797 5.83073V14.1641C1.66797 16.4653 3.53345 18.3307 5.83464 18.3307H14.168C16.4692 18.3307 18.3346 16.4653 18.3346 14.1641V5.83073C18.3346 3.52954 16.4692 1.66406 14.168 1.66406Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.3337 9.4772C13.4366 10.1707 13.3181 10.8791 12.9952 11.5014C12.6723 12.1237 12.1614 12.6284 11.5351 12.9436C10.9088 13.2588 10.1991 13.3685 9.5069 13.2571C8.81468 13.1458 8.17521 12.8189 7.67944 12.3232C7.18367 11.8274 6.85685 11.1879 6.74546 10.4957C6.63408 9.8035 6.74379 9.09378 7.05901 8.46752C7.37423 7.84125 7.8789 7.33032 8.50123 7.00741C9.12356 6.68449 9.83187 6.56603 10.5254 6.66887C11.2328 6.77377 11.8878 7.10342 12.3935 7.60913C12.8992 8.11483 13.2288 8.76977 13.3337 9.4772Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.582 5.41406H14.5904"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_7224_54161">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export const MobielIcon = ({ className, ...props }: IconProps) => (
  <svg
    className={cn("text-Neutral-200 dark:text-white w-6 h-6", className)}
    viewBox="0 0 22 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.20049 13.4658C0.302504 6.87946 1.28338 3.86346 2.01055 2.89157C2.10396 2.73449 4.40647 -0.556148 6.87459 1.37445C13.0008 6.19134 5.2451 5.5103 10.3894 10.4224C15.5348 15.3336 14.8214 7.92939 19.8659 13.7769C21.8882 16.1342 18.4413 18.3323 18.2778 18.4205C17.2598 19.1157 14.0995 20.0522 7.20049 13.4658Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
