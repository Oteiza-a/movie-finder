import { AuthCredentials } from "./AuthCredentials";
import { User } from "./User";

export interface AuthProviderValue {
  user?: User | null,
  authLoading?: boolean,
  login: (credentials: AuthCredentials) => Promise<void>,
  logout: () => void,
  setLoading: (loading: boolean) => void
}