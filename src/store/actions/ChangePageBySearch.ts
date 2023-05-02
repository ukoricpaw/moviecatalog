import { AppDispatch } from ".."
import { PayloadSearch, fetchResults, fetchResultsWithError, setCurrentPage } from "../reducers/SearchReducer"
import { getResultsOfMediaBySearch } from "../../services/getSpecialListOfMedia"
import { SearchType } from "../../types/MediaTypes"
import { HomeMovieMedia, HomeTvMedia, HomePersonType } from "../../types/MediaTypes"
import { ReturnResultsProps } from "../../components/SearchComponents/ReturnResultsBySearch"

export const ChangePageBySearch = (query: string, page: number, props: ReturnResultsProps) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(fetchResults())
      let response;
      switch (props.media) {
        case "movie":
          response = await getResultsOfMediaBySearch<SearchType<HomeMovieMedia>>({ media_type: props.media, page, query });
          break;
        case "tv":
          response = await getResultsOfMediaBySearch<SearchType<HomeTvMedia>>({ media_type: props.media, page, query });
          break;
        case "person":
          response = await getResultsOfMediaBySearch<SearchType<HomePersonType>>({ media_type: props.media, page, query });
          break;
        default:
          throw new Error("Ошибка");
      }
      dispatch(setCurrentPage({ media: props.type, results: response.data } as PayloadSearch))
    }
    catch (error) {
      dispatch(fetchResultsWithError("Произошла ошибка при поиске"))
    }
  }
}