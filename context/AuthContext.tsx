import { useState, createContext, ReactNode } from "react";

//types
interface Props {
  children: ReactNode;
}

type User = {
  id: string;
  name: string;
  email: string;
  avatar: string;
};

type AuthContextType = {
  user?: User | null;
  login: (user: User, cb: VoidFunction) => void;
  logout: (cb: VoidFunction) => void;
};

export const AuthContext = createContext<AuthContextType>({
  login: () => {},
  logout: () => {},
});

const defaultUser: User = {
  id: "",
  name: "",
  email: "",
  avatar: "",
};

export function AuthProvider({ children }: Props) {
  const [user, setUser] = useState<User | null>(defaultUser);

  const login = (user: User, cb: VoidFunction) => {
    setUser(user);
    cb();
  };

  const logout = (cb: VoidFunction) => {
    setUser(null);
    cb();
  };

  const value = {
    user,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
