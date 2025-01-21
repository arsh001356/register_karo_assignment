// src/components/Common/Button/Button.jsx
import React from "react";

const Button = ({ children, onClick, type = "primary" }) => {
  const baseStyles = "px-8 py-3 rounded-lg text-white transition-colors";
  const typeStyles =
    type === "primary"
      ? "bg-[#1C4670] hover:bg-[#153557]"
      : "bg-gray-200 text-black hover:bg-gray-300";

  return (
    <button className={`${baseStyles} ${typeStyles}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
