import { ReactNode } from "react";

import style from "./tooltip.module.css";

type Props = {
  children: ReactNode;
  content: ReactNode;
};

export default function Tooltip({ children, content }: Props) {
  return (
    <aside className={style.container}>
      {children}
      <div className={style.content}>{content}</div>
    </aside>
  );
}
