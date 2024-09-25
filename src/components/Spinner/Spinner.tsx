import style from "./Spinner.module.css";

function Spinner() {
  return (
    <div className={style.spinnerContainer}>
      <div className={style.spinner}></div>
    </div>
  );
}

export default Spinner;
