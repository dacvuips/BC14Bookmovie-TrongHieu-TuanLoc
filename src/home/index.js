import React, { Component } from "react";
import { BackTop } from "antd";
import { Carousel } from "antd";
export default class Home extends Component {
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
                        <a href="# " className="header__logo-link">
                          <img
                            src="./img/logo-app-vieon.png"
                            className="header__logo-img"
                            alt="Hiêu DEV"
                          ></img>
                        </a>
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
                                          src="./img/search1.jpg"
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
                                          src="./img/search2.jpg"
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
                                          src="./img/search3.jpg"
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
                                          src="./img/search1.jpg"
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
                            <button className="header__menu-login-button margin__login">
                              <span className="text">Đăng nhập</span>
                            </button>
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
                  src="./img/logo-app-vieon.png"
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
                    <button className="navbar__menu-login-button mr-1">
                      <span className="text">Đăng nhập</span>
                    </button>
                    <button className="navbar__menu-login-button">
                      <span className="text">Đăng ký</span>
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
        </section>
        <section id="carousel">
          <div className="carousel__container">
            <div className="carousel__pane">
              <div className="carousel__backdrop">
                <div className="carousel__video">
                  <video
                    className="carousel__video-video"
                    loop={false}
                    autoPlay={true}
                    muted={true}
                    controls={false}
                    poster="./img/carousel1.jpg"
                  >
                    <source
                      src="https://trailer.vieon.vn/Teaser_HighClass.mp4"
                      type="video/mp4"
                    />
                  </video>

                  {/* <iframe style={{ marginRight: "30px", width: "100%", height: "800px" }}
              src={`https://www.youtube-nocookie.com/embed/SF0FzRHxvo8?autoplay=1&rel=0&nologo=1&vq=hd1080&mute=1&controls=0`}
        frameBorder='0'
        allow='autoplay; encrypted-media'
        allowFullScreen
        
/> */}
                </div>
              </div>

              <div className="content">
                <div className="info">
                  <img
                    className="info-img"
                    src="https://static2.vieon.vn/vieplay-image/title_card_dark/2021/08/31/df8t14tc_title-highclass-opt4-nenden_815_255.webp"
                    alt=""
                  />
                  <div className="info-desc">
                    <span>
                      Vạch trần những lời nói dối nguy hiểm, những bộ mặt giả
                      tạo ẩn đằng sau cuộc sống hoàn hảo của những người phụ nữ
                      ưu tú trong xã hội.
                    </span>
                  </div>
                  <div className="info-group">
                    <a href="# " className="info-see">
                      <i className="flaticon-play-button" />
                      <span className="carousel__info-text">Xem ngay</span>
                    </a>
                    <a href="# " className="info-detail">
                      <i className="flaticon-info" />
                      <span className="carousel__info-text">Chi tiết</span>
                    </a>
                  </div>
                </div>
                <div className="carousel__info-s"></div>
              </div>
            </div>
          </div>
        </section>
        <section id="listMovie">
          <div className="listMovie__container">
            <div className="row listMovie__setrow">
              {/* Clommmmmmmmmmmmmmn */}
              <div className="col col-sm-4 col-md-3 col-lg-3 col-xl-2 mb-5">
                <div className="listMovie__item">
                  <div className="listMovie__img">
                    <a title="Hinh" href="ádad" className="listMovie__img-link">
                      <img
                        className="listMovie__img-i"
                        src="http://movie0706.cybersoft.edu.vn/hinhanh/spectre.jpg"
                        alt="./img/high-thumb.jpg"
                      ></img>
                    </a>

