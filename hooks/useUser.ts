import { useContext } from "react";

import { AuthContext } from "context/AuthContext";

export const useUser = () => {
  const auth = useContext(AuthContext);
  return auth;
};
