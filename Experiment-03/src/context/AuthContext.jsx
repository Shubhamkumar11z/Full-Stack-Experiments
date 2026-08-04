import { createContext, useState } from "react";
import { generateToken, decodeToken } from "../utils/jwt";

export const AuthContext = createContext();

export function AuthProvider({ children }) {

  const storedToken = localStorage.getItem("token");

  const initialUser = storedToken ? decodeToken(storedToken) : null;

  const [user, setUser] = useState(initialUser);

  const login = (userData) => {

    const token = generateToken(userData);

    localStorage.setItem("token", token);

    setUser(decodeToken(token));
  };

  const logout = () => {

    localStorage.removeItem("token");

    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}