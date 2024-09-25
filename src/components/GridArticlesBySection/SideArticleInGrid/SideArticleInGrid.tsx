import { TopStoriesArticle } from "../../../intrerface/interface";
import style from "./SideArticleInGrid.module.css";
interface MainArticleInGridProps {
  article: TopStoriesArticle;
}

function SideArticleInGrid({ article }: MainArticleInGridProps) {
  return (
    <>
      <a href={article.url} target="_blank">
        <div className={style.sideArticleInGrid}>
          <div className={style.testo}>
            <h3>{article.title}</h3>
            <p>{article.abstract}</p>
            <p>{article.byline}</p>
          </div>
        </div>
      </a>
    </>
  );
}

export default SideArticleInGrid;
