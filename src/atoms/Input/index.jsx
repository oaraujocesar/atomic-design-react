import React from "react";

import "./style.scss";

const Input = ({ type, placeholder, change, blur }) => {
  return (
    <input
      className="input"
      type={type}
      placeholder={placeholder}
      onBlur={() => blur?.()}
      onChange={({ currentTarget }) => change?.(currentTarget.value)}
    />
  );
};

export default Input;
