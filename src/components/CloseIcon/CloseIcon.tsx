import style from "./CloseIcon.module.css";

interface CloseIconProps {
  handleOnClick: () => void; // Definizione del prop onClick
}
function CloseIcon({ handleOnClick }: CloseIconProps) {
  return (
    <div className={style.closeIconContainer} onClick={handleOnClick}>
      <svg
        width="15"
        height="15"
        className={style.closeIcon}
        viewBox="0 0 15 15"
      >
        <g id="Canvas" fill="none">
          <g id="close">
            <path
              d="M2 2l11 11"
              stroke-width="2"
              stroke-linecap="square"
              stroke="#111"
              id="Vector"
            ></path>
            <path
              d="M13 2L2 13"
              stroke-width="2"
              stroke-linecap="square"
              stroke="#111"
              id="Vector_2"
            ></path>
          </g>
        </g>
      </svg>
    </div>
  );
}

export default CloseIcon;
