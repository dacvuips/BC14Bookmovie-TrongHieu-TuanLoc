import React, { useState } from "react";
import { actAuthApi } from "./modules/actions";
import { useSelector, useDispatch } from "react-redux";
import Loader from "./../../../components/Loader";

import HeaderLogin from "./Header";
import Footer from "containers/HomeTemplate/HomePage/Footer";
import { Form, Input } from "antd";
import {
  QrcodeOutlined,
  // EyeOutlined,
  FacebookOutlined,
  AppleOutlined,
  GooglePlusOutlined,
} from "@ant-design/icons";
// import { NavLink } from "react-router-dom";

const onFinish = (values: any) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

function AuthPage(props) {
  const [state, setState] = useState({ taiKhoan: "", matKhau: "" });
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.authReducer.loading);
  const error = useSelector((state) => state.authReducer.error);

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleLogin = (event) => {
    event.preventDefault();
    dispatch(actAuthApi(state, props.history));
  };

  if (loading) return <Loader />;

  const renderNoti = () => {
    return (
      error && (
        <div className="alert alert-danger">
          {error?.response?.data?.content}
        </div>
      )
    );
  };

  return (
    <>
      <HeaderLogin />
      <div className="login">
        <div className="login__container">
          <div className="col login__content mx-auto p-4">
            <div className="login__header">
              <span>Đăng Nhập</span>
              <p className="login__QR-text">Đăng nhập với mã QR</p>
              <QrcodeOutlined
                style={{
                  fontSize: "65px",
                  color: "rgb(253, 73, 2)",
                  cursor: "pointer",
                }}
              />
            </div>
            {renderNoti()}
            <form onSubmit={handleLogin}>
              <div className="form-group mt-3">
                <Form.Item
                  className="mb-1"
                  label="Tài khoản"
                  name="taikhoan"
                  rules={[
                    { required: true, message: "Please input your username!" },
                  ]}
                >
                  <Input
                    placeholder="Vui lòng nhập tài khoản"
                    type="text"
                    name="taiKhoan"
                    onChange={handleOnChange}
                  />
                </Form.Item>
              </div>

              <div class="form-group">
                <Form.Item
                  className="mb-1"
                  label="Mật khẩu"
                  name="Mật khẩu"
                  rules={[
                    { required: true, message: "Vui lòng nhập mật khẩu!" },
                  ]}
                >
                  <Input.Password
                    name="matKhau"
                    type="password"
                    placeholder="Vui lòng nhập mật khẩu"
                    aria-label="Password"
                    aria-describedby="basic-addon1"
                    onChange={handleOnChange}
                  />
                </Form.Item>
              </div>
              <button type="submit" className="btn btn-success w-100">
                Đăng nhập
              </button>
            </form>

            <div className="login__forgot-container">
              <a href="#" className="login__forgot-text">
                <span>Quên mật khẩu</span>
              </a>
              <a href="#" className="login__forgot-text">
                <span>Đăng nhập với SMS</span>
              </a>
            </div>
            <div className="login__text-or">
              <div className="login__text-through"></div>
              <span>Hoặc</span>
              <div className="login__text-through"></div>
            </div>
            <div className="row d-flex login__social-container">
              <div className="login__social-FB">
                <FacebookOutlined
                  style={{
                    fontSize: "35px",
                    color: "#fff",
                    cursor: "pointer",
                  }}
                />
                <p>Facebook</p>
              </div>
              <div className="login__social-FB">
                <GooglePlusOutlined
                  style={{
                    fontSize: "35px",
                    color: "#fff",
                    cursor: "pointer",
                    paddingLeft: "5px",
                  }}
                />
                <p>Google</p>
              </div>
              <div
                className="login__social-FB"
                style={{
                  backgroundColor: "#000",
                }}
              >
                <AppleOutlined
                  style={{
                    fontSize: "35px",
                    color: "#fff",
                    cursor: "pointer",
                    backgroundColor: "#000",
                  }}
                />
                <p>Apple</p>
              </div>
            </div>
            <div className="login__Register">
              <span>Bạn mới biết đến chung tôi?</span>
              <a href="#" className="login__forgot-text">
                <span> - Đăng ký -</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AuthPage;
