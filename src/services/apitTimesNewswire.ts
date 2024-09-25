import axios from "axios";
import { encodeString } from "../helper/encodeString";

const BASE_URL = import.meta.env.VITE_NYT_TIMES_NEWSWIRE_API_BASE_URL;
const API_KEY = "&api-key=" + import.meta.env.VITE_NYT_API_KEY;
const _json = import.meta.env.VITE_NYT_JSON;
// https://api.nytimes.com/svc/news/v3/content/all/world.json?limit=4&api-key=KfvyRCAnEJLtWD66qtMZQpZZv2V7eduA
async function getTimesNewswireBySection(section: string, limit: string = "99") {
    const _limit = "?limit=" + limit;

    const data = await axios.get(BASE_URL + encodeString(section) + _json + _limit + API_KEY);
    return data;
}

export default getTimesNewswireBySection;
