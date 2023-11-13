import { createContext } from "react";
import { AuthContextTypes } from "../types";

export const AuthContext = createContext<AuthContextTypes>({
  isAuth: false,
  setIsAuth: () => {},
  isLoading: true
});
