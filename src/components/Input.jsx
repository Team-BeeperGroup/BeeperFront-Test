import React from "react";

const Input = ({ type, name, placeholder,value,setValue}) => (
  <div className="form-floating my-4">
    <input
      type={type}
      className="form-control"
      htmlFor={name}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={((e)=> setValue(e.target.value))}
    />
    <label htmlFor="floatingInputValue">{placeholder}</label>
  </div>
);

export default Input;
