import * as ActionType from "./constants";
import api from "./../../../../utils/apiUtils";

export const actFetchDetailMovie = (id) => {
  return (dispatch) => {
    dispatch(actDetailMovieRequest());

    api
      .get(`QuanLyPhim/LayThongTinPhim?MaPhim=${id}`)
      .then((result) => {
        dispatch(actDetailMovieSuccess(result.data.content));
      })
      .catch((error) => {
        dispatch(actDetailMovieFailed(error));
      });
  };
};

const actDetailMovieRequest = () => {
  return {
    type: ActionType.DETAIL_MOVIE_REQUEST,
  };
};

const actDetailMovieSuccess = (data) => {
  return {
    type: ActionType.DETAIL_MOVIE_SUCCESS,
    payload: data,
  };
};

const actDetailMovieFailed = (error) => {
  return {
    type: ActionType.DETAIL_MOVIE_FAILED,
    payload: error,
  };
};

export const actFetchLichChieu = (id) => {
  return (dispatch) => {
    dispatch(actLichChieuRequest());

    api
      .get(`QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${id}`)
      .then((result) => {
        dispatch(actLichChieuSuccess(result.data.content));
      })
      .catch((error) => {
        dispatch(actLichChieuFailed(error));
      });
  };
};

const actLichChieuRequest = () => {
  return {
    type: ActionType.LICH_CHIEU_REQUEST,
  };
};

const actLichChieuSuccess = (data) => {
  return {
    type: ActionType.LICH_CHIEU_SUCCESS,
    payload: data,
  };
};

const actLichChieuFailed = (error) => {
  return {
    type: ActionType.LICH_CHIEU_FAILED,
    payload: error,
  };
};
