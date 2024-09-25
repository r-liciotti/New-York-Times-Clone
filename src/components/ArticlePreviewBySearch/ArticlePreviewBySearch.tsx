import calcReadingTime from "../../helper/calcReadingTime";
import formatDate from "../../helper/formatDate";
import { ArticleSearch } from "../../intrerface/interface";
import ArticleImage from "../ArticleImage/ArticleImage";
import style from "./ArticlePreviewBySearch.module.css";

interface ArticlePreviewBySearchProps {
  articleSearch: ArticleSearch;
}

const ArticlePreviewBySearch: React.FC<ArticlePreviewBySearchProps> = ({
  articleSearch,
}) => {
  return (
    <>
      <div className={style.articlePreviewBySearch}>
        <p className={style.date}>{formatDate(articleSearch.pub_date)}</p>
        <a href={articleSearch.web_url} target="_blank">
          <div className={style.testo}>
            <div>
              <p className={style.section_name}>{articleSearch.section_name}</p>
              <h2 className={style.title}>{articleSearch.headline.main}</h2>
              <p className={style.paragrph}>{articleSearch.lead_paragraph}</p>
              <h5 className={style.author}>{articleSearch.byline.original}</h5>
              {articleSearch.word_count > 0 && (
                <p className={style.readingTime}>
                  {calcReadingTime(articleSearch.word_count)} Min Read
                </p>
              )}
            </div>
            {articleSearch.headline.print_headline && (
              <div className={style.printSection}>
                <h5>
                  <span>PRINT EDITION</span>
                  {articleSearch.headline.print_headline} |{" "}
                  {formatDate(articleSearch.pub_date)}
                  {articleSearch.print_page}
                </h5>
              </div>
            )}
          </div>
          <div className={style.img_container}>
            <ArticleImage
              article={articleSearch}
              indexMultimedia={0}
              withPhotographer={false}
              prefix="https://static01.nyt.com/"
            />
          </div>
        </a>
      </div>
      {/* <SeparatorOneLine className={style.spearatorOneLine} /> */}
    </>
  );
};

export default ArticlePreviewBySearch;
