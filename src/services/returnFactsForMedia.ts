import { SingleGeneralMediaDataType } from "../types/ForSingleMedia"

interface returnedFacts {
  title: string;
  value: any | any[];
}

export const returnFactsForMedia = (params: SingleGeneralMediaDataType): returnedFacts[] => {
  if (params.media_type === "movie") {
    return [
      {
        title: "Original title",
        value: params.ownInfo.original_title
      },
      {
        title: "Status",
        value: params.ownInfo.status
      },
      {
        title: "Original language",
        value: params.ownInfo.original_language.toUpperCase()
      },
      {
        title: "Budget",
        value: Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(params.ownInfo.budget)
      },
      {
        title: "Revenue",
        value: Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(params.ownInfo.revenue)
      },
    ]
  }
  else {
    return [
      {
        title: "Original title",
        value: params.ownInfo.original_name
      },
      {
        title: "Status",
        value: params.ownInfo.status
      },
      {
        title: "Original language",
        value: params.ownInfo.original_language.toUpperCase()
      },
      {
        title: "Type",
        value: params.ownInfo.type
      }
    ]
  }
}