import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./common/input";

class LoginForm extends Component {
  state = {
    account: { userName: "", password: "" },
    error: {},
  };
  schema = {
    userName: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const error = this.validateForm();
    this.setState({ error: error || {} });
    if (error) return;
    console.log("Submitted");
  };
  validateForm() {
    const error = {};
    const options = {
      abortEarly: false,
    };
    const result = Joi.validate(this.state.account, this.schema, options);
    if (!result.error) return null;
    result.error.details.map((item) => (error[item.path[0]] = item.message));
    return error;
  }
  handleChange = (e) => {
    const account = { ...this.state.account };
    const errorMessage = this.validateProperty(e.currentTarget);
    const error = { ...this.state.error };
    if (errorMessage) error[e.currentTarget.name] = errorMessage;
    else delete error[e.currentTarget.name];
    account[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ account, error: error || {} });
  };
  validateProperty(property) {
    const error = {};
    if (property.value.trim() === "") {
      return `${property.name} is required`;
    }
  }

  render() {
    const { account, error } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            value={account.userName}
            onChange={this.handleChange}
            name="userName"
            error={error.userName}
            label="Username"
            autoFocus={true}
          />
          <Input
            value={account.password}
            onChange={this.handleChange}
            name="password"
            error={error.password}
            label="Password"
          />
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
