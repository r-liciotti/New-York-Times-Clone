import CloseIcon from "../CloseIcon/CloseIcon";
import SectionListMobile from "../MobileHeader/SectionListMobile/SectionListMobile";
import SearchBar from "../SearchBar/SearchBar";
import style from "./MenuMobile.module.css";

interface MenuMobileProps {
  handleOnClick: () => void; // Definizione del prop onClick
}
function MenuMobile({ handleOnClick }: MenuMobileProps) {
  return (
    <div className={style.menuMobileContainer}>
      <CloseIcon handleOnClick={handleOnClick} />
      <SearchBar isMobile={true} />
      <SectionListMobile />
    </div>
  );
}

export default MenuMobile;
