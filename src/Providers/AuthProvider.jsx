import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { createContext } from "react";
import auth from "../firebase/firebase.config";
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const authInfo = {
    createUser,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

/**
 * 1.Create context with null as default
 * 2.Create Provider
 * 3.Set a value with something (authInfo)
 * 4.use the authProvider in the main.jsx
 * 5.access the children inside the authProvider in the main.jsx
 * 7.export AuthContext
 */
