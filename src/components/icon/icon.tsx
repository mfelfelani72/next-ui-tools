import React from "react";
import { cn } from "../../lib/utils";

interface IconProps {
  className?: string;
  width?: string | number;
  height?: string | number;
  color?: string;
}
export const CloseSquareIcon = ({ className, ...props }: IconProps) => (
  <svg
    className={cn("text-Neutral-200 dark:text-white w-6 h-6", className)}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12.3941 7.59473L7.60211 12.3867"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.3999 12.3928L7.59991 7.59277"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.75 10C0.75 16.937 3.063 19.25 10 19.25C16.937 19.25 19.25 16.937 19.25 10C19.25 3.063 16.937 0.75 10 0.75C3.063 0.75 0.75 3.063 0.75 10Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ShowIcon = ({ className, ...props }: IconProps) => (
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.1643 12.0516C15.1643 13.7976 13.7483 15.2136 12.0023 15.2136C10.2563 15.2136 8.84033 13.7976 8.84033 12.0516C8.84033 10.3046 10.2563 8.88965 12.0023 8.88965C13.7483 8.88965 15.1643 10.3046 15.1643 12.0516Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.75031 12.052C2.75031 15.332 6.8923 19.354 12.0023 19.354C17.1113 19.354 21.2543 15.335 21.2543 12.052C21.2543 8.769 17.1113 4.75 12.0023 4.75C6.8923 4.75 2.75031 8.772 2.75031 12.052Z"
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

export const DangerIcon = ({ className, ...props }: IconProps) => (
  <svg
    className={cn("text-[#d71e1e] w-6 h-6", className)}
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.6963 19.2341C19.9193 18.0112 20.5002 15.965 20.5002 12.5381C20.5002 9.11119 19.9193 7.06501 18.6963 5.84204C17.4733 4.61907 15.4271 4.03809 12.0002 4.03809C8.57334 4.03809 6.52717 4.61907 5.3042 5.84204C4.08123 7.06501 3.50024 9.11119 3.50024 12.5381C3.50024 15.965 4.08123 18.0112 5.3042 19.2341C6.52717 20.4571 8.57334 21.0381 12.0002 21.0381C15.4271 21.0381 17.4733 20.4571 18.6963 19.2341Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.0002 17.1836C11.586 17.1836 11.2502 16.8478 11.2502 16.4336V12.5386C11.2502 12.1244 11.586 11.7886 12.0002 11.7886C12.4145 11.7886 12.7502 12.1244 12.7502 12.5386V16.4336C12.7502 16.8478 12.4145 17.1836 12.0002 17.1836Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.7545 9.03809C12.7545 9.4523 12.4187 9.78809 12.0045 9.78809H11.9955C11.5813 9.78809 11.2455 9.4523 11.2455 9.03809C11.2455 8.62387 11.5813 8.28809 11.9955 8.28809H12.0045C12.4187 8.28809 12.7545 8.62387 12.7545 9.03809Z"
      fill="currentColor"
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
    <path
      d="M16.4709 9.40335V7.25435C16.4399 4.73535 14.3719 2.71935 11.8539 2.75035C9.38691 2.78135 7.39191 4.76735 7.34991 7.23435V9.40335"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.9103 14.1562V16.3773"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.9103 8.82422C6.16531 8.82422 4.25031 10.3922 4.25031 15.0952C4.25031 19.7992 6.16531 21.3672 11.9103 21.3672C17.6553 21.3672 19.5713 19.7992 19.5713 15.0952C19.5713 10.3922 17.6553 8.82422 11.9103 8.82422Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const BackIcon = ({ className, ...props }: IconProps) => (
  <svg
    className={cn("w-6 h-6 dark:text-white text-Neutral-500", className)}
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4.37109 13.0108L18.7461 13.0108"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.1694 19.0353C10.1694 19.0353 4.37152 15.7743 4.37152 13.0123C4.37152 10.2483 10.1694 6.98625 10.1694 6.98625"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

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
