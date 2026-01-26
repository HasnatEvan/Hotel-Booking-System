"use client";

import { createContext } from "react";
import { useSession, signOut } from "next-auth/react";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const { data: session, status } = useSession();

  const user = session?.user || null;
  const loading = status === "loading";

  const logout = async () => {
    await signOut({ redirect: false });
  };

  const authInfo = {
    user,
    loading,
    logout,
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
