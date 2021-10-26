import React, { Component } from "react";
import { BackTop } from "antd";

class Footer extends Component {
  render() {
    return (
      <>
        <section id="footer">
          <div className="footer__container text-center">
            <div className="footer__app justify-content-center">
              <div className="footer__appstore mr-3">
                <a className="footer__link" href="# ">
                  <img
                    className="footer__img"
                    src="../img/Apple.png"
                    alt="apple"
                  />
                </a>
              </div>
              <div className="footer__chplay">
                <a className="footer__link" href="# ">
                  <img
                    className="footer__img"
                    src="../img/Google.png"
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

export default Footer;
