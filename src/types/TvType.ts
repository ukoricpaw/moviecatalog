import { MediaOwnGeneralType } from "./MediaTypes";

export interface SingleTvType extends MediaOwnGeneralType {
  created_by: CreatedByType[];
  episode_run_time: number[];
  first_air_date: string;
  in_production: boolean;
  languages: string[];
  last_air_date: string;
  last_episode_to_air: EpisodeToAirType | null;
  name: string;
  next_episode_to_air: EpisodeToAirType | null;
  networks: networksType[];
  number_of_episodes: number;
  number_of_seasons: number;
  origin_country: string[];
  original_name: string;
  seasons: seasonType[];
  type: string;
}

interface CreatedByType {
  id: number;
  credit_id: string;
  name: string;
  gender: "1" | "2"
  profile_path: null | string;
}

interface EpisodeToAirType {
  id: number;
  name: string;
  overview: string;
  vote_average: number,
  vote_count: number,
  air_date: string;
  episode_number: number;
  production_code: string;
  runtime: number;
  season_number: number;
  show_id: number;
  still_path: string;
}

interface networksType {
  id: number;
  logo_path: string | null;
  name: string;
  original_country: string;
}


interface seasonType {
  air_date: string;
  episode_count: number;
  id: number;
  name: string;
  overview: string;
  poster_path: null | string;
  season_number: number;
}
