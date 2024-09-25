import { useState, useRef, useEffect } from "react";
import SeparatorDoubleLines from "../SeparatorLines/SeparatorDoubleLine";
import style from "./DesktopHeader.module.css";
import HeaderBottom from "./HeaderBottom/HeaderBottom.tsx";
import HeaderMiddle from "./HeaderMiddle/HeaderMiddle.tsx";
import HeaderTop from "./HeaderTop/HeaderTop.tsx";

function DesktopHeader() {
  const [headerHeight, setHeaderHeight] = useState(0); // Stato per l'altezza
  const headerRef = useRef<HTMLDivElement>(null); // Ref per il <header>

  const updateHeaderHeight = () => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight - 5);
    }
  };

  useEffect(() => {
    // Imposta l'altezza iniziale quando il componente è montato
    updateHeaderHeight();

    // Aggiungi un listener per il resize della finestra
    window.addEventListener("resize", updateHeaderHeight);

    // Pulisci il listener quando il componente viene smontato
    return () => {
      window.removeEventListener("resize", updateHeaderHeight);
    };
  }, []);

  return (
    <>
      <header className={style.header} ref={headerRef}>
        <HeaderTop />
        <HeaderMiddle />
        <HeaderBottom headerHeight={headerHeight} />
      </header>

      <SeparatorDoubleLines />
    </>
  );
}

export default DesktopHeader;
