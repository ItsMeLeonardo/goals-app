import { useContext, useEffect } from "react";
import Router from "next/router";

import { AuthContext } from "context/AuthContext";

export const useAuth = () => {
  const auth = useContext(AuthContext);
  const { user } = auth;

  useEffect(() => {
    if (!user) {
      Router.push("/login");
    }
  }, [user]);

  return auth;
};
