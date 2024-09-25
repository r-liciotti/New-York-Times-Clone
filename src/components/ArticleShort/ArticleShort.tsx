import { useRef, useEffect } from "react";
import { TopStoriesArticle } from "../../intrerface/interface";
import ArticleImage from "../ArticleImage/ArticleImage";
import styles from "./ArticleShort.module.css";

interface ArticleShortProprs {
  Article: TopStoriesArticle;
  withTitle?: boolean;
  withImage?: boolean;
  withAuthors?: boolean;
  withPhotographer?: boolean;
}

const ArticleShort: React.FC<ArticleShortProprs> = ({
  Article,
  withTitle = true,
  withImage = false,
  withAuthors = false, // Valore predefinito true
  withPhotographer = false, // Valore predefinito true
}) => {
  const articleRef = useRef<HTMLDivElement>(null); // Ref per accedere al div

  useEffect(() => {
    // Aggiunge o rimuove la classe "withoutAuthors" in base al valore di withAuthors
    if (articleRef.current) {
      if (!withPhotographer) {
        articleRef.current.classList.add(styles.withoutPhotographer);
      } else {
        articleRef.current.classList.remove(styles.withoutPhotographer);
      }
    }
  }, []); // Effetto che dipende da withAuthors

  return (
    <>
      <div ref={articleRef} className={styles.articleShort}>
        <a href={Article.url} target="_blank">
          <div className={styles.testo}>
            {withAuthors && <p className={styles.authors}>{Article.byline}</p>}
            {withTitle && <h5>{Article.title}</h5>}
          </div>

          {withImage && <ArticleImage article={Article} />}
        </a>
      </div>
    </>
  );
};

export default ArticleShort;
