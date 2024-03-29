
import { getAuthtUsersdata } from "./auth-reducer";

const INITIALIZED_SUCCESS = "SET_INITIALIZED";

export type InitialStateType = {
  initialized: boolean
}

let initialState: InitialStateType = {
  initialized: false
};

const appReducer = (state = initialState, action: any): InitialStateType => {
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

type InitializedSuccessActionType = {
  type: typeof INITIALIZED_SUCCESS
}

export const initializedSuccess = ():InitializedSuccessActionType => ({
  type: INITIALIZED_SUCCESS,
});

export const initializeApp = () => (dispatch:any) => {
  let promise = dispatch(getAuthtUsersdata());
  promise.then(() => {
    dispatch(initializedSuccess());
  });
};
export default appReducer;
