import { AppDispatch } from "..";
import { fetchPersonData, fetchPersonDataWithError, fetchPersonDataWithSuccess } from "../reducers/PersonReducer";
import { GetInfoOfPersonMedia } from "../../services/GetInfoOfPersonMedia";

export const GetAllInfoForPerson = (id: number) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(fetchPersonData());
      const [ownInfo, externalIDs, movieCredits, tvCredits] = await Promise.all([
        GetInfoOfPersonMedia.GetOwnInfo(id),
        GetInfoOfPersonMedia.GetExternalIds(id),
        GetInfoOfPersonMedia.GetMovieCredits(id),
        GetInfoOfPersonMedia.GetTvCredits(id),
      ])
      dispatch(fetchPersonDataWithSuccess({
        ownInfo: ownInfo.data,
        externalIDs: externalIDs.data,
        movie_credits: movieCredits.data,
        tv_credits: tvCredits.data
      }))
    }
    catch (error) {
      dispatch(fetchPersonDataWithError("Error"))
    }
  }
}