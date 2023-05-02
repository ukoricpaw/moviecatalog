import { HomeDataType } from "../store/reducers/HomeReducer"


type DataForSlider = {
  title: string;
  data: {
    media_type: "movie" | "person" | "tv",
    items: any[]
  }
}


export const ReturnDataForSlider = (data: HomeDataType): DataForSlider[] => {
  return [
    {
      title: "Now playing",
      data: {
        media_type: "movie",
        items: data.nowPlayingFilms
      }
    },
    {
      title: "Top rated",
      data: {
        media_type: "movie",
        items: data.topRatedFilms
      }
    },
    {
      title: "Popular",
      data: {
        media_type: "movie",
        items: data.popularFilms
      }
    },
    {
      title: "People",
      data: {
        media_type: "person",
        items: data.popularPeople
      }
    },
    {
      title: "Top Rated TV Shows",
      data: {
        media_type: "tv",
        items: data.topRatedTV
      }
    },
  ]
}