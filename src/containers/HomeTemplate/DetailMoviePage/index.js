import React, { Component } from "react";
import { connect } from "react-redux";
import { actFetchDetailMovie } from "./modules/actions";
import Loader from "./../../../components/Loader";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "./../HomePage/Header";
import Footer from "./../HomePage/Footer";
import NavMovie from "./../HomePage/NavMovie";
class DetailPage extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchData(id);
  }

  renderTable = () => {
    const { data } = this.props;
    return data?.lichChieu?.map((item) => {
      return (
        <tr key={item.maLichChieu}>
          <td>{item.thongTinRap.tenCumRap}</td>
          <td>{item.thongTinRap.tenRap}</td>
          <td>{new Date(item.ngayChieuGioChieu).toLocaleDateString()}</td>
          <td>{new Date(item.ngayChieuGioChieu).toLocaleTimeString()}</td>
          <td>
            <a href="#dat-ve" className="btn btn-success">
              Booking
            </a>
          </td>
        </tr>
      );
    });
  };

  render() {
    const { data, loading } = this.props;
    if (loading) return <Loader />;
    return (
      <>
        {/* Film */}
        <Header />

        <NavMovie />
        <section className="film">
          <div className="film__container">
            <iframe
              width="560"
              height="315"
              src={data?.trailer}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </section>

        {/* Intro */}
        <section className="intro">
          <div className="text">
            <div className="row">
              <div className="col-sm-2">
                <div className="avatar">
                  <img src={data && data.hinhAnh} alt />
                </div>
              </div>
              <div className="col">
                <h1 className="detail__title">{data?.tenPhim}</h1>
                <div className="viewer-rating">
                  <span className="view text-light">723.827 lượt xem</span>
                  <span className="rate text-warning">{data?.danhGia}</span>
                  <span className="star">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star-half-alt" />
                  </span>
                </div>
                <div className="information text-light">
                  <span>{new Date(data?.ngayKhoiChieu).getFullYear()}</span>

                  <span>1g 40ph</span>
                </div>
                <div className="time">
                  <div className="progress">
                    <div
                      className="progress-bar w-75"
                      role="progressbar"
                      aria-valuenow={75}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                  <span className="text text-light">Còn 1g 40ph</span>
                </div>
                <div className="description">
                  <p className="text text-light">{data?.moTa}</p>
                </div>
                <Link to="/booking">
                  <button className="btn btn-warning ">Đặt vé</button>
                </Link>
                <div className="info-right">
                  <div className="icon">
                    <div className="comment-icon  text-light">
                      <i className="fa fa-comment-alt" />
                      <p>Bình luận</p>
                    </div>
                    <div className="share text-light">
                      <i className="fab fa-telegram-plane" />
                      <p>Chia sẻ</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Comment */}
        <section className="comment">
          <h3>Bình luận</h3>
          <div className="comment-body">
            <form className="form-comment">
              <div className="media">
                <a href="#" className="avatar-comment">
                  <i className="fa fa-user"></i>
                </a>
              </div>
              <div className="field">
                <textarea
                  name=""
                  id=""
                  rows="1"
                  placeholder="Thêm bình luận..."
                ></textarea>
              </div>
            </form>
            <div className="commented">
              <div className="media-object">
                <div className="media-avatar">
                  <img
                    className="img-fluid"
                    src="../images/download.jfif"
                    alt=""
                  />
                </div>
                <div className="media-text">
                  <h4>Laithi Pham</h4>
                  <p>Phim hay lắm</p>
                </div>
                <div className="comment-time ml-auto">
                  <span>23 ngày trước</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
        {/* Cũ */}

        {/* CŨ */}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.detailMovieReducer.loading,
    data: state.detailMovieReducer.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (id) => {
      dispatch(actFetchDetailMovie(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailPage);
