import React, { Component } from "react";

export default class Input extends Component {
  render() {
    <input
      className="input"
      type="text"
      id="firstname"
      name="firstName"
      value={this.state.firstName}
      onChange={this.handleChange}
    />;
  }
}
