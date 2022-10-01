import { ReactNode, useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { nullUser } from "../../constants/nullUser";
import { getLocalStorageObject } from "../../helpers/localStorage";
import { AuthCredentials } from "../../interfaces/AuthCredentials";
import { AuthInfo } from "../../interfaces/AuthState";
import { AuthProviderValue } from "../../interfaces/AuthProviderValue";
import { User } from "../../interfaces/User";
import { reqLogin } from "../../services/AuthService";
import { openDialog } from "../../services/DialogService";
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
  
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  useEffect(() => {
    localStorage.setItem("auth-state", JSON.stringify(state));
  }, [state])

  const login = async (form: AuthCredentials) => {
    const loginRes: User | null = await reqLogin(form);

    if (!loginRes) {
      openDialog("login-error");
    } else {
      dispatch({ type: LOGIN, payload: { user: loginRes } })
      navigate("/movies")
    }

  }

  const logout = () => {
    dispatch({
      type: LOGOUT,
      payload: { user: null }
    })
    navigate('/');
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
    user: user || nullUser,
    authLoading: loading || false,
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