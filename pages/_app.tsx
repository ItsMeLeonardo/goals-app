import "../styles/globals.css";
import type { AppProps } from "next/app";

//components
import MainLayout from "components/Layout";
import RequireAuth from "components/RequireAuth";
import UserLayout from "components/Layout/UserLayout";

//context
import { AuthProvider } from "context/AuthContext";

//types
type RequireAuthComponent = {
  requireAuth?: boolean;
} & AppProps["Component"];

type Props = {
  Component: RequireAuthComponent;
} & AppProps;

function MyApp({ Component, pageProps }: Props) {
  return (
    <AuthProvider>
      {Component.requireAuth ? (
        <RequireAuth>
          <UserLayout>
            <Component {...pageProps} />
          </UserLayout>
        </RequireAuth>
      ) : (
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      )}
    </AuthProvider>
  );
}

export default MyApp;
