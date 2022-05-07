import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

//components
import Navbar from "components/Layout/Navbar";
import Sidebar from "components/Sidebar";
import RightContent from "./RightContent";

export default function Layout({ children }: Props) {
  return (
    <section>
      <Navbar />
      <main>
        <div className="container">
          <section className="left">
            <Sidebar />
          </section>

          <section className="middle">{children}</section>

          <section className="right">
            <RightContent />
          </section>
        </div>
      </main>
    </section>
  );
}
