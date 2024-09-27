import { encodeString } from "../helper/encodeString";

type SectionItem = {
    label: string;
    param: string;
    section: string;
}

const mainSection: SectionItem[] = [
    { label: "U.S.", param: "us", section: "us" },
    { label: "World", param: "world", section: "world" },
    { label: "Business", param: "business", section: "business" },
    { label: "Arts", param: "arts", section: "arts" },
    { label: "Lifestyle", param: "lifestyle", section: "lifestyle" },
    { label: "Opinion", param: "opinion", section: "opinion" }
];

function getSectionLabelByParam(param: string): string | undefined {

    return sections.find(section => section.param === encodeString(param))?.displayName;

}

function getSectionItemList(param: string): SectionItem[] {
    switch (param) {
        case "us":
            return sectionItem_US;
        case "world":
            return sectionItem_World;
        case "business":
            return sectionItem_Business;
        case "arts":
            return sectionItem_Arts;
        case "lifestyle":
            return sectionItem_Lifestyle;
        case "opinion":
            return sectionItem_Opinion;
        default:
            return [];
    }
}

const sectionItem_US: SectionItem[] = [
    { label: "U.S.", param: "u.s.", section: "us" },
    { label: "Politics", param: "politics", section: "politics" },
    { label: "New York", param: "new%20york", section: "nyregion" },
    // { label: "California", param: "california-today", section: "column/california-today" },
    { label: "Education", param: "education", section: "education" },
    { label: "Health", param: "health", section: "health" },
    { label: "Obituaries", param: "obituaries", section: "obituaries" },
    { label: "Science", param: "science", section: "science" },
    { label: "Climate", param: "climate", section: "climate" },
    { label: "Business", param: "business", section: "business" },
    { label: "Tech", param: "technology", section: "technology" },
    { label: "The Upshot", param: "the%20upshot", section: "upshot" },
    { label: "The Magazine", param: "magazine", section: "magazine" }
];

const sectionItem_World: SectionItem[] = [
    { label: "World", param: "world", section: "world" },
    // { label: "Africa", param: "africa", section: "world/africa" },
    // { label: "Americas", param: "americas", section: "world/africa" },
    // { label: "Asia", param: "asia", section: "world/asia" },
    // { label: "Canada", param: "canada", section: "world/canada" },
    // { label: "Middle East", param: "middleeast", section: "world/middleeast" },
    { label: "Science", param: "science", section: "science" },
    { label: "Climate", param: "climate", section: "climate" },
    { label: "Weather", param: "weather", section: "weather" },
    { label: "Health", param: "health", section: "health" },
    { label: "Obituaries", param: "obituaries", section: "obituaries" }
];
const sectionItem_Business: SectionItem[] = [
    { label: "Business", param: "business", section: "business" },
    { label: "Tech", param: "technology", section: "technology" },
    { label: "Economy", param: "economy", section: "business" },
    // { label: "Media", param: "media", section: "business/media" },
    // { label: "Finance and Markets", param: "markets-overview", section: "markets-overview" },
    // { label: "DealBook", param: "dealbook", section: "business/dealbook" },
    // { label: "Personal Tech", param: "personaltech", section: "technology" },
    // { label: "Energy Transition", param: "business", section: "energy-environment" },
    { label: "Your Money", param: "your%20money", section: "your-money" },
];
const sectionItem_Arts: SectionItem[] = [
    { label: "Today's Arts", param: "arts", section: "arts" },
    { label: "Books", param: "books", section: "books" },
    { label: "Best Sellers", param: "best-sellers", section: "books" },
    // { label: "Dance", param: "dance", section: "arts/dance" },
    { label: "Movies", param: "movies", section: "movies" },
    // { label: "Music", param: "music", section: "arts/music" },
    // { label: "Television", param: "television", section: "arts/television" },
    { label: "Theater", param: "theater", section: "theater" },
    // { label: "Pop Culture", param: "pop-culture", section: "spotlight/pop-culture" },
    { label: "T Magazine", param: "t magazine", section: "t-magazine" },
    // { label: "Visual Arts", param: "design", section: "arts/design" }
];

const sectionItem_Lifestyle: SectionItem[] = [
    // { label: "All Lifestyle", param: "lifestyle", section: "spotlight/lifestyle" },
    { label: "Well", param: "well", section: "well" },
    { label: "Travel", param: "travel", section: "travel" },
    { label: "Style", param: "style", section: "style" },
    // { label: "Real Estate", param: "realestate", section: "realestate" },
    { label: "Food", param: "food", section: "food" },
    // { label: "Love", param: "weddings", section: "fashion/weddings" },
    { label: "Your Money", param: "your-money", section: "your-money" },
    // { label: "Personal Tech", param: "personaltech", section: "technology/personaltech" },
    { label: "T Magazine", param: "t-magazine", section: "t-magazine" }
];

