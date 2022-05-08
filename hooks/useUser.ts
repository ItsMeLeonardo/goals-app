import { useSession, signIn, signOut } from "next-auth/react";

export const useUser = () => {
  const { data } = useSession();

  return {
    user: data,
    signIn,
    signOut,
  };
};
