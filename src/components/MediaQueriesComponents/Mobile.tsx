import { useMediaQuery } from "react-responsive";
import { ReactNodeProps } from "../../intrerface/interface";

const Mobile: React.FC<ReactNodeProps> = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 1023 });
  return isMobile ? children : null;
};

export default Mobile;
