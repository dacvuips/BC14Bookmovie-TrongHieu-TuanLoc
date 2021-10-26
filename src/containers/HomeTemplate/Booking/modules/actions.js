import * as ActionType from "./constants";
import api from "../../../../utils/apiUtils";

const getDataGhe = (id) => {
  return () => {
    api
      .get(`/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${id}`)
      .then((result) => {
        this.setState({
          danhSachVe: result.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

const danhSachGheData = () => {
  return () => {
    api
      .post("QuanLyDatVe/DatVe")
      .then((result) => {
        getDataGhe(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

const actDatGhe = (ghe) => {
  return {
    type: ActionType.DAT_GHE,
    ghe,
  };
};

const actHuyGhe = (maGhe) => {
  return {
    type: ActionType.HUY_GHE,
    maGhe,
  };
};

export { actDatGhe, actHuyGhe, danhSachGheData };
