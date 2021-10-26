import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <>
        <section id="header">
          <div className=" nav-menu fixed-top is-scrolling ">
            <div className="row">
              <div className="col-md-12">
                <nav className="">
                  <div className="header__container">
                    <div className="header__left">
                      <div href="# " className="header__logo">
                        <Link to="/" className="header__logo-link">
                          <img
                            src="../img/logo-app-vieon.png"
                            className="header__logo-img"
                            alt="Hiêu DEV"
                          ></img>
                        </Link>
                      </div>

                      <ul className="header__menu">
                        <li className="header__menu-item header__home">
                          <a href="# " className="header__menu-link">
                            <span className="header__icon ">
                              <i className="flaticon-home text-active"></i>
                            </span>
                            <span className="header__text text-active">
                              Trang chủ{" "}
                            </span>
                          </a>
                          <div className="header__submenu">
                            <div className="header__submenu-container">
                              <ul className="header__submenu-list">
                                <li className="header__submenu-item">
                                  <a
                                    href="# "
                                    className="header__submenu-link header__submenu-link-first"
                                  >
                                    Phim Bộ
                                  </a>
                                </li>
                                <li className="header__submenu-item">
                                  <a href="# " className="header__submenu-link">
                                    Phim Điện Ảnh
                                  </a>
                                </li>
                                <li className="header__submenu-item">
                                  <a href="# " className="header__submenu-link">
                                    TV Show
                                  </a>
                                </li>
                                <li className="header__submenu-item">
                                  <a href="# " className="header__submenu-link">
                                    Thể Thao
                                  </a>
                                </li>
                                <li className="header__submenu-item">
                                  <a href="# " className="header__submenu-link">
                                    Thiếu Nhi
                                  </a>
                                </li>
                                <li className="header__submenu-link-before header__submenu-item ">
                                  <a
                                    href="# "
                                    className="header__submenu-link "
                                  >
                                    VIP
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
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
                        <li className="header__menu-right-item">
                          <button className="header__menu-buton">
                            Đăng ký gói
                          </button>
                        </li>
                        <li className="header__menu-right-item">
                          <button className="header__menu-buton">
                            Nhập mã VieON
                          </button>
                        </li>
                        <li className="header__menu-right-item show__search-container">
                          <i className="flaticon-search header__icon-search" />
                          <div className="header__search-container">
                            <div className="header__search-input">
                              <input
                                type="text"
                                className="header__search-item"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                                placeholder="Tên phim, show, diễn viên, kênh TV"
                              />
                              <i className="flaticon-search header__icon-search" />
                            </div>
                            <div className="header__search-view">
                              <div className="header__search-head">
                                <p>Tìm kiếm nhiều nhất</p>
                              </div>
                              <div
                                className="header__search-body"
                                id="scroll-black"
                              >
                                <ul className="header__search-list">
                                  <li className="header_search-item">
                                    <a
                                      className="header_search-item-link"
                                      title="title"
                                      href="# "
                                    >
                                      <div className="header__search-item-thumb">
                                        <img
                                          className="header__search-item-thumb-img"
                                          src="../img/search1.jpg"
                                          alt="search1"
                                        />
                                      </div>
                                      <div className="header__search-item-content">
                                        Sau Cơn Bão
                                      </div>
                                      <div className="header__search-item-icon">
                                        <i className="flaticon-play-button icon-play" />
                                      </div>
                                    </a>
                                  </li>
                                  <li className="header_search-item">
                                    <a
                                      className="header_search-item-link"
                                      title="title"
                                      href="# "
                                    >
                                      <div className="header__search-item-thumb">
                                        <img
                                          className="header__search-item-thumb-img"
                                          src="../img/search2.jpg"
                                          alt="search1"
                                        />
                                      </div>
                                      <div className="header__search-item-content">
                                        Kỹ Nguyên Tàn Bạo
                                      </div>
                                      <div className="header__search-item-icon">
                                        <i className="flaticon-play-button icon-play" />
                                      </div>
                                    </a>
                                  </li>
                                  <li className="header_search-item">
                                    <a
                                      className="header_search-item-link"
                                      title="title"
                                      href="# "
                                    >
                                      <div className="header__search-item-thumb">
                                        <img
                                          className="header__search-item-thumb-img"
                                          src="../img/search3.jpg"
                                          alt="search1"
                                        />
                                      </div>
                                      <div className="header__search-item-content">
                                        ONE: Revolution - Full Fight
                                      </div>
                                      <div className="header__search-item-icon">
                                        <i className="flaticon-play-button icon-play" />
                                      </div>
                                    </a>
                                  </li>
                                  <li className="header_search-item">
                                    <a
                                      className="header_search-item-link"
                                      title="title"
                                      href="# "
                                    >
                                      <div className="header__search-item-thumb">
                                        <img
                                          className="header__search-item-thumb-img"
                                          src="../img/search1.jpg"
                                          alt="search1"
                                        />
                                      </div>
                                      <div className="header__search-item-content">
                                        Sau Cơn Bão
                                      </div>
                                      <div className="header__search-item-icon">
                                        <i className="flaticon-play-button icon-play" />
                                      </div>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </li>
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

export default Header;
