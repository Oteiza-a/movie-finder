import { createContext } from "react";
import { AuthProviderValue } from "../../interfaces/AuthProviderValue";

const AuthContext = createContext<AuthProviderValue>({} as AuthProviderValue); 
export default AuthContext