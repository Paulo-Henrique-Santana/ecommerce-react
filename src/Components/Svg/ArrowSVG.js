import React from "react";

const ArrowSVG = (props) => {
  return (
    <svg
      {...props}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      // xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 512 512"
      // xml:space="preserve"
      fill="#000000"
      transform="rotate(270)matrix(1, 0, 0, 1, 0, 0)"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <g>
          <polygon points="419.916,71.821 348.084,0 92.084,256.005 348.084,512 419.916,440.178 235.742,256.005 "></polygon>
        </g>
      </g>
    </svg>
  );
};

export default ArrowSVG;
