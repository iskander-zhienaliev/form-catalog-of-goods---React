import React from "react";
import "./LoginForm.scss";

const Input = ({ type, id, name, title, value, onChange, onBlur }) => {
  return (
    <input
      className="input"
      type={type}
      id={id}
      name={name}
      title={title}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
    />
  );
};
export default Input;
