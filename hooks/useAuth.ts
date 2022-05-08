import { useEffect } from "react";
import Router from "next/router";
import { useSession } from "next-auth/react";

export const useAuth = () => {
  const { status } = useSession();

  useEffect(() => {
    if (status === "unauthenticated") {
      Router.push("/login");
    }
  }, [status]);

  return { status };
};
