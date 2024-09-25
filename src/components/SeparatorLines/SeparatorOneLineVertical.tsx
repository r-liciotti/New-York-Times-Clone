import style from "./SeparatorLines.module.css";

interface SeparatorOneLineVerticalProps {
  className?: string;
}

const SeparatorOneLineVertical: React.FC<SeparatorOneLineVerticalProps> = ({
  className,
}) => {
  const combinedClassName = `${style.separatorOneLineVertical} ${
    className ?? ""
  }`.trim();
  return (
    <>
      <div className={combinedClassName}></div>
    </>
  );
};

export default SeparatorOneLineVertical;
