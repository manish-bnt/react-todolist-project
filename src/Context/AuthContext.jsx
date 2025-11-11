import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [signUp, setSignUp] = useState();

  return (
    <>
      <AuthContext.Provider value={{ signUp, setSignUp }}>
        {children}
      </AuthContext.Provider>
    </>
  );
};
