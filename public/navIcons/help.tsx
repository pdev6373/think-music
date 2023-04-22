import { NavTypes } from "./types";

export default function help({ color, size }: NavTypes) {
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_5_292)">
        <path
          d="M11.334 12.2867H8.66732L5.70065 14.26C5.60053 14.3267 5.48417 14.365 5.36398 14.3708C5.2438 14.3766 5.12429 14.3497 5.01822 14.2929C4.91214 14.2361 4.82348 14.1516 4.76168 14.0483C4.69988 13.9451 4.66727 13.827 4.66732 13.7067V12.2867C2.66732 12.2867 1.33398 10.9533 1.33398 8.95333V4.95333C1.33398 2.95333 2.66732 1.62 4.66732 1.62H11.334C13.334 1.62 14.6673 2.95333 14.6673 4.95333V8.95333C14.6673 10.9533 13.334 12.2867 11.334 12.2867Z"
          stroke={color}
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.99924 7.5733V7.4333C7.99924 6.97997 8.27924 6.73997 8.55924 6.54664C8.83258 6.35997 9.10591 6.11997 9.10591 5.67997C9.10591 5.06664 8.61258 4.5733 7.99924 4.5733C7.38591 4.5733 6.89258 5.06664 6.89258 5.67997M7.99591 9.16664H8.00258"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_5_292">
          <rect width={size} height={size} fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
