import { useState } from "react";
import { getSectionItemList, mainSection } from "../../../data/data";
import style from "./SectionListMobile.module.css";
import { Link } from "react-router-dom";

function SectionListMobile() {
  const [openSectionIndex, setOpenSectionIndex] = useState<number | null>(null); // Stato per l'indice della sezione aperta

  function toggleSection(index: number) {
    setOpenSectionIndex((prevIndex) => (prevIndex === index ? null : index)); // Toggle apertura/chiusura sezione
  }

  return (
    <div className={style.sectionListMobileContainer}>
      {mainSection.map((itemMainSection, index) => {
        const sections = getSectionItemList(itemMainSection.param);
        const firstColumn = sections.slice(0, Math.ceil(sections.length / 2));
        const secondColumn = sections.slice(Math.ceil(sections.length / 2));

        return (
          <div
            className={style.mainSectionContainer}
            key={index}
            onClick={() => toggleSection(index)} // Imposta la sezione cliccata come aperta
          >
            <p className={style.mainSectionLabel}>{itemMainSection.label}</p>
            <div
              className={`${style.subSectionContainer} ${
                openSectionIndex === index ? style.open : ""
              } ${sections.length > 6 ? style.twoColumns : ""}`}
            >
              <p className={style.sectionlabel}>Section</p>
              <div className={style.columnContainer}>
                {/* Prima colonna */}
                <div className={style.column}>
                  {firstColumn.map((section, idx) => (
                    <Link to={`/section/${section.param}`} key={idx}>
                      {section.label}
                    </Link>
                  ))}
                </div>

                {/* Seconda colonna visualizzata solo se ci sono più di 6 elementi */}
                {sections.length > 6 && (
                  <div className={style.column}>
                    {secondColumn.map((section, idx) => (
                      <Link to={`/section/${section.param}`} key={idx}>
                        {section.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default SectionListMobile;
