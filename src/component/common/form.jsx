import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./input";

class Form extends Component {
  state = {
    data: {},
    error: {},
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const error = this.validateForm();
    this.setState({ error: error || {} });
    if (error) return;
    this.doSubmit();
  };
  validateForm() {
    const error = {};
    const options = {
      abortEarly: false,
    };
    const result = Joi.validate(this.state.data, this.schema, options);
    console.log(result);
    if (!result.error) return null;
    result.error.details.map((item) => (error[item.path[0]] = item.message));
    return error;
  }
  handleChange = (e) => {
    const data = { ...this.state.data };
    const errorMessage = this.validateProperty(e.currentTarget);
    const error = { ...this.state.error };
    if (errorMessage) error[e.currentTarget.name] = errorMessage;
    else delete error[e.currentTarget.name];
    data[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ data, error: error || {} });
  };

  validateProperty(property) {
    const schema = { [property.name]: this.schema[property.name] };
    const obj = { [property["name"]]: property.value };
    const { error } = Joi.validate(obj, schema);
    if (!error) return null;
    return error.details[0].message;
  }

  renderButton(label) {
    return (
      <button className="btn btn-primary" disabled={this.validateForm()}>
        {label}
      </button>
    );
  }
  renderInput(name, label, type = "text") {
    const { data, error } = this.state;
    return (
      <Input
        value={data[name]}
        onChange={this.handleChange}
        name={name}
        type={type}
        error={error[name]}
        label={label}
        autoFocus={true}
      />
    );
  }
  //   renderDropdown(name, label, options) {
  //     const { data, error } = this.state;
  //     return (
  //       <React.Fragment>
  //         <div className="dropdown">
  //           <label htmlFor={name}>{label}</label>
  //           <input
  //             value={data[name]}
  //             onChange={this.handleChange}
  //             name={name}
  //             // id={name}
  //             className="form-control dropdown-toggle"
  //             id="dropdownMenuButton"
  //             data-toggle="dropdown"
  //             aria-haspopup="true"
  //             aria-expanded="false"
  //           />
  //           <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
  //             <a className="dropdown-item">Action</a>
  //             <a className="dropdown-item">Another action</a>
  //             <a className="dropdown-item">Something else here</a>
  //           </div>
  //           {error[name] && (
  //             <div className="alert alert-danger">{error[name]}</div>
  //           )}
  //         </div>
  //       </React.Fragment>
  //     );
  //   }
}

export default Form;
