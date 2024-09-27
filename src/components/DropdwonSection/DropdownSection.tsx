import { MouseEventHandler } from "react";
import { SectionItem, getSectionItemList } from "../../data/data";
import style from "./DropdownSection.module.css";
import SeparatorOneLine from "../SeparatorLines/SeparatorOneLine";
import { Link } from "react-router-dom";

interface DropdownSectionProps {
  section: SectionItem | null;
  handleonMouseLeave?: MouseEventHandler<HTMLDivElement>;
  handleOnClick?: MouseEventHandler<HTMLDivElement>;
  headerHeight: number;
}

const DropdownSection: React.FC<DropdownSectionProps> = ({
  section,
  handleonMouseLeave = null,
  handleOnClick = null,
  headerHeight,
}) => {
  if (section === null) return <></>;

  // Evento per chiudere il Dropwdown quando viene cliccata una sezione
  const toggleDropdownSection = (event: React.MouseEvent<HTMLDivElement>) => {
    if (handleonMouseLeave) {
      handleonMouseLeave(event); // Passa l'evento a handleonMouseLeave
    }
  };

  return (
    <>
      <div
        className={style.dropdownSection}
        onClick={handleOnClick || undefined} // Imposta solo se handleOnClick esiste
        onMouseLeave={handleonMouseLeave || undefined} // Imposta solo se handleonMouseLeave esiste
        style={{ top: headerHeight + "px" }} // Stile inline corretto
      >
        <SeparatorOneLine className={style.separator} />
        <h3>Section</h3>

        <div className={style.container} onClick={toggleDropdownSection}>
          {getSectionItemList(section.param).map((item, index) => (
            <Link to={`/section/${item.param}`} key={index}>
              <p>{item.label}</p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default DropdownSection;
