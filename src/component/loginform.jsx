import React, { Component } from "react";
import Input from "./common/input";

class LoginForm extends Component {
  //   userName = React.createRef();  // ref object create

  state = {
    account: { userName: "", password: "" },
  };

  // initial value is set to empty string as null and undefined give error cannat set controllable value of a uncontrollable field

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted");
    // console.log(this.userName.current.value);   // refs to get reference of a property alias of document.getElementbyId
  };
  handleChange = (e) => {
    const account = { ...this.state.account };
    account[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ account });
  };

  render() {
    const { account } = this.state;
    return (
      <div>
        <h1>Login</h1>

        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username"> Username</label>
            <input
              value={account.userName}
              onChange={this.handleChange}
              name="userName"
              //   ref={this.userName}   // ref setting
              id="username"
              type="text"
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              name="password"
              onChange={this.handleChange}
              value={account.password}
              id="password"
              type="text"
              className="form-control"
            />
          </div>
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
