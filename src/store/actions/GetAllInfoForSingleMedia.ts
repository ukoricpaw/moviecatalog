import { getInfoOfSingleMedia } from "../../services/getInfoOfSingleMedia"
import { MediaRequest } from "../../types/MediaTypes"

export const GetAllInfoForSingleMedia = async (props: MediaRequest) => {
  const [ownInfo, credits, keywords, recs, images, idS] =
    await Promise.all(
      [getInfoOfSingleMedia.GetOwnInfoOfSingleMedia(props),
      getInfoOfSingleMedia.GetCreditsOfSingle(props),
      getInfoOfSingleMedia.GetKeywordsOfSingle(props),
      getInfoOfSingleMedia.GetRecommendations(props),
      getInfoOfSingleMedia.GetImages(props),
      getInfoOfSingleMedia.GetExternalIDs(props),])
  return {
    ownInfo,
    credits,
    keywords,
    recs,
    images,
    idS
  }
}