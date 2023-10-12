import { createContext, useEffect, useState } from "react";
import nookies from "nookies";
import axios from "@/app/core/axios";
import { GetServerSidePropsContext } from "next";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [authState, setAuthState] = useState(null);

  useEffect(() => {
    const checkAuthentication = async (ctx: GetServerSidePropsContext) => {
      const authProps = await checkAuth(ctx);

      if ("redirect" in authProps) {
        throw new Error("Authentication failed");
      }
    };
  }, []);

  const checkAuth = async (ctx: GetServerSidePropsContext) => {
    try {
      const { _token } = nookies.get(ctx);
      axios.defaults.headers.Authorization = "Bearer " + _token;
      return {};
    } catch (err) {
      return {
        redirect: {
          destination: "/auth",
          permanent: false,
        },
      };
    }
  };

  return (
    <AuthContext.Provider value={{ authState, checkAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
