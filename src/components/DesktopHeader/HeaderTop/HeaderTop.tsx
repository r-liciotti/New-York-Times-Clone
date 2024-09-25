import LogInButton from "../../LogInButton/LogInButton.tsx";
import SearchBar from "../../SearchBar/SearchBar";
import style from "./HeaderTop.module.css";

function HeaderTop() {
  return (
    <>
      <div className={style.header_top}>
        <div className={style.searchIcon_Container}>
          <SearchBar />
        </div>

        <div className={style.button_Container}>
          <LogInButton />
        </div>
      </div>
    </>
  );
}
export default HeaderTop;
