import { useMediaQuery } from "react-responsive";
import { ReactNodeProps } from "../../intrerface/interface";

const Desktop: React.FC<ReactNodeProps> = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  return isDesktop ? children : null;
};

export default Desktop;
