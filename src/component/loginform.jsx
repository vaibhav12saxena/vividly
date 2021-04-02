import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./common/input";
import Form from "./common/form";

class LoginForm extends Form {
  state = {
    data: { userName: "", password: "" },
    error: {},
  };
  schema = {
    userName: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  doSubmit = () => {
    console.log("Submitted");
  };

  render() {
    const { data, error } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            value={data.userName}
            onChange={this.handleChange}
            name="userName"
            error={error.userName}
            label="Username"
            autoFocus={true}
          />
          <Input
            value={data.password}
            onChange={this.handleChange}
            name="password"
            error={error.password}
            label="Password"
          />
          <button className="btn btn-primary" disabled={this.validateForm()}>
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
