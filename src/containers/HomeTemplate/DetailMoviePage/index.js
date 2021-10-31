import React, { Component } from "react";
import { connect } from "react-redux";

import { actFetchDetailMovie } from "./modules/actions";
import { actFetchLichChieu } from "./modules/actions";

import Loader from "./../../../components/Loader";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "./../HomePage/Header";
import Footer from "./../HomePage/Footer";
import NavMovie from "./../HomePage/NavMovie";
import { Rate } from "antd";
import moment from "moment";
import { Tabs } from "antd";

const { TabPane } = Tabs;
class DetailPage extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchData(id);
    this.props.fetchLichChieu(id);
  }

  render() {
    const { data, loading, datalichchieu } = this.props;
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
                  <img src={data && data.hinhAnh} alt={data && data.hinhAnh} />
                </div>
              </div>
              <div className="col">
                <h1 className="detail__title">{data?.tenPhim}</h1>
                <div className="viewer-rating">
                  <span className="view text-light">723.827 lượt xem</span>
                  <Rate allowHalf defaultValue={data?.danhGia / 2} />
                  <span className="rate text-warning"></span>
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
                
              </div>
            </div>
          </div>
          <Tabs
            className="mt-5"
            defaultActiveKey="1"
            style={{ backgroundColor: "#fff", minHeight: "300px" }}
            centered
          >
            <TabPane tab="Lịch chiếu" key="1">
              <Tabs style={{ backgroundColor: "#fff" }} tabPosition="left">
                {datalichchieu?.heThongRapChieu?.map((item, index) => {
                  return (
                    <TabPane
                      tab={
                        <div>
                          <img
                            src={item.logo}
                            alt={item.logo}
                            width={50}
                            height={50}
                          />
                        </div>
                      }
                      key={index}
                    >
                      {item.cumRapChieu?.map((cumRap, index) => {
                        return (
                          <div className="mt-5" key={index}>
                            <div className="flex flex-row">
                              <img
                                className="mr-2"
                                style={{ width: 50, height: 50 }}
                                src={
                                  "https://images.foody.vn/res/g75/743951/prof/s640x400/foody-upload-api-foody-mobile-1-jpg-180531155336.jpg"
                                }
                                alt={cumRap.tenCumRap}
                              />
                              {cumRap.tenCumRap}
                            </div>

                            <div className="row">
                              {cumRap.lichChieuPhim
                                ?.slice(0, 12)
                                .map((lichChieu, index) => {
                                  return (
                                    <div key={index} className="col-sm-2  mt-1">
                                      <NavLink
                                        className="bg-light text-warning font-weight-bold"
                                        to={`/check-out/${lichChieu.maLichChieu}`}
                                      >
                                        {moment(
                                          lichChieu.ngayChieuGioChieu
                                        ).format("hh:mm A")}
                                      </NavLink>
                                    </div>
                                  );
                                })}
                            </div>
                          </div>
                        );
                      })}
                    </TabPane>
                  );
                })}
              </Tabs>
            </TabPane>
            <TabPane tab="Thông tin" key="2">
              Content of Tab Pane 2
            </TabPane>
            <TabPane tab="Đánh giá" key="3">
              Content of Tab Pane 3
            </TabPane>
            <TabPane tab="Bình luận" key="4">
              <section className="comment">
                <h3>Bình luận</h3>
                <div className="comment-body">
                  <form className="form-comment">
                    <div className="media">
                      <Link to="# " className="avatar-comment">
                        <i className="fa fa-user"></i>
                      </Link>
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
            </TabPane>
          </Tabs>
        </section>
        {/* Comment */}

        <Footer />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.detailMovieReducer.loading,
    data: state.detailMovieReducer.data,
    datalichchieu: state.lichChieuReducer.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (id) => {
      dispatch(actFetchDetailMovie(id));
    },
    fetchLichChieu: (id) => {
      dispatch(actFetchLichChieu(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailPage);
