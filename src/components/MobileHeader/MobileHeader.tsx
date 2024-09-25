import LoginIcon from "../LoginIcon/LoginIcon.tsx";
import Title from "../Title/Title";
import HumburgerButton from "./HumburgerButton/HumburgerButton";
import style from "./MobileHeader.module.css";

interface MobileHeaderProps {
  handleOnClick: () => void; // Definizione del prop onClick
}

function MobileHeader({ handleOnClick }: MobileHeaderProps) {
  const date = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });

  return (
    <header className={style.headerMobile}>
      <div className={style.headerTop}>
        <HumburgerButton onClick={handleOnClick} />

        <div className={style.titleContainer}>
          <Title />
        </div>
        <div className={style.loginIconContainer}>
          <LoginIcon />
        </div>
      </div>
      <div className={style.date}>
        <p>{date}</p>
      </div>
    </header>
  );
}

export default MobileHeader;
