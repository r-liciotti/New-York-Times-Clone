import axios from 'axios';
import { StockPerformance } from '../intrerface/interface';
import { ListaIndiciBorsa } from '../data/data';

const apiKey = 'VYWlVryC8toZgdXG9Rr1VirLgvcr6z7E';  // Sostituisci con la tua API key

async function getStocksPriceChange(): Promise<StockPerformance[]> {
    console.log("getStocksPriceChange");

    const requests = ListaIndiciBorsa.map(indici =>


        axios.get<StockPerformance>(
            `https://financialmodelingprep.com/api/v3/stock-price-change/${indici.symbol}?apikey=${apiKey}`
        )
    );
    const responses = await Promise.all(requests);

    const stockPerformances: StockPerformance[] = responses.map(response => response.data);


    // console.log("StockPerformances ", stockPerformances.flat());
    return stockPerformances.flat();

}

export default getStocksPriceChange;
