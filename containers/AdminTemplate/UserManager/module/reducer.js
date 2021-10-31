import * as ActionType from "./constants";

const initialStatae = {
  loading: false,
  data: null,
  error: null,
  thongTinPhim: {},
};

const getUserReducer = (state = initialStatae, action) => {
  switch (action.type) {
    case ActionType.GET_USER_REQUEST:
      state.loading = true;
      state.data = null;
      state.error = null;
      return { ...state };

    case ActionType.GET_USER_SUCCESS:
      state.loading = false;
      state.data = action.payload;
      state.error = null;
      return { ...state };

    case ActionType.GET_USER_FAILED:
      state.loading = false;
      state.data = null;
      state.error = action.payload;
      return { ...state };

    case ActionType.SET_USER_REQUEST:
      state.thongTinPhim = action.thongTinPhim;
      return { ...state };
    default:
      return { ...state };
  }
};

export default getUserReducer;
