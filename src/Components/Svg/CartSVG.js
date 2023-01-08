import React from "react";

const CartSVG = ({ className }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g id="SVGRepo_iconCarrier">
        <circle cx="7.5" cy="18.5" r="1.5" fill="#fff"></circle>
        <circle cx="16.5" cy="18.5" r="1.5" fill="#fff"></circle>
        <path
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M3 5h2l.6 3m0 0L7 15h10l2-7H5.6z"
        ></path>
      </g>
    </svg>
  );
};

export default CartSVG;
