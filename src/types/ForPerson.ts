import { ExternalIDs } from "./ForSingleMedia";
import { HomeMovieMedia, HomeTvMedia } from "./MediaTypes";

export interface PersonState {
  data: PersonDataState,
  isLoading: boolean;
  error: string | null;
}

export interface PersonDataState {
  ownInfo: ownInfoType;
  externalIDs: ExternalIDs;
  movie_credits: movie_credits;
  tv_credits: tv_credits
}

export interface movie_credits {
  cast: HomeMovieMedia[]
}
export interface tv_credits {
  cast: HomeTvMedia[]
}

export interface ownInfoType {
  adult: boolean;
  also_known_as: string[];
  biography: string;
  birthday: string | null;
  deathday: string | null;
  gender: 1 | 2;
  homepage: string | null;
  id: number;
  imdb_id: string;
  known_for_department: string;
  name: string;
  place_of_birth: string;
  popularity: number;
  profile_path: string;
}