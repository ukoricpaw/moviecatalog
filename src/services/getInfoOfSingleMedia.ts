import { MediaRequest } from "../types/MediaTypes"
import { api } from "./axiosConfig"
import { creditsType } from "../types/ForSingleMedia"
import { SingleType } from "../store/reducers/MediaSlice"
import { keywordsTvType, keywordsMovieType, ExternalIDs, ImagesOfSingleContent } from "../types/ForSingleMedia"
import { ResponsesType } from "../types/MediaTypes"

export const getInfoOfSingleMedia = {

  GetOwnInfoOfSingleMedia: async (props: MediaRequest) => {
    return await api.get<SingleType>(`${props.media_type}/${props.id}?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}`)
  },

  GetCreditsOfSingle: async (props: MediaRequest) => {
    return await api.get<creditsType>(`${props.media_type}/${props.id}/credits?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}`)
  },

  GetKeywordsOfSingle: async (props: MediaRequest) => {
    return await api.get<keywordsTvType | keywordsMovieType>(`${props.media_type}/${props.id}/keywords?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}`)
  },

  GetExternalIDs: async (props: MediaRequest) => {
    return await api.get<ExternalIDs>(`${props.media_type}/${props.id}/external_ids?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}`)
  },

  GetRecommendations: async (props: MediaRequest) => {
    return await api.get<ResponsesType>(`${props.media_type}/${props.id}/recommendations?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}`)
  },

  GetImages: async (props: MediaRequest) => {
    return await api.get<ImagesOfSingleContent>(`${props.media_type}/${props.id}/images?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}`)
  },


} 