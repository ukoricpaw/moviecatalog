import { HomeMovieMedia } from "./MediaTypes";
import { HomeTvMedia } from "./MediaTypes";
import { HomePersonType } from "./MediaTypes";
import { CastMember } from "./ForSingleMedia";

interface SliderForMovies {
  media_type: "movie",
  items: HomeMovieMedia[]
}

interface SliderForTVs {
  media_type: "tv",
  items: HomeTvMedia[]
}
interface SliderForPeople {
  media_type: "person",
  items: HomePersonType[]
}
interface SliderForCast {
  media_type: "cast",
  items: CastMember[]
}
interface SliderForRecommendations {
  media_type: "recommendations",
  items: (HomeMovieMedia | HomeTvMedia)[]
}

export type TypeForSlider = SliderForMovies | SliderForCast | SliderForTVs | SliderForPeople | SliderForRecommendations