import style from "./SeparatorLines.module.css";

interface SeparatorOneLineProps {
  className?: string;
}

const SeparatorOneLine: React.FC<SeparatorOneLineProps> = ({ className }) => {
  const combinedClassName = `${style.separatorOneLine} ${
    className ?? ""
  }`.trim();
  return (
    <>
      <div className={combinedClassName}></div>
    </>
  );
};

export default SeparatorOneLine;
