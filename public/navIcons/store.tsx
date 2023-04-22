import { NavTypes } from "./types";

export default function store({ color, size }: NavTypes) {
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.78 2.09971C8.09259 2.069 8.40814 2.10407 8.70635 2.20268C9.00457 2.30128 9.27883 2.46123 9.5115 2.67223C9.74416 2.88323 9.93007 3.14061 10.0573 3.42779C10.1845 3.71498 10.2501 4.02562 10.25 4.33971V4.33997V4.5833H5.75V4.46664C5.75 3.30908 6.70491 2.20006 7.77636 2.10006L7.77636 2.10007L7.78 2.09971ZM13.9423 5.7172C13.4515 5.13371 12.7158 4.79125 11.75 4.65381V4.34023V4.33997C11.7501 3.81657 11.6407 3.29894 11.4288 2.82037C11.2168 2.34173 10.9069 1.91277 10.5192 1.5611C10.1314 1.20944 9.67428 0.942853 9.17726 0.778512C8.68081 0.614362 8.15553 0.555848 7.63515 0.606719C5.70751 0.787702 4.25 2.62477 4.25 4.46664V4.65381C3.28417 4.79125 2.54849 5.13371 2.0577 5.7172C1.40443 6.49387 1.35805 7.49702 1.45455 8.36913L1.45447 8.36913L1.45579 8.37966L1.95499 12.3733C2.03058 13.0733 2.21213 13.8996 2.89164 14.5204C3.56653 15.1369 4.58315 15.4166 6 15.4166H10C11.4169 15.4166 12.4335 15.1369 13.1084 14.5204C13.7879 13.8996 13.9694 13.0732 14.045 12.3732L14.5442 8.37966L14.5443 8.37967L14.5455 8.36913C14.642 7.49702 14.5956 6.49387 13.9423 5.7172ZM3.44421 12.1936L2.94489 8.19904C2.86239 7.44745 2.95946 6.97541 3.20563 6.68274C3.44522 6.3979 3.99804 6.0833 5.33333 6.0833H10.6667C12.002 6.0833 12.5548 6.3979 12.7944 6.68274C13.0405 6.97541 13.1376 7.44745 13.0551 8.19904L12.5558 12.1936L12.5557 12.1936L12.5543 12.2067C12.4894 12.812 12.36 13.1724 12.0966 13.4129C11.8265 13.6597 11.2631 13.9166 10 13.9166H6C4.73685 13.9166 4.17347 13.6597 3.90336 13.4129C3.64005 13.1724 3.51058 12.812 3.44573 12.2067L3.44585 12.2067L3.44421 12.1936ZM5.66332 6.99998C5.11104 6.99998 4.66332 7.44769 4.66332 7.99998C4.66332 8.55226 5.11104 8.99998 5.66332 8.99998H5.66866C6.22094 8.99998 6.66866 8.55226 6.66866 7.99998C6.66866 7.44769 6.22094 6.99998 5.66866 6.99998H5.66332ZM10.33 6.99998C9.77771 6.99998 9.32999 7.44769 9.32999 7.99998C9.32999 8.55226 9.77771 8.99998 10.33 8.99998H10.3367C10.8889 8.99998 11.3367 8.55226 11.3367 7.99998C11.3367 7.44769 10.8889 6.99998 10.3367 6.99998H10.33Z"
        fill={color}
      />
    </svg>
  );
}