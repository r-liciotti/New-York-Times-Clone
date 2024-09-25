import axios from "axios";

const BASE_URL = import.meta.env.VITE_NYT_TOP_STORIES_BASE_API_URL;
const API_KEY = "?api-key=" + import.meta.env.VITE_NYT_API_KEY;
const _JSON = import.meta.env.VITE_NYT_JSON;

async function getTopStoriesBySection(section: string) {
    const data = await axios.get(BASE_URL + section + _JSON + API_KEY);
    return data;
}



export default getTopStoriesBySection;
