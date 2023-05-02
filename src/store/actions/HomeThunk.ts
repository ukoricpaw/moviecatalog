import { AppDispatch } from ".."
import { getSpecialListOfMedia } from "../../services/getSpecialListOfMedia"
import { HomeMovieMedia, HomePersonType, HomeTvMedia, MovieTvMedia, ResponsesType } from "../../types/MediaTypes"
import { FetchData, FetchDataWithError, FetchDataWithSuccess } from "../reducers/HomeReducer"


export const FetchDataForHome = () => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(FetchData())
      const responses: ResponsesType[] = [] as ResponsesType[];
      await
        Promise.allSettled
          ([getSpecialListOfMedia<MovieTvMedia>({ name: "trending", typeOfMedia: "all/day" }),
          getSpecialListOfMedia<HomeMovieMedia>({ name: "movie", typeOfMedia: "now_playing" }),
          getSpecialListOfMedia<HomeMovieMedia>({ name: "movie", typeOfMedia: "top_rated" }),
          getSpecialListOfMedia<HomeMovieMedia>({ name: "movie", typeOfMedia: "popular" }),
          getSpecialListOfMedia<HomePersonType>({ name: "person", typeOfMedia: "popular" }),
          getSpecialListOfMedia<HomeTvMedia>({ name: "tv", typeOfMedia: "top_rated" }),
          ]).then(result => {
            result.forEach(result => {
              if (result.status === 'fulfilled') {
                responses.push(result.value.data)
              }
            })
          }
          )
      dispatch(FetchDataWithSuccess(
        {
          tredingFilms: responses[0].results as HomeMovieMedia[],
          nowPlayingFilms: responses[1].results as HomeMovieMedia[],
          topRatedFilms: responses[2].results as HomeMovieMedia[],
          popularFilms: responses[3].results as HomeMovieMedia[],
          popularPeople: responses[4].results as HomePersonType[],
          topRatedTV: responses[5].results as HomeTvMedia[],
        }))
    }
    catch (error) {
      dispatch(FetchDataWithError("Произошла ошибка"))
    }
  }
}