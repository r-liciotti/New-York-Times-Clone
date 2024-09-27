import style from "./HeaderBottom.module.css";
import { mainSection, SectionItem } from "../../../data/data";
import DropdownSection from "../../DropdwonSection/DropdownSection.tsx";
import { useState } from "react";
import { Link } from "react-router-dom";

interface DropdownSectionState {
  isHovered: boolean;
  section: SectionItem | null;
}
interface HeaderBottomProp {
  headerHeight: number;
}
function HeaderBottom({ headerHeight }: HeaderBottomProp) {
  const [DropdownSectionState, setDropdownSectionState] =
    useState<DropdownSectionState>({
      isHovered: false,
      section: null,
    });

  function onMouseLeave() {
    setDropdownSectionState({ isHovered: false, section: null });
  }

  return (
    <>
      <div className={style.header_bottom} onMouseLeave={onMouseLeave}>
        {mainSection.map((section, index) => (
          <div
            key={index}
            onMouseEnter={() =>
              setDropdownSectionState({ isHovered: true, section: section })
            }
          >
            <Link
              className={style.sectionLink}
              to={`/section/${section.param}`}
              key={index}
            >
              <div>{section.label}</div>
              <svg className={style.dropdown_icon} viewBox="0 0 13 8">
                <polygon
                  fill="#979797"
                  points="6.5,8 0,1.4 1.4,0 6.5,5.2 11.6,0 13,1.4"
                ></polygon>
              </svg>
            </Link>
          </div>
        ))}

        {DropdownSectionState.isHovered && (
          <DropdownSection
            section={DropdownSectionState.section}
            handleonMouseLeave={onMouseLeave}
            headerHeight={headerHeight}
          />
        )}
      </div>
    </>
  );
}

export default HeaderBottom;
