import { AuthInfo } from "../../interfaces/AuthState";
import { LOGIN, LOGOUT, SET_AUTH_LOADING } from "../types";

interface Action {
  type: string,
  payload: AuthInfo,
}

const AuthReducer = (state: AuthInfo, action: Action): AuthInfo => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN:
      return {
        ...state,
        user: payload?.user,
      }
    case LOGOUT:
      return {
        ...state,
        user: payload?.user,
      }
    case SET_AUTH_LOADING:
      return {
        ...state,
        loading: payload?.loading,
      }
  
    default:
      return state;
  }
}

export default AuthReducer;