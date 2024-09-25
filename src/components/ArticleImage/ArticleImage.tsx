import React from "react";
import { hasValidMultimedia, isMultimedia } from "../../helper/hasMultimedia";
import { ArticleSearch, TopStoriesArticle } from "../../intrerface/interface";

interface ArticleImageProps {
  article: TopStoriesArticle | ArticleSearch;
  indexMultimedia?: number; // Proprietà per specificare quale elemento in multimedia[] prendere
  withPhotographer?: boolean;
  prefix?: string;
}

const ArticleImage: React.FC<ArticleImageProps> = ({
  article,
  indexMultimedia = 1,
  withPhotographer = true,
  prefix = "",
}) => {
  // Verifica se l'articolo ha multimedia valido
  if (
    !hasValidMultimedia(article) ||
    !article.multimedia ||
    article.multimedia.length <= indexMultimedia
  ) {
    return (
      <>
        <img src="https://placehold.co/600x400" alt="Immagine non trovata" />
        {withPhotographer && <span>Immagine non trovata</span>}
      </>
    );
  }

  const multimedia = article.multimedia[indexMultimedia];

  // Verifica che l'oggetto multimedia esista e abbia un URL valido
  if (!multimedia || !multimedia.url) {
    return (
      <>
        <img src="https://placehold.co/600x400" alt="Immagine non trovata" />
        {withPhotographer && <span>Immagine non trovata</span>}
      </>
    );
  }

  return (
    <>
      <img
        src={prefix + multimedia.url} // Aggiungi il prefisso se presente
        alt={multimedia.caption || "Immagine senza didascalia"}
      />
      {withPhotographer && isMultimedia(multimedia) && (
        <span>{multimedia.copyright || "Copyright non disponibile"}</span>
      )}
    </>
  );
};

export default ArticleImage;
