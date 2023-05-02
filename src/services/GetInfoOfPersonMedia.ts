import { api } from "./axiosConfig"
import { ownInfoType } from "../types/ForPerson"
import { ExternalIDs } from "../types/ForSingleMedia"
import { movie_credits, tv_credits } from "../types/ForPerson"

export const GetInfoOfPersonMedia = {
  GetOwnInfo: async (person_id: number) => {
    return await api.get<ownInfoType>(`/person/${person_id}?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}&language=en-US`)
  },
  GetExternalIds: async (person_id: number) => {
    return await api.get<ExternalIDs>(`/person/${person_id}/external_ids?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}&language=en-US`)
  },
  GetMovieCredits: async (person_id: number) => {
    return await api.get<movie_credits>(`/person/${person_id}/movie_credits?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}&language=en-US`)
  },
  GetTvCredits: async (person_id: number) => {
    return await api.get<tv_credits>(`/person/${person_id}/tv_credits?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}&language=en-US`)
  },
}