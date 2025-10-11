import { SVGProps } from "react"

const ICO_Arrival = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="20"
      viewBox="0 0 40 20"
      fill="none"
      {...props}
    >
      <path
        d="M10 8.74228e-07H30V5H10V8.74228e-07Z"
        fill="var(--c-on-surface)"
      />
      <path d="M10 15H30V20H10V15Z" fill="var(--c-on-surface)" />
      <path d="M10 5L0 1.74846e-05V20L10 15V5Z" fill="var(--c-on-surface)" />
      <path d="M30 15L40 20V0L30 5V15Z" fill="var(--c-on-surface)" />
    </svg>
  )
}

export default ICO_Arrival
