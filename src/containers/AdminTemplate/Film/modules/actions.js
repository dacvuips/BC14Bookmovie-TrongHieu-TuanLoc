import * as ActionType from "./constants";
import api from "./../../../../utils/apiUtils";

export const actAddFilm = (user) => {
  return (dispatch) => {
    dispatch(actAddFilmRequest());
    api
      .post("QuanLyPhim/ThemPhimUploadHinh", user)
      .then((result) => {
        dispatch(actAddFilmSuccess(result.data.content));
        alert("Thêm phim thành công");
      })
      .catch((err) => {
        dispatch(actAddFilmFailed(err));
      });
  };
};

const actAddFilmRequest = () => {
  return {
    type: ActionType.ADD_FILM_REQUEST,
  };
};

const actAddFilmSuccess = (data) => {
  return {
    type: ActionType.ADD_FILM_SUCCESS,
    payload: data,
  };
};

const actAddFilmFailed = (error) => {
  return {
    type: ActionType.ADD_FILM_FAILED,
    payload: error,
  };
};

export const actGetFilm = (user) => {
  return (dispatch) => {
    dispatch(actGetFilmRequest());
    api
      .get(`QuanLyPhim/LayThongTinPhim?MaPhim=${user}`)
      .then((result) => {
        console.log(result.data.content);
        dispatch({
          type: ActionType.SET_FILM_REQUEST,
          thongTinPhim: result.data.content,
        });
      })
      .catch((err) => {
        dispatch(actGetFilmFailed(err));
      });
  };
};

const actGetFilmRequest = () => {
  return {
    type: ActionType.GET_FILM_REQUEST,
  };
};
const actSetFilmRequest = (thongtin) => {
  return {
    type: ActionType.SET_FILM_REQUEST,
    thongTinPhim: thongtin,
  };
};

const actGetFilmSuccess = (data) => {
  return {
    type: ActionType.GET_FILM_SUCCESS,
    payload: data,
  };
};

const actGetFilmFailed = (error) => {
  return {
    type: ActionType.GET_FILM_FAILED,
    payload: error,
  };
};

export const actAddEditFilm = (user, history) => {
  return (dispatch) => {
    dispatch(actAddEditFilmRequest());
    api
      .post(`QuanLyPhim/CapNhatPhimUpload`, user)
      .then((result) => {
        console.log(result.data.content);
        dispatch(actAddEditFilmSuccess(result.data.content));
        // dispatch(actGetFilm());
        alert("Cập nhật phim thành công");
      })
      .catch((err) => {
        dispatch(actAddEditFilmFailed(err));
      });
  };
};
const actAddEditFilmRequest = () => {
  return {
    type: ActionType.ADD_EDIT_FILM_REQUEST,
  };
};

const actAddEditFilmSuccess = (data) => {
  return {
    type: ActionType.ADD_EDIT_FILM_SUCCESS,
    payload: data,
  };
};

const actAddEditFilmFailed = (error) => {
  return {
    type: ActionType.ADD_EDIT_FILM_FAILED,
    payload: error,
  };
};

export const actDeleteFilm = (maPhim) => {
  return (dispatch) => {
    api
      .delete(`QuanLyPhim/XoaPhim?MaPhim=${maPhim}`)
      .then((result) => {
        dispatch(actGetFilm());
        alert("Xóa phim thành công");
      })
      .catch((err) => {
        dispatch(actAddEditFilmFailed(err));
      });
  };
};
