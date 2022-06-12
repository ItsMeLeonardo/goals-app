import { useState } from "react";
import type { FormEvent } from "react";
import { useShare } from "components/Pages/Share/hooks/useShare";
import { useUser } from "hooks/useUser";

import AutocompleteTag from "components/Pages/Share/Autocomplete";
import FormGroup from "components/Form/FormGroup";
import FormInput from "components/Form/FormInput";
import FormImageInput from "components/Form/FormImageInput";

import style from "./formShare.module.css";

//types
import type { AutocompleteItem } from "components/Pages/Share/Autocomplete/types";
import type { Post } from "models/post";
import type { Tag } from "models/tag";

type FormStatus = "default" | "loading" | "error" | "success";

export default function FormShare() {
  const { formState, setImage, setTags, setTitle, setUrl, reset } = useShare();
  const [firstFormView, setFirstFormView] = useState(true);
  const [formStatus, setFormStatus] = useState<FormStatus>("default");
  const { user } = useUser();

  const { title, url } = formState;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFirstFormView(false);

    reset();
    setFormStatus("success");

    setTimeout(() => {
      setFormStatus("default");
    }, 3000);
    if (!user) return;
    const id = user.userId as string;

    const tags = formState.tags as Tag[];

    const postBody: Omit<Post, "id"> = {
      title,
      url,
      tags,
      user: id,
      thumbnail: formState.image?.name || "",
    };
  };

  const handleChangeUrl = (event: FormEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    const url = value.trim();
    setUrl(url);
  };

  const handleChangeTitle = (event: FormEvent<HTMLInputElement>) => {
    setTitle(event.currentTarget.value);
  };

  const handleChangeTags = (items: AutocompleteItem[]) => {
    setTags(items);
  };

  const handleChangeImage = (file: File) => {
    setImage(file);
  };

  //error messages
  const urlErrorMessage =
    url.length === 0 && !firstFormView ? "El link es requerido" : undefined;
  const titleErrorMessage =
    title.length === 0 && !firstFormView ? "El titulo es requerido" : undefined;

  return (
    <section>
      <h3 className="subtitle">Comparte algo que conozcas</h3>
      <form className={style.share_container} onSubmit={handleSubmit}>
        <FormInput
          type="url"
          icon={<i className="uil uil-link field-icon"></i>}
          placeholder="Link del recurso"
          onInput={handleChangeUrl}
          required
          value={url}
          error={urlErrorMessage}
        />
        <aside className={style.form_share}>
          <FormGroup>
            <FormInput
              type="text"
              icon={<i className="uil uil-text "></i>}
              placeholder="Titulo del recurso"
              onInput={handleChangeTitle}
              required
              value={title}
              error={titleErrorMessage}
            />

            <AutocompleteTag />
          </FormGroup>
          <FormGroup>
            <FormImageInput
              h={"240px"}
              onLoadImage={handleChangeImage}
              clear={formStatus === "success"}
            />
          </FormGroup>
        </aside>
        <div className={style.form_submit_container}>
          <button className={style.form_submit}>Crear</button>
        </div>
      </form>
    </section>
  );
}
