import Autocomplete from "components/Autocomplete";
import FormGroup from "components/Form/FormGroup";
import FormInput from "components/Form/FormInput";
import FormImageInput from "components/Form/FormImageInput";

import style from "./formShare.module.css";

const data = [
  { id: "1", label: "C++", value: "C++" },
  { id: "2", label: "Java", value: "Java" },
  { id: "3", label: "Python", value: "Python" },
  { id: "4", label: "JavaScript", value: "JavaScript" },
  { id: "5", label: "html", value: "html" },
];

export default function FormShare() {
  return (
    <section>
      <h3 className="subtitle">Comparte algo que conozcas</h3>
      <form className={style.share_container}>
        <FormInput
          type="text"
          icon={<i className="uil uil-link field-icon"></i>}
          placeholder="Link del recurso"
        />
        <aside className={style.form_share}>
          <FormGroup>
            <FormInput
              type="text"
              icon={<i className="uil uil-text "></i>}
              placeholder="Titulo del recurso"
            />

            <Autocomplete data={data} />
          </FormGroup>
          <FormGroup>
            <FormImageInput h={"240px"} />
          </FormGroup>
        </aside>
        <div className={style.form_submit_container}>
          <button className={style.form_submit}>Crear</button>
        </div>
      </form>
    </section>
  );
}
