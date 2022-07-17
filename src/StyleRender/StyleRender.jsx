import { getQueriesForElement } from "@testing-library/react";
import React, { Component } from "react";
import style from "./StyleRender.module.css";
// import 'link css'cách này css sẽ anhrh ưởng toàn bộ do cơ chế single Page của react
export default class StyleRender extends Component {
  render() {
    return (
      <div className="container">
        <h2 className="color-red">this is a demo</h2>
        <p className={`${style["color-blue"]} display-4`}>text blue</p>
        <p style={{ color: "green", fontSize: "40px" }}>text green</p>
      </div>
    );
  }
}
