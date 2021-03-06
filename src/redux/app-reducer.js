import { stopSubmit } from "redux-form";
import { authAPI } from "../api/api";
import { getAuthtUsersdata } from "./auth-reducer";

const INITIALIZED_SUCCESS = "SET_INITIALIZED";

const initialState = {
  initialized: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true,
      };
    default:
      return state;
  }
};

export const initializedSuccess = () => ({
  type: INITIALIZED_SUCCESS,
});

export const initializeApp = () => (dispatch) => {
  let promise = dispatch(getAuthtUsersdata());
  promise.then(() => {
    dispatch(initializedSuccess());
  });
};
export default appReducer;
