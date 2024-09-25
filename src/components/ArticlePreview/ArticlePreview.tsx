import { TopStoriesArticle } from "../../intrerface/interface";
import ArticleImage from "../ArticleImage/ArticleImage.tsx";
import SeparatorOneLine from "../SeparatorLines/SeparatorOneLine.tsx";
import style from "./ArticlePreview.module.css";

interface ArticlePreviewProps {
  article: TopStoriesArticle;
  indexMultimedia?: number;
}

const ArticlePreview: React.FC<ArticlePreviewProps> = ({
  article,
  indexMultimedia,
}) => {
  //console.log("article", article);

  return (
    <div>
      <a href={article.url} target="_blank" className={style.articlePreview}>
        <div className={style.testo}>
          <h2>{article.title}</h2>
          <p>{article.abstract}</p>
          <p>{article.byline}</p>
        </div>
        <div className={style.immagine}>
          <ArticleImage article={article} indexMultimedia={indexMultimedia} />
        </div>
      </a>
      <SeparatorOneLine className={style.spearatorOneLine} />
    </div>
  );
};

export default ArticlePreview;
