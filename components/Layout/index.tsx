import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

import Navbar from "components/Layout/Navbar";

export default function Layout({ children }: Props) {
  return (
    <section>
      <Navbar />
      {children}
    </section>
  );
}
