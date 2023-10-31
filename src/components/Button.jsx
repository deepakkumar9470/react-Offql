import React from "react";

const Button = ({ title, customeStyle, icon }) => {
  return (
    <button className={customeStyle}>
      {title}
      {icon}
    </button>
  );
};

export default Button;
