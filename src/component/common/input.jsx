import React from "react";

const Input = ({ label, name, autoFocus, error, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        name={name}
        {...rest}
        id={name}
        autoFocus={autoFocus ? autoFocus : false}
        className="form-control"
      />

      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
