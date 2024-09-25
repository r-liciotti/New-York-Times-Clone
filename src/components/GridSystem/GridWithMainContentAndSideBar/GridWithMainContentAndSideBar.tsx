import React from "react";
import { TopStoriesArticle } from "../../../intrerface/interface";
import ArticlePreview from "../../ArticlePreview/ArticlePreview.tsx";
import GridArticlesBySection from "../../GridArticlesBySection/GridArticlesBySection.tsx";
import style from "./GridWithMainContentAndSideBar.module.css";
import Sidebar from "../../Sidebar/Sidebar.tsx";
import Tablet from "../../MediaQueriesComponents/Tablet.tsx";

interface GridWithMainContentAndSideBarProps {
  MainContent: TopStoriesArticle[];
}

const GridWithMainContentAndSideBar: React.FC<
  GridWithMainContentAndSideBarProps
> = ({ MainContent }) => {
  return (
    <div className={style.GridWithMainContentAndSideBar}>
      <div className={style.gridMainContent}>
        {MainContent.map((item, index) => (
          <React.Fragment key={index}>
            <ArticlePreview article={item} />
            {index === 4 && (
              <GridArticlesBySection
                title="Latest World News"
                section="world"
              />
            )}
          </React.Fragment>
        ))}
      </div>
      <Tablet>
        <div className={style.gridSidebarContent}>
          <Sidebar />
        </div>
      </Tablet>
    </div>
  );
};

export default GridWithMainContentAndSideBar;
