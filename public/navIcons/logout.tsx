import { NavTypes } from "./types";

export default function logout({ color, size }: NavTypes) {
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.6259 9.74669L13.3325 8.04002L11.6259 6.33335M6.50586 8.04002H13.2859M7.83919 13.3334C4.89253 13.3334 2.50586 11.3334 2.50586 8.00002C2.50586 4.66669 4.89253 2.66669 7.83919 2.66669"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
