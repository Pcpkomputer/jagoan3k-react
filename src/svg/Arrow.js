import * as React from "react"

function SvgComponent(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={308}
      height={89}
      viewBox="0 0 288 69"
      fill="none"
      {...props}
    >
      <path
        d="M1.758 11.566C-.89 6.247 2.978 0 8.92 0h256.95a7.999 7.999 0 017.161 4.435l13.194 26.5a8 8 0 010 7.13l-14.298 28.718a4 4 0 01-3.58 2.217H8.92c-5.941 0-9.81-6.247-7.162-11.566l7.868-15.803a16 16 0 000-14.262L1.758 11.566z"
        fill="#23b697"
      />
    </svg>
  )
}

export default SvgComponent
