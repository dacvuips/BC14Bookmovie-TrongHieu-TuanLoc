import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
class HeaderLogin extends Component {
  render() {
    return (
      <>
        <section id="header__login">
          <div className="is-scrolling">
            <div className="row">
              <div className="col-md-12">
                <nav className="">
                  <div className="header__container">
                    <div className="header__left">
                      <div className="header__logo">
                        <Link to="/" className="header__logo-link">
                          <img
                            src="./img/logo-app-vieon.png"
                            className="header__logo-img"
                            alt="Hiêu DEV"
                          ></img>
                        </Link>
                      </div>

                      <ul className="header__menu header__menu-login">
                        <li className="header__menu-item header__home">
                          <Link to="/" className="header__menu-link">
                            <span className="header__icon ">
                              <i className="flaticon-home text-active"></i>
                            </span>
                            <span className="header__text text-active">
                              Trang chủ{" "}
                            </span>
                          </Link>
                        </li>
                        <li className="header__menu-item">
                          <a href="# " className="header__menu-link">
                            <span className="header__icon">
                              <i className="flaticon-television"></i>
                            </span>
                            <span className="header__text">Truyền hình </span>
                          </a>
                        </li>
                        <li className="header__menu-item">
                          <a href="# " className="header__menu-link">
                            <span className="header__icon">
                              <i className="flaticon-play"></i>
                            </span>
                            <span className="header__text">HBO GO </span>
                          </a>
                        </li>
                        <li className="header__menu-item">
                          <a href="# " className="header__menu-link">
                            <span className="header__icon">
                              <i className="flaticon-play"></i>
                            </span>
                            <span className="header__text">Rap Việt </span>
                          </a>
                        </li>
                        <li className="header__menu-item">
                          <a href="# " className="header__menu-link">
                            <span className="header__icon">
                              <i className="flaticon-play"></i>
                            </span>
                            <span className="header__text">Chơi là chạy</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="header__right">
                      <ul className="header__menu-right">
                        <li className="header__menu-right-item hover__account">
                          <i className="flaticon-user header__icon-account" />
                          <div className="header__menu-login-container">
                            <NavLink to="/auth">
                              <button className="header__menu-login-button margin__login">
                                <span className="text">Đăng nhập</span>
                              </button>
                            </NavLink>
                            <button className="header__menu-login-button">
                              <span className="text">Đăng ký</span>
                            </button>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default HeaderLogin;
