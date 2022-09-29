import { validUsers } from "../constants/validUsers";
import { AuthCredentials } from "../interfaces/AuthCredentials";
import { User } from "../interfaces/User";

export const reqLogin = async ({ email, password }: AuthCredentials): Promise<User | null> => {
  try {
    // Change to real axios call when connecting with an API
    const res = await validUsers.find((user: User) => user.email === email && user.password === password);
    return res || null;
  } catch (error) {
    console.error(error)
    return null;
  }
}