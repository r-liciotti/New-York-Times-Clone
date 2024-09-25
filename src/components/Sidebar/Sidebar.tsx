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
  });

  const opinionListUseQuery = useQuery({
    queryKey: ["getTopStoriesBySection", "opinion"],
    queryFn: () => getTopStoriesBySection("opinion"),
  });

  return (
    <div className="sidebar">
      <CarouselSticky UseQueryCarousel={carouselUseQuery} />
      <OpinionList OpinionsUseQuery={opinionListUseQuery} />
    </div>
  );
}

export default Sidebar;
