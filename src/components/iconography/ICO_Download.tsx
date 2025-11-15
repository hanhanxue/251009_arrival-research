import { SVGProps } from "react";

const ICO_Download = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      {...props}
    >
      <path
        d="M4 6L8 10L12 6M4 12L12 12"
        stroke="var(--c-on-surface)"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 3L8 10"
        stroke="var(--c-on-surface)"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ICO_Download;
