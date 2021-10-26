import React, { Component } from "react";
import NavMovie from "../HomeTemplate/HomePage/NavMovie/index";
import Header from "../HomeTemplate/HomePage/Header";
export default class PageNotFound extends Component {
  render() {
    return (
      <>
        <Header />
        <NavMovie />
        <img
          style={{ width: "100%", height: "100%", marginTop: "90px" }}
          src="https://thanhbinhpc.com/wp-content/uploads/2019/03/sua-loi-404-tren-may-tinh.1PNG-1.png"
          atl="https://thanhbinhpc.com/wp-content/uploads/2019/03/sua-loi-404-tren-may-tinh.1PNG-1.png"
        />
      </>
    );
  }
}
