import * as ActionType from "./constants";
import api from "../../../../../utils/apiUtils";

//Giả sử BE trả về exp time: 3600000 (1 giờ)

export const actResgiterApi = (user, history) => {
  return (dispatch) => {
    dispatch(actResgiterRequest());

    api
      .post("QuanLyNguoiDung/DangKy", user)
      .then((result) => {
        localStorage.setItem(
          "USER__LOGIN",
          JSON.stringify(result.data.content)
        );

        //Check maLoaiNguoiDung

        //thời gian hết phiên làm việc
        //lưu exp xuống localStorage

        //setTimeOut để logout

        dispatch(actResgiterSuccess(result.data.content));
        if (window.confirm("Thêm thành công")) {
          window.open("/", "Thanks for You!");
        }

        history.replace("/");
      })
      .catch((error) => {
        dispatch(actResgiterFailed(error));
      });
  };
};

//Trường hợp reload lại trang web

const actResgiterRequest = () => {
  return {
    type: ActionType.RESGITER_REQUEST,
  };
};

const actResgiterSuccess = (data) => {
  return {
    type: ActionType.RESGITER_SUCCESS,
    payload: data,
  };
};

const actResgiterFailed = (error) => {
  return {
    type: ActionType.RESGITER_FAILED,
    payload: error,
  };
};
