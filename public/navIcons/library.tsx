import { NavTypes } from "./types";

export default function library({ color, size }: NavTypes) {
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_5_275)">
        <path
          d="M14.666 3.99998V5.61331C14.666 6.66665 13.9993 7.33331 12.946 7.33331H10.666V2.67331C10.666 1.93331 11.2727 1.33331 12.0127 1.33331C12.7393 1.33998 13.406 1.63331 13.886 2.11331C14.366 2.59998 14.666 3.26665 14.666 3.99998Z"
          stroke={color}
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1.33398 4.66665V14C1.33398 14.5533 1.96065 14.8666 2.40065 14.5333L3.54065 13.68C3.80732 13.48 4.18065 13.5066 4.42065 13.7466L5.52732 14.86C5.78732 15.12 6.21398 15.12 6.47398 14.86L7.59398 13.74C7.82732 13.5066 8.20065 13.48 8.46065 13.68L9.60065 14.5333C10.0407 14.86 10.6673 14.5466 10.6673 14V2.66665C10.6673 1.93331 11.2673 1.33331 12.0007 1.33331H4.00065C2.00065 1.33331 1.33398 2.52665 1.33398 3.99998V4.66665Z"
          stroke={color}
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_5_275">
          <rect width={size} height={size} fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
