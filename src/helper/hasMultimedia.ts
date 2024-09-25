// src/utils/multimediaUtils.ts

import { ArticleSearch, Multimedia, TopStoriesArticle } from "../intrerface/interface";

// Funzione per verificare se l'articolo ha multimedia valido
export const hasValidMultimedia = (article: TopStoriesArticle | ArticleSearch): boolean => {
    return article.multimedia && Array.isArray(article.multimedia) && article.multimedia.length > 0;
};

// Funzione di tipo guardia per controllare se multimedia è di tipo Multimedia
export const isMultimedia = (item: any): item is Multimedia => {
    return (item as Multimedia).copyright !== undefined; // Controlla se copyright esiste
};
