import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Carder extends Component {
  render() {
    return (
      <>
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
                        <h2 className="text-light">
                          Avengers: Cuộc Chiến Vô Cực1
                        </h2>
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
                        Sau chuyến hành trình độc nhất vô nhị không ngừng mở
                        rộng và phát triển vụ trũ điện ảnh Marvel, bộ phim
                        Avengers: Cuộc Chiến Vô Cực sẽ mang đến màn ảnh trận
                        chiến cuối cùng khốc liệt nhất mọi thời đại. Biệt đội
                        Avengers và các đồng minh siêu anh hùng của họ phải chấp
                        nhận hy sinh tất cả để có thể chống lại kẻ thù hùng mạnh
                        Thanos trước tham vọng hủy diệt toàn bộ vũ trụ của hắn
                      </span>
                    </div>

                    <div className="info-group d-flex">
                      <NavLink to="/detail/1525" className="info-see">
                        <i className="flaticon-play-button" />
                        <span className="carousel__info-text">Xem ngay</span>
                      </NavLink>
                      <NavLink to="/detail/1525" className="info-detail">
                        <i className="flaticon-info" />
                        <span className="carousel__info-text">Chi tiết</span>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Carder;
