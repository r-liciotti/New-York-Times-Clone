import { useQuery } from "@tanstack/react-query";
import getTimesNewswireBySection from "../../services/apitTimesNewswire";
import style from "./GridArticlesBySection.module.css";
import MainArticleInGrid from "./MainArticleInGrid/MainArticleInGrid";
import SideArticleInGrid from "./SideArticleInGrid/SideArticleInGrid";
import React from "react";
import SeparatorOneLine from "../SeparatorLines/SeparatorOneLine";
import { TopStoriesArticle } from "../../intrerface/interface";
import Error from "../Error/Error";
import { AxiosError } from "axios";

interface GridArticlesBySectionProps {
  title: string;
  section: string;
}

const GridArticlesBySection: React.FC<GridArticlesBySectionProps> = ({
  title,
  section,
}) => {
  // Esegui la query utilizzando useQuery
  const sectionQuery = useQuery({
    queryKey: ["NewsTimesBySection", section], // Usa una chiave unica che include la sezione
    queryFn: () => getTimesNewswireBySection(section, "5"), // Passa la sezione al tuo query function
    staleTime: 1000 * 60 * 5, // I dati rimangono freschi per 5 minuti
    refetchOnWindowFocus: false, // Non ricaricare i dati quando la finestra si focalizza
  });

  // Gestisci gli stati di caricamento ed errore
  if (sectionQuery.isLoading) {
    return <>Loading...</>;
  }

  if (sectionQuery.isError) {
    return <Error isError={true} error={sectionQuery.error as AxiosError} />;
  }

  const results = sectionQuery.data?.data.results as TopStoriesArticle[];

  // Se hai dei dati, puoi renderizzarli qui
  return (
    <>
      <div className={style.gridArticlesBySection}>
        <p className={style.title}>{title}</p>

        {/* Main article */}
        <MainArticleInGrid article={results[0]} />
        {/* Side articles */}
        <div className={style.side_articles}>
          {results.slice(1).map((article, index) => (
            <SideArticleInGrid key={index} article={article} />
          ))}
        </div>
      </div>

      <SeparatorOneLine />
    </>
  );
};

export default GridArticlesBySection;
