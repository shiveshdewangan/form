import React from "react";

const InputTextField = ({
  name,
  type,
  placeholder,
  required,
  _handleChange,
}) => (
  <div>
    <input
      type={type}
      name={name}
      required={required}
      autoComplete='off'
      placeholder={placeholder}
      onChange={_handleChange}
    />
  </div>
);

export default InputTextField;
