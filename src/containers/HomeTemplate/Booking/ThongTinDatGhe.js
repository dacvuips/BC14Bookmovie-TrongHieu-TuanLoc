import React, { Component } from "react";
import { connect } from "react-redux";
import { actHuyGhe } from "./modules/actions";

class ThongTinDatGhe extends Component {
  render() {
    return (
      <div>
        <div className="mt-5">
          <button className="gheDuocChon"></button>
          <span className="text-light" style={{ fontSize: "30px" }}>
            ghế đã đặt
          </span>
          <br />

          <button className="gheDangChon"></button>
          <span className="text-light" style={{ fontSize: "30px" }}>
            ghế đang đặt
          </span>
          <br />

          <button className="ghe"></button>
          <span className="text-light" style={{ fontSize: "30px" }}>
            ghế chưa đặt
          </span>
        </div>

        <div className="mt-5">
          <div>
            <table className="table" border="2">
              <thead>
                <tr className="text-light" style={{ fontSize: 20 }}>
                  <th>Số ghế</th>
                  <th>Giá</th>
                  <th></th>
                </tr>
              </thead>
              <tbody className="text-warning">
                {this.props.danhSachGheDangDat.map((gheDangDat, index) => {
                  return (
                    <tr key={index}>
                      <td>{gheDangDat.maGhe}</td>
                      <td>{gheDangDat.giaVe.toLocaleString()}</td>
                      <td>
                        <button
                          onClick={() => {
                            this.props.dispatch(actHuyGhe(gheDangDat.maGhe));
                          }}
                        >
                          Hủy
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
              <tfoot>
                <tr className="text-warning">
                  <td></td>
                  <td>Tổng tiền</td>
                  <td>
                    {this.props.danhSachGheDangDat
                      .reduce((tongTien, gheDangDat, index) => {
                        return (tongTien += gheDangDat.giaVe);
                      }, 0)
                      .toLocaleString()}
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    danhSachGheDangDat: state.datVeReducer.danhSachGheDangDat,
  };
};

export default connect(mapStateToProps)(ThongTinDatGhe);
