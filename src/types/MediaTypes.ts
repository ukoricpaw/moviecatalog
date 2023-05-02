interface HomeOwnMedia {
  vote_average: number,
  vote_count: number,
  popularity: number,
  poster_path: string | null,
  overview: string,
  genre_ids: number[],
  id: number,
  backdrop_path: string | null,
  original_language: string,
}

export interface MediaOwnGeneralType {
  adult: boolean;
  backdrop_path: string | null;
  genres: GenreType[];
  homepage: string;
  id: number;
  overview: string;
  original_language: string;
  poster_path: string | null;
  popularity: number;
  status: string;
  tagline: string;
  vote_average: number,
  vote_count: number,
  production_companies: productionCompaniesType[]
  production_countries: productionCountries[]
  spoken_languages: spokenLanguages[];
}

interface productionCompaniesType {
  id: number;
  logo: string | null;
  name: string;
  original_country: string;
}


interface spokenLanguages {
  english_name: string;
  iso_639_1: string;
  name: string;
}


interface productionCountries {
  iso_3166_1: string;
  name: string;
}

export interface HomeMovieMedia extends HomeOwnMedia {
  media_type: "movie",
  adult: boolean,
  original_title: string,
  release_date: string,
  title: string,
  video: boolean,
}

export interface HomeTvMedia extends HomeOwnMedia {
  media_type: "tv",
  first_air_date: string,
  name: string,
  original_name: string,
  original_country: string[]
}



export interface HomePersonType {
  adult: boolean,
  gender: "1" | "2"
  id: number,
  known_for: (HomeMovieMedia | HomeTvMedia)[],
  known_for_department: string,
  name: string,
  popularity: number,
  profile_path: string
  media_type: "person"
}

export interface GenreType {
  id: number;
  name: string;
}

export type MediaType = HomeMovieMedia | HomePersonType | HomeTvMedia

export type MovieTvMedia = HomeMovieMedia | HomeTvMedia

interface MediaItemMovieType {
  media_type: "movie";
  data: HomeMovieMedia;
}

interface MediaItemTvType {
  media_type: "tv";
  data: HomeTvMedia;
}

interface MediaItemPersonType {
  media_type: "person";
  data: HomePersonType;
}

export type MediaItemsType = MediaItemMovieType | MediaItemTvType

export type MediaItemsTypeWithPerson = MediaItemMovieType | MediaItemTvType | MediaItemPersonType


export type ResponsesType<T = MediaType> = {
  results: T[];
}

export type HeaderType = {
  media_type: "movie" | "tv",
  id: number,
  backdrop_path: string,
  title: string,
  original_title?: string,
  original_name?: string,
  overview: string
}

export type SearchType<T = MediaType> = {
  results: T[];
  page: number;
  total_pages: number;
  total_results: number;
}


interface MovieRequestType {
  name: "movie",
  typeOfMedia: "now_playing" | "popular" | "top_rated" | "upcoming"
}

interface TrendingFilms {
  name: "trending",
  typeOfMedia: "all/day"
}

interface PersonRequestType {
  name: "person",
  typeOfMedia: "popular"
}

interface TvShowRequestType {
  name: "tv",
  typeOfMedia: "top_rated" | "popular" | "on_the_air" | "airing_today"
}


export type typeOfRequests = MovieRequestType | PersonRequestType | TvShowRequestType | TrendingFilms

export type MediaRequest = {
  media_type: "tv" | "movie",
  id: string | undefined;
}