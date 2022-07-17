import React, { Component } from "react";

export default class HandleEvent extends Component {
  handleClick = (e) => {
    alert("hello Cybersoft");
  };

  showMessage = (name) => {
    alert("Hello " + name);
  };
  userLogin = {
    username: "dk123",
    password: "adadadad",
  };
  render() {
    return (
      <div className="container">
        <h3>HandleEvent</h3>
        <p>{this.userLogin.username}</p>
        <button
          className="btn btn-danger ms-2"
          onClick={(e) => {
            this.showMessage("Linhbeobeos");
          }}
        >
          Click
        </button>

        <button className="btn btn-success ms-2" onClick={this.handleClick}>
          Click
        </button>
        <h3>Handle Event Change</h3>
        <input
          type="text"
          className="form-control w-25"
          onChange={(e) => {
            let tagInput = e.target;
            console.log("value", tagInput.value);
          }}
        />
      </div>
    );
  }
}
