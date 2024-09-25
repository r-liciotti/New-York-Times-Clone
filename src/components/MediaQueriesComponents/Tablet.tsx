import { useMediaQuery } from "react-responsive";
import { ReactNodeProps } from "../../intrerface/interface";

const Tablet: React.FC<ReactNodeProps> = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 769 });
  return isTablet ? children : null;
};

export default Tablet;
