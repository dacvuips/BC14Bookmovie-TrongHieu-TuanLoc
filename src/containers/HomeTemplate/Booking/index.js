import React, { Component } from "react";
import ThongTinDatGhe from "./ThongTinDatGhe";
// import HangGhe from "./HangGhe";

export default class BookingTicket extends Component {
  // renderHangGhe = () => {
  //   return danhSachGheData.map((hangGhe, index) => {
  //     return (
  //       <div key={index}>
  //         <HangGhe hangGhe={hangGhe} soHangGhe={index} />
  //       </div>
  //     );
  //   });
  // };

  render() {
    return (
      <div
        className="booking"
        style={{
          position: "fixed",
          width: "100%",
          height: "100%",
          backgroundImage: "url('./../images/')",
          backgroundSize: "100%",
        }}
      >
        <div
          style={{
            position: "fixed",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.7",
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-8 text-center">
                <div className="display-4 text-warning">
                  BOOKING TICKET VIEON
                </div>
                <div className="mt-3 text-light" style={{ fontSize: "25px" }}>
                  SCREEN
                </div>
                <div
                  className="mt-2"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                  }}
                >
                  <div className="screen"></div>
                </div>
                {/* {this.renderHangGhe()} */}
              </div>
              <div className="col-md-4 text-center">
                <div className="text-light mt-2" style={{ fontSize: "25px" }}>
                  LIST
                </div>
                <ThongTinDatGhe />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
