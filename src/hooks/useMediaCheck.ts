import { SingleType } from "../store/reducers/MediaSlice";
import { MovieTvMedia } from "../types/MediaTypes";
import { SingleMovieType } from "../types/MovieType";
import { SingleTvType } from "../types/TvType";


export function useMediaTypeCheck(media: MovieTvMedia): string {
  if ('original_name' in media) {
    return media.original_name;
  }
  else if ('original_title' in media) {
    return media.original_title;
  }
  return "error";
}

export function useSingleMediaType(media: SingleType, media_type: string | undefined): SingleMovieType | SingleTvType {
  if (media_type === "movie") {
    return media as SingleMovieType;
  }
  return media as SingleTvType;
}