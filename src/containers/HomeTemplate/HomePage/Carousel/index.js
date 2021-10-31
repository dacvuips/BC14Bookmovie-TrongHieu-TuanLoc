import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Carousels extends Component {
  render() {
    return (
      <>
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
                    poster=""
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
                    <NavLink to="/detail/8478" className="info-see">
                      <i className="flaticon-play-button" />
                      <span className="carousel__info-text">Xem ngay</span>
                    </NavLink>
                    <NavLink to="/detail/8478" className="info-detail">
                      <i className="flaticon-info" />
                      <span className="carousel__info-text">Chi tiết</span>
                    </NavLink>
                  </div>
                </div>
                <div className="carousel__info-s"></div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Carousels;
