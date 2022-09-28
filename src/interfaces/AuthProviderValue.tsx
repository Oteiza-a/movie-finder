import { User } from "./User";

export interface AuthProviderValue {
  user?: User | null,
  authLoading?: boolean,
  login: () => void,
  logout: () => void,
  setLoading: (loading: boolean) => void
}