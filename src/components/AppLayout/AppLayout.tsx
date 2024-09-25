import { Outlet, useParams } from "react-router-dom";
import Desktop from "../MediaQueriesComponents/Desktop.tsx";
import DesktopHeader from "../DesktopHeader/DesktopHeader.tsx";
import DesktopFooter from "../DesktopFooter/DesktopFooter.tsx";
import Mobile from "../MediaQueriesComponents/Mobile.tsx";
import MobileHeader from "../MobileHeader/MobileHeader.tsx";
import { useEffect, useState } from "react";
import MenuMobile from "../MenuMobile/MenuMobile.tsx";
import MobileFooter from "../MobileFooter/MobileFooter.tsx";

function AppLayout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const params = useParams(); // Hook per ottenere i parametri della rotta

  const handleMenuToggle = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  // Effetto per chiudere il menu al cambio di params
  useEffect(() => {
    setIsMenuOpen(false);
  }, [params]); // Si attiva quando i parametri cambiano
  return (
    <>
      <Mobile>
        {isMenuOpen && <MenuMobile handleOnClick={handleMenuToggle} />}
        <MobileHeader handleOnClick={handleMenuToggle} />
      </Mobile>

      <Desktop>
        <DesktopHeader />
      </Desktop>

      <div className="app container-desktop ">
        <Outlet />
      </div>
      <Desktop>
        <DesktopFooter />
      </Desktop>
      <Mobile>
        <MobileFooter />
      </Mobile>
    </>
  );
}

export default AppLayout;
