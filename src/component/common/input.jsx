import React from "react";

const Input = ({ label, value, name, onChange, autoFocus }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        name={name}
        onChange={onChange}
        value={value}
        id={name}
        autoFocus={autoFocus ? autoFocus : false}
        type="text"
        className="form-control"
      />
    </div>
  );
};

export default Input;
