import { api } from "./axiosConfig"
import { ResponsesType, typeOfRequests } from "../types/MediaTypes"

export const getSpecialListOfMedia = async<T>(props: typeOfRequests) => {

  return await api.get<ResponsesType<T>>(`/${props.name}/${props.typeOfMedia}?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}`)

}

export type SearchRequest = {
  media_type: "movie" | "person" | "tv",
  page: number;
  query: string;
}

export const getResultsOfMediaBySearch = async<T>(props: SearchRequest) => {
  return await api.get<T>(`search/${props.media_type}?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}&language=en-US&page=${props.page}&query=${props.query}&include_adult=false`)
}