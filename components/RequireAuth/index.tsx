import { ReactNode } from "react";

//utils
import { useAuth } from "hooks/useAuth";

//types
interface Props {
  children: ReactNode;
}

export default function RequireAuthLayout({ children }: Props) {
  const { user } = useAuth();

  if (!user) {
    return <div className="login">Login ...</div>;
  }

  return <>{children}</>;
}
