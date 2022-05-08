import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

//components
import Navbar from "components/Layout/Navbar";

export default function Layout({ children }: Props) {
  return (
    <section>
      <Navbar />
      <main className="container">{children}</main>
    </section>
  );
}
