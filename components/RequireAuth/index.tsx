import { ReactNode } from "react";

//utils
import { useAuth } from "hooks/useAuth";

//types
interface Props {
  children: ReactNode;
}

export default function RequireAuthLayout({ children }: Props) {
  const { status } = useAuth();

  if (status === "loading" || status === "unauthenticated") {
    return <div className="login">Login ...</div>;
  }

  return <>{children}</>;
}
