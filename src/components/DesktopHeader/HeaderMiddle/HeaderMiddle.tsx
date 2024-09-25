import { Link } from "react-router-dom";
import style from "./HeaderMiddle.module.css";
import Title from "../../Title/Title";
import StocksChange from "../../StocksChange/StocksChange";

function HeaderMiddle() {
  const date = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
  return (
    <>
      <div className={style.header_middle}>
        <div className={style.date_container}>
          <p>{date}</p>
          <Link to={`/section/todayspaper`}>Today Paper</Link>
        </div>
        <div className={style.title_container}>
          <Title />
        </div>

        <div className={style.stocks_container}>
          <StocksChange />
        </div>
      </div>
    </>
  );
}

export default HeaderMiddle;
