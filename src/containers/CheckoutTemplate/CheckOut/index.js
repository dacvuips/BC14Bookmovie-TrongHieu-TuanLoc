import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  CloseCircleOutlined,
  CloseOutlined,
  UserOutlined,
  CheckOutlined,
} from "@ant-design/icons";
import {
  actDatVe,
  actDanhSachDatVe,
  actThongTinDatVe,
} from "./modules/actions";
import "./ghe1.css";
import { sortBy } from "lodash";
import NavMovie from "containers/HomeTemplate/HomePage/NavMovie";
import Header from "containers/HomeTemplate/HomePage/Header";

export default function CheckOut(props) {
  const login = JSON.parse(localStorage.getItem("USER__LOGIN"));

  const { data, danhSachDatGhe } = useSelector((state) => state.datveReducer);

  const dispatch = useDispatch();
  useEffect(() => {
    const maLichChieu = props.match.params.id;
    dispatch(actDatVe(maLichChieu));
  }, []);

  const renderSeats = () => {
    return data?.danhSachGhe.map((ghe, index) => {
      let classGheVip = ghe.loaiGhe === "Vip" ? "gheVip" : "";
      let classGheDaDat = ghe.daDat ? "gheDaDat" : "";

      let classGheDangDat = "";
      let indexGheDD = danhSachDatGhe.findIndex(
        (gheDD) => gheDD.maGhe === ghe.maGhe
      );
      if (indexGheDD !== -1) {
        classGheDangDat = "gheDangDat";
      }

      let classGheMinhDat = "";
      if (login.taiKhoan === ghe.taiKhoanNguoiDat) {
        classGheMinhDat = "gheMinhDat";
      }
      return (
        <Fragment key={index}>
          <button
            onClick={() => {
              dispatch(actDanhSachDatVe(ghe));
            }}
            disabled={ghe.daDat}
            key={index}
            className={`ghe ${classGheVip} ${classGheDaDat} ${classGheDangDat} ${classGheMinhDat}`}
          >
            {ghe.daDat ? (
              classGheDangDat !== "" ? (
                <UserOutlined style={{ marginBottom: 7.5 }} />
              ) : (
                <CloseOutlined style={{ marginBottom: 7.5 }} />
              )
            ) : (
              ghe.stt
            )}
          </button>

          {(index + 1) % 16 === 0 ? <br /> : ""}
        </Fragment>
      );
    });
  };
  return (
    <>
      <Header />
      <NavMovie />
      <div
        className="container"
        style={{ height: "100vh", paddingTop: "120px" }}
      >
        <div className="row">
          <div className="col-sm-9 text-center">
            <div
              className="bg-dark mt-5 m-auto"
              style={{ width: "80%", height: "20px" }}
            ></div>
            <div className="trapezoid text-center mb-3 mr-auto ml-auto">
              <h3>M??n h??nh</h3>
            </div>
            {renderSeats()}

            <table class="table text-center">
              <thead>
                <tr>
                  <th scope="col">Gh??? ch??a ?????t</th>
                  <th scope="col">Gh??? ??ang ?????t</th>
                  <th scope="col">Gh??? Vip</th>
                  <th scope="col">Gh??? ???? ?????t</th>
                  <th scope="col">Gh??? c???a b???n</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="ghe">
                      <CheckOutlined />
                    </div>
                  </td>
                  <td>
                    <div className="ghe gheDangDat">
                      <CheckOutlined />
                    </div>
                  </td>
                  <td>
                    <div className="ghe gheVip">
                      <CheckOutlined />
                    </div>
                  </td>
                  <td>
                    <div className="ghe gheDaDat">
                      <CheckOutlined />
                    </div>
                  </td>
                  <td>
                    <div className="ghe gheMinhDat">
                      <CheckOutlined />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-sm-3 col-md-3 w-100">
            <h2 className="text-success text-xl text-center mt-3">
              {data?.thongTinPhim.tenPhim}
            </h2>
            <hr />

            <p>T??n r???p: {data?.thongTinPhim.tenCumRap}</p>

            <p>?????a ??i???m: {data?.thongTinPhim.diaChi}</p>

            <p>Ng??y chi???u: {data?.thongTinPhim.ngayChieu}</p>
            <p>Gi??? chi???u: {data?.thongTinPhim.gioChieu}</p>

            <p>R???p: {data?.thongTinPhim.tenRap}</p>

            <hr />
            <div className="d-flex justify-content-between my-1">
              <span className="text-danger font-weight-bold">Gh???</span>
            </div>
            <span>
              {sortBy(danhSachDatGhe, ["stt"]).map((ghe, index) => {
                return (
                  <button
                    key={index}
                    style={{ padding: "6px" }}
                    className=" ghe gheDangDat"
                  >
                    {ghe.stt}
                  </button>
                );
              })}
            </span>
            <div className="d-flex justify-content-between my-1">
              <span className="text-danger font-weight-bold">Th??nh ti???n</span>

              <span className="text-success font-weight-bold">
                {danhSachDatGhe
                  .reduce((tongTien, ghe, index) => {
                    return (tongTien += ghe.giaVe);
                  }, 0)
                  .toLocaleString()}
                vn??
              </span>
            </div>
            <hr />
            <div className="my-2">
              <i>T??n:</i>
              <br />

              <div className="d-flex justify-content-between my-1">
                <span className="text-info font-weight-bold">
                  {login?.hoTen}
                </span>

                <span className="text-danger font-weight-bold">
                  <CloseCircleOutlined />
                </span>
              </div>
            </div>
            <div className="my-2">
              <i>Email:</i>
              <br />

              <div className="d-flex justify-content-between my-1">
                <span className="text-info font-weight-bold">
                  {login?.email}
                </span>

                <span className="text-danger font-weight-bold">
                  <CloseCircleOutlined />
                </span>
              </div>
            </div>
            <div className="my-2">
              <i>S??? ??i???n tho???i:</i>
              <br />

              <div className="d-flex justify-content-between my-1">
                <span className="text-info font-weight-bold">
                  {login?.soDT}
                </span>

                <span className="text-danger font-weight-bold">
                  <CloseCircleOutlined />
                </span>
              </div>
            </div>
            <div
              onClick={() => {
                const thongTinDatVe = {};
                thongTinDatVe.maLichChieu = props.match.params.id;
                thongTinDatVe.danhSachVe = danhSachDatGhe;
                console.log(thongTinDatVe);
                dispatch(actThongTinDatVe(thongTinDatVe));
              }}
              className="btn btn-warning text-dark w-100"
              style={{ bottom: "0" }}
            >
              ?????t v??
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
