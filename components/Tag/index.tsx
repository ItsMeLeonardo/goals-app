import style from "components/Tag/tag.module.css";

export default function Tag({ text }: { text: string }) {
  return (
    <p className={style.tag_item}>
      <span className={style.tag_text}>{text}</span>
    </p>
  );
}
