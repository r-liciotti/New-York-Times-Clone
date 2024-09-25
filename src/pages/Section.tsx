import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useQuery } from "@tanstack/react-query";
import { TopStoriesArticle } from "../intrerface/interface";
import GridWithMainContent from "../components/GridSystem/GridWithMaintContent/GridWithMaintContent.tsx";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import getTimesNewswireBySection from "../services/apitTimesNewswire";
import Spinner from "../components/Spinner/Spinner";
import Error from "../components/Error/Error";
import { AxiosError } from "axios";

function Section() {
  const { section } = useParams<{ section: string }>(); // Assicurati che il tipo di `section` sia string

  if (section === null) return <></>;

  const sectionQuery = useQuery({
    queryKey: ["TimesNewswireBySection", section],
    queryFn: () => getTimesNewswireBySection(section as string),
  });

  if (sectionQuery.isPending) return <Spinner />;

  if (sectionQuery.isError) {
    return <Error isError={true} error={sectionQuery.error as AxiosError} />; // Aggiunte parentesi per il return dell'errore
  }
  const results = sectionQuery?.data?.data.results as TopStoriesArticle[];

  return (
    <>
      <Helmet>
        <title>{`${section} - The Clone York Times`}</title>
      </Helmet>
      <SectionTitle section={section as string} />
      <GridWithMainContent MainContent={results} />
    </>
  );
}

export default Section;
