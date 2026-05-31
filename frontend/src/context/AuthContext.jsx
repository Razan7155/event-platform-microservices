import {
  createContext,
  useContext,
  useState,
  useMemo
} from "react";

import PropTypes from "prop-types";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [token, setToken] =
    useState(localStorage.getItem("token"));

  const login = (jwt) => {

    localStorage.setItem("token", jwt);

    setToken(jwt);
  };

  const logout = () => {

    localStorage.removeItem("token");

    setToken(null);
  };

  const value = useMemo(() => ({
    token,
    login,
    logout
  }), [token]);

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export const useAuth = () => useContext(AuthContext);