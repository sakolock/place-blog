import React from "react";

const AuthContext = React.createContext(null);

export const AuthProvider = ({ userData, children }) => {
  let [user, setUser] = React.useState(userData);
  user = typeof user === "string" ? JSON.parse(user) : user;

  return <AuthContext.Provider value={{ user, setUser }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => React.useContext(AuthContext);
