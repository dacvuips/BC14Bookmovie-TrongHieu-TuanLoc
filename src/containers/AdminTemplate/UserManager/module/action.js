import * as ActionType from "./constants";
import api from "./../../../../utils/apiUtils";

export const actGetUser = (user) => {
  return (dispatch) => {
    dispatch(actGetUserRequest());
    api
      .get(`QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP00&tuKhoa=${user}`)
      .then((result) => {
        console.log(result.data.content);
        dispatch(actGetUserSuccess(result.data.content));
      })
      .catch((err) => {
        dispatch(actGetUserFailed(err));
      });
  };
};

const actGetUserRequest = () => {
  return {
    type: ActionType.GET_USER_REQUEST,
  };
};
//

const actGetUserSuccess = (data) => {
  return {
    type: ActionType.GET_USER_SUCCESS,
    payload: data,
  };
};

const actGetUserFailed = (error) => {
  return {
    type: ActionType.GET_USER_FAILED,
    payload: error,
  };
};
