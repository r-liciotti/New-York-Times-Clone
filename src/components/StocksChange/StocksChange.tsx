import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import getStocksPriceChange from "../../services/apiStockPriceChange";
import { ListaIndiciBorsa } from "../../data/data";
import style from "./StocksChange.module.css";
import { StockPerformance } from "../../intrerface/interface";

const ONE_DAY_IN_MS = 24 * 60 * 60 * 1000; // 24 ore in millisecondi

function StocksChange() {
  const stocksQuery = useQuery({
    queryKey: ["getStocksPriceChange"],
    queryFn: getStocksPriceChange,
    staleTime: ONE_DAY_IN_MS, // I dati rimangono freschi per 24 ore
    gcTime: ONE_DAY_IN_MS, // I dati vengono mantenuti nella cache per 24 ore
    refetchOnWindowFocus: false, // Non refetch quando la finestra è in focus
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  // Effetto per cambiare l'elemento ogni 5 secondi
  useEffect(() => {
    const interval = setInterval(() => {
      if (stocksQuery.data && stocksQuery.data.length > 0) {
        setCurrentIndex(
          (prevIndex) => (prevIndex + 1) % stocksQuery.data.length
        );
      }
    }, 5000);

    return () => clearInterval(interval); // Pulizia dell'interval al dismount
  }, [stocksQuery.data]);

  if (stocksQuery.isError) {
    return <></>;
  }
  if (stocksQuery.isLoading) {
    return <>.....</>;
  }

  const prices = stocksQuery.data as StockPerformance[];
  console.log("prices ", prices);

  // Verifica se prices è definito prima di accedervi
  if (!prices || prices.length === 0) {
    return <p>No data available</p>; // Messaggio per quando non ci sono dati
  }

  // Assumi che ogni sotto-array contenga un singolo oggetto, quindi accedi al primo elemento
  const currentPrice = prices[currentIndex] as StockPerformance;
  const indexInfo = ListaIndiciBorsa.find(
    (item) => item.symbol === currentPrice.symbol
  );

  const priceColor = currentPrice["1D"] > 0 ? style.positive : style.negative;

  return (
    <p className={style.stockChange}>
      {indexInfo ? indexInfo.name : currentPrice.symbol}{" "}
      <span className={priceColor}>
        {currentPrice["1D"]}

        {currentPrice["1D"] > 0 ? (
          // Icona per valore positivo
          <svg aria-hidden="true" width="5px" height="9px" viewBox="0 0 5 9">
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <g>
                <g>
                  <path d="M2.5,9 L2.5,3.373" stroke="#3f893b"></path>
                  <polyline
                    fill="#3f893b"
                    fillRule="nonzero"
                    points="4.86293961 4.09179688 2.5 0 0.13706039 4.09179688"
                  ></polyline>
                </g>
              </g>
            </g>
          </svg>
        ) : (
          <svg
            aria-hidden="true"
            width="5px"
            height="9px"
            viewBox="0 0 5 9"
            className={style.negativeArrow}
          >
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <g>
                <g>
                  <path d="M2.5,9 L2.5,3.373" stroke="#3f893b"></path>
                  <polyline
                    fill="#ff0000"
                    fillRule="nonzero"
                    points="4.86293961 4.09179688 2.5 0 0.13706039 4.09179688"
                  ></polyline>
                </g>
              </g>
            </g>
          </svg>
        )}
      </span>
    </p>
  );
}

export default StocksChange;
