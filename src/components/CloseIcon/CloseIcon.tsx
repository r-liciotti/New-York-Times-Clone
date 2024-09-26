import style from "./CloseIcon.module.css";

interface CloseIconProps {
  handleOnClick: () => void; // Definizione del prop onClick
}
function CloseIcon({ handleOnClick }: CloseIconProps) {
  return (
    <div className={style.closeIconContainer} onClick={handleOnClick}>
      <svg
        width="20"
        height="20"
        viewBox="0 0 15 15"
        className={style.closeIcon}
      >
        <g fill="none">
          <g>
            <path
              d="M2 2l11 11"
              stroke-width="2"
              stroke-miterlimit="10"
              stroke-linecap="square"
              stroke="#121212"
            ></path>
            <path
              d="M13 2L2 13"
              stroke-width="2"
              stroke-miterlimit="10"
              stroke-linecap="square"
              stroke="#121212"
            ></path>
          </g>
        </g>
      </svg>
    </div>
  );
}

export default CloseIcon;
