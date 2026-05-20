import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";
const AuthContext = createContext();

AuthContext.propTypes = {
  token: PropTypes.string,
  login: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired
};

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));

  const login = (jwt) => {
    localStorage.setItem("token", jwt);
    setToken(jwt);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };
  
  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);