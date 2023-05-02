import { AppDispatch } from ".."
import { SingleGeneralMediaDataType } from "../../types/ForSingleMedia"
import { MediaRequest } from "../../types/MediaTypes"
import { FetchSingleData, FetchSingleDataWithError, FetchSingleDataWithSuccess } from "../reducers/MediaSlice"
import { GetAllInfoForSingleMedia } from "./GetAllInfoForSingleMedia"

export const GetSingleData = (props: MediaRequest) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(FetchSingleData())
      const results = await GetAllInfoForSingleMedia(props);
      dispatch(FetchSingleDataWithSuccess({
        media_type: props.media_type,
        ownInfo: results.ownInfo.data,
        keywords: results.keywords.data,
        credits: results.credits.data,
        recommendations: results.recs.data,
        externalIDs: results.idS.data,
        images: results.images.data,
      } as SingleGeneralMediaDataType))
    }
    catch (error) {
      dispatch(FetchSingleDataWithError("Error"))
    }
  }
}