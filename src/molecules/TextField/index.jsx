import React from "react";

import Input from "atoms/Input";
import ErrorMsg from "atoms/ErrorMsg";

import './style.scss'

const TextField = ({ type, change, validate, validationError, placeholder }) => {
  return (
    <div className="text-field">
      <Input
        type={type}
        placeholder={placeholder}
        change={change}
        blur={validate}
      />
      <ErrorMsg text={validationError} />
    </div>
  );
};

export default TextField;
