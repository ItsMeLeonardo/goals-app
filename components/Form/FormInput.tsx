import { DetailedHTMLProps, InputHTMLAttributes, ReactNode } from "react";

import Form from "./form.module.css";

type props = {
  icon?: ReactNode;
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export default function FormInput({ icon, ...props }: props) {
  return (
    <label className={Form.field}>
      <span className={Form.field_icon}>{icon}</span>
      <input {...props} className={Form.input} />
    </label>
  );
}
