import { ArticleSearch } from "../../intrerface/interface";
import ArticlePreviewBySearch from "../ArticlePreviewBySearch/ArticlePreviewBySearch";
import style from "./ResultsArticleSearchList.module.css";
interface ResultsArticleSearchListProps {
  SearchResult: ArticleSearch[];
}

const ResultsArticleSearchList: React.FC<ResultsArticleSearchListProps> = ({
  SearchResult,
}) => {
  return (
    <>
      <div className={style.resultsArticleSearchContainer}>
        {SearchResult.map((item, index) => (
          <ArticlePreviewBySearch key={index} articleSearch={item} />
        ))}
      </div>
    </>
  );
};

export default ResultsArticleSearchList;
