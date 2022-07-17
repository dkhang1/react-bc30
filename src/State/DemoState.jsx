import React, { Component } from "react";

export default class DemoState extends Component {
  username = "LinhBeoBeos";
  status = false; // false: chưa đăng nhập, true: đã đăng nhập
  //   this.status là thuộc tính có sẵn đươc kế thừa từ class Component của thư viện reactjs
  //   Các giá trị thay đổi trên giao diện sẽ được chứa trong thuộc tính của this.state
  state = {
    status: false,
  };
  renderLogin = () => {
    if (this.state.status) {
      return <span className="text-white">{this.username}</span>;
    }
    return (
      <button
        className="btn btn-success ml-2"
        onClick={(e) => {
          //    chặn sự kiện reload browser
          e.preventDefault();
          this.Login();
        }}
      >
        Đăng nhập
      </button>
    );
  };
  Login = () => {
    console.log("Đăng nhập");
    // this.state.status = true : không được gán state trực tiếp
    // let newState = { status: true };
    // Hàm setState là một hàm bất đồng bộ
    this.setState({ status: true }, () => {
      console.log("state", this.state);
    });
  };

  render() {
    return (
      <div className="container">
        <h3>Demo State</h3>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          />
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav me-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home <span className="visually-hidden">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
            </ul>
            <form className="d-flex my-2 my-lg-0">
              {this.renderLogin()}
              {/* {this.status? <span className='text-white'>{this.username}</span> : <button
                className="btn btn-success my-2 my-sm-0"
              >
                Đăng nhập
              </button>} */}
            </form>
          </div>
        </nav>
      </div>
    );
  }
}
