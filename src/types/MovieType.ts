import { MediaOwnGeneralType } from "./MediaTypes";

export interface SingleMovieType extends MediaOwnGeneralType {
  belongs_to_collection: null | string;
  budget: number;
  imdb_id: number;
  original_title: string;
  release_date: string;
  revenue: number;
  runtime: number;
  title: string;
  video: boolean;
}
