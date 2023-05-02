import { AppDispatch } from ".."
import { fetchResults, fetchResultsWithError, fetchResultsWithSuccess } from "../reducers/SearchReducer"
import { getResultsOfMediaBySearch } from "../../services/getSpecialListOfMedia"
import { SearchType } from "../../types/MediaTypes"
import { HomeMovieMedia, HomeTvMedia, HomePersonType } from "../../types/MediaTypes"

export const GetResultsBySearch = (query: string = "", page: number = 1) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(fetchResults())
      const [movies, tvs, people] = await Promise.all(
        [getResultsOfMediaBySearch<SearchType<HomeMovieMedia>>({ query, page, media_type: "movie" }),
        getResultsOfMediaBySearch<SearchType<HomeTvMedia>>({ query, page, media_type: "tv" }),
        getResultsOfMediaBySearch<SearchType<HomePersonType>>({ query, page, media_type: "person" })
        ]);
      dispatch(fetchResultsWithSuccess({
        Movies: movies.data,
        TVs: tvs.data,
        People: people.data,
      }))
    }
    catch (error) {
      dispatch(fetchResultsWithError("Произошла ошибка при поиске"))
    }
  }
}