import React, { Component } from "react";
import Joi from "joi-browser";
import Form from "./common/form";
class RegistrationForm extends Form {
  state = {
    data: { userName: "", password: "", name: "" },
    error: {},
  };
  schema = {
    userName: Joi.string().email().required().label("Username"),
    password: Joi.string().min(5).required().label("Password"),
    name: Joi.string().required().label("name"),
  };
  doSubmit = () => {
    console.log("Registered");
  };
  render() {
    return (
      <div>
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("userName", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderInput("name", "Name")}
          {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}

export default RegistrationForm;
