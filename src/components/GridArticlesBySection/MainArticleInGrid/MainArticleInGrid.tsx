import { TopStoriesArticle } from "../../../intrerface/interface";
import style from "./MainArticleInGrid.module.css";
import ArticleImage from "../../ArticleImage/ArticleImage";
interface MainArticleInGridProps {
  article: TopStoriesArticle;
}

function MainArticleInGrid({ article }: MainArticleInGridProps) {
  return (
    <>
      <div className={style.mainArticleInGrid}>
        <a href={article.url} target="_blank">
          <ArticleImage article={article} indexMultimedia={2} />

          <div className={style.testo}>
            <h3>{article.title}</h3>
            <p>{article.abstract}</p>
            <p>{article.byline}</p>
          </div>
        </a>
      </div>
    </>
  );
}

export default MainArticleInGrid;
