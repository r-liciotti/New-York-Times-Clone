import { Helmet } from "react-helmet";
import GridWithMainContentAndSideBar from "../components/GridSystem/GridWithMainContentAndSideBar/GridWithMainContentAndSideBar.tsx";
import { useQuery } from "@tanstack/react-query";
import getTopStoriesHome from "../services/apiTopStoriesHome";
import Spinner from "../components/Spinner/Spinner.tsx";
import { TopStoriesArticle } from "../intrerface/interface.ts";
import Error from "../components/Error/Error.tsx";
import { AxiosError } from "axios";

function Homepage() {
  const homePageQuery = useQuery({
    queryKey: ["topStoriesHome"],
    queryFn: getTopStoriesHome,
  });

  // Controlla se il primo query è in caricamento o ha errori
  if (homePageQuery.isLoading) {
    return <Spinner />;
  }
  if (homePageQuery.isError) {
    return <Error isError={true} error={homePageQuery.error as AxiosError} />;
  }
  const results = homePageQuery?.data?.data.results as TopStoriesArticle[];

  // Controlla se il secondo query è in caricamento o ha errori

  return (
    <>
      <Helmet>
        <title>The Clone York Times</title>
      </Helmet>
      <GridWithMainContentAndSideBar MainContent={results} />
    </>
  );
}

export default Homepage;
