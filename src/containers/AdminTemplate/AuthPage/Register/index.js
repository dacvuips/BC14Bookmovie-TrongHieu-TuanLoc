import React, { useState } from "react";
import { actResgiterApi } from "./modules/actions";
import { useDispatch } from "react-redux";

import HeaderLogin from "../Header";
import Footer from "containers/HomeTemplate/HomePage/Footer";
import { Form, Input } from "antd";
import {
  QrcodeOutlined,
  // EyeOutlined,
  FacebookOutlined,
  AppleOutlined,
  GooglePlusOutlined,
} from "@ant-design/icons";
import { NavLink, Link } from "react-router-dom";
// import { NavLink } from "react-router-dom";

function RegisterPage(props) {
  const [state, setState] = useState({
    taiKhoan: "",
    matKhau: "",
    email: "",
    soDt: "",
    hoTen: "",
    maNhom: "",
  });
  const dispatch = useDispatch();

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setState({
      ...state,
      maNhom: "GP02",
      [name]: value,
    });
  };

  const handleRegister = (event) => {
    event.preventDefault();
    dispatch(actResgiterApi(state));
  };

  // if (loading) return <Loader />;

  // const renderNoti = () => {
  //   return (
  //     error && (
  //       <div className="alert alert-danger">
  //         {error?.response?.data?.content}
  //       </div>
  //     )
  //   );
  // };

  return (
    <>
      <HeaderLogin />
      <div className="login">
        <div className="login__container">
          <div className="col login__content mx-auto p-4">
            <div className="login__header">
              <span>Đăng Ký</span>
              <p className="login__QR-text">Mã QR</p>
              <QrcodeOutlined
                style={{
                  fontSize: "65px",
                  color: "rgb(253, 73, 2)",
                  cursor: "pointer",
                }}
              />
            </div>
            {/* {renderNoti()} */}
            <form onSubmit={handleRegister}>
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

              <div className="form-group">
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

              <div className="form-group mt-3">
                <Form.Item
                  className="mb-1"
                  label="Email"
                  name="email"
                  rules={[
                    { required: true, message: "Please input your email!" },
                  ]}
                >
                  <Input
                    placeholder="Vui lòng nhập Email"
                    type="text"
                    name="email"
                    onChange={handleOnChange}
                  />
                </Form.Item>
              </div>
              <div className="form-group mt-3">
                <Form.Item
                  className="mb-1"
                  label="Số điện thoại"
                  name="soDt"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Số điện thoại!",
                    },
                  ]}
                >
                  <Input
                    placeholder="Vui lòng nhập số điện thoại"
                    type="text"
                    name="soDt"
                    onChange={handleOnChange}
                  />
                </Form.Item>
              </div>
              <div className="form-group mt-3">
                <Form.Item
                  className="mb-1"
                  label="Họ tên"
                  name="hoTen"
                  rules={[
                    { required: true, message: "Please input your username!" },
                  ]}
                >
                  <Input
                    placeholder="Vui lòng nhập họ tên"
                    type="text"
                    name="hoTen"
                    onChange={handleOnChange}
                  />
                </Form.Item>
              </div>
              <button type="submit" className="btn btn-success w-100">
                Đăng Ký
              </button>
            </form>

            <div className="login__forgot-container">
              <Link to="# " className="login__forgot-text">
                <span>Quên mật khẩu</span>
              </Link>
              <NavLink to="/auth" className="login__forgot-text">
                <span className="btn btn-warning">Đăng nhập</span>
              </NavLink>
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
              <NavLink to="/dang-ky" className="login__forgot-text">
                <span> - Đăng ký -</span>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default RegisterPage;
