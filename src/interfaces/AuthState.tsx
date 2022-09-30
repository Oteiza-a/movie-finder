import { User } from "./User";

export interface AuthInfo {
  user?: User | null,
  loading?: boolean,
}