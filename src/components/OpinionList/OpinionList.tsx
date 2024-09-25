import { UseQueryResult } from "@tanstack/react-query";
import ArticleShort from "../ArticleShort/ArticleShort";
import Spinner from "../Spinner/Spinner";
import Error from "../Error/Error";
import { TopStoriesArticle } from "../../intrerface/interface";
import { AxiosError } from "axios";

interface OpinionListProprs {
  OpinionsUseQuery: UseQueryResult<
    { data: { results: TopStoriesArticle[] } },
    unknown
  >;
}

const OpinionList: React.FC<OpinionListProprs> = ({ OpinionsUseQuery }) => {
  if (OpinionsUseQuery.isError) {
    <Error isError={true} error={OpinionsUseQuery.error as AxiosError} />;
  }
  if (OpinionsUseQuery.isLoading) {
    return <Spinner />;
  }

  const opinionList = OpinionsUseQuery.data?.data.results;
  // Aggiungi un controllo per gestire il caso in cui non ci siano risultati
  if (!opinionList || opinionList.length === 0) {
    return <p>Impossibile caricare i dati Opinioni.</p>; // Puoi personalizzare questo messaggio
  }
  return (
    <>
      <h2>Opinion</h2>
      {opinionList.map((item, index) => (
        <ArticleShort
          key={index}
          Article={item}
          withTitle={true}
          withImage={true}
          withAuthors={true}
        />
      ))}
    </>
  );
};

export default OpinionList;
