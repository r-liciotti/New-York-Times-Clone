import { useQuery } from "@tanstack/react-query";
import { getRandomeSection } from "../../helper/getRandomSection";
import getTimesNewswireBySection from "../../services/apitTimesNewswire";
import getTopStoriesBySection from "../../services/apiTopStoriesBySection";
import OpinionList from "../OpinionList/OpinionList.tsx";
import CarouselSticky from "../CarouselSticky/CarouselSticky.tsx";

function Sidebar() {
  const randomSection = getRandomeSection(); // Ottiene una sezione casuale

  const carouselUseQuery = useQuery({
    queryKey: ["timesNewswireBySection", randomSection],
    queryFn: () => getTimesNewswireBySection(randomSection, "15"),
    staleTime: 1000 * 60 * 5, // I dati rimangono freschi per 5 minuti
    refetchOnWindowFocus: false, // Non ricaricare i dati quando la finestra si focalizza
  });

  const opinionListUseQuery = useQuery({
    queryKey: ["getTopStoriesBySection", "opinion"],
    queryFn: () => getTopStoriesBySection("opinion"),
    staleTime: 1000 * 60 * 5, // I dati rimangono freschi per 5 minuti
    refetchOnWindowFocus: false,
  });

  return (
    <div className="sidebar">
      <CarouselSticky UseQueryCarousel={carouselUseQuery} />
      <OpinionList OpinionsUseQuery={opinionListUseQuery} />
    </div>
  );
}

export default Sidebar;