const sectionItem_Opinion: SectionItem[] = [
    { label: "Opinion", param: "opinion", section: "opinion" },
    // { label: "Guest Essays", param: "contributors", section: "opinion/contributors" },
    // { label: "Editorials", param: "editorials", section: "opinion/editorials" },
    // { label: "Op-Docs", param: "op-docs", section: "column/op-docs" },
    // { label: "Videos", param: "opinion-video", section: "spotlight/opinion-video" },
    // { label: "Letters", param: "letters", section: "opinion/letters" },
    // { label: "Politics", param: "politics", section: "opinion/politics" },
    // { label: "World", param: "international-world", section: "opinion/international-world" },
    // { label: "Business", param: "business-economics", section: "opinion/business-economics" },
    // { label: "Tech", param: "technology", section: "opinion/technology" },
    // { label: "Climate", param: "environment", section: "opinion/environment" },
    // { label: "Health", param: "health", section: "opinion/health" },
    // { label: "Culture", param: "culture", section: "opinion/culture" }

];


type Section = {
    section: string;
    displayName: string;
    param: string;
};
const sections: Section[] = [
    { section: "admin", displayName: "Admin", param: "admin" },
    { section: "arts", displayName: "Arts", param: "arts" },
    { section: "automobiles", displayName: "Automobiles", param: "automobiles" },
    { section: "books", displayName: "Books", param: "books" },
    { section: "briefing", displayName: "Briefing", param: "briefing" },
    { section: "business", displayName: "Business", param: "business" },
    { section: "climate", displayName: "Climate", param: "climate" },
    { section: "corrections", displayName: "Corrections", param: "corrections" },
    { section: "education", displayName: "Education", param: "education" },
    { section: "en español", displayName: "En español", param: "en español" },
    { section: "fashion", displayName: "Fashion", param: "fashion" },
    { section: "food", displayName: "Food", param: "food" },
    { section: "gameplay", displayName: "Gameplay", param: "gameplay" },
    { section: "guide", displayName: "Guide", param: "guide" },
    { section: "health", displayName: "Health", param: "health" },
    { section: "home & garden", displayName: "Home & Garden", param: "home%20%26%20garden" },
    { section: "home page", displayName: "Home Page", param: "home%20page" },
    { section: "job market", displayName: "Job Market", param: "job%20market" },
    { section: "the learning network", displayName: "The Learning Network", param: "the%20learning%20network" },
    { section: "lens", displayName: "Lens", param: "lens" },
    { section: "magazine", displayName: "Magazine", param: "magazine" },
    { section: "movies", displayName: "Movies", param: "movies" },
    { section: "new york", displayName: "New York", param: "new%20york" },
    { section: "obituaries", displayName: "Obituaries", param: "obituaries" },
    { section: "opinion", displayName: "Opinion", param: "opinion" },
    { section: "parenting", displayName: "Parenting", param: "parenting" },
    { section: "podcasts", displayName: "Podcasts", param: "podcasts" },
    { section: "reader center", displayName: "Reader Center", param: "reader%20center" },
    { section: "real estate", displayName: "Real Estate", param: "real%20estate" },
    { section: "smarter living", displayName: "Smarter Living", param: "smarter%20living" },
    { section: "science", displayName: "Science", param: "science" },
    { section: "sports", displayName: "Sports", param: "sports" },
    { section: "style", displayName: "Style", param: "style" },
    { section: "sunday review", displayName: "Sunday Review", param: "sunday%20review" },
    { section: "t brand", displayName: "T Brand", param: "t%20brand" },
    { section: "t magazine", displayName: "T Magazine", param: "t%20magazine" },
    { section: "technology", displayName: "Technology", param: "technology" },
    { section: "theater", displayName: "Theater", param: "theater" },
    { section: "times insider", displayName: "Times Insider", param: "times%20insider" },
    { section: "today’s paper", displayName: "Today’s Paper", param: "today%E2%80%99s%20paper" },
    { section: "travel", displayName: "Travel", param: "travel" },
    { section: "u.s.", displayName: "U.S.", param: "u.s." },
    { section: "universal", displayName: "Universal", param: "universal" },
    { section: "the upshot", displayName: "The Upshot", param: "the%20upshot" },
    { section: "video", displayName: "Video", param: "video" },
    { section: "the weekly", displayName: "The Weekly", param: "the%20weekly" },
    { section: "well", displayName: "Well", param: "well" },
    { section: "world", displayName: "World", param: "world" },
    { section: "your money", displayName: "Your Money", param: "your%20money" }
];

interface IndiciBorsa {
    symbol: string,
    name: string,
    currency: string,
    stockExchange: string,
    exchangeShortName: string
}

const ListaIndiciBorsa: IndiciBorsa[] = [
    {
        symbol: "NDAQ",
        name: "NASDAQ",
        currency: "USD",
        stockExchange: "NASDAQ",
        exchangeShortName: "INDEX"
    },
    {
        symbol: "SPFIX",
        name: "S&P 500",
        currency: "USD",
        stockExchange: "Chicago Options",
        exchangeShortName: "INDEX"
    },
    {
        symbol: "IMANX",
        name: "Dow Jones",
        currency: "USD",
        stockExchange: "DJI",
        exchangeShortName: "INDEX"
    }

];



export { mainSection, getSectionLabelByParam, getSectionItemList, sections, sectionItem_US, sectionItem_World, sectionItem_Business, sectionItem_Arts, sectionItem_Lifestyle, sectionItem_Opinion, ListaIndiciBorsa };
export type { SectionItem };
