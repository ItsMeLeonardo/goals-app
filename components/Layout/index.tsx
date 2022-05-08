import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

//components
import Navbar from "components/Navbar";

export default function Layout({ children }: Props) {
  return (
    <section>
      <Navbar />
      <main className="container">{children}</main>
    </section>
  );
}
