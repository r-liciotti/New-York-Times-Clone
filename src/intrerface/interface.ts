import { ReactNode } from 'react';

export interface ReactNodeProps {
    children: ReactNode;
}

export interface TopStoriesArticle {
    section: string;
    subsection: string;
    title: string;
    abstract: string;
    url: string;
    uri: string;
    byline: string;
    item_type: string;
    updated_date: string;
    created_date: string;
    published_date: string;
    material_type_facet: string;
    kicker: string;
    des_facet: string[];
    org_facet: string[];
    per_facet: string[];
    geo_facet: string[];
    multimedia: Multimedia[];
    short_url: string;
}

export interface Multimedia {
    url: string;
    format: string;
    height: number;
    width: number;
    type: string;
    subtype: string;
    caption: string;
    copyright: string;
}

export interface ArticleSearchMeta {
    hits: number;
    offeset: number;
    time: number;
}

export interface ArticleSearch {
    abstract: string;
    web_url: string;
    snippet: string;
    lead_paragraph: string;
    print_section: string,
    print_page: string,
    source: string;
    multimedia: MultimediaArticleSearch[];
    headline: Headline;
    keywords: Keyword[];
    pub_date: string;
    document_type: string;
    news_desk: string;
    section_name: string;
    subsection_name: string;
    byline: Byline;
    type_of_material: string;
    _id: string;
    word_count: number;
    uri: string;
}

export interface MultimediaArticleSearch {
    rank: number;
    subtype: string;
    caption: string | null;
    credit: string | null;
    type: string;
    url: string;
    height: number;
    width: number;
    legacy: Legacy;
    subType: string;
    crop_name: string;
}

export interface Legacy {
    [key: string]: unknown;
}

export interface Headline {
    main: string;
    kicker: string | null;
    content_kicker: string | null;
    print_headline: string | null;
    name: string | null;
    seo: string | null;
    sub: string | null;
}

export interface Keyword {
    name: string;
    value: string;
    rank: number;
    major: string;
}

export interface Byline {
    original: string;
    person: Person[];
    organization: string | null;
}

export interface Person {
    firstname: string;
    middlename: string | null;
    lastname: string;
    qualifier: string | null;
    title: string | null;
    role: string;
    organization: string;
    rank: number;
}


export interface StockPerformance {
    symbol: string;
    "1D": number;
    "5D": number;
    "1M": number;
    "3M": number;
    "6M": number;
    ytd: number;
    "1Y": number;
    "3Y": number;
    "5Y": number;
    "10Y": number;
    max: number;
}