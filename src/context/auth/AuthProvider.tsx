import { ReactNode, useEffect, useReducer } from "react";
import { getLocalStorageObject } from "../../helpers/localStorage";
import { AuthInfo } from "../../interfaces/AuthInfo";
import { AuthProviderValue } from "../../interfaces/AuthProviderValue";
import { LOGIN, LOGOUT, SET_AUTH_LOADING } from "../types";
import AuthContext from "./AuthContext";
import AuthReducer from "./AuthReducer";

interface Props {
  children?: ReactNode
}

const initializeState = (initialValue: AuthInfo): AuthInfo => {
  return getLocalStorageObject("auth-state") || initialValue
};

const AuthProvider = ({ children }: Props): JSX.Element => {
  const initialState: AuthInfo = initializeState({
    user: null,
    loading: false,
  });
  
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  useEffect(() => {
    localStorage.setItem("auth-state", JSON.stringify(state));
  }, [state])

  const login = () => {
    dispatch({
      type: LOGIN,
      payload: { user: { 
        id: "pedrito",
        username: "pedrito",
        email: "pedrito",
        password: "pedrito",
      } }
    })
  }

  const logout = () => {
    dispatch({
      type: LOGOUT,
      payload: { 
        user: null
      }
    })
  }

  const setLoading = (loading: boolean) => {
    dispatch({
      type: SET_AUTH_LOADING,
      payload: {
        loading,
      },
    })
  }

  const { user, loading } = state;
  const providerValue: AuthProviderValue = {
    user: user,
    authLoading: loading,
    login,
    logout,
    setLoading,
  }

  return (
    <AuthContext.Provider value={providerValue}>
      {children}
    </AuthContext.Provider>
  )
};


export default AuthProvider;