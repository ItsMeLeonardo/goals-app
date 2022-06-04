import { useEffect, useState } from "react";
import type { FormEvent } from "react";
import { useShare } from "components/Pages/Share/hooks/useShare";

import Autocomplete from "components/Autocomplete";
import FormGroup from "components/Form/FormGroup";
import FormInput from "components/Form/FormInput";
import FormImageInput from "components/Form/FormImageInput";

import style from "./formShare.module.css";

//types
import type { AutocompleteItem } from "components/Autocomplete/types";

const data = [
  { id: "1", label: "C++", value: "C++" },
  { id: "2", label: "Java", value: "Java" },
  { id: "3", label: "Python", value: "Python" },
  { id: "4", label: "JavaScript", value: "JavaScript" },
  { id: "5", label: "html", value: "html" },
];

export default function FormShare() {
  const { formState, setImage, setTags, setTitle, setUrl } = useShare();
  const [firstFormView, setFirstFormView] = useState(true);
  const { tags, title, url } = formState;
  useEffect(() => {
    if (firstFormView) return;
  }, [formState, firstFormView]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFirstFormView(false);
    //TODO: add validation and save in db
    console.log({ formState });
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
    setTags(items.map((item) => item.value));
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
              error={titleErrorMessage}
            />

            <Autocomplete data={data} onSelect={handleChangeTags} />
          </FormGroup>
          <FormGroup>
            <FormImageInput h={"240px"} onLoadImage={handleChangeImage} />
          </FormGroup>
        </aside>
        <div className={style.form_submit_container}>
          <button className={style.form_submit}>Crear</button>
        </div>
      </form>
    </section>
  );
}
