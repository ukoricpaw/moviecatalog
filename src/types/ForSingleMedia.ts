import { HomeMovieMedia, HomeTvMedia, ResponsesType } from "./MediaTypes";
import { SingleMovieType } from "./MovieType";
import { SingleTvType } from "./TvType";

export interface keywordsMovieType {
  id: number;
  keywords: SingleKeyword[]
}
export interface keywordsTvType {
  id: number;
  results: SingleKeyword[]
}

type SingleKeyword = {
  id: number;
  name: string;
}

export interface creditsType {
  cast: CastMember[];
  crew: CrewMember[]
}

interface MemberCreditType {
  adult: boolean;
  gender: 1 | 2;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
}

export interface CastMember extends MemberCreditType {
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
}

export interface CrewMember extends MemberCreditType {
  credit_id: string;
  department: string;
  job: string;
}


export interface ImagesOfSingleContent {
  backdrops: ImageOfSingleContent[],
  logos: ImageOfSingleContent[],
  posters: ImageOfSingleContent[],
}

type ImageOfSingleContent = {
  aspect_ratio: number;
  height: number;
  iso_639_1: string | null;
  file_path: string;
  vote_average: number;
  vote_count: number;
  width: number;
}

export interface ExternalIDs {
  imdb_id: string | null;
  wikidata_id: string | null;
  facebook_id: string | null;
  instagram_id: string | null;
  twitter_id: string | null;
  youtube_id: string | null;
  tiktok_id?: string | null;
}

interface SingleMediaDataType {
  credits: creditsType;
  images: ImagesOfSingleContent;
  recommendations: ResponsesType<HomeMovieMedia | HomeTvMedia>;
  externalIDs: ExternalIDs;
}

interface SingleMediaMovieDataType extends SingleMediaDataType {
  media_type: "movie";
  ownInfo: SingleMovieType;
  keywords: keywordsMovieType;
}
interface SingleMediaTvDataType extends SingleMediaDataType {
  media_type: "tv";
  ownInfo: SingleTvType;
  keywords: keywordsTvType;
}

export type SingleGeneralMediaDataType = SingleMediaMovieDataType | SingleMediaTvDataType
