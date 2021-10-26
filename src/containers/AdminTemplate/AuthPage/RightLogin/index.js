import React, { Component } from "react";
import { QrcodeOutlined } from "@ant-design/icons";
class RightLogin extends Component {
  render() {
    return (
      <>
        <section className="login">
          <div className="login__container">
            <div className="login__header">
              <span>Đăng Nhập</span>
              <div className="login__QR-text">Đăng nhập với mã QR</div>
              <QrcodeOutlined />
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default RightLogin;
