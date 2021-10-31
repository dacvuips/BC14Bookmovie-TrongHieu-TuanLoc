import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Rate } from "antd";
export default class Movie extends Component {
  render() {
    const { movie } = this.props;
    return (
      <>
        <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2 ml-auto mr-auto mb-5">
          <div className="listMovie__item">
            <div className="listMovie__img">
              <Link
                title="Hinh"
                to={`/detail/${movie.maPhim}`}
                className="listMovie__img-link"
              >
                <img
                  className="listMovie__img-i"
                  src={movie.hinhAnh}
                  alt={movie.hinhAnh}
                ></img>
              </Link>

              <div className="movie__modal">
                <div className="movie__modal-item">
                  <div className="movie__modal-header">
                    {/* <iframe
                      style={{
                        marginRight: "30px",
                        width: "100%",
                        height: "228px",
                      }}
                      src={`${movie.trailer}?&rel=0&nologo=1&vq=hd1080&mute=1&controls=0`}
                      frameBorder="0"
                      allowFullScreen
                      title={movie.tenPhim}
                    /> */}

                    <iframe
                      width="100%"
                      height="228"
                      src={movie.trailer}
                      title={movie.tenPhim}
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                  <div className="movie__modal-content">
                    <div className="movie__modal-title">
                      <h4 className="text-light">
                        <span>{movie.tenPhim}</span>
                      </h4>
                    </div>
                    <div className="movie__modal-listbtn">
                      <Link
                        to={`/detail/${movie.maPhim}`}
                        className="movie__modal-see"
                      >
                        <i className="flaticon-play-button" />

                        <span
                          className="movie__modal-text"
                          to={`/detail/${movie.maPhim}`}
                        >
                          Xem ngay
                        </span>
                      </Link>
                      <Link
                        to={`/detail/${movie.maPhim}`}
                        className="movie__modal-detail"
                      >
                        <i className="flaticon-plus" />
                        <span className="movie__modal-text">Đặt vé</span>
                      </Link>
                      <Link
                        to={`/detail/${movie.maPhim}`}
                        className="movie__modal-detail"
                      >
                        <i className="flaticon-info" />
                        <span className="movie__modal-text">Chi tiết</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="listMovie__content">
              <div className="listMovie__title">
                <Link
                  to={`/detail/${movie.maPhim}`}
                  className="listMovie__title-link"
                >
                  <span>{movie.tenPhim}</span>
                </Link>
              </div>
              <div className="listMovie__date-gr mb-2">
                <div className="listMovie__showDate">
                  <span>
                    Ngày Chiếu:{" "}
                    {new Date(movie?.ngayKhoiChieu).toLocaleDateString()}
                  </span>
                </div>
                {/* <div className="listMovie__backdrop"></div> */}
                <div className="listMovie__rating">
                  <span>
                    <Rate
                      style={{ fontSize: "12px" }}
                      disabled
                      defaultValue={movie.danhGia / 2}
                    />
                  </span>
                </div>
              </div>

              {/* <div className="listMovie__description">
                <span className="listMovie__desc-text">{movie.moTa}</span>
              </div> */}
            </div>
          </div>
        </div>
      </>
    );
  }
}
