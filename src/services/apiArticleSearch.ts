import axios from "axios";

const BASE_URL = import.meta.env.VITE_NYT_SEARCH_API_BASE_URL;
const API_KEY = import.meta.env.VITE_NYT_API_KEY;

async function getSearchArticles(query: string, sort = "relevance") {
    console.log("getSearchArticles ", query, sort);

    const data = await axios.get(
        BASE_URL + "?q=" + query + "&sort=" + sort + "&api-key=" + API_KEY
    );
    return data;
}

export default getSearchArticles;
