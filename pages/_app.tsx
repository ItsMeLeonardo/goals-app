import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";

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

function MyApp({ Component, pageProps: { session, ...pageProps } }: Props) {
  return (
    <SessionProvider session={session}>
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
    </SessionProvider>
  );
}

export default MyApp;
