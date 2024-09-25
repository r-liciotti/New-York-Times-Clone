import React from "react";
import { getSectionItemList, mainSection } from "../../../data/data";
import style from "./FooterSectionList.module.css";
import { Link } from "react-router-dom";

function FooterSectionList() {
  return (
    <div className={style.footerSectionList}>
      {mainSection.map((itemMainSection, index) => {
        const sections = getSectionItemList(itemMainSection.param);
        const firstColumn = sections.slice(0, Math.ceil(sections.length / 2));
        const secondColumn = sections.slice(Math.ceil(sections.length / 2));

        return (
          <React.Fragment key={index}>
            {/* Contenitore che racchiude sia il titolo che le colonne */}
            <div
              className={`${style.footerSectionContainer} ${
                sections.length > 6 ? style.twoColumns : ""
              }`}
            >
              {/* Titolo all'interno del contenitore */}
              <p className={style.sectionTitle}>{itemMainSection.label}</p>
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
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default FooterSectionList;
