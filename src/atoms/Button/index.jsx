import React from "react";
import './style.scss'

const Button = ({ label, action, type }) => {
  return (
    <button className={`button -${type}`} onClick={() => action?.()}>
      {label}
    </button>
  );
};

export default Button;