                    <div className="movie__modal">
                      <div className="movie__modal-item">
                        <div className="movie__modal-header">
                          <iframe
                            style={{
                              marginRight: "30px",
                              width: "100%",
                              height: "228px",
                            }}
                            src={`https://www.youtube.com/embed/RMvYEl37MPo?autoplay=1&rel=0&nologo=1&vq=hd1080&mute=1&controls=0`}
                            frameBorder="0"
                            allow="autoplay; encrypted-media"
                            allowFullScreen
                            title="á"
                          />
                        </div>
                        <div className="movie__modal-content">
                          <div className="movie__modal-title">
                            <span>High Class: Đẳng Cấp Thượng Lưu</span>
                          </div>
                          <div className="movie__modal-listbtn">
                            <a href="# " className="movie__modal-see">
                              <i className="flaticon-play-button" />
                              <span className="movie__modal-text">
                                Xem ngay
                              </span>
                            </a>
                            <a href="# " className="movie__modal-detail">
                              <i className="flaticon-plus" />
                              <span className="movie__modal-text">Đặt vé</span>
                            </a>
                            <a href="# " className="movie__modal-detail">
                              <i className="flaticon-info" />
                              <span className="movie__modal-text">
                                Chi tiết
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="listMovie__content">
                    <div className="listMovie__title">
                      <a
                        title="High Class: Đẳng Cấp Thượng Lưu"
                        href="# "
                        className="listMovie__title-link"
                      >
                        <span>High Class: Đẳng Cấp Thượng Lưu</span>
                      </a>
                    </div>
                    <div className="listMovie__date-gr mb-2">
                      <div className="listMovie__showDate">
                        <span>
                          {new Date("2021-07-29T09:57:20.087").getFullYear()}
                        </span>
                      </div>
                      <div className="listMovie__backdrop"></div>
                      <div className="listMovie__rating">
                        <span>Rate : 10</span>
                      </div>
                    </div>

