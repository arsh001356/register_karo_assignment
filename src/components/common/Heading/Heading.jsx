// src/components/Common/Heading/Heading.jsx
import React from "react";

const Heading = ({ children }) => {
  return (
    <p className="text-[#FFA229] font-semibold uppercase tracking-wide mb-2">
      {children}
    </p>
  );
};

export default Heading;
