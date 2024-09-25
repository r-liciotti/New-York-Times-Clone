import style from "./HumburgerButton.module.css";

interface HumburgerButtonProps {
  onClick: () => void; // Definizione del prop onClick
}

function HumburgerButton({ onClick }: HumburgerButtonProps) {
  return (
    <button type="button" className={style.humburgerButton} onClick={onClick}>
      <svg aria-hidden="true" viewBox="0 0 16 16">
        <rect x="1" y="3" fill="#333" width="14" height="2"></rect>
        <rect x="1" y="7" fill="#333" width="14" height="2"></rect>
        <rect x="1" y="11" fill="#333" width="14" height="2"></rect>
      </svg>
    </button>
  );
}

export default HumburgerButton;
