import { getSectionLabelByParam } from "../../data/data";
import style from "./SectionTitle.module.css";
interface SectionTitleProps {
  section: string;
}
const SectionTitle: React.FC<SectionTitleProps> = ({ section }) => {
  return (
    <>
      <div className={style.sectionTitle}>
        {getSectionLabelByParam(section)} News
      </div>
    </>
  );
};

export default SectionTitle;
