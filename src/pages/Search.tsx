import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useQuery } from "@tanstack/react-query";
import getSearchArticles from "../services/apiArticleSearch";
import ResultsArticleSearchList from "../components/ResultsArticleSearchList/ResultsArticleSearchList";
import SearchForm from "../components/SearchForm/SearchForm";
import { useState } from "react";
import { ArticleSearch, ArticleSearchMeta } from "../intrerface/interface";
import Spinner from "../components/Spinner/Spinner";
import Error from "../components/Error/Error";
import { AxiosError } from "axios";

function Search() {
  const { searchParam } = useParams();
  const [selectForm, setSelectForm] = useState("relevance");

  // Se il parametro di ricerca non è presente, non mostrare nulla
  if (!searchParam) return <></>;

  // Usa `selectForm` come dipendenza della query
  const searchQuery = useQuery({
    queryKey: ["getSearchArticles", searchParam, selectForm],
    queryFn: () => getSearchArticles(searchParam as string, selectForm),
  });

  if (searchQuery.isPending) return <Spinner />;
  if (searchQuery.isError) {
    <Error isError={true} error={searchQuery.error as AxiosError} />;
  }
  console.log("searchQuery.data ", searchQuery.data);

  const meta = searchQuery.data?.data.response.meta as ArticleSearchMeta;
  const docs = searchQuery.data?.data.response.docs as ArticleSearch[];

  const handleSetSelectForm = (value: string) => {
    setSelectForm(value);
    console.log("Sort set to:", value);
  };

  return (
    <>
      <Helmet>
        <title>{`${searchParam} - The Clone York Times`}</title>
      </Helmet>
      <SearchForm
        searchMeta={meta}
        setSelectForm={handleSetSelectForm} // Passa la funzione correttamente come prop
        selectForm={selectForm}
      />
      <ResultsArticleSearchList SearchResult={docs} />
    </>
  );
}

export default Search;
