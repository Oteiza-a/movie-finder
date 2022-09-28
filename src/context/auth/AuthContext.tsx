import { createContext } from "react";
import { AuthProviderValue } from "../../interfaces/AuthProviderValue";

const AuthContext = createContext<AuthProviderValue>({
  user: null,
  authLoading: false,
  login: () => {},
  logout: () => {},
  setLoading: () => {},
});
export default AuthContext