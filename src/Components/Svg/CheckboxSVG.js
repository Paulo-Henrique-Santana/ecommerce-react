import React from "react";

const Checkbox = ({ active }) => {
  return (
    <svg
      fill="#000000"
      width="20px"
      height="20px"
      viewBox="0 0 32 32"
      id="icon"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>{/* <style>.cls-1{{ fill: "none" }}</style> */}</defs>
      <title>checkbox--checked</title>
      <path d="M26,4H6A2,2,0,0,0,4,6V26a2,2,0,0,0,2,2H26a2,2,0,0,0,2-2V6A2,2,0,0,0,26,4ZM6,26V6H26V26Z" />
      {active && (
        <polygon points="14 21.5 9 16.54 10.59 15 14 18.35 21.41 11 23 12.58 14 21.5" />
      )}
      <rect
        id="_Transparent_Rectangle_"
        data-name="&lt;Transparent Rectangle&gt;"
        // class="cls-1"
        fill="none"
        width="32"
        height="32"
      />
    </svg>
  );
};

export default Checkbox;
