import React, { Component } from "react";

export default class BaiTapState extends Component {
  state = {
    imgSrc: "./img/black-car.jpg", // state defaut
    fSize: 16,
  };

  render() {
    return (
      <div className="container">
        <h3>Bài tập 1: Bài tập chọn màu xe</h3>
        <div className="row">
          <div className="col-6">
            <img className="w-100" src={this.state.imgSrc} alt="..." />
          </div>
          <div className="col-6">
            <button
              className="btn btn-danger m-2"
              onClick={() => {
                // thay đổi hình
                this.setState({
                  imgSrc: "./img/red-car.jpg",
                });
              }}
            >
              Red
            </button>
            <button
              className="btn btn-dark m-2"
              onClick={() => {
                // thay đổi hình
                this.setState({
                  imgSrc: "./img/black-car.jpg",
                });
              }}
            >
              Black
            </button>
            <button
              className="btn btn-secondary m-2"
              onClick={() => {
                // thay đổi hình
                this.setState({
                  imgSrc: "./img/silver-car.jpg",
                });
              }}
            >
              Silver
            </button>
            <button
              className="btn btn-default m-2 border"
              onClick={() => {
                // thay đổi hình
                this.setState({
                  imgSrc: "./img/steel-car.jpg",
                });
              }}
            >
              Steel
            </button>
          </div>
        </div>
        <h3 className="mt-5">Bài tập 2: Tăng giảm font-size</h3>
        <p style={{ fontSize: this.state.fSize }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
          reiciendis explicabo corporis fugiat, quam provident, minus dolores
          nobis sit cumque eum deserunt. Blanditiis laborum nisi tempora porro
          rem, illo voluptates.
        </p>
        <button className="btn btn-primary m-2" onClick={()=>{
          this.setState({
            fSize: this.state.fSize + 1
          })
        }}>+</button>
        <button className="btn btn-primary m-2" onClick={()=>{
          this.setState({
            fSize: this.state.fSize - 1
          })
        }}>-</button>
      </div>
    );
  }
}
