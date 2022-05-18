import { ReactNode } from "react";

import Form from "./form.module.css";

type props = {
  children: ReactNode;
};

export default function FormGroup({ children }: props) {
  return <div className={Form.group}>{children}</div>;
}
