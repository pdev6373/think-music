import { NavTypes } from "./types";

export default function explore({ color, size }: NavTypes) {
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_5_258)">
        <path
          d="M14.6673 7.33331V11.3333C14.6673 14 14.0007 14.6666 11.334 14.6666H4.66732C2.00065 14.6666 1.33398 14 1.33398 11.3333V4.66665C1.33398 1.99998 2.00065 1.33331 4.66732 1.33331H5.66732C6.66732 1.33331 6.88732 1.62665 7.26732 2.13331L8.26732 3.46665C8.52065 3.79998 8.66732 3.99998 9.33398 3.99998H11.334C14.0007 3.99998 14.6673 4.66665 14.6673 7.33331Z"
          stroke={color}
          strokeWidth="1.5"
          strokeMiterlimit="10"
        />
        <path
          d="M5.33398 1.33331H11.334C12.6673 1.33331 13.334 1.99998 13.334 3.33331V4.25331"
          stroke={color}
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_5_258">
          <rect width={size} height={size} fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
