import React from "react";

const Input = ({ type, name, placeholder}) => (
  <div className="form-floating my-4">
    <input
      type={type}
      className="form-control"
      htmlFor={name}
      placeholder={placeholder}
      name={name}
    />
    <label htmlFor="floatingInputValue">{placeholder}</label>
  </div>
);

export default Input;