                    <div className="listMovie__description">
                      <span className="listMovie__desc-text">
                        High Class là bộ phim truyền hình bí ẩn, hồi hộp kể về
                        Song Yeo Wool - cựu luật sư mất tất cả vì bị buộc tội
                        sát hại chồng mình. Từ đây, các bí mật bẩn thỉu, sự dối
                        trá và thói đạo đức giả đằng sau cuộc sống hoàn hảo của
                        những người phụ nữ ưu tú trong xã hội Hàn Quốc dần được
                        hé lộ.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Clommmmmmmmmmmmmmn */}
              <div className="col col-sm-4 col-md-3 col-lg-3 col-xl-2 mb-5">
                <div className="listMovie__item">
                  <div className="listMovie__img">
                    <a title="Hinh" href="ádad" className="listMovie__img-link">
                      <img
                        className="listMovie__img-i"
                        src="http://movie0706.cybersoft.edu.vn/hinhanh/southpaw.jpg"
                        alt="./img/high-thumb.jpg"
                      ></img>
                    </a>
                  </div>
                  <div className="listMovie__content">
                    <div className="listMovie__title">
                      <a
                        title="High Class: Đẳng Cấp Thượng Lưu"
                        href="# "
                        className="listMovie__title-link"
                      >
                        <span>High Class: Đẳng Cấp Thượng Lưu</span>
                      </a>
                    </div>
                    <div className="listMovie__date-gr">
                      <div className="listMovie__showDate">
                        <span>
                          {new Date("2021-07-29T09:57:20.087").getFullYear()}
                        </span>
                      </div>
                      <div className="listMovie__backdrop"></div>
                      <div className="listMovie__rating">
                        <span>Rate : 10</span>
                      </div>
                    </div>

                    <div className="listMovie__description">
                      <span className="listMovie__desc-text">
                        High Class là bộ phim truyền hình bí ẩn, hồi hộp kể về
                        Song Yeo Wool - cựu luật sư mất tất cả vì bị buộc tội
                        sát hại chồng mình. Từ đây, các bí mật bẩn thỉu, sự dối
                        trá và thói đạo đức giả đằng sau cuộc sống hoàn hảo của
                        những người phụ nữ ưu tú trong xã hội Hàn Quốc dần được
                        hé lộ.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Clommmmmmmmmmmmmmn */}
              <div className="col col-sm-4 col-md-3 col-lg-3 col-xl-2 mb-5">
                <div className="listMovie__item">
                  <div className="listMovie__img">
                    <a title="Hinh" href="ádad" className="listMovie__img-link">
                      <img
                        className="listMovie__img-i"
                        src="http://movie0706.cybersoft.edu.vn/hinhanh/the-gentlemen_gp08.jpg"
                        alt="./img/high-thumb.jpg"
                      ></img>
                    </a>

                    <div className="movie__modal">
                      <div className="movie__modal-item">
                        <div className="movie__modal-header">
                          <iframe
                            style={{
                              marginRight: "30px",
                              width: "100%",
                              height: "228px",
                            }}
                            src={`https://www.youtube.com/embed/RMvYEl37MPo?autoplay=1&rel=0&nologo=1&vq=hd1080&mute=1&controls=0`}
                            frameBorder="0"
                            allow="autoplay; encrypted-media"
                            allowFullScreen
                            title="á"
                          />
                        </div>
                        <div className="movie__modal-content">
                          <div className="movie__modal-title">
                            <span>High Class: Đẳng Cấp Thượng Lưu</span>
                          </div>
                          <div className="movie__modal-listbtn">
                            <a href="# " className="movie__modal-see">
                              <i className="flaticon-play-button" />
                              <span className="movie__modal-text">
                                Xem ngay
                              </span>
                            </a>
                            <a href="# " className="movie__modal-detail">
                              <i className="flaticon-plus" />
                              <span className="movie__modal-text">Đặt vé</span>
                            </a>
                            <a href="# " className="movie__modal-detail">
                              <i className="flaticon-info" />
                              <span className="movie__modal-text">
                                Chi tiết
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="listMovie__content">
                    <div className="listMovie__title">
                      <a
                        title="High Class: Đẳng Cấp Thượng Lưu"
                        href="# "
                        className="listMovie__title-link"
                      >
                        <span>High Class: Đẳng Cấp Thượng Lưu</span>
                      </a>
                    </div>
                    <div className="listMovie__date-gr">
                      <div className="listMovie__showDate">
                        <span>
                          {new Date("2021-07-29T09:57:20.087").getFullYear()}
                        </span>
                      </div>
                      <div className="listMovie__backdrop"></div>
                      <div className="listMovie__rating">
                        <span>Rate : 10</span>
                      </div>
                    </div>

                    <div className="listMovie__description">
                      <span className="listMovie__desc-text">
                        High Class là bộ phim truyền hình bí ẩn, hồi hộp kể về
                        Song Yeo Wool - cựu luật sư mất tất cả vì bị buộc tội
                        sát hại chồng mình. Từ đây, các bí mật bẩn thỉu, sự dối
                        trá và thói đạo đức giả đằng sau cuộc sống hoàn hảo của
                        những người phụ nữ ưu tú trong xã hội Hàn Quốc dần được
                        hé lộ.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Clommmmmmmmmmmmmmn */}
              <div className="col col-sm-4 col-md-3 col-lg-3 col-xl-2 mb-5">
                <div className="listMovie__item">
                  <div className="listMovie__img">
                    <a title="Hinh" href="ádad" className="listMovie__img-link">
                      <img
                        className="listMovie__img-i"
                        src="http://movie0706.cybersoft.edu.vn/hinhanh/truedetective.jpg"
                        alt="./img/high-thumb.jpg"
                      ></img>
                    </a>
                  </div>
                  <div className="listMovie__content">
                    <div className="listMovie__title">
                      <a
                        title="High Class: Đẳng Cấp Thượng Lưu"
                        href="# "
                        className="listMovie__title-link"
                      >
                        <span>High Class: Đẳng Cấp Thượng Lưu</span>
                      </a>
                    </div>
                    <div className="listMovie__date-gr">
                      <div className="listMovie__showDate">
                        <span>
                          {new Date("2021-07-29T09:57:20.087").getFullYear()}
                        </span>
                      </div>
                      <div className="listMovie__backdrop"></div>
                      <div className="listMovie__rating">
                        <span>Rate : 10</span>
                      </div>
                    </div>

                    <div className="listMovie__description">
                      <span className="listMovie__desc-text">
                        High Class là bộ phim truyền hình bí ẩn, hồi hộp kể về
                        Song Yeo Wool - cựu luật sư mất tất cả vì bị buộc tội
                        sát hại chồng mình. Từ đây, các bí mật bẩn thỉu, sự dối
                        trá và thói đạo đức giả đằng sau cuộc sống hoàn hảo của
                        những người phụ nữ ưu tú trong xã hội Hàn Quốc dần được
                        hé lộ.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Clommmmmmmmmmmmmmn */}
              <div className="col col-sm-4 col-md-3 col-lg-3 col-xl-2 mb-5">
                <div className="listMovie__item">
                  <div className="listMovie__img">
                    <a title="Hinh" href="ádad" className="listMovie__img-link">
                      <img
                        className="listMovie__img-i"
                        src="https://movie0706.cybersoft.edu.vn/hinhanh/trainwreck.jpg"
                        alt="./img/high-thumb.jpg"
                      ></img>
                    </a>
                  </div>
                  <div className="listMovie__content">
                    <div className="listMovie__title">
                      <a
                        title="High Class: Đẳng Cấp Thượng Lưu"
                        href="# "
                        className="listMovie__title-link"
                      >
                        <span>High Class: Đẳng Cấp Thượng Lưu</span>
                      </a>
                    </div>
                    <div className="listMovie__date-gr">
                      <div className="listMovie__showDate">
                        <span>
                          {new Date("2021-07-29T09:57:20.087").getFullYear()}
                        </span>
                      </div>
                      <div className="listMovie__backdrop"></div>
                      <div className="listMovie__rating">
                        <span>Rate : 10</span>
                      </div>
                    </div>

                    <div className="listMovie__description">
                      <span className="listMovie__desc-text">
                        High Class là bộ phim truyền hình bí ẩn, hồi hộp kể về
                        Song Yeo Wool - cựu luật sư mất tất cả vì bị buộc tội
                        sát hại chồng mình. Từ đây, các bí mật bẩn thỉu, sự dối
                        trá và thói đạo đức giả đằng sau cuộc sống hoàn hảo của
                        những người phụ nữ ưu tú trong xã hội Hàn Quốc dần được
                        hé lộ.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Clommmmmmmmmmmmmmn */}
              <div className="col col-sm-4 col-md-3 col-lg-3 col-xl-2 mb-5">
                <div className="listMovie__item">
                  <div className="listMovie__img">
                    <a title="Hinh" href="ádad" className="listMovie__img-link">
                      <img
                        className="listMovie__img-i"
                        src="https://movie0706.cybersoft.edu.vn/hinhanh/ted2_gp08.jpg"
                        alt="./img/high-thumb.jpg"
                      ></img>
                    </a>

                    <div className="movie__modal">
                      <div className="movie__modal-item">
                        <div className="movie__modal-header">
                          <iframe
                            style={{
                              marginRight: "30px",
                              width: "100%",
                              height: "228px",
                            }}
                            src={`https://www.youtube.com/embed/RMvYEl37MPo?autoplay=1&rel=0&nologo=1&vq=hd1080&mute=1&controls=0`}
                            frameBorder="0"
                            allow="autoplay; encrypted-media"
                            allowFullScreen
                            title="á"
                          />
                        </div>
                        <div className="movie__modal-content">
                          <div className="movie__modal-title">
                            <span>High Class: Đẳng Cấp Thượng Lưu</span>
                          </div>
                          <div className="movie__modal-listbtn">
                            <a href="# " className="movie__modal-see">
                              <i className="flaticon-play-button" />
                              <span className="movie__modal-text">
                                Xem ngay
                              </span>
                            </a>
                            <a href="# " className="movie__modal-detail">
                              <i className="flaticon-plus" />
                              <span className="movie__modal-text">Đặt vé</span>
                            </a>
                            <a href="# " className="movie__modal-detail">
                              <i className="flaticon-info" />
                              <span className="movie__modal-text">
                                Chi tiết
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="listMovie__content">
                    <div className="listMovie__title">
                      <a
                        title="High Class: Đẳng Cấp Thượng Lưu"
                        href="# "
                        className="listMovie__title-link"
                      >
                        <span>High Class: Đẳng Cấp Thượng Lưu</span>
                      </a>
                    </div>
                    <div className="listMovie__date-gr">
                      <div className="listMovie__showDate">
                        <span>
                          {new Date("2021-07-29T09:57:20.087").getFullYear()}
                        </span>
                      </div>
                      <div className="listMovie__backdrop"></div>
                      <div className="listMovie__rating">
                        <span>Rate : 10</span>
                      </div>
                    </div>

                    <div className="listMovie__description">
                      <span className="listMovie__desc-text">
                        High Class là bộ phim truyền hình bí ẩn, hồi hộp kể về
                        Song Yeo Wool - cựu luật sư mất tất cả vì bị buộc tội
                        sát hại chồng mình. Từ đây, các bí mật bẩn thỉu, sự dối
                        trá và thói đạo đức giả đằng sau cuộc sống hoàn hảo của
                        những người phụ nữ ưu tú trong xã hội Hàn Quốc dần được
                        hé lộ.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="banner">
          <Carousel autoplay>
            <div className="banner__container container-lx">
              <img
                src="https://static2.vieon.vn/vieplay-image/promotion_banner/2021/09/14/q69ghhs9_hb_web_1800x280_quancuulinh_2388_458.webp"
                alt="Promotion Banner"
                title="Promotion Banner"
                width="..."
                height="..."
              />
            </div>
            <div className="banner__container container-lx">
              <img
                src="https://static2.vieon.vn/vieplay-image/promotion_banner/2021/09/25/d9axweh1_1800x280_2388_458.webp"
                alt="Promotion Banner"
                title="Promotion Banner"
                width="..."
                height="..."
              />
            </div>

            <div className="banner__container container-lx">
              <img
                src="https://static2.vieon.vn/vieplay-image/promotion_banner/2021/09/23/o07dbcor_hb_web_1800x280_promo9k-1_2388_458.webp"
                alt="Promotion Banner"
                title="Promotion Banner"
                width="..."
                height="..."
              />
            </div>
          </Carousel>
        </section>
        <section id="card">
          <div className="card__container">
            <div className="row">
              <div className=" col-md-8 ">
                <div className="card__thumbnail">
                  <div className="card__video">
                    <iframe
                      style={{
                        width: "100%",
                        height: "530px",
                      }}
                      src={`https://www.youtube.com/embed/LKgP_f5-nnU?rel=0&autoplay=1&enablejsapi=0&nologo=1&vq=hd1080&mute=1&controls=0&showinfo=0`}
                      frameBorder="0"
                      allowFullScreen
                      title="á"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card__section">
                  <div className="card__img">
                    <img
                      src="https://movie0706.cybersoft.edu.vn/hinhanh/avengers-infinity-war.jpg"
                      alt="https://movie0706.cybersoft.edu.vn/hinhanh/avengers-infinity-war.jpg"
                      width="..."
                      height="..."
                    />
                  </div>
                  <div className="listMovie__content">
                    <div className="listMovie__title mt-3">
                      <a
                        title="High Class: Đẳng Cấp Thượng Lưu"
                        href="# "
                        className="listMovie__title-link "
                      >
                        <h2>High Class: Đẳng Cấp Thượng Lưu</h2>
                      </a>
                    </div>
                    <div className="listMovie__date-gr">
                      <div className="listMovie__showDate">
                        <span>
                          {new Date("2021-07-29T09:57:20.087").getFullYear()}
                        </span>
                      </div>
                      <div className="listMovie__backdrop"></div>
                      <div className="listMovie__rating">
                        <span>Rate : 10</span>
                      </div>
                    </div>

                    <div className="listMovie__description mt-3">
                      <span className="text-light card__text-line">
                        High Class là bộ phim truyền hình bí ẩn, hồi hộp kể về
                        Song Yeo Wool - cựu luật sư mất tất cả vì bị buộc tội
                        sát hại chồng mình. Từ đây, các bí mật bẩn thỉu, sự dối
                        trá và thói đạo đức giả đằng sau cuộc sống hoàn hảo của
                        những người phụ nữ ưu tú trong xã hội Hàn Quốc dần được
                        hé lộ.
                      </span>
                    </div>

                    <div className="info-group d-flex">
                      <a href="# " className="info-see">
                        <i className="flaticon-play-button" />
                        <span className="carousel__info-text">Xem ngay</span>
                      </a>
                      <a href="# " className="info-detail">
                        <i className="flaticon-info" />
                        <span className="carousel__info-text">Chi tiết</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="footer">
          <div className="footer__container text-center">
            <div className="footer__app justify-content-center">
              <div className="footer__appstore mr-3">
                <a className="footer__link" href="# ">
                  <img
                    className="footer__img"
                    src="./img/Apple.png"
                    alt="apple"
                  />
                </a>
              </div>
              <div className="footer__chplay">
                <a className="footer__link" href="# ">
                  <img
                    className="footer__img"
                    src="./img/Google.png"
                    alt="google"
                  />
                </a>
              </div>
            </div>

            <div className="footer__content">
              <span className="footer__content-text">
                <i className="flaticon-search mr-2" />
                Nhóm Trần Trọng Hiếu | Tuấn Lộc
              </span>
              <p className="coppyright text-light">
                Tìm kiếm trong cửa hàng ứng dụng dành cho thiết bị di động
              </p>
              <p className="coppyright">
                Chúng tôi sử dụng Cookies để cải thiện trải nghiệm sử dụng của
                bạn. Nếu bạn tiếp tục sử dụng trang web của chúng tôi, có nghĩa
                là bạn đồng ý chúng tôi sử dụng Cookies.
              </p>
              <p className="coppyright">Copyright © 2021 All Rights Reserved</p>
            </div>
          </div>
        </section>
        <section id="backToTop">
          <BackTop>
            <div className="back-to-top ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="46px"
                height="65px"
                xmlnsxlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 16.139584 21.166666"
              >
                <defs>
                  <linearGradient
                    x1="108.479"
                    x2="105.833"
                    y1="-41.667"
                    y2="106.5"
                    gradientUnits="userSpaceOnUse"
                    xlinkhref="#a_u"
                    gradientTransform="matrix(.104 0 0 .104 5.098 266.05)"
                  ></linearGradient>
                  <linearGradient id="a_u">
                    <stop stop-color="#222" offset="0"></stop>
                    <stop stop-opacity="0" stop-color="#222" offset="1"></stop>
                  </linearGradient>
                </defs>
                <g>
                  <g>
                    <path
                      fill="#d0321e"
                      d="M8.17.24l-3.3 13.72 3.3 7.13 3.3-7.14z"
                    ></path>
                    <path fill="#fa503b" d="M8.17.24L.5 13.54 5.16 13z"></path>
                    <path fill="#fa503b" d="M8.17.24l7.7 13.3L11.2 13z"></path>
                  </g>
                </g>
              </svg>
            </div>
          </BackTop>
        </section>
      </>
    );
  }
}
