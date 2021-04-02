import React from "react";

const Input = ({ label, value, name, onChange, autoFocus, error }) => {
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

      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
