import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavMovie extends Component {
  render() {
    return (
      <>
        <section id="nav">
          <nav className="navbar navbar-expand-lg navbar-light">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <a href="# " className="header__logo-link">
                <img
                  style={{ width: "100px" }}
                  src="../img/logo-app-vieon.png"
                  className="header__logo-img"
                  alt="Hiếu DEV"
                ></img>
              </a>
              <ul className="navbar__menu">
                <li className="navbar__menu-item navbar__home">
                  <a href="# " className="navbar__menu-link">
                    <span className="navbar__icon ">
                      <i className="flaticon-home text-active"></i>
                    </span>
                    <span className="navbar__text text-active">Trang chủ </span>
                  </a>
                  <div className="navbar__submenu">
                    <div className="navbar__submenu-container">
                      <ul className="navbar__submenu-list">
                        <li className="navbar__submenu-item">
                          <a
                            href="# "
                            className="navbar__submenu-link navbar__submenu-link-first"
                          >
                            Phim Bộ
                          </a>
                        </li>
                        <li className="navbar__submenu-item">
                          <a href="# " className="navbar__submenu-link">
                            Phim Điện Ảnh
                          </a>
                        </li>
                        <li className="navbar__submenu-item">
                          <a href="# " className="navbar__submenu-link">
                            TV Show
                          </a>
                        </li>
                        <li className="navbar__submenu-item">
                          <a href="# " className="navbar__submenu-link">
                            Thể Thao
                          </a>
                        </li>
                        <li className="navbar__submenu-item">
                          <a href="# " className="navbar__submenu-link">
                            Thiếu Nhi
                          </a>
                        </li>
                        <li className="navbar__submenu-link-before navbar__submenu-item ">
                          <a href="# " className="navbar__submenu-link ">
                            VIP
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="navbar__menu-item">
                  <a href="# " className="navbar__menu-link">
                    <span className="navbar__icon">
                      <i className="flaticon-television"></i>
                    </span>
                    <span className="navbar__text">Truyền hình </span>
                  </a>
                </li>
                <li className="navbar__menu-item">
                  <a href="# " className="navbar__menu-link">
                    <span className="navbar__icon">
                      <i className="flaticon-play"></i>
                    </span>
                    <span className="navbar__text">HBO GO </span>
                  </a>
                </li>
                <li className="navbar__menu-item">
                  <a href="# " className="navbar__menu-link">
                    <span className="navbar__icon">
                      <i className="flaticon-play"></i>
                    </span>
                    <span className="navbar__text">Rap Việt </span>
                  </a>
                </li>
                <li className="navbar__menu-item">
                  <a href="# " className="navbar__menu-link">
                    <span className="navbar__icon">
                      <i className="flaticon-play"></i>
                    </span>
                    <span className="navbar__text">Chơi là chạy</span>
                  </a>
                </li>
                <li className="navbar__menu-right-item hover__account">
                  <div className="navbar__menu-login-container d-flex mt-3">
                    <i className="flaticon-user navbar__icon-account " />
                    <Link to="/auth">
                      <button className="navbar__menu-login-button mr-1">
                        <span className="text">Đăng nhập</span>
                      </button>
                    </Link>
                    <button className="navbar__menu-login-button">
                      <span className="text">Đăng ký</span>
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
        </section>
      </>
    );
  }
}

export default NavMovie;
