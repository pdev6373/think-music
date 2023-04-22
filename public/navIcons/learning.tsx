import { NavTypes } from "./types";

export default function learning({ color, size }: NavTypes) {
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.33398 8.13331H10.0007M5.33398 10.8H8.25398M6.66732 3.99998H9.33398C10.6673 3.99998 10.6673 3.33331 10.6673 2.66665C10.6673 1.33331 10.0007 1.33331 9.33398 1.33331H6.66732C6.00065 1.33331 5.33398 1.33331 5.33398 2.66665C5.33398 3.99998 6.00065 3.99998 6.66732 3.99998Z"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.6667 2.67999C12.8867 2.79999 14 3.61999 14 6.66666V10.6667C14 13.3333 13.3333 14.6667 10 14.6667H6C2.66667 14.6667 2 13.3333 2 10.6667V6.66666C2 3.62666 3.11333 2.79999 5.33333 2.67999"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
