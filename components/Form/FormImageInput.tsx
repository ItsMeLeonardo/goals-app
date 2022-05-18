import { useState, ChangeEvent } from "react";

import Form from "./form.module.css";

type Props = {
  w?: number | string;
  h?: number | string;
};

export default function FormImageInput(
  { w, h }: Props = { w: "100%", h: "100%" }
) {
  const [fileUrl, setFileUrl] = useState("");

  const loadFile = (event: ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;

    if (files && files.length > 0) {
      const file = files[0];
      const url = URL.createObjectURL(file);
      setFileUrl(url);
      setTimeout(() => URL.revokeObjectURL(url), 1000);
    }
  };

  return (
    <label className="">
      <input type="file" hidden accept="image/*" onChange={loadFile} />
      <picture className={Form.image_container} style={{ width: w, height: h }}>
        {fileUrl.length === 0 ? (
          <div className={Form.image_placeholder}>
            <span>Sube una imagen para el recurso</span>
            <i
              className={`${Form.image_placeholder_icon} uil uil-image-plus`}
            ></i>
          </div>
        ) : (
          <img src={fileUrl} alt="thumbnail" />
        )}
      </picture>
    </label>
  );
}
