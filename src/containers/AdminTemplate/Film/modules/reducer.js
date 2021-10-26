import * as ActionType from "./constants";

const initialStatae = {
  loading: false,
  data: null,
  error: null,
  thongTinPhim: {},
};

const addFilmReducer = (state = initialStatae, action) => {
  switch (action.type) {
    case ActionType.ADD_FILM_REQUEST:
      state.loading = true;
      state.data = null;
      state.error = null;
      return { ...state };

    case ActionType.ADD_FILM_SUCCESS:
      state.loading = false;
      state.data = action.payload;
      state.error = null;
      return { ...state };

    case ActionType.ADD_FILM_FAILED:
      state.loading = false;
      state.data = null;
      state.error = action.payload;
      return { ...state };
    case ActionType.SET_FILM_REQUEST:
      state.loading = false;
      state.data = null;
      state.error = null;
      state.thongTinPhim = action.thongTinPhim;
      return { ...state };
    default:
      return { ...state };
  }
};

export default addFilmReducer;
