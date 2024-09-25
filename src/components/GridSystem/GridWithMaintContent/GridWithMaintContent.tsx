import React from "react";
import { TopStoriesArticle } from "../../../intrerface/interface";
import ArticlePreview from "../../ArticlePreview/ArticlePreview.tsx";
import GridArticlesBySection from "../../GridArticlesBySection/GridArticlesBySection.tsx";
import style from "./GridWithMaintContent.module.css";

interface GridWithMainContentProps {
  MainContent: TopStoriesArticle[];
}

const GridWithMainContent: React.FC<GridWithMainContentProps> = ({
  MainContent,
}) => {
  return (
    <div className={style.gridWithMainContent}>
      <div className={style.gridMainContent}>
        {MainContent.map((item, index) => (
          <React.Fragment key={index}>
            <ArticlePreview article={item} indexMultimedia={2} />
            {index === 4 && (
              <GridArticlesBySection
                title="Latest World News"
                section="world"
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default GridWithMainContent;
