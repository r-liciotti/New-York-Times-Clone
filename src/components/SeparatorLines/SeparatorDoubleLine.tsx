import style from "./SeparatorLines.module.css";

function SeparatorDoubleLines() {
  return (
    <>
      <div className={style.separatorLines}></div>
      <div className={style.separatorLines}></div>
    </>
  );
}

export default SeparatorDoubleLines;
